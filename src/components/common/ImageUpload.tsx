import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { uploadImage } from "@/server-actions/file-upload/upload";
import { Loader2, Mail, UploadCloud } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { use, useEffect, useState } from "react";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="">
      {!pending ? (
        <>
          <UploadCloud className="h-5 w-5 mr-2" /> Upload
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

export default function ImageUpload() {
  const [state, formAction] = useFormState(uploadImage, null);
  const [imagesUrl, setImagesUrl] = useState<string[]>([]);

  useEffect(() => {
    if (state?.secure_url) {
      setImagesUrl([...imagesUrl, state.secure_url]);
    }
  }, [state?.secure_url]);

  return (
    <form
      action={formAction}
      className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center"
    >
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          name="image"
          type="file"
          placeholder="johndoe@example.com"
          accept="image/*"
          required
        />
      </div>
      {/* <label htmlFor="input-file">
        <input
          id="input-file"
          type="file"
          accept="image/*"
          name="image"
          hidden
        />
        <p className="text-gray-700 mt-4">
          Drag & drop or{" "}
          <span className="">click here to upload your image here</span>
        </p>
        <p className="text-gray-500 text-xs mt-2">500 MB max file size.</p>
      </label> */}
      <SubmitButton />

      <div className="flex flex-wrap mt-6">
        {imagesUrl.map((url, index) => (
          <div key={index} className="mr-4">
            <img src={url} alt="uploaded image" className="h-32 w-32" />
          </div>
        ))}
      </div>
    </form>
  );
}
