import { PublicationSection } from '@/components/publication-section';
import publicationsData from '@/data/publications.json';

export default function Publications() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Publications</h1>
      <div className="space-y-12">
        <PublicationSection
          title="ISI Indexed Journals"
          publications={publicationsData.isiJournals}
          type="journal"
        />
        <PublicationSection
          title="ISC Indexed Journals"
          publications={publicationsData.iscJournals}
          type="journal"
        />
        <PublicationSection
          title="Conference Papers"
          publications={publicationsData.conferences}
          type="conference"
        />
      </div>
    </div>
  );
}
