import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface PackageCardProps {
  package: {
    name: string;
    url: string;
    repo: string;
    home_page?: string;
    description: string;
  };
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-xl">{pkg.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a
            href={pkg.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Package
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={pkg.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            Repository
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
