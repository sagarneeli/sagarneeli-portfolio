import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const { links } = getContent();

  return (
    <div className="relative isolate bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <div className="text-center space-y-6">
            <p className="text-xl">
              <a
                href={`mailto:${links.email}`}
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                {links.email}
              </a>
            </p>
            <div className="flex justify-center space-x-8">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="mt-16 border-t dark:border-gray-700 pt-10 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                (A contact form will be implemented here soon.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
