import { ExternalLink, Edit, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

interface PublicationsSectionProps {
  publications: Array<{
    name: string;
    publisher: string;
    releaseDate: string;
    summary: string;
    url: string;
  }>;
}

export default function PublicationsSection({
  publications,
}: PublicationsSectionProps) {
  // Function to format date
  // Function to format date
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
        <h2 className="font-bold">Publications</h2>
        <div className="flex gap-2">
          <button>
            <Plus className="w-4 h-4 text-gray-400" />
          </button>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {publications.slice(0, 2).map((pub, index) => (
          <div key={index}>
            <h3 className="font-medium">{pub.name}</h3>
            <p className="text-gray-300 text-sm">
              {pub.publisher} • {formatDate(pub.releaseDate)}
            </p>

            <button className="mt-2 border border-gray-500 rounded-full px-3 py-1 text-xs flex items-center">
              <Link to={pub.url} target="_blank">
                Show publication
              </Link>
              <ExternalLink className="w-3 h-3 ml-1" />
            </button>

            {index === 0 && (
              <p className="mt-2 text-gray-400 text-xs">
                In this paper, a new clearing method for the separate reactive
                power market aiming at improving the reactive power compensation
                quality is presented...
                <span className="text-gray-500"> see more</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all {publications.length} publications
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
