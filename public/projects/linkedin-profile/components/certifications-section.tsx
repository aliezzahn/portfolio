import { ExternalLink, Edit, Plus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

interface CertificationsSectionProps {
  certificates: Array<{
    name: string;
    issuer: string;
    startDate: string;
    url: string;
  }>;
}

export default function CertificationsSection({
  certificates,
}: CertificationsSectionProps) {
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
        <h2 className="font-bold">Licenses & certifications</h2>
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
        {certificates.slice(0, 2).map((cert, index) => (
          <div key={index} className="flex gap-3">
            <img
              src="/free_code_camp_logo.jpeg"
              alt={cert.name}
              className="w-12 h-12 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center"
            />

            <div>
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-gray-300 text-sm">{cert.issuer}</p>
              <div className="text-gray-400 text-sm">
                Issued {formatDate(cert.startDate)}
              </div>

              <button className="mt-2 border border-gray-500 rounded-full px-3 py-1 text-xs flex items-center">
                <Link to={cert.url} target="_blank">
                  Show credential
                </Link>
                <ExternalLink className="w-3 h-3 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all {certificates.length} licenses & certifications
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
