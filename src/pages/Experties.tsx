import { useState } from 'react';
import { AbilitiesSection } from '@/components/abilities-section';
import { LanguagesSection } from '@/components/languages-section';
import { SkillsSection } from '@/components/skills-section';
import expertiseData from '@/data/expertise.json';
import {
  Brain,
  GraduationCap,
  Languages,
  Briefcase,
  Search,
  ChevronRight,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Expertise() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [view, setView] = useState('cards');

  // Filter skills based on search query
  const filteredSkills = expertiseData.skills.filter((skill) =>
    skill.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Filter languages based on search query
  const filteredLanguages = expertiseData.languages.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Filter abilities based on search query
  const filteredAcademicAbilities = expertiseData.academicAbilities.filter(
    (ability) => ability.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredPracticalAbilities = expertiseData.practicalAbilities.filter(
    (ability) => ability.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Get level for progress bars
  const getProgressValue = (level) => {
    switch (level) {
      case 'Native':
        return 100;
      case 'Fluent':
        return 90;
      case 'Advanced':
        return 80;
      case 'Intermediate':
        return 60;
      case 'Basic':
        return 40;
      case 'Beginner':
        return 20;
      default:
        return 50;
    }
  };

  // Get color based on level
  const getLevelColor = (level) => {
    switch (level) {
      case 'Native':
      case 'Fluent':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Basic':
      case 'Beginner':
        return 'bg-orange-400';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">My Expertise</h1>
          </div>
          <p className="text-muted-foreground mt-2">
            Comprehensive overview of my professional skills and competencies
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={view} onValueChange={setView}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cards">Card View</SelectItem>
              <SelectItem value="compact">Compact View</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full h-full mb-6 grid grid-cols-1 md:grid-cols-5">
          <TabsTrigger value="all" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span>All</span>
          </TabsTrigger>
          <TabsTrigger value="skills" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Skills</span>
          </TabsTrigger>
          <TabsTrigger value="languages" className="flex items-center gap-2">
            <Languages className="h-4 w-4" />
            <span>Languages</span>
          </TabsTrigger>
          <TabsTrigger value="academic" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic</span>
          </TabsTrigger>
          <TabsTrigger value="practical" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Practical</span>
          </TabsTrigger>
        </TabsList>

        <div className="space-y-8">
          <TabsContent value="all" className="space-y-8 mt-0">
            {filteredSkills.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
                <SkillsSection skills={filteredSkills} view={view} />
              </div>
            )}

            {filteredLanguages.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Languages</h2>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
                <LanguagesSection
                  languages={filteredLanguages}
                  view={view}
                  getProgressValue={getProgressValue}
                  getLevelColor={getLevelColor}
                />
              </div>
            )}

            {filteredAcademicAbilities.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Academic Abilities</h2>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
                <AbilitiesSection
                  title="Academic Abilities"
                  abilities={filteredAcademicAbilities}
                  view={view}
                  icon={<GraduationCap className="h-4 w-4 text-primary" />}
                />
              </div>
            )}

            {filteredPracticalAbilities.length > 0 && (
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Practical Abilities</h2>
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
                <AbilitiesSection
                  title="Practical Abilities"
                  abilities={filteredPracticalAbilities}
                  view={view}
                  icon={<Briefcase className="h-4 w-4 text-primary" />}
                />
              </div>
            )}
          </TabsContent>

          <TabsContent value="skills" className="mt-0">
            {filteredSkills.length > 0 ? (
              <SkillsSection skills={filteredSkills} view={view} />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No skills found matching your search
              </div>
            )}
          </TabsContent>

          <TabsContent value="languages" className="mt-0">
            {filteredLanguages.length > 0 ? (
              <LanguagesSection
                languages={filteredLanguages}
                view={view}
                getProgressValue={getProgressValue}
                getLevelColor={getLevelColor}
              />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No languages found matching your search
              </div>
            )}
          </TabsContent>

          <TabsContent value="academic" className="mt-0">
            {filteredAcademicAbilities.length > 0 ? (
              <AbilitiesSection
                title="Academic Abilities"
                abilities={filteredAcademicAbilities}
                view={view}
                icon={<GraduationCap className="h-4 w-4 text-primary" />}
              />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No academic abilities found matching your search
              </div>
            )}
          </TabsContent>

          <TabsContent value="practical" className="mt-0">
            {filteredPracticalAbilities.length > 0 ? (
              <AbilitiesSection
                title="Practical Abilities"
                abilities={filteredPracticalAbilities}
                view={view}
                icon={<Briefcase className="h-4 w-4 text-primary" />}
              />
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No practical abilities found matching your search
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
