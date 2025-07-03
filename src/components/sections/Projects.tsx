import { ProjectsGrid } from "./ProjectsGrid";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-[#FECC1B]">Projects</span>
        </h2>
        <ProjectsGrid />
      </div>
    </section>
  );
} 