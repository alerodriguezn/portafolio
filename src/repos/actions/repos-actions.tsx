import { Octokit } from "@octokit/core";

export const getRepos = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const allPromise = Promise.all([
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "QuioscoApp",
    }),
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "UpTask_MERN",
    })
  ]);

    const repos = await allPromise; 

    const reposInfo = repos.map((repo) => {
      const { name, description, topics } = repo.data;
      return { name, description, topics };
    });

    return reposInfo;

};

