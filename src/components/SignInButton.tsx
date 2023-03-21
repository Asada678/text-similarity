"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "@/ui/Button";
import { toast } from "@/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const singInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      console.log("error:", error);
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button
      onClick={singInWithGoogle}
      isLoading={isLoading}
    >
      Sign In
    </Button>
  );
};

export default SignInButton;
