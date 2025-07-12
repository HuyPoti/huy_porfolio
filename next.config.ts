import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com', 'github.com'], // Thêm Cloudinary domain tại đây
  },
};

export default nextConfig;
