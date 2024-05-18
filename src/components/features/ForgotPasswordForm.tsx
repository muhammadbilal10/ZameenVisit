import { forgotPassword } from "@/server-actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Loader2, Mail } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { set } from "date-fns";
import { useEffect } from "react";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        <>
          {/* <Mail className="h-5 w-5 mr-2" /> */}
          Reset Password
        </>
      ) : (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      )}
    </Button>
  );
}
export default function ForgotPasswordForm({
  setIsForgotPasswordOpen,
  setIsSignInOpen,
  setIsOTPOpen,
}: {
  setIsForgotPasswordOpen: (value: boolean) => void;
  setIsSignInOpen: (value: boolean) => void;
  setIsOTPOpen: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(forgotPassword, null);

  if (state?.status === "success") {
    setIsForgotPasswordOpen(false);
    setIsOTPOpen(true);
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-2 max-lg:my-12">
      <div className="w-[360px] mx-auto my-auto space-y-16">
        <div className="flex flex-col justify-end text-center gap-2">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to reset your password
          </p>
          {state?.message && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
              <ul>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <li>{state?.message}</li>
                </div>
              </ul>
            </div>
          )}
        </div>
        <form action={formAction} className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <SubmitButton />
        </form>

        <div className="ml-1 mt-6 text-center text-sm">
          <div className="mt-10">
            Back to?{" "}
            <Link
              href="#"
              className="underline"
              onClick={() => {
                setIsForgotPasswordOpen(false);
                setIsSignInOpen(true);
              }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block  rounded-r-lg">
        <Image
          src="https://i.postimg.cc/3N3tCw42/pexels-elly-fairytale-4008826.jpg"
          alt="Image"
          width="537"
          height="600"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-r-lg "
        />
      </div>
    </div>
  );
}
