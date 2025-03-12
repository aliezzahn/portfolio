import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AbilitiesSectionProps {
  title: string;
  abilities: string[];
}

export function AbilitiesSection({ title, abilities }: AbilitiesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-1">
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
