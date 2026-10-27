import { experience } from "@/app/content"
import { Reveal } from "@/app/components/Reveal"

export function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900">
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
                            Experience    
                        </h2>
                        <p className="text-center max-w-3xl mx-auto mb-16">
                            Where I&apos;ve worked and what I&apos;ve learned along the way.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((job, i) => (
                        <Reveal key={job.id} delay={i*.1}>
                            <article className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                                    <h3 className="text-xl font-semibold text-stone-900 dark:text-white">
                                        {job.title}
                                    </h3>
                                    <span className="text-sm text-stone-500 dark:text-stone-400">
                                        {job.startDate} - {job.endDate}
                                    </span>
                                </div>
                                <p className="text-stone-500 dark:text-stone-400 mb-1 text-sm">
                                    {job.company} · {job.location}
                                </p>
                                <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                                    {job.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {job.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base">
                                            <span className="text-accent mt-1" aria-hidden="true">▹</span>
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {job.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}