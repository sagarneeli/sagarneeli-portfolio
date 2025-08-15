"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SN</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Sagar Neeli
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Senior Backend & AI Engineer passionate about building
              intelligent, scalable systems that solve real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("skills")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:sagarneeli1191@gmail.com"
                className="flex items-center text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                sagarneeli1191@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/sagarneeli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profile URL"
                className="flex items-center text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                linkedin.com/in/sagarneeli
              </a>
              <a
                href="https://github.com/sagarneeli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code Repository"
                className="flex items-center text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                github.com/sagarneeli
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Sagar Neeli. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
            Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
