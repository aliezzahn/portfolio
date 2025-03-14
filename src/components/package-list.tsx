import { PackageCard } from './package-card';

interface Package {
  name: string;
  url: string;
  repo: string;
  home_page?: string;
  description: string;
  type?: string;
  version?: string;
  downloads?: number;
  lastUpdated?: string;
  license?: string;
  dependencies?: number;
}

interface PackageListProps {
  title: string;
  packages: Package[];
  type: 'npm' | 'pypi' | 'github_npm';
}

export function PackageList({ title, packages, type }: PackageListProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {title}
          <span className="text-sm font-normal bg-muted rounded-full px-2 py-0.5">
            {packages.length}
          </span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} package={pkg} packageType={type} />
        ))}
      </div>
    </section>
  );
}
