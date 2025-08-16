"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Brain,
  Database,
  type LucideIcon,
} from "lucide-react";

type ProjectItem = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  impact: string;
  type: string;
  icon?: LucideIcon;
};

const projectsFallback: ProjectItem[] = [
  {
    title: "Next-Gen CMS Platform",
    company: "HubSpot",
    description:
      "Unified 5+ content types with scalable microservices architecture",
    technologies: ["Python", "Microservices", "CMS", "Scalability"],
    impact: "50% onboarding time reduction",
    type: "backend",
    icon: Database,
  },
  {
    title: "AI Translation at Scale",
    company: "HubSpot",
    description: "DeepL + automation for 30+ languages with 95% adoption rate",
    technologies: ["AI", "DeepL", "Automation", "Multi-language"],
    impact: "95% adoption rate",
    type: "ai",
    icon: Brain,
  },
  {
    title: "Event-Driven Messaging System",
    company: "Jetty",
    description: "SQS + Python CDK for vendor synchronization",
    technologies: ["AWS SQS", "Python CDK", "Event-driven", "Synchronization"],
    impact: "90% faster vendor sync",
    type: "backend",
    icon: Zap,
  },
  {
    title: "GenAI-Powered Content Personalization",
    company: "Concept",
    description: "CRM API + LLM for dynamic marketing copy generation",
    technologies: ["GenAI", "LLM", "CRM", "Personalization"],
    impact: "Dynamic content generation",
    type: "ai",
    icon: Brain,
  },
  {
    title: "Partner Onboarding Automation",
    company: "Jetty",
    description: "Flask + React/GraphQL for automated partner onboarding",
    technologies: ["Flask", "React", "GraphQL", "Automation"],
    impact: "70% manual work reduction",
    type: "fullstack",
    icon: Zap,
  },
];

export function ProjectsSection({ projects }: { projects?: ProjectItem[] }) {
  const data = projects && projects.length > 0 ? projects : projectsFallback;
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A selection of impactful projects showcasing my expertise in backend
            engineering, AI/ML, and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {(() => {
                      const IconComp = (project.icon ?? Database) as LucideIcon;
                      return <IconComp className="w-6 h-6" />;
                    })()}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === "ai"
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                        : project.type === "backend"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  {project.company}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.impact}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
