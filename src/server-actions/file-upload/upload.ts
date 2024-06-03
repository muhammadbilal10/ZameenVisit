"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(prevState: any, formData: FormData) {
  // check if the file size is less than 5 MB
  const file = formData.get("image") as File;
  if (file.size > 5 * 1024 * 1024) {
    return {
      error: "File size should be less than 5 MB",
    };
  }

  // check if the file type is jpeg or png
  if (!["image/jpeg", "image/png"].includes(file.type)) {
    console.log(file.type);
    return {
      error: "File type should be jpeg or png",
    };
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const result = (await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: ["nextjs-server-actions-upload-sneakers"],
          upload_preset: "vy8pknlf",
        },
        function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  })) as any;
  console.log(result);
  return result;
}

export async function deleteImage(prevState: any, formData: FormData) {
  try {
    const publicId = formData.get("public_id") as string;
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    return {
      error: "Failed to delete image. Please try again.",
    };
  }
}
