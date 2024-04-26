import React, { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
        <label htmlFor="input-file">
          <input
            id="input-file"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            hidden
          />
          <p className="text-gray-700 mt-4">
            Drag & drop or{" "}
            <span className="">click here to upload your image here</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">500 MB max file size.</p>
        </label>
        {image && <Button>Upload</Button>}
      </div>
    </div>
  );
}
