import { useEffect, useState } from "react";

interface RepoResponse {
  name: string;
  description: string;
  fork: boolean;
  language: string;
}

function UserRepos() {
  const [repos, setRepos] = useState<RepoResponse[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/repos")
      .then(response => response.json())
      .then(setRepos)
  }, []);

  function displayRepos() {
    return repos.map(repo => (
      <div className="single-repo" key={repo.name}>
        <h2 className="repo-title">{repo.name} {repo.fork ? "⚔️" : ""}</h2>
        <div><small>{repo.language ? `Language: [${repo.language}] ` : ""}</small></div>
        <div>{repo.description}</div>
      </div>
    ))
  }

  return (
    <div>{displayRepos()}</div>
  )
}

export default UserRepos;