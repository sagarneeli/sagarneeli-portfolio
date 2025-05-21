import React from 'react';
import { experience } from '../data/config'; // Assuming data/config.js is one level up

export default function Experience() {
  if (!experience || !experience.items || experience.items.length === 0) {
    return null; // Don't render anything if there's no experience data
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Using max-w-4xl for a slightly more focused content width than 7xl */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-slate-900 dark:text-slate-100 mb-12 sm:mb-16">
          {experience.title || 'Work Experience'}
        </h2>
        
        <div className="space-y-12"> {/* Adds space between experience items */}
          {experience.items.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-1.5">
                {item.role}
              </h3>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-1">
                {item.company}
              </p>
              <div className="flex flex-col sm:flex-row justify-between text-sm text-slate-500 dark:text-slate-400 mb-3">
                <span>{item.dates}</span>
                <span>{item.location}</span>
              </div>
              
              {item.description && (
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-4 text-sm sm:text-base">
                  {item.description}
                </div>
              )}
              
              {item.technologies && item.technologies.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 mt-3">
                    Technologies used:
                  </h4>
                  <div className="flex flex-wrap">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="m-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
