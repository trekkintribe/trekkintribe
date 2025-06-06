import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // leave blank unless needed
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
