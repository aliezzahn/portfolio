import { JournalPublicationCard } from './journal-publication-card';
import { ConferencePublicationCard } from './conference-publication-card';

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

interface ConferencePublication {
  authors: string;
  title: string;
  event: string;
  location: string;
  date: string;
  doi?: string;
  citations?: number;
}

type Publication = JournalPublication | ConferencePublication;

interface PublicationSectionProps {
  title: string;
  publications: Publication[];
  type: 'journal' | 'conference';
  count?: number;
}

export function PublicationSection({
  title,
  publications,
  type,
  count,
}: PublicationSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          {title}
          <span className="text-sm font-normal bg-muted rounded-full px-2 py-0.5">
            {count || publications.length}
          </span>
        </h2>
      </div>

      <div className="space-y-4">
        {type === 'journal'
          ? publications.map((publication, index) => (
              <JournalPublicationCard
                key={index}
                publication={publication as JournalPublication}
              />
            ))
          : publications.map((publication, index) => (
              <ConferencePublicationCard
                key={index}
                publication={publication as ConferencePublication}
              />
            ))}
      </div>
    </section>
  );
}
