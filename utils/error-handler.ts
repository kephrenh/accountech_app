// utils/errorHandler.ts
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

interface ErrorResponse {
  error: string;
  details?: Record<string, unknown>; // Typage des détails pour éviter `any`
}

export const handleError = (error: unknown): ErrorResponse => {
  console.error("Erreur capturée:", error);

  if (error instanceof ZodError) {
    return { error: "Validation des données échouée", details: error.format() };
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return { error: "Cet email est déjà utilisé" };
    }
  }

  return { error: "Une erreur interne est survenue. Veuillez réessayer plus tard." };
};
