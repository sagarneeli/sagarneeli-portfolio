"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Database, Zap, Target } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "AI/ML Engineering",
    description:
      "Building intelligent systems with modern AI/ML technologies including LLMs, RAG pipelines, and vector databases.",
  },
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Scalable microservices, APIs, and distributed systems using Python, Java, Go, and modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "AWS, GCP expertise with containerization, Kubernetes orchestration, and infrastructure as code.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Building robust data pipelines, ETL processes, and analytics platforms with modern data stack.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "High-performance systems optimization, caching strategies, and real-time processing pipelines.",
  },
  {
    icon: Target,
    title: "System Design",
    description:
      "Architecting scalable, fault-tolerant systems with event-driven architectures and message queues.",
  },
];

export function AboutSection({ summary }: { summary?: string }) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {summary || (
              <>
                I'm a Senior Backend & AI Engineer with a passion for building
                intelligent, scalable systems that solve real-world problems. With
                nearly a decade of experience, I've evolved from a traditional
                backend engineer to a specialist in AI-powered solutions and
                distributed architectures. My brand is expressed through a
                minimalist <span className="font-semibold text-slate-900 dark:text-white">SN</span>{" "}
                monogram—clean, future-focused, and unmistakably mine.
              </>
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Career Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-700"
            >
              <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2">
                From Backend to AI Engineering
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                My career began with traditional backend development, building
                APIs and microservices. Over time, I've increasingly focused on
                integrating AI/ML capabilities into production systems, from
                simple automation to complex generative AI applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-r from-accent-50 to-cyan-50 dark:from-accent-900/20 dark:to-cyan-900/20 border border-accent-200 dark:border-accent-700"
            >
              <h4 className="text-lg font-semibold text-accent-700 dark:text-accent-300 mb-2">
                Scaling AI in Production
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                At HubSpot, I led the integration of AI translation services
                that achieved 95% adoption across 30+ languages. This experience
                taught me the challenges of deploying AI at scale and the
                importance of building robust, user-friendly AI systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-r from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20 border border-cyan-200 dark:border-cyan-700"
            >
              <h4 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                Future-Focused Innovation
              </h4>
              <p className="text-slate-700 dark:text-slate-300">
                I'm passionate about the intersection of AI and backend
                engineering, particularly in building agentic systems, RAG
                pipelines, and intelligent automation. I believe the future lies
                in systems that can think, learn, and adapt autonomously.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
