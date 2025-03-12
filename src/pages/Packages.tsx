import { PackageList } from '@/components/package-list';
import packagesData from '@/data/packages.json';

export default function Packages() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Packages</h1>

      <div className="space-y-12">
        <PackageList title="npm Packages" packages={packagesData.npm} />
        <PackageList title="PyPI Packages" packages={packagesData.pypi} />
        <PackageList
          title="GitHub npm Packages"
          packages={packagesData.github_npm}
        />
      </div>
    </div>
  );
}
