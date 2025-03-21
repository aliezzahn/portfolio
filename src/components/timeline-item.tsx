'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
  responsibilities: string[];
  companyUrl?: string;
  logo?: string;
  industry?: string;
}

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);

  // Group tech stack by category
  const techCategories = {
    frontend: [
      'React',
      'React Native',
      'Next.js',
      'Vue',
      'Angular',
      'HTML',
      'CSS',
      'SASS',
      'Tailwind',
      'Styled Components',
      'Redux',
      'Redux-Toolkit',
    ],
    backend: [
      'Node.js',
      'Express',
      'Bun',
      'Django',
      'Flask',
      'PHP',
      'Laravel',
      'Ruby',
      'Rails',
    ],
    database: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Redis',
      'Supabase',
      'Firebase',
    ],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java'],
    ai: ['Tensorflow', 'Keras', 'PyTorch', 'OpenAI', 'Numpy', 'Pandas'],
    devops: [
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'Azure',
      'Vercel',
      'Netlify',
    ],
    languages: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C',
      'C++',
      'C#',
      'Ruby',
      'Go',
      'Rust',
      'PHP',
    ],
    tools: [
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'Jira',
      'Trello',
      'Figma',
      'Sketch',
    ],
  };

  const categorizedTech: Record<string, string[]> = {};

  experience.techStack.forEach((tech) => {
    for (const [category, techs] of Object.entries(techCategories)) {
      if (techs.some((t) => tech.includes(t))) {
        if (!categorizedTech[category]) {
          categorizedTech[category] = [];
        }
        categorizedTech[category].push(tech);
        return;
      }
    }

    // If not found in any category, put in "other"
    if (!categorizedTech['other']) {
      categorizedTech['other'] = [];
    }
    categorizedTech['other'].push(tech);
  });

  // Get badge color based on category
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      backend:
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      database:
        'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
      mobile:
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      ai: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      devops:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      languages:
        'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
      tools: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
      other: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    };

    return (
      colors[category] ||
      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    );
  };

  // Format period to extract years
  const years = experience.period.match(/\d{4}/g) || [];
  const duration =
    years.length === 2
      ? `${parseInt(years[1]) - parseInt(years[0])} years`
      : '';

  return (
    <div className={`mb-10 ml-6 ${isLast ? '' : 'pb-10'}`}>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background">
        <Briefcase className="w-3 h-3 text-background" />
      </span>

      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div className="flex items-start gap-3">
              {experience.logo ? (
                <img
                  src={experience.logo || '/placeholder.svg'}
                  alt={`${experience.company} logo`}
                  className="w-12 h-12 rounded-md object-contain bg-white p-1"
                />
              ) : (
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary flex items-center gap-1"
                    >
                      {experience.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span>{experience.company}</span>
                  )}
                </div>

                {experience.industry && (
                  <Badge variant="outline" className="mt-1">
                    {experience.industry}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end text-sm text-muted-foreground">
              <div className="flex items-center gap-1 font-medium">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
                {duration && <span className="text-xs">({duration})</span>}
              </div>

              {experience.location && (
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent
          className={cn('transition-all', expanded ? 'pb-6' : 'pb-2')}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Key Achievements
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {(expanded
                  ? experience.achievements
                  : experience.achievements.slice(0, 3)
                ).map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
              {!expanded && experience.achievements.length > 3 && (
                <div className="text-xs text-muted-foreground mt-1">
                  + {experience.achievements.length - 3} more achievements
                </div>
              )}
            </div>

            {expanded && (
              <>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Responsibilities
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="text-muted-foreground">
                          <span className="text-foreground">
                            {responsibility}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Tech Stack</h4>
                  <div className="space-y-3">
                    {Object.entries(categorizedTech).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <div className="text-xs text-muted-foreground mb-1 capitalize">
                            {category}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className={getCategoryColor(category)}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-muted-foreground hover:text-foreground"
            >
              {expanded ? (
                <span className="flex items-center gap-1">
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <ChevronDown className="w-4 h-4" />
                  Show more
                </span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
