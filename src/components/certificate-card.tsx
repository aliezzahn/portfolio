import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Calendar,
  Award,
  Clock,
  CheckCircle,
  Hash,
  ArrowRight,
} from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { JSX } from 'react';

interface Certificate {
  name: string;
  issuer: string;
  startDate: string;
  completionDate: string;
  url: string;
  category: string;
  skills: string[];
  hoursToComplete: number;
  level: string;
  certificateId: string;
  isVerified: boolean;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Web Development':
        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Data Science':
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      Programming:
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      Mathematics:
        'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
    };

    return (
      colors[category] ||
      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    );
  };

  // Get level color and icon
  const getLevelInfo = (level: string) => {
    const colors: Record<string, { color: string; icon: JSX.Element }> = {
      Beginner: {
        color:
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        icon: (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        ),
      },
      Intermediate: {
        color:
          'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
        icon: (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
        ),
      },
      Advanced: {
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        icon: (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        ),
      },
    };

    return (
      colors[level] || {
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
        icon: (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        ),
      }
    );
  };

  // Format dates
  const formattedStartDate = format(
    new Date(certificate.startDate),
    'MMM d, yyyy',
  );
  const formattedCompletionDate = format(
    new Date(certificate.completionDate),
    'MMM d, yyyy',
  );

  // Calculate completion time in days
  const completionDays = differenceInDays(
    new Date(certificate.completionDate),
    new Date(certificate.startDate),
  );

  const levelInfo = getLevelInfo(certificate.level);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-white dark:bg-gray-800 m-2 rounded-md border">
            <img
              src='/free_code_camp_logo.jpeg'
            
              alt={certificate.issuer}
              className="size-16 rounded-md"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg leading-tight">
                {certificate.name}
              </h3>
              {certificate.isVerified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Verified Certificate</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {certificate.issuer}
            </p>

            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedStartDate}</span>
              <ArrowRight className="w-3 h-3" />
              <span>{formattedCompletionDate}</span>
              <span className="text-xs">({completionDays} days)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={getCategoryColor(certificate.category)}>
            {certificate.category}
          </Badge>

          <Badge className={levelInfo.color} variant="outline">
            <span className="flex items-center gap-1">
              {levelInfo.icon}
              {certificate.level}
            </span>
          </Badge>

          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {certificate.hoursToComplete} hours
          </Badge>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Hash className="w-3 h-3" />
                  ID: {certificate.certificateId.substring(0, 8)}...
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Certificate ID: {certificate.certificateId}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mb-4">
          <div className="text-xs text-muted-foreground mb-1">
            Completion Progress
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full w-full"></div>
          </div>
        </div>

        <div>
          <div className="text-xs text-muted-foreground mb-1">
            Skills Acquired
          </div>
          <div className="flex flex-wrap gap-1.5">
            {certificate.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 border-t">
        <Button asChild className="w-full">
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" />
            View Certificate
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
