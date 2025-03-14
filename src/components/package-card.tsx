import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ExternalLink,
  Github,
  Copy,
  Download,
  Calendar,
  PackageIcon,
  FileCode,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

interface PackageCardProps {
  package: {
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
  };
  packageType: 'npm' | 'pypi' | 'github_npm';
}

export function PackageCard({ package: pkg, packageType }: PackageCardProps) {
  const [copied, setCopied] = useState(false);

  // Generate random data for demo purposes
  const version =
    pkg.version ||
    `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
  const downloads = pkg.downloads || Math.floor(Math.random() * 100000);
  const lastUpdated =
    pkg.lastUpdated || `${Math.floor(Math.random() * 12) + 1} months ago`;
  const license = pkg.license || 'MIT';
  const dependencies = pkg.dependencies || Math.floor(Math.random() * 20);

  // Get install command based on package type
  const getInstallCommand = () => {
    switch (packageType) {
      case 'npm':
        return `npm install ${pkg.name}`;
      case 'pypi':
        return `pip install ${pkg.name}`;
      case 'github_npm':
        return `npm install @${pkg.name}`;
      default:
        return `npm install ${pkg.name}`;
    }
  };

  // Get package type icon and color
  const getPackageTypeInfo = () => {
    switch (packageType) {
      case 'npm':
        return {
          icon: <PackageIcon className="h-4 w-4" />,
          color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
          label: 'npm',
        };
      case 'pypi':
        return {
          icon: <FileCode className="h-4 w-4" />,
          color:
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
          label: 'PyPI',
        };
      case 'github_npm':
        return {
          icon: <Github className="h-4 w-4" />,
          color:
            'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
          label: 'GitHub npm',
        };
      default:
        return {
          icon: <PackageIcon className="h-4 w-4" />,
          color:
            'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
          label: 'Package',
        };
    }
  };

  const packageTypeInfo = getPackageTypeInfo();

  const handleCopyInstallCommand = () => {
    navigator.clipboard.writeText(getInstallCommand());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2 relative">
        <Badge
          variant="secondary"
          className={`absolute right-6 top-6 ${packageTypeInfo.color}`}
        >
          <span className="flex items-center gap-1">
            {packageTypeInfo.icon}
            {packageTypeInfo.label}
          </span>
        </Badge>

        <div className="flex items-start gap-3">
          <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-2 rounded-md">
            <PackageIcon className="h-6 w-6 text-primary" />
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight">
              <a
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 dark:text-blue-400 flex items-center gap-1"
              >
                {pkg.name}
              </a>
            </h3>

            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="outline" className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                {license}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {lastUpdated}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {pkg.description}
        </p>

        <div className="mt-4 bg-muted/50 rounded-md p-3 font-mono text-sm relative">
          <code>{getInstallCommand()}</code>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-6 w-6"
                  onClick={handleCopyInstallCommand}
                >
                  <Copy className="h-3.5 w-3.5" />
                  <span className="sr-only">Copy install command</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? 'Copied!' : 'Copy install command'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>

      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="text-xs text-muted-foreground">
          {dependencies} dependencies
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href={pkg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Package
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={pkg.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="h-3.5 w-3.5" />
              Repo
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
