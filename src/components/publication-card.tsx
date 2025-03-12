import { Card, CardContent } from '@/components/ui/card';
import { Calendar, FileText, MapPin } from 'lucide-react';

interface JournalPublication {
  authors: string;
  title: string;
  journal: string;
  volume: string;
  issue?: string;
  year: string;
  pages?: string;
  identifier?: string;
}

interface ConferencePublication {
  authors: string;
  title: string;
  event: string;
  location: string;
  date: string;
}

type Publication = JournalPublication | ConferencePublication;

interface PublicationCardProps {
  publication: Publication;
  type: 'journal' | 'conference';
}

export function PublicationCard({ publication, type }: PublicationCardProps) {
  const isJournal = type === 'journal';
  const journalPub = publication as JournalPublication;
  const conferencePub = publication as ConferencePublication;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <div className="hidden sm:flex items-start pt-1">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">{publication.title}</h3>
            <p className="text-sm text-muted-foreground">
              {publication.authors}
            </p>

            {isJournal ? (
              <div className="text-sm">
                <p>
                  <span className="font-medium">{journalPub.journal}</span>,
                  {journalPub.volume && <span> vol. {journalPub.volume}</span>}
                  {journalPub.issue && <span>, no. {journalPub.issue}</span>}
                  {journalPub.pages && <span>, pp. {journalPub.pages}</span>}
                  {journalPub.identifier && (
                    <span>, {journalPub.identifier}</span>
                  )}
                  {journalPub.year && <span>, {journalPub.year}</span>}
                </p>
              </div>
            ) : (
              <div className="text-sm space-y-1">
                <p className="font-medium">{conferencePub.event}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                  {conferencePub.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {conferencePub.location}
                    </span>
                  )}
                  {conferencePub.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {conferencePub.date}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
