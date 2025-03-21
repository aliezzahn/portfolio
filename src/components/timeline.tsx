import { TimelineItem } from './timeline-item';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
  responsibilities: string[];
  companyUrl?: string;
  logo?: string;
  industry?: string;
}

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  // Calculate total years of experience
  const calculateTotalYears = () => {
    let totalYears = 0;

    experiences.forEach((job) => {
      const [start, end] = job.period.split(' - ');
      const startDate = new Date(start);
      const endDate =
        end.toLowerCase() === 'present' ? new Date() : new Date(end);
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
      totalYears += diffYears;
    });

    return totalYears;
  };

  // Get all unique tech stack items
  const getAllTechStack = () => {
    const allTech = new Set<string>();
    experiences.forEach((exp) => {
      exp.techStack.forEach((tech) => allTech.add(tech));
    });
    return Array.from(allTech);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Work Experience</div>
            <div className="text-2xl font-bold">
              {experiences.length} Positions
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">
              Years of Experience
            </div>
            <div className="text-2xl font-bold">
              {calculateTotalYears()}+ Years
            </div>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-4 flex items-center gap-4">
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600 dark:text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Technologies</div>
            <div className="text-2xl font-bold">
              {getAllTechStack().length}+ Skills
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
