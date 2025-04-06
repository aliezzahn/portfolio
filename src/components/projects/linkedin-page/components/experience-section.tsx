import { Award, Edit, Plus } from 'lucide-react';

interface ExperienceSectionProps {
  work: Array<{
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    highlights: string[];
    summary: string | null;
    url: string;
    location: string | null;
  }>;
}

export default function ExperienceSection({ work }: ExperienceSectionProps) {
  // Function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  // Function to calculate duration
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = '';
    if (years > 0) {
      duration += `${years} yr${years > 1 ? 's' : ''} `;
    }
    if (remainingMonths > 0 || years === 0) {
      duration += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
    }

    return duration;
  };

  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Experience</h2>
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
        {work.map((job, index) => (
          <div key={index} className="flex gap-3">
            <img
              alt={job.name}
              src={index === 0 ? '/tobtc_logo.jpeg' : '/niroo_logo.jpeg'}
              key={index}
              className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center"
            />

            <div className="flex-1">
              <h3 className="font-medium">{job.position}</h3>
              <p className="text-gray-300 text-sm">{job.name} • Full-time</p>

              <div className="text-gray-400 text-sm">
                {formatDate(job.startDate)} - {formatDate(job.endDate)} •{' '}
                {calculateDuration(job.startDate, job.endDate)}
              </div>

              {job.location && (
                <div className="text-gray-400 text-sm">{job.location}</div>
              )}

              {index === 0 && (
                <div className="mt-2 inline-flex items-center gap-1 bg-[#38434f] rounded-full px-3 py-1 text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  React.js, React.js and 10 skills
                </div>
              )}

              {index === 1 && (
                <div className="mt-2 inline-flex items-center gap-1 bg-[#38434f] rounded-full px-3 py-1 text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  Machine Learning, Automation and 24 skills
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
