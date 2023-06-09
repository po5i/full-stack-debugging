import { useEffect, useState } from "react";

interface RepoResponse {
  name: string;
  description: string;
  fork: boolean;
  language: string;
}

function UserRepos() {
  const [repos, setRepos] = useState<RepoResponse[]>([]);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setMsg("Loading...")
        const req = await fetch("http://localhost:8000/repos")
        const response = await req.json()
        setRepos(response)
        setMsg("")
      } catch(error) {
        setMsg(error.message)
      }
    })()
  }, []);

  function displayRepos() {
    if (msg) {
      return <div>{msg}</div>
    }
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