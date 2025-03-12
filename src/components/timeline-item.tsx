import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
  responsibilities: string[];
}

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className={`mb-10 ml-6 ${isLast ? '' : 'pb-10'}`}>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
        <Briefcase className="w-3 h-3 text-background" />
      </span>
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              {experience.company && (
                <p className="text-sm text-muted-foreground">
                  {experience.company}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start sm:items-end text-sm text-muted-foreground">
              {experience.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {experience.period}
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Achievements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Responsibilities</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
