import { AbilitiesSection } from '@/components/abilities-section';
import { LanguagesSection } from '@/components/languages-section';
import { SkillsSection } from '@/components/skills-section';
import expertiseData from '@/data/expertise.json';

export default function Experties() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Expertise</h1>
      <div className="space-y-12">
        <SkillsSection skills={expertiseData.skills} />
        <LanguagesSection languages={expertiseData.languages} />
        <AbilitiesSection
          title="Academic Abilities"
          abilities={expertiseData.academicAbilities}
        />
        <AbilitiesSection
          title="Practical Abilities"
          abilities={expertiseData.practicalAbilities}
        />
      </div>
    </div>
  );
}
