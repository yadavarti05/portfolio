import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/llms.txt`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/resume.json`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
