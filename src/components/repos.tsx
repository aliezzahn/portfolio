import { RepoCard } from './repo-card';

type Owner = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Repo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  } | null;
  topics: string[];
  visibility: string;
  default_branch: string;
  clone_url: string;
};

interface ReposProps {
  repos: Repo[];
}

export function Repos({ repos }: ReposProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
