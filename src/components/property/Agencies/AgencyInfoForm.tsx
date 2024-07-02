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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { use, useEffect, useRef, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { updateAgencyInfo } from "@/server-actions/Agency/agency";
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

export default function AgencyInfoForm({
  agencyName,
  companyEmail,
  city,
  country,
  agencyAddress,
  agencyImage,
  designation,
  description,
  ownerName,
  message,
  ownerPicture,
}: {
  agencyName: string;
  companyEmail: string;
  city: string;
  country: string;
  agencyAddress: string;
  agencyImage: string;
  designation: string;
  description: string;
  ownerName: string;
  message: string;
  ownerPicture: string;
}) {
  const [state, formAction] = useFormState(updateAgencyInfo, null);
  // const [mobileNumber, setMobileNumber] = useState(phoneNumber || "");
  // const [whatsapp, setWhatsapp] = useState(whatsappNumber || "");
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isWhatsappValid, setIsWhatsappValid] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Agency Profile updated successfully",
        description: "Your agency profile has been updated successfully.",
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
          <UploadProfileImage profileImage={agencyImage} />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Card className="">
            <CardHeader></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="agencyName">Agency Name</Label>
                <Input
                  name="agencyName"
                  type="text"
                  placeholder="Zameen Visit"
                  required
                  pattern=".{3,}"
                  title="Please enter at least 3 characters"
                  defaultValue={agencyName || ""}
                />
                {/* <div className=" text-rose-500 text-sm ">
              {state?.errors?.name && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" /> {state?.errors?.name}
                </p>
              )}
            </div> */}
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyEmail">Agency Email</Label>
                <Input
                  id="companyEmail"
                  name="companyEmail"
                  type="email"
                  placeholder="johndoe@example.com"
                  required
                  defaultValue={companyEmail || ""}
                />
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="mobile">Mobile</Label>
                <PhoneInput
                  name="mobile"
                  defaultCountry="PK"
                  international
                  required
                  pattern=".{3,}"
                  onChange={(value) => {
                    setMobileNumber(value);

                    if (value) {
                      setIsMobileValid(isValidPhoneNumber(value));
                      console.log(isValidPhoneNumber(value));
                    } else {
                      setIsMobileValid(true);
                    }
                  }}
                  value={mobileNumber}
                />
                {!isMobileValid && (
                  <div className="text-rose-500 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {"Please enter a valid phone number"}
                  </div>
                )}
              </div> */}

              {/* <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <PhoneInput
                  name="whatsapp"
                  defaultCountry="PK"
                  international
                  required
                  pattern=".{3,}"
                  value={whatsapp}
                  onChange={(value) => {
                    setWhatsapp(value);
                    if (value) {
                      setIsWhatsappValid(isValidPhoneNumber(value));
                    } else {
                      setIsWhatsappValid(true);
                    }
                  }}
                />
                <div className=" text-rose-500 text-sm">
                  {!isWhatsappValid && (
                    <p className="flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" /> Please enter a
                      valid phone number
                    </p>
                  )}
                </div>
              </div> */}

              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  name="agencyAddress"
                  type="text"
                  defaultValue={agencyAddress}
                />
              </div>

              <div>
                <Label htmlFor="address">City</Label>
                <Select name="city" value={city}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lahore">Lahore</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2">
                <Label htmlFor="address">Description</Label>
                <Textarea
                  placeholder="Describe your company in a few word"
                  name="description"
                  defaultValue={description}
                />
              </div>

              {/* <div>
                <Label htmlFor="country">Country</Label>
                <Select name="country" value={country}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}

              {/* <div className=" text-rose-500 text-sm">
            {state?.errors?.name}
            <div>{state?.errors?.password && state?.errors?.password[0]}</div>
          </div> */}
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
