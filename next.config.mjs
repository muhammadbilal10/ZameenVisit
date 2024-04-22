/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
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
    ],
  },
};

export default nextConfig;
