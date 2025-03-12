import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

interface Education {
  id: string;
  header: string;
  content: string;
  date: string;
  site: string;
  wikipedia: string;
  image: string;
  logo: string;
}

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <div className="relative h-48 md:h-full w-full">
            <img
              src={education.image || '/placeholder.svg?height=300&width=400'}
              alt={`${education.content} campus`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 rounded-full p-1 shadow-md">
              <img
                src={education.logo || '/placeholder.svg?height=40&width=40'}
                alt={`${education.content} logo`}
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <CardTitle className="text-xl">{education.header}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{education.content}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>{education.date}</span>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={education.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  University Website
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={education.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Wikipedia
                </a>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
