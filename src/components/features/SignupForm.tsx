import { login, signup } from "@/server-actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Loader2, Mail } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { PhoneInput } from "../ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { set } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        <>
          <Mail className="h-5 w-5 mr-2" /> Create an account
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
export default function SignupForm({
  setIsSignupOpen,
  setIsSignInOpen,
  setIsOTPOpen,
}: {
  setIsSignupOpen: (value: boolean) => void;
  setIsSignInOpen: (value: boolean) => void;
  setIsOTPOpen: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(signup, null);
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { toast } = useToast();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state?.message,
      });

      setIsSignupOpen(false);
      setIsOTPOpen(true);
      const params = new URLSearchParams(searchParams);
      params.set("email", "muhdbilal81@gmail.com");
      router.replace(`${pathname}?${params.toString()}`);
    }

    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }, [state]);

  const handleOnChange = (value: string) => {
    setValue(value);
    console.log(value);
    if (value) {
      setIsValid(isValidPhoneNumber(value));
      console.log(isValidPhoneNumber(value));
    } else {
      setIsValid(true); // Consider empty value as valid or adjust based on your requirement
    }
  };

  return (
    <div className="w-full lg:grid  lg:grid-cols-2">
      <div className="w-[360px] mx-auto my-6 space-y-4">
        <div className="flex flex-col justify-end text-center gap-2">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <form action={formAction} className="space-y-3">
          <div className="space-y-2">
            {/* <Label htmlFor="name">Full Name</Label> */}
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <div className=" text-rose-500 text-sm ">
              {state?.errors?.name && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.errors?.name[0]}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-1">
            {/* <Label htmlFor="email">Email</Label> */}
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            {/* <Label htmlFor="password">Password</Label> */}
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            {state?.errors?.password && (
              <div className="text-rose-500 text-sm flex items-center">
                <AlertCircle className="h-[22px] w-[22px] mr-2" />
                {state?.errors?.password[0]}
              </div>
            )}
          </div>

          <div className="space-y-2">
            {/* <Label htmlFor="name">Full Name</Label> */}
            <Input
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <div className=" text-destructive text-sm">
              {state?.errors?.confirmPassword && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.errors?.confirmPassword[0]}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <PhoneInput
              defaultCountry="PK"
              international
              value={value}
              onChange={handleOnChange}
            />
            <input hidden name="phone-number" value={value} />
            {(!isValid || state?.errors?.phoneNumber) && (
              <p className="flex items-center text-destructive">
                <AlertCircle className="h-4 w-4 mr-2" />
                Please enter a valid phone number
              </p>
            )}
          </div>

          <div className="space-y-1">
            <Select name="role" required>
              <SelectTrigger>
                <SelectValue placeholder="Select User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="agent">Agent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className=" text-rose-500 text-sm">
            {state?.errors?.name}
            <div>{state?.errors?.password && state?.errors?.password[0]}</div>
          </div> */}
          <SubmitButton />
          <Button type="button" variant="outline" className="w-full">
            <Mail className="h-5 w-5 mr-2" /> Signup with Google
          </Button>
        </form>

        <div className="ml-1 mt-6 text-center text-sm">
          Already have an account? {""}
          <Link
            href="#"
            className="underline"
            onClick={() => {
              setIsSignupOpen(false);
              setIsSignInOpen(true);
            }}
          >
            Sign in
          </Link>
        </div>
      </div>
      <div className="hidden bg-muted lg:block rounded-r-lg">
        <Image
          src="https://i.postimg.cc/3N3tCw42/pexels-elly-fairytale-4008826.jpg"
          alt="Image"
          width="537"
          height="650"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-r-lg "
        />
      </div>
    </div>
  );
}
