import { ChevronRight, Edit, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator.tsx';

interface SkillsSectionProps {
  skills: Array<{
    name: string;
    level: string;
    from: string;
    logo: string;
    keywords: string[];
  }>;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Skills</h2>
        <div className="flex gap-2">
          <button>
            <Plus className="w-4 h-4 text-gray-400" />
          </button>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {skills.slice(0, 5).map((skill, index) => (
          <>
            <div key={index}>
              <h3 className="font-medium">{skill.name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="inline-block size-6 bg-gray-700 rounded-sm mr-1"
                />
                {skill.from}
              </p>
            </div>
            <Separator className="bg-gray-400 border-b-[1px] border-[#38434f]" />
          </>
        ))}
      </div>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all {skills.length} skills
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
