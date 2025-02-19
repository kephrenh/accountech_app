"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "@/hooks/use-login-form";
import Link from "next/link";
import { CardWrapper } from "./card-wrapper";
import { FormError } from "./form-error";
import GoogleLogin from "./google-button";

export const LoginForm = () => {
  const { loading, error, form, onSubmit } = useLoginForm();
  return (
    <CardWrapper
      headerLabel="Connectez-vous"
      title="Connexion"
      backButtonHref="/auth/register"
      backButtonLabel="Pas de compte? S'inscrire"
      showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="johndoe@email.com" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de Passe</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size={"sm"} variant="link" asChild className="px-0 font-normal">
              <Link href="/reset">Mot de passe oublié?</Link>
            </Button>
          </div>
          <FormError message={error} />
          <Button
            type="submit"
            className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            disabled={loading}>
            {loading ? "Chargement..." : "Se connecter"}
          </Button>
        </form>
      </Form>
      <GoogleLogin />
    </CardWrapper>
  );
};
