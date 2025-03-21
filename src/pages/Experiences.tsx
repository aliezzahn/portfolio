import { Timeline } from '@/components/timeline';
import { Button } from '@/components/ui/button';
import { Download, Search } from 'lucide-react';
import experiencesData from '@/data/experiences.json';

// Add company URLs and industries to the data
const enhancedExperiencesData = experiencesData.map((exp) => {
  const companyUrls: Record<string, string> = {
    'Niroo Research Institute': 'https://www.nri.ac.ir/en/',
    'Laqira Protocol': 'https://laqira.io/',
  };

  const industries: Record<string, string> = {
    'Niroo Research Institute': 'Energy & Research',
    'Laqira Protocol': 'Blockchain & Web3',
    '': 'Various Industries',
  };

  return {
    ...exp,
    companyUrl: companyUrls[exp.company] || undefined,
    industry: industries[exp.company] || undefined,
  };
});

export default function Experiences() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Professional Experience</h1>
          <p className="text-muted-foreground">
            My career journey and professional achievements
          </p>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by skill or role..."
              className="px-4 py-2 pr-10 border rounded-md bg-background"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>

      <Timeline experiences={enhancedExperiencesData} />
    </div>
  );
}
