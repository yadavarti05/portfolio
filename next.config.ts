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
// Guard to dev only: during the production build this would open a remote proxy
// session for the AI binding, which needs a workers.dev subdomain and is not
// needed to build/deploy (the real AI binding is provided at runtime).
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

export default nextConfig;
