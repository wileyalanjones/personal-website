import { skills } from "@/app/content";
import { Reveal } from "@/app/components/Reveal"

const skillCategories = [
  { key: "languages", label: "Languages", icon: "code" },
  { key: "frontend", label: "Frontend", icon: "layout" },
  { key: "backend", label: "Backend", icon: "server" },
  { key: "tools", label: "Tools & DevOps", icon: "tool" },
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-stone-50 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-300">
              Technologies and tools I work with regularly. Always expanding my toolkit.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => {
            const categoryKey = category.key as keyof typeof skills;
            const items = skills[categoryKey];
            return (
              <Reveal key={category.key} delay={i*0.1} className="h-full">
                <div
                  key={category.key}
                  className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 p-6 h-full"
                >
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                    {category.label}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-stone-400 dark:bg-stone-400" aria-hidden="true" />
                        <span className="text-stone-600 dark:text-stone-300 text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}