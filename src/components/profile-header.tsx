import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  avatarUrl: string;
  bio: string;
  location: string;
  hireable: string;
}

export function ProfileHeader({
  name,
  avatarUrl,
  bio,
  location,
  hireable,
}: ProfileHeaderProps) {
  // Get initials from name for avatar fallback
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
      <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold">{name}</h1>

        <p className="text-lg text-muted-foreground mt-2">{bio}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}

          {hireable && (
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <Badge variant={hireable === 'At Work' ? 'secondary' : 'outline'}>
                {hireable}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
