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
import { updatePassword } from "@/server-actions/auth";
import { AlertCircle } from "lucide-react";

import React from "react";

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
  const [state, formAction] = useFormState(updatePassword, null);
  return (
    <form action={formAction}>
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
              {state?.currentPassword && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.currentPassword}
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
