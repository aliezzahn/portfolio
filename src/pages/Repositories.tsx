import { useState, useMemo } from 'react';
import { Repos } from '@/components/repos';
import reposData from '@/data/repos.json';
import { Search, Book } from 'lucide-react';

export default function Repositories() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [sortOption, setSortOption] = useState('updated');

  // Get unique languages from repos
  const availableLanguages = useMemo(() => {
    const languages = new Set();
    reposData.forEach((repo) => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
    return Array.from(languages).sort();
  }, []);

  // Filter and sort repos
  const filteredRepos = useMemo(() => {
    // First filter by search query
    let filtered = reposData.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Then filter by type
    if (typeFilter !== 'all') {
      switch (typeFilter) {
        case 'public':
          filtered = filtered.filter((repo) => repo.visibility === 'public');
          break;
        case 'private':
          filtered = filtered.filter((repo) => repo.visibility === 'private');
          break;
        case 'sources':
          filtered = filtered.filter((repo) => !repo.fork);
          break;
        case 'forks':
          filtered = filtered.filter((repo) => repo.fork);
          break;
        default:
          break;
      }
    }

    // Filter by language
    if (languageFilter !== 'all') {
      filtered = filtered.filter((repo) => repo.language === languageFilter);
    }

    // Sort the results
    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'updated':
        default:
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
      }
    });
  }, [searchQuery, typeFilter, languageFilter, sortOption]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Book className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Repositories</h1>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Repos
        repos={filteredRepos}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        languageFilter={languageFilter}
        setLanguageFilter={setLanguageFilter}
        sortOption={sortOption}
        setSortOption={setSortOption}
        availableLanguages={availableLanguages}
      />
    </div>
  );
}
