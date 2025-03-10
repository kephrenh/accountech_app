"use server";
import { handleError } from "@/errors/register-action-error-handler";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";
import { prisma } from "@/prisma/prisma";
import { RegisterSchema } from "@/schemas";
import hashPassword from "@/utils/hash-password";
import * as z from "zod";

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedData = RegisterSchema.parse(data);

    if (!validatedData) {
      return { error: "Données invalides" };
    }

    const { email, name, password, passwordConfirmation } = validatedData;

    if (password !== passwordConfirmation) {
      return { error: "Les mots de passe ne correspondent pas" };
    }

    const hashedPassword = await hashPassword(password);

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return { error: "L'utilisateur existe deja" };
    }

    const normalizedEmail = email.toLowerCase();

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        password: hashedPassword,
        name,
      },
    });

    const verificationToken = await generateVerificationToken(email);

    await sendVerificationEmail(email, verificationToken.token);
    return { success: "Email de vérification envoyé", user };
  } catch (error) {
    const { error: errorMessage } = handleError(error);
    return { error: errorMessage };
  }
};
