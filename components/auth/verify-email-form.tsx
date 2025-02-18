"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { useEmailVerification } from "@/hooks/use-email-verification";

const VerifyEmailForm = () => {
  const { error, success } = useEmailVerification();

  return (
    <CardWrapper
      headerLabel="Vérifier votre email"
      title="Vérification en cours..."
      backButtonHref="/auth/login"
      backButtonLabel="Connexion">
      <div className="flex items-center w-full justify-center">
        {!success && !error && <p>Loading</p>}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default VerifyEmailForm;
