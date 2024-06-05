/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.zameen.com",
      },
      {
        protocol: "https",
        hostname: "media.zameen.com",
      },
      {
        protocol: "https",
        hostname: "zameen-images-live.s3-eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ultra-realhomes.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "demo17.houzez.co",
      },
      {
        protocol: "https",
        hostname: "mainwpresidence.b-cdn.net",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "minimals.cc",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dosndnyp5",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "vy8pknlf",
  },
};

export default nextConfig;
