import { otpVerification, resendOTP } from "@/server-actions/auth";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Loader2, Mail } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { useEffect, useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { useSearchParams } from "next/navigation";
import { ToastAction } from "../ui/toast";

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
  setIsUpdatePasswordOpen,
}: {
  setIsSignInOpen: (value: boolean) => void;
  setIsOTPOpen: (value: boolean) => void;
  setIsUpdatePasswordOpen: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(otpVerification, null);
  const [stateResend, formActionResend] = useFormState(resendOTP, null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const type = searchParams.get("type");
  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      if (state?.success) {
        toast({
          title: "OTP Verified",
          description: "Your email has been verified successfully.",
        });
        if (type === "forgot-password") {
          setIsOTPOpen(false);
          setIsUpdatePasswordOpen(true);
          return;
        }
        setIsOTPOpen(false);
        setIsSignInOpen(true);
      }
      if (state?.success === false) {
        toast({
          variant: "destructive",
          title: "Failed to verify OTP",
          description: state?.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  }, [state]);

  useEffect(() => {
    if (stateResend?.success) {
      toast({
        title: "OTP Resent",
        description: "We have resent the OTP to your email.",
      });
    }
    if (stateResend?.success === false) {
      toast({
        variant: "destructive",
        title: "Failed to resend OTP",
        description: stateResend?.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    if (stateResend?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }, [stateResend]);

  const handleResendOtp = async () => {
    if (!email) return;
    const formData = new FormData();
    formData.append("email", email);

    startTransition(() => {
      formActionResend(formData);
    });
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2 max-lg:my-12">
      <div className="w-[360px] mx-auto my-auto space-y-8">
        <div className="flex flex-col justify-end text-center gap-2">
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="text-balance text-muted-foreground">
            Enter the verification code sent to your email ID
            <span className="block">{email}</span>
          </p>
          {/* {state?.message && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md">
              <ul>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <li>{state?.message}</li>
                </div>
              </ul>
            </div>
          )} */}
        </div>
        <form action={formAction} className="space-y-6">
          <div className="flex justify-center">
            <InputOTP name="pin" className="" maxLength={5}>
              <InputOTPGroup className="">
                <InputOTPSlot className="h-14 w-14" index={0} />
                <InputOTPSlot className="h-14 w-14" index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot className="h-14 w-14" index={2} />
                <InputOTPSlot className="h-14 w-14" index={3} />
                <InputOTPSlot className="h-14 w-14" index={4} />
              </InputOTPGroup>
            </InputOTP>
            <input name="email" type="hidden" value={email || ""} />
          </div>

          <div className="ml-1 mt-6 text-center text-sm">
            <div className="mt-10 flex gap-2 justify-center">
              Did n&apos;t get a code? {""}
              <button
                disabled={isPending}
                className="underline"
                onClick={handleResendOtp}
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Click to resend"
                )}
              </button>
            </div>
          </div>
          <SubmitButton />
        </form>
        <div className="ml-1 mt-6 text-center text-sm">
          Already have an account? {""}
          <Link
            href="#"
            className="underline"
            onClick={() => {
              setIsOTPOpen(false);
              setIsSignInOpen(true);
            }}
          >
            Sign in
          </Link>
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
