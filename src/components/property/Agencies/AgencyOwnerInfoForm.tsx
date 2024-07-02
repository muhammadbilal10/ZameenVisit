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
import { PhoneInput } from "@/components/ui/phone-input";
import { AlertCircle, Loader2 } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";

import { useEffect, useRef, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { updateAgencyOwnerInfo } from "@/server-actions/Agency/agency";
import UploadProfileImage from "@/components/user/Account/UploadProfileImage";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending || disabled} type="submit">
      {!pending ? (
        <>save changes</>
      ) : (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      )}
    </Button>
  );
}

export default function AgencyOwnerInfoForm({
  designation,
  ownerName,
  message,
  ownerPicture,
}: {
  designation: string;
  ownerName: string;
  message: string;
  ownerPicture: string;
}) {
  const [state, formAction] = useFormState(updateAgencyOwnerInfo, null);
  // const [mobileNumber, setMobileNumber] = useState(phoneNumber || "");
  // const [whatsapp, setWhatsapp] = useState(whatsappNumber || "");
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isWhatsappValid, setIsWhatsappValid] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Owner Profile updated successfully",
        description: "Your profile has been updated successfully.",
      });
    }
    if (state?.success === false) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state?.message,
      });
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

  return (
    <form action={formAction}>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-4 col-span-12">
          <UploadProfileImage profileImage={ownerPicture} />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Card className="">
            <CardHeader></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input
                  name="ownerName"
                  type="text"
                  placeholder="Muhammad Ali"
                  required
                  pattern=".{3,}"
                  title="Please enter at least 3 characters"
                  defaultValue={ownerName || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input
                  id="designation"
                  name="designation"
                  placeholder="CEO"
                  required
                  defaultValue={designation}
                />
              </div>

              <div className="col-span-2 space-y-2">
                <Label htmlFor="Message">Message</Label>
                <Textarea
                  placeholder="Describe yourself in a few word"
                  name="message"
                  value={message}
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <SubmitButton disabled={!isMobileValid || !isWhatsappValid} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </form>
  );
}
