import Link from "next/link";
import { projects } from "@/app/content";
import { VideoModal } from "@/app/components/VideoModal";
import { Reveal } from "@/app/components/Reveal"
import { TiltCard } from "@/app/components/TiltCard";
import { GithubIcon, ExternalLinkIcon } from "@/app/components/Icons";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-white dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              A selection of projects I&apos;ve worked on. Each represents a unique challenge and learning experience.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i*0.1}>
              <TiltCard className="h-full">
              <article
                key={project.id}
                className="group bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-6 hover:shadow-lg hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex flex-col flex-1">
  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-3 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-stone-200 dark:border-stone-700">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </Link>
                  )}
                  {project.videoId && (
                    <VideoModal videoId={project.videoId} />
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}