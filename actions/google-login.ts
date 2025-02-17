"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function googleAuthenticate() {
  try {
    await signIn("google");
  } catch (error) {
    if (error instanceof AuthError) {
      return "Echec de l'authentification Google";
    }

    throw error;
  }
}
