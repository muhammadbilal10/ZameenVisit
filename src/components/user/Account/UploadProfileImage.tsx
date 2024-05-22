"use client";
import { Button } from "@/components/ui/button";
import { Loader2, UploadCloud } from "lucide-react";
import React, { use, useEffect, useState } from "react";
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
        <>
          <UploadCloud className="mr-2 h-4 w-4" /> Upload
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

export default function UploadProfileImage() {
  const [state, formAction] = useFormState(uploadImage, null);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    function handleUploadImage() {
      if (state?.secure_url) {
        setImageUrl(state.secure_url);
        console.log(state.secure_url);
      }
    }
    handleUploadImage();
  }, [state]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <form action={formAction} className="h-full">
      <Card className="h-full">
        <CardContent className="relative flex  items-center justify-center h-full">
          <div className="z-30 group hover:bg-gray-200 opacity-60 absolute rounded-full h-32 w-32 flex items-center justify-center transition duration-500">
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
                onChange={handleFileChange}
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
          <p className="text-sm max-w-64 mt-64 text-center text-muted-foreground">
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3 Mb
          </p>
        </CardContent>
        {/* <CardFooter>
          <SubmitButton />
        </CardFooter> */}
      </Card>
    </form>
  );
}
