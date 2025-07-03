'use server';
import { Octokit } from "@octokit/core";
import { Repository } from "@/types";

export const getRepos = async (): Promise<Repository[]> => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  
  const allPromise = Promise.all([
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "lightning-chat",
    }),
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "streamify",
    }),
    octokit.request("GET /repos/{owner}/{repo}", {
      owner: "alerodriguezn",
      repo: "QuioscoApp",
    }),
  ]);

  const repos = await allPromise; 

  const reposInfo: Repository[] = repos.map((repo) => {
    const { name, description, topics, html_url, homepage } = repo.data;
    return { name, description, topics: topics || [], html_url, homepage: homepage || undefined };
  });

  return reposInfo;
};
