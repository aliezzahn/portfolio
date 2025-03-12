import { PublicationCard } from './publication-card';

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

interface PublicationSectionProps {
  title: string;
  publications: Publication[];
  type: 'journal' | 'conference';
}

export function PublicationSection({
  title,
  publications,
  type,
}: PublicationSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} type={type} />
        ))}
      </div>
    </section>
  );
}
