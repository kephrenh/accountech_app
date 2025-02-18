"use client";
import { newVerification } from "@/actions/new-verification";
import { handleVerificationError } from "@/errors/handle-verification-error";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useEmailVerification = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  useEffect(() => {
    if (!token || isVerifying || success || error) return;

    const verifyEmail = async () => {
      setIsVerifying(true);
      try {
        const data = await newVerification(token);

        if (data.success) {
          setSuccess(data.success);
          setTimeout(() => {
            router.push("/auth/login");
          }, 2000);
        } else {
          setError(handleVerificationError(data.error ?? "UNKNONW_ERROR"));
        }
      } catch (err) {
        console.error(err);
        setError("Une erreur inconnue est survenue.");
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [token, isVerifying, success, error, router]);

  return { success, error };
};
