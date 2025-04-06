import { Edit } from 'lucide-react';

export default function AboutSection({
  basics,
}: {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    url: string;
    summary: string;
    location: {
      countryCode: string;
      address: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
}) {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">About</h2>
        <button>
          <Edit className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <p className="text-sm text-gray-300">{basics.summary}</p>
    </div>
  );
}
