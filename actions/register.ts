"use server";
import { hashPassword } from "@/lib/utils";
import { prisma } from "@/prisma/prisma";
import { RegisterSchema } from "@/schemas";
import { handleError } from "@/utils/error-handler";
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

    return { success: "Inscription reussie", user };
  } catch (error) {
    const { error: errorMessage } = handleError(error);
    return { error: errorMessage };
  }
};
