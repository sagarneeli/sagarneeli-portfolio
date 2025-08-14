import { getContent } from "@/lib/content";
import Link from "next/link";

export default function Home() {
  const { hero, links } = getContent();

  const ctaPrimary = hero.ctas.find(c => c.label === "Download Resume");
  const ctaSecondary = hero.ctas.find(c => c.label === "Contact");

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {hero.headline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
               <Link
                href={ctaSecondary.href}
                className="text-sm font-semibold leading-6 text-gray-900 group"
              >
                {ctaSecondary.label} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
