import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { comparePassword } from "./lib/utils";
import { prisma } from "./prisma/prisma";
import { LoginSchema } from "./schemas";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedData = LoginSchema.safeParse(credentials);
        if (!validatedData.success) return null;

        const { email, password } = validatedData.data;
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (!user || !user.password || !user.email) {
          return null;
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if (isPasswordValid) {
          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
