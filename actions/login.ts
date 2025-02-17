"use server";
import { signIn } from "@/auth";
import { prisma } from "@/prisma/prisma";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.parse(data);

  if (!validatedData) {
    return { error: "Données invalides" };
  }

  const { email, password } = validatedData;

  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!userExists || !userExists.password || !userExists.email) {
    return { error: "L'utilisateur n'existe pas" };
  }
  try {
    await signIn("credentials", {
      email: userExists.email,
      password: password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email ou mot de passe incorrect" };
        default:
          return { error: "Merci de confirmer votre email." };
      }
    }
    throw error;
  }

  return { success: "Utilisateur connecté avec succès" };
};
