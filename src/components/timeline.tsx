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
}

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative border-l border-gray-200 dark:border-gray-700">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
