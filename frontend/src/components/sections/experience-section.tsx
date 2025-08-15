"use client";

import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

type ExperienceItem = {
  company: string;
  position: string;
  description: string;
  duration?: string;
  technologies: string[];
  achievements: string[];
};

const experiencesFallback: ExperienceItem[] = [
  {
    company: "Akamai Technologies",
    position: "Senior Software Engineer",
    duration: "Jul 2025–Present",
    description:
      "Storage Engineering; applying ML-driven monitoring and anomaly detection to block storage services",
    technologies: ["Python", "ML", "Storage Systems", "Monitoring"],
    achievements: [
      "Implementing ML-driven monitoring for block storage services",
      "Anomaly detection in storage systems",
    ],
  },
  {
    company: "CVS Health",
    position: "Senior Software Engineer",
    duration: "Mar–Jul 2025",
    description:
      "Enterprise Data ML Team; worked on AI-assisted prior authorization workflows",
    technologies: ["Python", "AI/ML", "Healthcare", "Workflows"],
    achievements: [
      "AI-assisted prior authorization workflows",
      "Healthcare data processing",
    ],
  },
  {
    company: "HubSpot",
    position: "Senior Software Engineer",
    duration: "Jan 2023–Feb 2025",
    description:
      "Architected CMS with microservices; integrated AI translation at scale",
    technologies: ["Python", "Microservices", "AI Translation", "CMS"],
    achievements: [
      "50% onboarding time reduction",
      "30+ languages, 95% adoption",
      "+20% engagement through CRM APIs",
    ],
  },
  {
    company: "Jetty",
    position: "Senior Software Engineer, Technical Lead",
    duration: "Mar 2021–Jan 2023",
    description:
      "Partner integrations and data pipelines for predictive analysis",
    technologies: ["AWS", "Event-driven", "Snowflake", "Data Pipelines"],
    achievements: [
      "500k+ records synced via event-driven AWS",
      "Predictive analysis dashboards",
    ],
  },
  {
    company: "Wayfair",
    position: "Senior Software Engineer, Technical Lead",
    duration: "Feb 2016–Feb 2021",
    description:
      "Real-time ad-serving pipeline and automated supplier reporting",
    technologies: ["Real-time", "Ad-serving", "Automation", "Reporting"],
    achievements: [
      "+60% performance improvement",
      "Automated supplier reporting",
    ],
  },
];

export function ExperienceSection({
  experiences,
}: {
  experiences?: ExperienceItem[];
}) {
  const data = experiences && experiences.length > 0 ? experiences : experiencesFallback;
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A decade of building and scaling intelligent systems across various
            industries and technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

          <div className="space-y-12">
            {data.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-800 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                          {experience.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                          <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
