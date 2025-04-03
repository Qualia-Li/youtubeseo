import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["public.readdy.ai"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.readdy.ai",
        port: "",
        pathname: "/ai/img_res/**",
      },
    ],
  },
};

export default nextConfig;
