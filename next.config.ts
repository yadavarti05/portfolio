import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the workspace root (a stray lockfile exists in the parent directory).
  turbopack: { root },
};

// Makes Cloudflare bindings/vars available via `process.env` during `next dev`.
initOpenNextCloudflareForDev();

export default nextConfig;
