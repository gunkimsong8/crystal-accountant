import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (for example "/crystal-accountant") when the site is
// served from a sub-path such as a GitHub Pages project site. Leave it unset for
// local dev and for the custom domain, where the site is served from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
