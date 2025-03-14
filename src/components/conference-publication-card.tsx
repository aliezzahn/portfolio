'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Calendar,
  Copy,
  Download,
  ExternalLink,
  MapPin,
  Presentation,
  Hash,
} from 'lucide-react';
import { useState } from 'react';

interface ConferencePublication {
  authors: string;
  title: string;
  event: string;
  location: string;
  date: string;
  doi?: string;
  citations?: number;
}

interface ConferencePublicationCardProps {
  publication: ConferencePublication;
}

export function ConferencePublicationCard({
  publication,
}: ConferencePublicationCardProps) {
  const [copied, setCopied] = useState(false);

  // Generate random data for demo purposes
  const doi =
    publication.doi ||
    `10.1109/conf.${publication.event.toLowerCase().replace(/\s+/g, '')}.${publication.date.split(' ')[2]}.${Math.floor(Math.random() * 1000)}`;
  const citations = publication.citations || Math.floor(Math.random() * 20);

  // Extract year from date
  const year = publication.date.split(' ').pop() || '';

  const citationText = `${publication.authors}. (${year}). ${publication.title}. In ${publication.event}, ${publication.location}. https://doi.org/${doi}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="hidden sm:flex items-start pt-1">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
              <Presentation className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>

          <div className="space-y-4 w-full">
            <div>
              <h3 className="font-semibold text-lg leading-tight mb-2 text-purple-600 dark:text-purple-400">
                {publication.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-2">
                {publication.authors}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800"
                >
                  <Presentation className="h-3 w-3" />
                  Conference
                </Badge>

                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {publication.date}
                </Badge>

                <Badge
                  variant="outline"
                  className="flex items-center gap-1 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                >
                  <Hash className="h-3 w-3" />
                  {citations} citations
                </Badge>
              </div>

              <div className="text-sm space-y-1">
                <p className="font-medium">{publication.event}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                  {publication.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {publication.location}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  DOI: {doi}
                </a>
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyCitation}
                      className="flex items-center gap-1"
                    >
                      <Copy className="h-3.5 w-3.5" />
                      {copied ? 'Copied!' : 'Copy Citation'}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-md text-xs">{citationText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Download className="h-3.5 w-3.5" />
                PDF
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
