import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const { about, hero } = getContent();

  // A simple way to handle markdown-like newlines.
  // A proper library like 'marked' or 'react-markdown' would be better for a real app.
  const blurbHtml = {
    __html: about.blurb_md.replace(/\n\n/g, "<br /><br />"),
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">
            I'm {hero.name}, a {hero.headline} based in {hero.location}.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:mt-10">
          <article
            className="prose prose-lg max-w-none text-gray-600 dark:prose-invert"
            dangerouslySetInnerHTML={blurbHtml}
          />
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Interests</h3>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {about.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
