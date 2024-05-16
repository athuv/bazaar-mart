/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hjziiwmkcssstjzmgnad.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/bz-mart/**",
      },
    ],
  },
};

export default nextConfig;
