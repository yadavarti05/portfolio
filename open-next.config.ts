import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal config — no R2/KV needed for this mostly-static portfolio.
// (Add an incremental-cache override here later if you introduce ISR.)
export default defineCloudflareConfig({});
