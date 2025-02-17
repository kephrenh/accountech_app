import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Entrer un email valide",
  }),
  name: z.string().min(1, {
    message: "Le nom est requis",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères",
  }),
  passwordConfirmation: z.string().min(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Entrer un email valide",
  }),
  password: z.string().min(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères",
  }),
});
