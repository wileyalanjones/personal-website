import Link from "next/link";
import { resume, siteConfig } from "@/app/content";
import { Reveal } from "@/app/components/Reveal"
import { DownloadIcon } from "@/app/components/Icons";

export function Resume() {
  return (
      <section id="resume" className="py-20 sm:py-28 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
                {resume.title}
              </h2>
              <p className="text-lg text-stone-600 dark:text-stone-300 mb-8">
                {resume.description}
              </p>

              <Link
                href={siteConfig.resumePath}
                download={resume.fileName}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-medium text-white hover:bg-accent-soft transition-colors"
              >
                <DownloadIcon className="h-5 w-5" />
                Download Resume (PDF)
              </Link>

              <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
                Or view it directly in your browser by clicking the link above.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
  );
}