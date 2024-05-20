"use client";
import { Button } from "@/components/ui/button";
import { Loader2, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { uploadImage } from "@/server-actions/file-upload/upload";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="w-full">
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

export default function UploadProfileImage() {
  const [state, formAction] = useFormState(uploadImage, null);
  const [imageUrl, setImageUrl] = useState<string>("");

  if (state?.secure_url) {
    setImageUrl(state.secure_url);
    console.log(state.secure_url);
  }
  return (
    <Card className="h-full">
      <CardContent className="">
        <form action={formAction} className="relative">
          <div className="z-30 group hover:bg-gray-200 opacity-60 absolute rounded-full h-32 w-32 flex items-center justify-center  transition duration-500">
            <div className="hidden group-hover:block ">
              <Label htmlFor="image">
                <UploadCloud className="h-10 w-10 cursor-pointer" />
              </Label>
              <Input
                id="image"
                className="hidden"
                name="image"
                type="file"
                placeholder="johndoe@example.com"
                accept="image/*"
                required
              />
            </div>
          </div>

          <Avatar className="h-32 w-32 absolute">
            <AvatarImage
              src={imageUrl || "https://github.com/shadcn.png"}
              className=""
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </form>
      </CardContent>
    </Card>
  );
}
