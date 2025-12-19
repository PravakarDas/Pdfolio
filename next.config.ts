import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
  // Exclude archive folder from page routing
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => {
    return ext;
  }),
  webpack: (config) => {
    // Ignore the archive folder completely
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/archive/**'],
    };
    return config;
  },
};

export default nextConfig;
