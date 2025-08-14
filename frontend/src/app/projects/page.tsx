import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const { projects } = getContent();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects that showcase my skills and interests.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-100 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-300 via-gray-200 to-transparent" />
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {project.summary}
              </p>
              <div className="mt-4 border-t border-gray-300 pt-4">
                {project.impact.map((item, index) => (
                  <p key={index} className="text-sm font-medium text-green-700">
                    &bull; {item}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md bg-white/50 px-2 py-1 text-xs font-medium text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
