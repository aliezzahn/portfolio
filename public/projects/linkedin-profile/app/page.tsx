import { Eye } from 'lucide-react';
import linkedinData from '@/data/linkedin.json';
import ProfileNavbar from '@/components/projects/linkedin-profile/profile-navbar.tsx';
import ProfileHeader from '@/components/projects/linkedin-profile/profile-header.tsx';
import AboutSection from '@/components/projects/linkedin-profile/about-section.tsx';
import ExperienceSection from '@/components/projects/linkedin-profile/experience-section.tsx';
import EducationSection from '@/components/projects/linkedin-profile/education-section.tsx';
import CertificationsSection from '@/components/projects/linkedin-profile/certifications-section.tsx';
import SkillsSection from '@/components/projects/linkedin-profile/skills-section.tsx';
import PublicationsSection from '@/components/projects/linkedin-profile/publications-section.tsx';
import SidebarSection from '@/components/projects/linkedin-profile/sidebar-section.tsx';
import LanguagesSection from '@/components/projects/linkedin-profile/languages-section.tsx';
import InterestsSection from '@/components/projects/linkedin-profile/interests-section.tsx';
import ActivitySection from '@/components/projects/linkedin-profile/activity-section.tsx';
import AnalyticsSection from '@/components/projects/linkedin-profile/analytics-section.tsx';

export default function LinkedInProfile() {
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
    <div className="bg-[#000000] text-white min-h-screen">
      {/* Navbar */}
      <ProfileNavbar basics={basics} />

      <main className="mt-6 mb-16 max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
