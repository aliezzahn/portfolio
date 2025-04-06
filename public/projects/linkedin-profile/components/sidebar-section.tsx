import { ChevronRight, Edit } from 'lucide-react';
import { Link } from 'react-router';

const peoples = [
  {
    name: 'Morteza Hassannejad',
    bio: 'UI/UX Designer',
    image: '/morihn_linkedin_profile_image.jpg',
  },
  {
    name: 'reza ghoreyshi',
    bio: 'Junior Blockchain Developer',
    image: '/rezagh_linkedin_profile_image.jpg',
  },
];

const companies = [
  {
    name: 'Frontend Masters',
    bio: 'JavaScript, CSS, HTML, and React',
    followers: 176797,
    image: '/frontend_master_logo.jpeg',
  },
  {
    name: 'JavaScript Mastery',
    bio: 'E-Learning Providers',
    followers: 289785,
    image: '/javascript_mastery_logo.jpeg',
  },
];

export default function SidebarSection({
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
    <div className="space-y-4">
      {/* Profile Sidebar */}
      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Profile language</h3>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">English</span>
        </div>
      </div>

      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Public profile & URL</h3>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div className="text-sm text-gray-400">
          <Link to={basics.profiles[0].url} target="_blank">
            {basics.profiles[0].url}
          </Link>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] overflow-hidden">
        <div className="bg-[#f5c75f] text-black p-2 text-sm font-medium">
          See who&#39;s hiring on LinkedIn
        </div>
        <div className="">
          <img
            src="/hncore_square_banner.jpg"
            alt="HN Core Banner"
            width={300}
            height={150}
            className="w-full rounded"
          />
        </div>
      </div>

      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
        <h3 className="font-bold mb-2">Your viewers also viewed</h3>
        <div className="space-y-4">
          {peoples.map((people) => (
            <div key={people.name} className="flex items-start gap-2">
              <img
                src={people.image}
                alt={people.name}
                className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0"
              />
              <div>
                <h4 className="font-medium text-sm">{people.name}</h4>
                <p className="text-xs text-gray-400">{people.bio}</p>
                <p className="text-xs text-gray-400">2nd</p>
                <button className="mt-1 border border-gray-400 rounded-full px-3 py-1 text-xs font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
          Show all
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
        <h3 className="font-bold mb-2">People you may know</h3>
        <p className="text-xs text-gray-400 mb-3">From your profile</p>
        <div className="space-y-4">
          {peoples.map((d1) => (
            <div key={d1.name} className="flex items-start gap-2">
              <img
                src={d1.image}
                alt={d1.name}
                className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0"
              />
              <div>
                <h4 className="font-medium text-sm">{d1.name}</h4>
                <p className="text-xs text-gray-400">{d1.bio}</p>
                <p className="text-xs text-gray-400">3rd</p>
                <button className="mt-1 border border-gray-400 rounded-full px-3 py-1 text-xs font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
          Show all
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
        <h3 className="font-bold mb-2">You might like</h3>
        <div className="space-y-4">
          {companies.map((company) => (
            <div key={company.name} className="flex items-start gap-2">
              <img
                src={company.image}
                alt={company.name}
                className="w-12 h-12 rounded bg-gray-700 flex-shrink-0 flex items-center justify-center"
              />
              <div>
                <h4 className="font-medium text-sm">{company.name}</h4>
                <p className="text-xs text-gray-400">{company.bio}</p>
                <p className="text-xs text-gray-400">
                  {new Intl.NumberFormat().format(company.followers)} followers
                </p>
                <button className="mt-1 border border-gray-400 rounded-full px-3 py-1 text-xs font-medium">
                  + Follow
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
          Show all
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Ad Banner */}
      <div className="bg-[#1d2226] rounded-lg border border-[#38434f] overflow-hidden">
        <div className="bg-[#f5c75f] text-black p-2 text-sm font-medium">
          See who&#39;s hiring on LinkedIn
        </div>
        <div className="">
          <img
            src="/hncore_square_banner.jpg"
            alt="HN Core Banner"
            width={300}
            height={150}
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
}
