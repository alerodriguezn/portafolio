import { Octokit } from "octokit";

export default async function handler(req, res) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const allPromise = Promise.all([
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "QuioscoApp",
    }),
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "UpTask_MERN",
    }),
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "NextAuth",
    }),
  ]);

  const repos = await allPromise;

  const reposInfo = repos.map((repo) => {
    const { name, description, topics } = repo.data;
    return({name, description, topics})
  });

  res.status(200).json(reposInfo);
}
