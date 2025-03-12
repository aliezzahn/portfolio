import { Timeline } from '@/components/timeline';
import experiencesData from '@/data/experiences.json';

export default function Experiences() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Professional Experience</h1>
      <Timeline experiences={experiencesData} />
    </div>
  );
}
