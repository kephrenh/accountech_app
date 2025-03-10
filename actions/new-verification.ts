"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { prisma } from "@/prisma/prisma";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token invalide" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Le token a expiré" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "L'utilisateur n'existe pas" };
  }

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await prisma.verificationToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Email vérifié" };
};
