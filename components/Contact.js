import Image from 'next/image';
import { contact } from '@/data/config';

export default function Contact() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 sm:mb-10">
          {contact.title}
        </h2>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8 sm:mb-10">
          Shoot me an email:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          {contact.github && (
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span className="sr-only">GitHub</span>
              <Image
                src="/static/icons/github.svg"
                width={24} // Increased size slightly for better touch targets / visual weight
                height={24}
                alt="Github icon"
              />
            </a>
          )}
          {contact.medium && ( // Data key is medium, icon is dribbble
            <a
              href={`https://medium.com/${contact.medium}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span className="sr-only">Medium (via Dribbble icon)</span>
              <Image
                src="/static/icons/dribbble.svg" // Using dribbble icon as medium.svg is not available
                width={24}
                height={24}
                alt="Dribbble icon" // Corrected alt text to match the displayed icon
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span className="sr-only">LinkedIn</span>
              <Image
                src="/static/icons/linkedin.svg"
                width={24}
                height={24}
                alt="LinkedIn icon"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
