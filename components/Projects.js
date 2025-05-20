import Image from 'next/image';
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-5">
            {projects.title}
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 sm:mb-16">
            {projects.desc}
          </p>
        </div>
        {/* Project cards container */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.projects.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-6 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center space-x-4">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                    >
                      <Image
                        src="/static/icons/link.svg"
                        width={20}
                        height={20}
                        alt="Link icon"
                      />
                      <span className="ml-2">{item.link.replace(/^https?:\/\//, '')}</span>
                    </a>
                  )}
                  {item.github && (
                    <a
                      href={`https://github.com/${item.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
                    >
                      <Image
                        src="/static/icons/github.svg"
                        width={20}
                        height={20}
                        alt="GitHub icon"
                      />
                      <span className="ml-2">{item.github}</span>
                    </a>
                )}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}