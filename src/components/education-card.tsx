import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, GraduationCap, Calendar } from 'lucide-react';

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
        <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary-foreground p-6 flex items-center justify-center">
          <GraduationCap className="h-24 w-24 text-background" />
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
