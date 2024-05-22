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
import { updateProfile } from "@/server-actions/user/profile";
import { Loader2 } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadImage } from "@/server-actions/file-upload/upload";
import UploadProfileImage from "./UploadProfileImage";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
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

export default function UpdateProfileForm() {
  const [state, formAction] = useFormState(updateProfile, null);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-4 col-span-12">
        <UploadProfileImage />
      </div>
      <form action={formAction} className="lg:col-span-8 col-span-12">
        <Card className="">
          <CardHeader>
            {/* <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                required
                pattern=".{3,}"
                title="Please enter at least 3 characters"
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
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                required
                disabled
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile</Label>
              <PhoneInput
                name="mobile"
                defaultCountry="PK"
                international
                required
                pattern=".{3,}"
              />

              {/* {state?.errors?.password && (
              <div className="text-rose-500 text-sm flex items-center">
                <AlertCircle className="h-[22px] w-[22px] mr-2" />
                {state?.errors?.password[0]}
              </div>
            )} */}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <PhoneInput
                name="whatsapp"
                defaultCountry="PK"
                international
                required
                pattern=".{3,}"
              />
              {/* <div className=" text-rose-500 text-sm">
              {state?.errors?.confirmPassword && (
                <p className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />{" "}
                  {state?.errors?.confirmPassword[0]}
                </p>
              )}
            </div> */}
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input name="address" type="text" required />
            </div>

            <div>
              <Label htmlFor="country">Country</Label>
              <Select name="country" required>
                <SelectTrigger className="">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address">City</Label>
              <Select name="city" required>
                <SelectTrigger className="">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">Lahore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className=" text-rose-500 text-sm">
            {state?.errors?.name}
            <div>{state?.errors?.password && state?.errors?.password[0]}</div>
          </div> */}
          </CardContent>
          <CardFooter className="justify-end">
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
