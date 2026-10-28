"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/app/content";
import { ArrowRightIcon, GithubIcon, LinkedInIcon, EmailIcon, ExternalLinkIcon } from "@/app/components/Icons";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-stone-50 via-orange-50/40 to-stone-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent dark:from-orange-900/20 dark:via-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
              <Image
                src="/headshot.jpeg"
                alt={`Portrait of ${siteConfig.name}`}
                width={448}
                height={448}
                priority
                className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-md lg:h-112 object-cover object-[50%_20%] rounded-full ring-4 ring-accent/40 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Name + actions */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-stone-900 dark:text-white leading-tight mb-3"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-stone-600 dark:text-stone-300 mb-8"
            >
              Software Engineer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
              >
                My Work
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Resume
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-8"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 dark:text-stone-500 hover:text-accent dark:hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 dark:text-stone-500 hover:text-accent dark:hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-stone-400 dark:text-stone-500 hover:text-accent dark:hover:text-accent transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="h-6 w-6" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-12 max-w-2xl mx-auto text-center text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed"
        >
          {siteConfig.bio}
        </motion.p>
      </div>
    </section>
  );
}