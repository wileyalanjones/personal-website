import Link from "next/link";
import { siteConfig } from "@/app/content";
import { RotatingText } from "@/app/components/RotatingText";
import { ArrowRightIcon, GithubIcon, LinkedInIcon, EmailIcon, ArrowDownIcon } from "@/app/components/Icons";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-stone-50 via-orange-50/40 to-stone-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent dark:from-orange-900/20 dark:via-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 dark:text-white leading-tight mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <RotatingText roles={siteConfig.roles} />
          </p>
          <p className="text-base sm:tßext-lg text-stone-500 dark:text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8">
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
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ArrowDownIcon className="h-6 w-6 text-stone-400 dark:text-stone-500" />
      </div>
    </section>
  );
}