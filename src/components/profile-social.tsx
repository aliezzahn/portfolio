import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Github, Globe, Instagram, Linkedin } from 'lucide-react';

interface ProfileSocialProps {
  github?: string;
  linkedin?: string;
  researchgate?: string;
  instagram?: string;
  blog?: string;
}

export function ProfileSocial({
  github,
  linkedin,
  researchgate,
  instagram,
  blog,
}: ProfileSocialProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connect</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {github && (
          <Button variant="outline" className="justify-start gap-2" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        )}

        {linkedin && (
          <Button variant="outline" className="justify-start gap-2" asChild>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </Button>
        )}

        {researchgate && (
          <Button variant="outline" className="justify-start gap-2" asChild>
            <a href={researchgate} target="_blank" rel="noopener noreferrer">
              <BookOpen className="h-4 w-4" />
              <span>ResearchGate</span>
            </a>
          </Button>
        )}

        {instagram && (
          <Button variant="outline" className="justify-start gap-2" asChild>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </Button>
        )}

        {blog && (
          <Button variant="outline" className="justify-start gap-2" asChild>
            <a href={blog} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
