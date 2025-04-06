import { Codepen, Eye, MonitorPlay } from 'lucide-react';
import linkedinData from '@/data/linkedin.json';
import ProfileNavbar from '@/components/projects/linkedin-profile/components/profile-navbar.tsx';
import ProfileHeader from '@/components/projects/linkedin-profile/components/profile-header.tsx';
import AnalyticsSection from '@/components/projects/linkedin-profile/components/analytics-section.tsx';
import AboutSection from '@/components/projects/linkedin-profile/components/about-section.tsx';
import ActivitySection from '@/components/projects/linkedin-profile/components/activity-section.tsx';
import ExperienceSection from '@/components/projects/linkedin-profile/components/experience-section.tsx';
import EducationSection from '@/components/projects/linkedin-profile/components/education-section.tsx';
import CertificationsSection from '@/components/projects/linkedin-profile/components/certifications-section.tsx';
import SkillsSection from '@/components/projects/linkedin-profile/components/skills-section.tsx';
import PublicationsSection from '@/components/projects/linkedin-profile/components/publications-section.tsx';
import LanguagesSection from '@/components/projects/linkedin-profile/components/languages-section.tsx';
import InterestsSection from '@/components/projects/linkedin-profile/components/interests-section.tsx';
import SidebarSection from '@/components/projects/linkedin-profile/components/sidebar-section.tsx';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar.tsx';
import profileData from '@/data/aliezzahn.json';
import { Badge } from '@/components/ui/badge.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { FileExplorer } from '@/components/showcases/file-explorer.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';

function CodebaseSection() {
  return (
    <main className="relative container mx-auto p-4 max-w-5xl">
      <h1 className="flex items-center gap-2 text-3xl font-semibold">
        <Avatar className="size-10 border-[1px] border-foreground/50 shadow-lg">
          <AvatarImage src={profileData.avatar_url} alt={profileData.name} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        linkedin-profile<Badge>Public</Badge>
      </h1>
      <Separator className="mt-2 mb-4" />
      <div className="overflow-hidden">
        <FileExplorer selectedProject="linkedin-profile" />
      </div>
    </main>
  );
}

export function DemoSection() {
  const {
    basics,
    work,
    education,
    certificates,
    publications,
    skills,
    languages,
  } = linkedinData;
  return (
    <div className="relative bg-[#000000] text-white h-full">
      {/* Navbar */}
      <ProfileNavbar basics={basics} />

      <main className="mt-4 mb-16 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          {/* Profile Header */}
          <ProfileHeader basics={basics} />

          {/* Suggested for you */}
          <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
            <h2 className="font-bold mb-2">Suggested for you</h2>
            <div className="flex items-center text-xs text-gray-400">
              <Eye className="w-3 h-3 mr-1" />
              <span>Private to you</span>
            </div>
          </div>

          {/* Analytics */}
          <AnalyticsSection />

          {/* About */}
          <AboutSection basics={basics} />

          {/* Activity */}
          <ActivitySection />

          {/* Experience */}
          <ExperienceSection work={work} />

          {/* Education */}
          <EducationSection education={education} />

          {/* Licenses & certifications */}
          <CertificationsSection certificates={certificates} />

          {/* Skills */}
          <SkillsSection skills={skills} />

          {/* Publications */}
          <PublicationsSection publications={publications} />

          {/* Languages */}
          <LanguagesSection languages={languages} />
          {/* Interests */}
          <InterestsSection />
        </div>

        <SidebarSection basics={basics} />
      </main>
    </div>
  );
}

const tabs = [
  {
    name: 'Codebase',
    value: 'codebase',
    content: <CodebaseSection />,
    icon: <Codepen />,
  },
  {
    name: 'Demo',
    value: 'demo',
    content: <DemoSection />,
    icon: <MonitorPlay />,
  },
];

function TabsIconDemo() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      <div className="sticky top-[4rem] mb-2 z-50 flex w-full justify-center items-center gap-2">
        <TabsList className="p-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-2.5 sm:px-3"
            >
              <code className="flex items-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
                {tab.icon} {tab.name}
              </code>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabs.map((tab) => (
        <TabsContent
          className="mx-auto min-w-full"
          key={tab.value}
          value={tab.value}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default function LinkedInProfile() {
  return <TabsIconDemo />;
}
