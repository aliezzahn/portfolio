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
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  languageFilter: string;
  setLanguageFilter: (language: string) => void;
  sortOption: string;
  setSortOption: (sort: string) => void;
  availableLanguages: string[];
}

export function Repos({
  repos,
  typeFilter,
  setTypeFilter,
  languageFilter,
  setLanguageFilter,
  sortOption,
  setSortOption,
  availableLanguages,
}: ReposProps) {
  return (
    <div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">{repos.length}</span> results for
          repositories
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            className="text-sm border rounded-md px-2 py-1 bg-background"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">Type: All</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </select>
          <select
            className="text-sm border rounded-md px-2 py-1 bg-background"
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
          >
            <option value="all">Language: All</option>
            {availableLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          <select
            className="text-sm border rounded-md px-2 py-1 bg-background"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="updated">Sort: Last updated</option>
            <option value="name">Name</option>
            <option value="stars">Stars</option>
          </select>
        </div>
      </div>

      <div className="border-t">
        {repos.length > 0 ? (
          repos.map((repo, index) => (
            <div key={repo.id} className={index !== 0 ? 'border-t' : ''}>
              <RepoCard repo={repo} />
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-muted-foreground">
            No repositories found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
