"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Linkedin,
  Github,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const animatedTexts = [
  "Senior Backend Engineer",
  "AI/ML Specialist",
  "Cloud Architect",
  "Distributed Systems Expert",
];

export function HeroSection({ name }: { name?: string }) {
  const displayName = name || "Sagar Neeli";
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-accent-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Available for opportunities
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-primary-600 to-accent-600 dark:from-white dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent">
              {displayName}
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-12 sm:h-14 lg:h-16 flex items-center justify-center mb-8"
          >
            <AnimatedText texts={animatedTexts} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Building scalable, intelligent systems with ~10 years of experience
            in backend engineering, distributed architectures, cloud
            engineering, and cutting-edge AI/ML solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-3 text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://linkedin.com/in/sagarneeli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/sagarneeli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-600 dark:text-slate-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AnimatedText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
