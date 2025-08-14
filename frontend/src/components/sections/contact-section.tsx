"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just chatting about 
            technology and innovation. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to connect, I'd love to hear from you. I'm particularly interested 
                in roles involving AI/ML, distributed systems, and innovative backend solutions.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:sagarneeli1191@gmail.com"
                className="flex items-center p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300">sagarneeli1191@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/sagarneeli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">LinkedIn</h4>
                  <p className="text-slate-600 dark:text-slate-300">linkedin.com/in/sagarneeli</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/sagarneeli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mr-4 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">GitHub</h4>
                  <p className="text-slate-600 dark:text-slate-300">github.com/sagarneeli</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Quick Actions
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Ready to take the next step? Here are some quick ways to get started.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 py-4 text-lg"
                onClick={() => window.open("mailto:sagarneeli1191@gmail.com", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>

            {/* Availability Status */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                Current Status
              </h4>
              <p className="text-emerald-600 dark:text-emerald-400 mb-4">
                🟢 Available for new opportunities
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                I'm actively looking for roles in AI/ML engineering, backend development, 
                and system architecture. Open to both full-time positions and consulting opportunities.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Response Time
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out on LinkedIn for a faster response.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
