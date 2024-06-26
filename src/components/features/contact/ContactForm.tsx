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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { contactUs } from "@/server-actions/company/contact";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function ContactForm() {
  const [state, formAction] = useFormState(contactUs, null);
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Email sent",
        description: "We will get back to you soon.",
      });
      formRef.current?.reset();
    }
    if (state?.success === false) {
      toast({
        title: "Failed to send email",
        description: "Please try again.",
      });
    }
    if (state?.error) {
      toast({
        title: "Error",
        description: state.error,
      });
    }
  }, [state]);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Contact us</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4" ref={formRef}>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input name="name" placeholder="Muhammad Rizwan" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="mobileNumber">Mobile</Label>
              <Input
                name="mobileNumber"
                type="tel"
                placeholder="+923494411115"
                required
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              className="h-36"
              placeholder="Type your message here."
              required
            />
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {!pending ? "Send Email" : "Please wait..."}
    </Button>
  );
}
