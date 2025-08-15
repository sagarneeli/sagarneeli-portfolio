"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cloud, Database, Shield, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Cloud",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "Go",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Kafka",
      "Redis",
      "Memcached",
      "Elasticsearch",
    ],
    color: "blue",
  },
  {
    title: "AI/ML & GenAI",
    icon: Brain,
    skills: [
      "Hugging Face",
      "LangChain",
      "OpenAI API",
      "RAG pipelines",
      "Vector databases (Pinecone, Weaviate, FAISS)",
      "Embedding search",
      "LLM fine-tuning",
      "Prompt engineering",
    ],
    color: "purple",
  },
  {
    title: "Specialties",
    icon: Shield,
    skills: ["Ceph", "Block Storage", "Network Security"],
    color: "emerald",
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["dbt", "Snowflake", "Hive", "Spark"],
    color: "cyan",
  },
  {
    title: "Performance & Optimization",
    icon: Zap,
    skills: [
      "High-performance systems",
      "Caching strategies",
      "Real-time processing",
      "System optimization",
      "Load balancing",
    ],
    color: "orange",
  },
  {
    title: "Cloud Architecture",
    icon: Cloud,
    skills: [
      "Microservices",
      "Event-driven architecture",
      "Serverless",
      "Infrastructure as Code",
      "CI/CD pipelines",
    ],
    color: "indigo",
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700",
    purple:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700",
    emerald:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
    cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
    orange:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700",
    indigo:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700",
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable systems
            across the full technology stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm constantly exploring emerging technologies and methodologies.
              Currently focused on advanced AI/ML techniques, distributed
              systems optimization, and building the next generation of
              intelligent applications. I believe in staying ahead of the curve
              while maintaining deep expertise in proven technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
