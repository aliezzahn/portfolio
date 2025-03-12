import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Language {
  name: string;
  level: string;
}

interface LanguagesSectionProps {
  languages: Language[];
  view?: string;
  getProgressValue?: (level: string) => number;
  getLevelColor?: (level: string) => string;
}

export function LanguagesSection({
  languages,
  view = 'cards',
  getProgressValue = () => 50,
  getLevelColor = () => 'bg-primary',
}: LanguagesSectionProps) {
  if (view === 'compact') {
    return (
      <div className="bg-card rounded-lg border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language) => (
            <div key={language.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{language.name}</span>
                <span className="text-sm text-muted-foreground">
                  {language.level}
                </span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${getLevelColor(language.level)}`}
                  style={{ width: `${getProgressValue(language.level)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((language) => (
            <div key={language.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{language.name}</span>
                <span className="text-sm text-muted-foreground">
                  {language.level}
                </span>
              </div>
              <Progress
                value={getProgressValue(language.level)}
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
