import { pinVerification } from "@/server-actions/auth";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Loader2, Mail } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        <>Continue</>
      ) : (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      )}
    </Button>
  );
}
export default function OTPForm({
  setIsSignInOpen,
  setIsOTPOpen,
}: {
  setIsSignInOpen: (value: boolean) => void;
  setIsOTPOpen: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(pinVerification, null);

  return (
    <div className="w-full lg:grid lg:grid-cols-2 max-lg:my-12">
      <div className="w-[360px] mx-auto my-auto space-y-8">
        <div className="flex flex-col justify-end text-center gap-2">
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="text-balance text-muted-foreground">
            Enter the verification code sent to your email ID
          </p>
          {state?.message && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md">
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
          <div className="flex justify-center">
            <InputOTP name="pin" className="" maxLength={4}>
              <InputOTPGroup className="space-x-2 ">
                <InputOTPSlot className="h-14 w-14" index={0} />
                <InputOTPSlot className="h-14 w-14" index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot className="h-14 w-14" index={2} />
                <InputOTPSlot className="h-14 w-14" index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="ml-1 mt-6 text-center text-sm">
            <div className="mt-10">
              Did n&apos;t get a code? {""}
              <Link
                href="#"
                className="underline"
                onClick={() => {
                  setIsOTPOpen(false);
                  setIsSignInOpen(true);
                }}
              >
                Click to resend
              </Link>
            </div>
          </div>
          <SubmitButton />
        </form>
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
