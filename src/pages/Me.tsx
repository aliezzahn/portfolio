import { ProfileHeader } from '@/components/profile-header';
import { ProfileInfo } from '@/components/profile-info';
import { ProfileSocial } from '@/components/profile-social';
import profileData from '@/data/aliezzahn.json';

export default function Me() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader
          name={profileData.name}
          avatarUrl={profileData.avatar_url}
          bio={profileData.bio}
          location={profileData.location}
          hireable={profileData.hireable}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <ProfileSocial
              github={profileData.github}
              linkedin={profileData.linkedin}
              researchgate={profileData.researchgate}
              instagram={profileData.instagram}
              blog={profileData.blog}
            />
          </div>

          <div className="md:col-span-2">
            <ProfileInfo
              email={profileData.email}
              phone={profileData.phone}
              company={profileData.company}
              createdAt={profileData.created_at}
              updatedAt={profileData.updated_at}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
