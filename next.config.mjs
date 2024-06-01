/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: process.env.PRODUCT_IMAGE_HOST
      }
    ],
  },
};

export default nextConfig;
