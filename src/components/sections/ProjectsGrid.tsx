import { ProjectCard } from "./ProjectCard";
import { getRepos } from "@/lib/actions/repos-actions";

export const ProjectsGrid = async () => {
  try {
    const repos = await getRepos();
    
    if (!repos || repos.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-4">
            No projects found at the moment.
          </div>
          <p className="text-gray-500">
            Check back soon for new projects!
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.name}
            repo={repo}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching projects:', error);
    return (
      <div className="text-center py-12">
        <div className="text-red-400 text-lg mb-4">
          Unable to load projects
        </div>
        <p className="text-gray-500">
          Please try again later or check my GitHub profile directly.
        </p>
        <a 
          href="https://github.com/alerodriguezn"
          className="inline-block mt-4 text-[#FECC1B] hover:underline"
        >
          View GitHub Profile
        </a>
      </div>
    );
  }
};
