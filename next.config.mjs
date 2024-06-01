/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "backend.shoppy-app.com"
      }
    ],
  },
};

export default nextConfig;
