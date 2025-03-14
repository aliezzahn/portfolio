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
  FileText,
  Calendar,
  Copy,
  Download,
  ExternalLink,
  BookOpen,
  Award,
  Hash,
} from 'lucide-react';
import { useState } from 'react';

interface JournalPublication {
  authors: string;
  title: string;
  journal: string;
  volume: string;
  issue?: string;
  year: string;
  pages?: string;
  identifier?: string;
  doi?: string;
  impactFactor?: number;
  citations?: number;
}

interface JournalPublicationCardProps {
  publication: JournalPublication;
}

export function JournalPublicationCard({
  publication,
}: JournalPublicationCardProps) {
  const [copied, setCopied] = useState(false);

  // Generate random data for demo purposes
  const doi =
    publication.doi ||
    `10.1000/journal.${publication.journal.toLowerCase().replace(/\s+/g, '')}.${publication.year}.${Math.floor(Math.random() * 1000)}`;
  const impactFactor =
    publication.impactFactor || (Math.random() * 5 + 1).toFixed(2);
  const citations = publication.citations || Math.floor(Math.random() * 50);

  const citationText = `${publication.authors}. (${publication.year}). ${publication.title}. ${publication.journal}, ${publication.volume}${publication.issue ? `(${publication.issue})` : ''}${publication.pages ? `, ${publication.pages}` : ''}. https://doi.org/${doi}`;

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
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="space-y-4 w-full">
            <div>
              <h3 className="font-semibold text-lg leading-tight mb-2 text-blue-600 dark:text-blue-400">
                {publication.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-2">
                {publication.authors}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="flex items-center gap-1 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800"
                >
                  <BookOpen className="h-3 w-3" />
                  {publication.journal}
                </Badge>

                <Badge variant="outline" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {publication.year}
                </Badge>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 cursor-help"
                      >
                        <Award className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                        IF: {impactFactor}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Impact Factor: {impactFactor}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Badge
                  variant="outline"
                  className="flex items-center gap-1 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                >
                  <Hash className="h-3 w-3" />
                  {citations} citations
                </Badge>
              </div>

              <div className="text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium">{publication.journal}</span>,
                  {publication.volume && (
                    <span> vol. {publication.volume}</span>
                  )}
                  {publication.issue && <span>, no. {publication.issue}</span>}
                  {publication.pages && <span>, pp. {publication.pages}</span>}
                  {publication.identifier && (
                    <span>, {publication.identifier}</span>
                  )}
                </p>
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
