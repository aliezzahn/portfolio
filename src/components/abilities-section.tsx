import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

interface AbilitiesSectionProps {
  title: string;
  abilities: string[];
  view?: string;
  icon?: ReactNode;
}

export function AbilitiesSection({
  title,
  abilities,
  view = 'cards',
  icon,
}: AbilitiesSectionProps) {
  if (view === 'compact') {
    return (
      <div className="bg-card rounded-lg border p-6">
        <div className="flex flex-wrap gap-2">
          {abilities.map((ability) => (
            <Badge
              key={ability}
              variant="outline"
              className="px-3 py-1 text-sm max-w-full break-all"
            >
              {icon && (
                <span className="mr-2 inline-flex flex-shrink-0">{icon}</span>
              )}
              <span className="break-all">{ability}</span>
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
          {abilities.map((ability) => (
            <li key={ability} className="flex items-start gap-2">
              {icon && <span className="flex-shrink-0 mt-1">{icon}</span>}
              <span>{ability}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
