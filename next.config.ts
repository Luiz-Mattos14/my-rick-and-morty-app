import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // Adiciona a pasta "styles" ao caminho
  },
  images: {
    domains: ["rickandmortyapi.com"],
  },
};

export default nextConfig;
