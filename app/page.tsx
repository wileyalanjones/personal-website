import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Experience } from "@/app/components/Experience"
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Resume } from "@/app/components/Resume";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}