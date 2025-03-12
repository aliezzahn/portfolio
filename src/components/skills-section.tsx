import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsSectionProps {
  skills: string[];
  view?: string;
}

export function SkillsSection({ skills, view = 'cards' }: SkillsSectionProps) {
  if (view === 'compact') {
    return (
      <div className="bg-card rounded-lg border p-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-3 py-1 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-3 py-1.5">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
