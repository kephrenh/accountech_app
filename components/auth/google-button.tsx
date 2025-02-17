"use client";

import { googleAuthenticate } from "@/actions/google-login";
import { useActionState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Button } from "../ui/button";

const GoogleLogin = () => {
  const [errorMsgGoogle, dispatchGoogle] = useActionState(googleAuthenticate, undefined);

  return (
    <form action={dispatchGoogle} className="flex mt-4">
      <Button variant={"outline"} className="flex flex-row items-center gap-2 w-full" type="submit">
        <BsGoogle />
        <span>Se connecter avec Google</span>
      </Button>
      <p>{errorMsgGoogle}</p>
    </form>
  );
};

export default GoogleLogin;
