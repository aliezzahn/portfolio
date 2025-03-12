import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import profileData from '@/data/aliezzahn.json';
import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export function ContactInfo() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {profileData.email && (
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Email</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
            </div>
          )}

          {profileData.phone && (
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Phone</div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>
          )}

          {profileData.location && (
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-medium">Location</div>
                <div className="text-sm text-muted-foreground">
                  {profileData.location}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t">
          <h3 className="font-medium mb-3">Connect with me</h3>
          <div className="grid grid-cols-2 gap-3">
            {profileData.github && (
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                asChild
              >
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            )}

            {profileData.linkedin && (
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                asChild
              >
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            )}

            {profileData.instagram && (
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                asChild
              >
                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </Button>
            )}

            {profileData.blog && (
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                asChild
              >
                <a
                  href={profileData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  <span>Website</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
