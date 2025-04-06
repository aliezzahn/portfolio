import { Edit, Plus } from 'lucide-react';

interface EducationSectionProps {
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    logo: string;
    courses: string[];
  }>;
}

export default function EducationSection({ education }: EducationSectionProps) {
  // Function to format date
  // Format date function
  const formatDate = (dateString: string, showMonth = true) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    if (showMonth) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    }
    return date.getFullYear();
  };

  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Education</h2>
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
        {education.map((edu, index) => (
          <div key={index} className="flex gap-3">
            <img
              alt={edu.institution}
              src={edu.logo}
              className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center"
            />

            <div>
              <h3 className="font-medium">{edu.institution}</h3>
              <p className="text-gray-300 text-sm">
                {edu.studyType}, {edu.area}
              </p>

              <div className="text-gray-400 text-sm">
                {formatDate(edu.startDate, false)} -{' '}
                {formatDate(edu.endDate, false)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
