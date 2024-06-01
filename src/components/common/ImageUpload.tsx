import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { uploadImage } from "@/server-actions/file-upload/upload";
import { Loader2, UploadCloud, X } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { use, useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

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

export default function ImageUpload({
  setUploadImagesUrl,
  uploadImagesUrl,
}: {
  setUploadImagesUrl: (urls: string[]) => void;
  uploadImagesUrl: string[];
}) {
  const [state, formAction] = useFormState(uploadImage, null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string>();
  // const [uploadImagesUrl, setUploadImagesUrl] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (state?.secure_url) {
      setUploadImagesUrl([...uploadImagesUrl, state.secure_url]);
      setPreviewImageUrl("");
      console.log(state);
      toast({
        description: "Image uploaded successfully",
      });
    }
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.error,
      });
      setPreviewImageUrl("");
    }
  }, [state]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImageUrl(URL.createObjectURL(file));
      // setIsModalOpen(true);
      const formData = new FormData();
      formData.append("image", file);

      startTransition(() => {
        formAction(formData);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    // const newImagesUrl = imageUrl.filter((_, i) => i !== index);
    // setImageUrl(newImagesUrl);
  };

  return (
    <div>
      <Label
        htmlFor="input-file"
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center"
      >
        <div className="space-y-1 text-center cursor-pointer">
          <input
            id="input-file"
            type="file"
            accept="image/jpeg, image/png"
            name="image"
            hidden
            onChange={handleFileChange}
          />
          <input
            name="imagesUrl"
            hidden
            value={JSON.stringify(uploadImagesUrl)}
          />

          <h1 className="text-lg font-bold">Drop or Select file</h1>
          <p className="text-gray-700 mt-4">
            Drop files here or click{" "}
            <span className="text-teal underline">browse</span> thorough your
            machine
          </p>
        </div>
        <p className="text-gray-500 text-xs mt-2">
          Image size should be less than 5 MB
        </p>
      </Label>

      <div className="flex space-x-2 my-6">
        {uploadImagesUrl.map((url, index) => (
          <div key={index} className="">
            <div className="relative">
              <button
                className="absolute right-1 top-1"
                onClick={() => handleRemoveImage(index)}
              >
                <X className="h-5 w-5 text-white  bg-[#161c247a] rounded-full" />
              </button>
              <Image
                src={url}
                alt="uploaded image"
                className="h-24 w-24 rounded-lg object-cover"
                height={96}
                width={96}
              />
            </div>
          </div>
        ))}
        {previewImageUrl && (
          <div className="relative h-[96px] w-[96px]">
            <Image
              src={previewImageUrl}
              alt="preview image"
              height={96}
              width={96}
              className="rounded-md h-full w-full grayscale"
            />
            {isPending && (
              <div className="absolute top-1 left-1 bg-[#161c247a]  flex items-center justify-center">
                <Loader2 className="h-5 w-5 animate-spin text-white" />
              </div>
            )}
          </div>
        )}
      </div>
      {/* <div className="flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() => {
            // setImageUrl([]);
          }}
        >
          Remove all
        </Button>
        <SubmitButton />
      </div> */}
    </div>
  );
}
