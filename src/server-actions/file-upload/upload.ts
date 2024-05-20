"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(prevState: any, formData: FormData) {
  const file = formData.get("image") as File;
  console.log(file);
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
  return result;
}
