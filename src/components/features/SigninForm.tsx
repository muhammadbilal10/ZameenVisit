import { login } from "@/actions/auth";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Image from "next/image";
import Link from "next/link";
import { Loader2, Mail } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {!pending ? (
        <>
          <Mail className="h-5 w-5 mr-2" /> Login
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
export default function SigninForm({
  setIsSignupOpen,
}: {
  setIsSignupOpen: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(login, null);

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="w-[360px] mx-auto my-12 space-y-4">
        <div className="flex flex-col justify-end text-center gap-2">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form action={formAction} className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" placeholder="Email" required />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className=" text-rose-500 text-small-regular">
            <span>{state?.message}</span>
          </div>

          <SubmitButton />
          <Button type="button" variant="outline" className="w-full">
            <Mail className="h-5 w-5 mr-2" /> Login with Google
          </Button>
        </form>

        <div className="ml-1 mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="underline"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-[600px] rounded-r-lg">
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
