import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import publicationsData from '@/data/publications.json';
import PublicationSection from '@/components/publication-section';

// Main Publications Page
export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter publications based on search query
  const filterPublications = (publications) => {
    if (!searchQuery.trim()) return publications;

    const query = searchQuery.toLowerCase();
    return publications.filter(
      (pub) =>
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        (pub.journal && pub.journal.toLowerCase().includes(query)) ||
        (pub.event && pub.event.toLowerCase().includes(query)),
    );
  };

  const filteredIsiJournals = filterPublications(publicationsData.isiJournals);
  const filteredIscJournals = filterPublications(publicationsData.iscJournals);
  const filteredConferences = filterPublications(publicationsData.conferences);

  const totalResults =
    filteredIsiJournals.length +
    filteredIscJournals.length +
    filteredConferences.length;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Academic Publications</h1>
        <p className="text-gray-600 mb-8">
          Browse my research contributions to journals and conferences in the
          field.
        </p>

        <div className="relative mb-2">
          <input
            type="text"
            placeholder="Search publications by title, author, or journal..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>

        {searchQuery && (
          <p className="text-sm text-gray-500 text-left">
            Found {totalResults} results for "{searchQuery}"
          </p>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 w-full h-full grid grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="all" className="px-6">
            All Publications
          </TabsTrigger>
          <TabsTrigger value="isi" className="px-6">
            ISI Journals
          </TabsTrigger>
          <TabsTrigger value="isc" className="px-6">
            ISC Journals
          </TabsTrigger>
          <TabsTrigger value="conf" className="px-6">
            Conferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-16">
          {filteredIsiJournals.length > 0 && (
            <PublicationSection
              title="ISI Indexed Journals"
              publications={filteredIsiJournals}
              type="journal"
            />
          )}

          {filteredIscJournals.length > 0 && (
            <PublicationSection
              title="ISC Indexed Journals"
              publications={filteredIscJournals}
              type="journal"
            />
          )}

          {filteredConferences.length > 0 && (
            <PublicationSection
              title="Conference Papers"
              publications={filteredConferences}
              type="conference"
            />
          )}

          {totalResults === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No publications found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="isi">
          {filteredIsiJournals.length > 0 ? (
            <PublicationSection
              title="ISI Indexed Journals"
              publications={filteredIsiJournals}
              type="journal"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No ISI journal publications found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="isc">
          {filteredIscJournals.length > 0 ? (
            <PublicationSection
              title="ISC Indexed Journals"
              publications={filteredIscJournals}
              type="journal"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No ISC journal publications found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="conf">
          {filteredConferences.length > 0 ? (
            <PublicationSection
              title="Conference Papers"
              publications={filteredConferences}
              type="conference"
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No conference publications found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
