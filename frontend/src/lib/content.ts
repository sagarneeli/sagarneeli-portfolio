import fs from "fs";
import path from "path";

// A basic type for the content structure for better type safety.
// This can be expanded later to match the full JSON structure.
export interface SiteContent {
  site: {
    title: string;
    tagline: string;
  };
  hero: {
    name: string;
    headline: string;
  };
  // Add other sections as needed
}

export function getContent(): SiteContent {
  // process.cwd() in Next.js is the root of the Next.js project (`/frontend`)
  // so we need to go one level up to find the `content` directory.
  const contentPath = path.join(process.cwd(), "../content/content.json");

  try {
    const fileContent = fs.readFileSync(contentPath, "utf-8");
    const content = JSON.parse(fileContent);
    // A full type validation (e.g., with Zod) would be better for a real project
    return content as SiteContent;
  } catch (error) {
    console.error("Error reading or parsing content.json:", error);
    // In a real app, you might want to return a default state or handle this more gracefully.
    throw new Error("Could not load site content. Make sure content/content.json exists.");
  }
}
