import { PackageCard } from './package-card';

interface Package {
  name: string;
  url: string;
  repo: string;
  home_page?: string;
  description: string;
}

interface PackageListProps {
  title: string;
  packages: Package[];
}

export function PackageList({ title, packages }: PackageListProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} package={pkg} />
        ))}
      </div>
    </section>
  );
}
