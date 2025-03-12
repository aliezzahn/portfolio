'use client';

import {
  Calendar,
  Copy,
  GitFork,
  Star,
  AlertCircle,
  Lock,
  Eye,
  Shield,
  GitBranch,
  BookOpen,
} from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Repo } from './repos';

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  const updatedAt = new Date(repo.updated_at);
  const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });
  const formattedDate = format(updatedAt, 'MMM d, yyyy');

  const handleCopyCloneUrl = () => {
    navigator.clipboard.writeText(repo.clone_url);
  };

  // Language colors mapping (similar to GitHub)
  const languageColors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Rust: '#dea584',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    null: '#cccccc', // Default color for null language
  };

  // Get language color, default to gray if not in our mapping
  const languageColor = repo.language
    ? languageColors[repo.language] || '#cccccc'
    : '#cccccc';

  return (
    <div className="my-2 border rounded-md p-4 bg-background hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
      <div className="flex flex-col space-y-4">
        {/* Header with repo name and badges */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <div>
              <div className="flex items-center gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg hover:underline text-blue-600 dark:text-blue-400"
                >
                  {repo.name}
                </a>
                <div className="flex items-center gap-1">
                  {repo.private ? (
                    <Badge
                      variant="outline"
                      className="text-xs flex items-center gap-1 h-5 px-1.5"
                    >
                      <Lock className="w-3 h-3" />
                      Private
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="text-xs flex items-center gap-1 h-5 px-1.5"
                    >
                      <Eye className="w-3 h-3" />
                      Public
                    </Badge>
                  )}
                  {repo.fork && (
                    <Badge
                      variant="outline"
                      className="text-xs flex items-center gap-1 h-5 px-1.5"
                    >
                      <GitFork className="w-3 h-3" />
                      Fork
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <img
                    src={
                      repo.owner.avatar_url ||
                      '/placeholder.svg?height=16&width=16'
                    }
                    alt={repo.owner.login}
                    className="w-4 h-4 rounded-full"
                  />
                  {repo.owner.login}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 flex items-center gap-1"
                    onClick={handleCopyCloneUrl}
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Clone
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono text-xs">{repo.clone_url}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              variant="outline"
              size="sm"
              className="h-8 flex items-center gap-1"
            >
              <Star className="w-3.5 h-3.5" />
              Star
            </Button>
          </div>
        </div>

        {/* Description */}
        {repo.description && (
          <p className="text-sm text-muted-foreground">{repo.description}</p>
        )}

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-100"
              >
                {topic}
              </Badge>
            ))}
          </div>
        )}

        {/* Stats and metadata */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {/* Language */}
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor }}
              ></div>
              <span>{repo.language}</span>
            </div>
          )}

          {/* Stars */}
          <a
            href={`${repo.html_url}/stargazers`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Star className="w-3.5 h-3.5" />
            <span>{repo.stargazers_count.toLocaleString()}</span>
          </a>

          {/* Forks */}
          <a
            href={`${repo.html_url}/network/members`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>{repo.forks_count.toLocaleString()}</span>
          </a>

          {/* Issues */}
          {repo.open_issues_count > 0 && (
            <a
              href={`${repo.html_url}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{repo.open_issues_count.toLocaleString()} issues</span>
            </a>
          )}

          {/* License */}
          {repo.license && (
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>{repo.license.spdx_id || repo.license.name}</span>
            </div>
          )}

          {/* Updated */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1.5 cursor-help">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Updated {timeAgo}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{formattedDate}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Default branch */}
          <div className="flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5" />
            <span>{repo.default_branch}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
