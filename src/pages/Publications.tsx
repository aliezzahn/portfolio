import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Award,
  BookOpen,
  Presentation,
  Search,
  SearchIcon,
} from 'lucide-react';
import publicationsData from '@/data/publications.json';
import { PublicationSection } from '@/components/publication-section';

// Main Publications Page
export default function Publications() {
  // Count total publications
  const totalPublications =
    publicationsData.isiJournals.length +
    publicationsData.iscJournals.length +
    publicationsData.conferences.length;

  // Calculate h-index and total citations (simulated)
  const hIndex = 4;
  const totalCitations = 87;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Publications</h1>
          <p className="text-muted-foreground">
            A collection of {totalPublications} academic publications in
            journals and conferences
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search publications..."
            className="px-4 py-2 pr-10 border rounded-md bg-background"
          />
          <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">
              Journal Articles
            </div>
            <div className="text-2xl font-bold">
              {publicationsData.isiJournals.length +
                publicationsData.iscJournals.length}
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
            <Presentation className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">
              Conference Papers
            </div>
            <div className="text-2xl font-bold">
              {publicationsData.conferences.length}
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
            <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Citations</div>
            <div className="text-2xl font-bold">
              {totalCitations}{' '}
              <span className="text-sm font-normal">(h-index: {hIndex})</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid grid-cols-3 max-w-md">
          <TabsTrigger value="all">All Publications</TabsTrigger>
          <TabsTrigger value="journals" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Journals
          </TabsTrigger>
          <TabsTrigger value="conferences" className="flex items-center gap-1">
            <Presentation className="h-4 w-4" />
            Conferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
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
        </TabsContent>

        <TabsContent value="journals" className="space-y-12">
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
        </TabsContent>

        <TabsContent value="conferences">
          <PublicationSection
            title="Conference Papers"
            publications={publicationsData.conferences}
            type="conference"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
