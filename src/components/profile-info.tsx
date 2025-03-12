import { format } from 'date-fns';
import { Mail, Phone, Building2, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ProfileInfoProps {
  email?: string;
  phone?: string;
  company?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export function ProfileInfo({
  email,
  phone,
  company,
  createdAt,
  updatedAt,
}: ProfileInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {email && (
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="font-medium">Email</div>
              <a
                href={`mailto:${email}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                {email}
              </a>
            </div>
          </div>
        )}

        {phone && (
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="font-medium">Phone</div>
              <a
                href={`tel:${phone}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                {phone}
              </a>
            </div>
          </div>
        )}

        {company && company.length > 0 && (
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <div className="font-medium">Companies</div>
              <div className="text-sm text-muted-foreground space-y-1">
                {company.map((comp, index) => (
                  <a
                    key={index}
                    href={comp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    {comp.replace('https://github.com/', '')}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {(createdAt || updatedAt) && (
          <>
            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                {createdAt && (
                  <div>
                    <div className="font-medium">Joined</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(createdAt), 'MMMM d, yyyy')}
                    </div>
                  </div>
                )}

                {updatedAt && (
                  <div className="mt-2">
                    <div className="font-medium">Last Updated</div>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(updatedAt), 'MMMM d, yyyy')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
