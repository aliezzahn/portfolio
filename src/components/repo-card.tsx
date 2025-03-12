import {
  Calendar,
  Code,
  Copy,
  ExternalLink,
  GitFork,
  Star,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Repo } from './repos';

interface RepoCardProps {
  repo: Repo;
}

export function RepoCard({ repo }: RepoCardProps) {
  const updatedAt = new Date(repo.updated_at);
  const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

  const handleCopyCloneUrl = () => {
    navigator.clipboard.writeText(repo.clone_url);
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <img
              src={repo.owner.avatar_url || '/placeholder.svg'}
              alt={repo.owner.login}
              className="w-6 h-6 rounded-full"
            />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg hover:underline flex items-center gap-1"
            >
              {repo.name}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          {repo.fork && (
            <Badge variant="outline" className="text-xs">
              Fork
            </Badge>
          )}
        </div>
        {repo.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {repo.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics && repo.topics.length > 0 ? (
            repo.topics.slice(0, 3).map((topic) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground">No topics</span>
          )}
          {repo.topics && repo.topics.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{repo.topics.length - 3} more
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Updated:</span>
          </div>
          <div className="text-right">{timeAgo}</div>

          {repo.language && (
            <>
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Language:</span>
              </div>
              <div className="text-right">{repo.language}</div>
            </>
          )}

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Stars:</span>
          </div>
          <div className="text-right">{repo.stargazers_count}</div>

          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Forks:</span>
          </div>
          <div className="text-right">{repo.forks_count}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center gap-2"
                onClick={handleCopyCloneUrl}
              >
                <Copy className="w-4 h-4" />
                Clone
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy clone URL: {repo.clone_url}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
