import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  const { experience } = getContent();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A timeline of my professional journey and key accomplishments.
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root">
          <div className="-my-8">
            {experience.map((job, index) => (
              <div key={index} className="relative py-8">
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-semibold text-gray-700 ring-8 ring-white">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {job.role}
                      </div>
                      <p className="mt-0.5 text-base text-gray-600">
                        at {job.company}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>{job.start} - {job.end || "Present"} &middot; {job.location}</p>
                    </div>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
