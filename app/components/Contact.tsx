import { siteConfig } from "@/app/content";
import { Reveal } from "@/app/components/Reveal"
import { EmailIcon, GithubIcon, LinkedInIcon } from "@/app/components/Icons";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <Reveal delay={0}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex flex-col items-center p-6 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-accent dark:hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                <EmailIcon className="h-6 w-6 text-accent dark:text-accent group-hover:text-accent dark:group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-1">Email</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">{siteConfig.email}</p>
            </a>
          </Reveal>
          <Reveal delay={.1}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-accent dark:hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                <GithubIcon className="h-6 w-6 text-accent dark:text-accent group-hover:text-accent dark:group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-1">GitHub</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">View my code</p>
            </a>
          </Reveal>
          <Reveal delay={.2}>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-accent dark:hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                <LinkedInIcon className="h-6 w-6 text-accent dark:text-accent group-hover:text-accent dark:group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">Connect with me</p>
            </a>
          </Reveal>
        </div>
        <Reveal>
        <div className="mt-16 text-center">
          <p className="text-stone-500 dark:text-stone-400">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your team.
          </p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}