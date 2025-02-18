import { extractErrorMessage } from "@/errors/extract-error-message";
import { prisma } from "@/prisma/prisma";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        email: email,
      },
    });

    return verificationToken;
  } catch (error) {
    const errorMessage = extractErrorMessage(error);
    console.error(errorMessage);
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token: token,
      },
    });

    return verificationToken;
  } catch (error) {
    console.log(error);
  }
};
