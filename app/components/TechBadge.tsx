import type { IconType } from "react-icons";
import {
  SiPython,
  SiPostgresql,
  SiDatabricks,
  SiDocker,
  SiTensorflow,
  SiOpencv,
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiJavascript,
  SiStreamlit,
} from "react-icons/si";
import { LuCode, LuCloud, LuSparkles, LuBrainCircuit } from "react-icons/lu";

const iconMap: Record<string, IconType> = {
  python: SiPython,
  sql: SiPostgresql,
  openai: LuSparkles,
  "open ai api and sdk": LuSparkles,
  azure: LuCloud,
  databricks: SiDatabricks,
  docker: SiDocker,
  tensorflow: SiTensorflow,
  opencv: SiOpencv,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  "react.js": SiReact,
  react: SiReact,
  javascript: SiJavascript,
  streamlit: SiStreamlit,
  "machine learning": LuBrainCircuit,
};

export function TechBadge({ tech }: { tech: string }) {
  const Icon = iconMap[tech.toLowerCase()] ?? LuCode;

  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium rounded-full bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300">
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {tech}
    </span>
  );
}