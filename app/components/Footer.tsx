import Link from "next/link";
import { siteConfig } from "@/app/content";
import { ImageModal } from "@/app/components/ImageModal"
import { GithubIcon, LinkedInIcon, EmailIcon } from "@/app/components/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              Building thoughtful software that solves real problems.
              Always learning, always growing, {" "}
              <ImageModal />
              🐾.
            </p> 
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#projects" className="text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#resume" className="text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent text-sm transition-colors"
                  aria-label="Email"
                >
                  <EmailIcon className="h-5 w-5" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-stone-200 dark:border-stone-800">
          <p className="text-center text-stone-500 dark:text-stone-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. Built with Next.js and Tailwind CSS.
          </p>
          <div className="mt-2 text-center">
            <a
              href="/charles.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              title="You found Charles! 🐾"
              aria-label="A hidden picture of Charles the dog"
              className="inline-block text-lg opacity-20 hover:opacity-100 transition-opacity"
            >
              🐾
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}