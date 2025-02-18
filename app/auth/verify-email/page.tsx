import VerifyEmailForm from "@/components/auth/verify-email-form";
import { Suspense } from "react";

const VerifyEmailPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-solid border-gray-200 border-t-blue-500 rounded-full"
            role="status">
            <span className="sr-only">Chargement...</span>
          </div>
        </div>
      }>
      <VerifyEmailForm />;
    </Suspense>
  );
};
export default VerifyEmailPage;
