import { EducationCard } from '@/components/education-card';
import educationData from '@/data/educations.json';

export default function Educations() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Education</h1>
      <div className="space-y-8">
        {educationData.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </div>
  );
}
