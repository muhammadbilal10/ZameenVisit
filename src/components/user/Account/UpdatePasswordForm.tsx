"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { updatePassword } from "@/server-actions/auth";
import { updateProfilePassword } from "@/server-actions/user/profile";
import { AlertCircle } from "lucide-react";

import React, { useEffect, useRef } from "react";

import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Updating Password..." : "Update Password"}
    </Button>
  );
}

export default function UpdatePasswordForm() {
  const [state, formAction] = useFormState(updateProfilePassword, null);
  const ref = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    if (state?.success) {
      toast({
        title: "Password Updated",
        description: "Your password has been updated successfully.",
      });
      ref.current?.reset();
    }
  }, [state]);
  return (
    <form action={formAction} ref={ref}>
      <Card>
        <CardHeader>
          <CardTitle>Update Password</CardTitle>
          <CardDescription>
            Update your account password. Make sure to use a strong password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input
              type="password"
              id="current-password"
              name="current-password"
              placeholder="Current Password"
              required
            />
            <div className="text-destructive text-sm">
              {state?.success === false && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" /> {state?.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="New Password"
              required
            />
            <div className="text-destructive text-sm">
              {state?.errors?.password && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.errors?.password[0]}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-new-password">New Password</Label>
            <Input
              type="password"
              id="confirm-new-password"
              name="confirm-new-password"
              placeholder="Confirm New Password"
              required
            />
            <div className="text-destructive text-sm">
              {state?.errors?.confirmPassword && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.errors?.confirmPassword}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}
