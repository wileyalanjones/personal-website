import Image from "next/image";
import { experience } from "@/app/content";
import { Reveal } from "@/app/components/Reveal";
import { TechBadge } from "@/app/components/TechBadge";

export function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                            Experience
                        </span>
                        <span className="h-px flex-1 bg-stone-200 dark:bg-stone-700" aria-hidden="true" />
                    </div>
                </Reveal>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800" aria-hidden="true" />

                    {experience.map((job, i) => (
                        <Reveal key={job.id} delay={i * 0.1}>
                            <div className="relative pl-10 pb-14 last:pb-12">
                                <span
                                    className="absolute left-2 top-2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent/20 dark:ring-accent/10"
                                    aria-hidden="true"
                                />

                                <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
                                    {/* Left: text */}
                                    <div>
                                        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                                            {job.startDate} – {job.endDate}
                                        </span>
                                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-stone-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <p className="mt-1 text-stone-500 dark:text-stone-400">
                                            {job.company} · {job.location}
                                        </p>

                                        <p className="mt-5 text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
                                            {job.description}
                                        </p>

                                        {job.highlights && job.highlights.length > 0 && (
                                            <ul className="mt-6 space-y-3 max-w-2xl">
                                                {job.highlights.map((h) => (
                                                    <li key={h} className="flex items-start gap-3 text-stone-600 dark:text-stone-300">
                                                        <span className="text-accent mt-0.5" aria-hidden="true">▹</span>
                                                        <span>{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {job.tech && job.tech.length > 0 && (
                                            <div className="mt-8 flex flex-wrap gap-2.5">
                                                {job.tech.map((t) => (
                                                    <TechBadge key={t} tech={t} />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Right: logo fills the empty space */}
                                    {job.logo && (
                                        <div className="flex justify-center md:justify-end">
                                            <Image
                                                src={job.logo}
                                                alt={`${job.company} logo`}
                                                width={250}
                                                height={99}
                                                className="w-56 sm:w-72 lg:w-80 h-auto object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}