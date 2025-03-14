import { PackageList } from '@/components/package-list';
import packagesData from '@/data/packages.json';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Package, FileCode, Github } from 'lucide-react';

export default function Packages() {
  const totalPackages =
    packagesData.npm.length +
    packagesData.pypi.length +
    packagesData.github_npm.length;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Packages</h1>
          <p className="text-muted-foreground">
            A collection of {totalPackages} packages published across different
            registries
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search packages..."
            className="px-4 py-2 pr-10 border rounded-md bg-background"
          />
          <svg
            className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid grid-cols-4 max-w-md">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="npm" className="flex items-center gap-1">
            <Package className="h-4 w-4" />
            npm
          </TabsTrigger>
          <TabsTrigger value="pypi" className="flex items-center gap-1">
            <FileCode className="h-4 w-4" />
            PyPI
          </TabsTrigger>
          <TabsTrigger value="github" className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            GitHub
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          <PackageList
            title="npm Packages"
            packages={packagesData.npm}
            type="npm"
          />
          <PackageList
            title="PyPI Packages"
            packages={packagesData.pypi}
            type="pypi"
          />
          <PackageList
            title="GitHub npm Packages"
            packages={packagesData.github_npm}
            type="github_npm"
          />
        </TabsContent>

        <TabsContent value="npm">
          <PackageList
            title="npm Packages"
            packages={packagesData.npm}
            type="npm"
          />
        </TabsContent>

        <TabsContent value="pypi">
          <PackageList
            title="PyPI Packages"
            packages={packagesData.pypi}
            type="pypi"
          />
        </TabsContent>

        <TabsContent value="github">
          <PackageList
            title="GitHub npm Packages"
            packages={packagesData.github_npm}
            type="github_npm"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
