import {
  Badge,
  BookIcon,
  FileTextIcon,
  ExternalLinkIcon,
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PublicationCard({ publication, type }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const isJournal = type === 'journal';

  return (
    <Card className="hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              {isJournal ? (
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-200 bg-background"
                >
                  <BookIcon className="h-3 w-3 mr-1" />
                  Journal
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-emerald-600 border-emerald-200 bg-background"
                >
                  <FileTextIcon className="h-3 w-3 mr-1" />
                  Conference
                </Badge>
              )}
              <span className="text-sm text-gray-500">
                {isJournal ? publication.year : publication.date}
              </span>
            </div>

            <h3 className="font-medium text-lg mb-2">{publication.title}</h3>

            <p className="text-sm text-gray-700 mb-2">
              {publication.authors.split(',').map((author, i, arr) => (
                <span key={i}>
                  <span className="font-medium">{author.trim()}</span>
                  {i < arr.length - 1 && ', '}
                </span>
              ))}
            </p>

            {isJournal ? (
              <div
                className={`text-sm text-gray-600 ${expanded ? '' : 'line-clamp-1'}`}
              >
                <span className="italic">{publication.journal}</span>,
                {publication.volume && ` Vol. ${publication.volume}`}
                {publication.issue && `, Issue ${publication.issue}`}
                {publication.pages && `, pp. ${publication.pages}`}
              </div>
            ) : (
              <div
                className={`text-sm text-gray-600 ${expanded ? '' : 'line-clamp-1'}`}
              >
                <span className="italic">{publication.event}</span>,
                {publication.location}
              </div>
            )}

            {expanded && isJournal && publication.identifier && (
              <div className="mt-4 p-3 bg-foreground text-background rounded-md text-sm">
                <p className="font-medium mb-1">DOI/Identifier:</p>
                <p className="break-all">{publication.identifier}</p>
              </div>
            )}

            {expanded && (
              <div className="mt-4 flex flex-wrap gap-2">
                <Button size="sm" variant="outline" className="h-8">
                  <ExternalLinkIcon className="h-3.5 w-3.5 mr-1" />
                  View Publication
                </Button>
                {isJournal && (
                  <Button size="sm" variant="outline" className="h-8">
                    <SearchIcon className="h-3.5 w-3.5 mr-1" />
                    Google Scholar
                  </Button>
                )}
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-8"
            onClick={toggleExpand}
          >
            {expanded ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
