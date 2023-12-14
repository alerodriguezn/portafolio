import { ProjectCard } from "./ProjectCard";
import { getRepos } from "../actions/repos-actions";

export const ProjectsGrid = async () => {
  const repos = await getRepos();
  console.log(repos);

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-2">
      {repos.map((repo) => {
        return (
          <ProjectCard
            key={repo.name}
            name={repo.name}
            description={repo.description}
            topics={repo.topics}
          />
        );
      })}
    </div>
  );
};
