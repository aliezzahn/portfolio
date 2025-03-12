'use client';

import type { Repo } from '@/components/repos';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import reposData from '@/data/repos.json';
import type { DialogProps } from '@radix-ui/react-dialog';
import { Code, ExternalLink, GitFork, Search, Star } from 'lucide-react';
import * as React from 'react';
import { useNavigate } from 'react-router';

export function SearchCommand({ ...props }: DialogProps) {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredRepos = React.useMemo(() => {
    if (!searchQuery) return reposData as Repo[];

    const query = searchQuery.toLowerCase();
    return (reposData as Repo[]).filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        (repo.description && repo.description.toLowerCase().includes(query)) ||
        (repo.language && repo.language.toLowerCase().includes(query)) ||
        repo.topics.some((topic) => topic.toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  const handleSelect = (repo: Repo) => {
    window.open(repo.html_url, '_blank');
    setOpen(false);
  };

  return (
    <div className="">
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search repositories...</span>
        <span className="sr-only">Search repositories</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search repositories..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No repositories found.</CommandEmpty>
          <CommandGroup heading="Repositories">
            {filteredRepos.map((repo) => (
              <CommandItem
                key={repo.id}
                onSelect={() => handleSelect(repo)}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border">
                    <ExternalLink className="h-3 w-3" />
                  </div>
                  <span>{repo.name}</span>
                  {repo.language && (
                    <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-xs text-muted-foreground">
                    <Star className="mr-1 h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-xs text-muted-foreground">
                    <GitFork className="mr-1 h-3 w-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                navigation('/repositories');
                setOpen(false);
              }}
            >
              <Code className="mr-2 h-4 w-4" />
              All Repositories
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
