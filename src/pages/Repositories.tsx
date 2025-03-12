import { Repos } from '@/components/repos';
import reposData from '@/data/repos.json';

export default function Repositories() {
  return (
    <main className="container mx-auto py-8 px-4 flex-1">
      <h1 className="text-3xl font-bold mb-8">My GitHub Repositories</h1>
      <Repos repos={reposData} />
    </main>
  );
}
