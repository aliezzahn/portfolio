import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Language {
  name: string;
  level: string;
}

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Languages</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {languages.map((language) => (
            <li key={language.name} className="flex justify-between">
              <span>{language.name}</span>
              <span className="text-muted-foreground">{language.level}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
