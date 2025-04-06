import { Edit, Plus } from 'lucide-react';

interface LanguagesSectionProps {
  languages: Array<{
    fluency: string;
    language: string;
  }>;
}

export default function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Languages</h2>
        <div className="flex gap-2">
          <button>
            <Plus className="w-4 h-4 text-gray-400" />
          </button>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index}>
            <h3 className="font-medium">{lang.language}</h3>
            <p className="text-gray-400 text-sm">{lang.fluency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
