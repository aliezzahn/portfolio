import { Edit, ExternalLink } from 'lucide-react';
import profileData from '@/data/aliezzahn.json';
import { Link } from 'react-router';

export default function ProfileHeader({
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
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 md:h-48 bg-gradient-to-r from-gray-700 to-gray-800 relative">
        <img src="/hncore_head_banner.jpg" alt="HN Core Banner" />
        <button className="absolute right-4 top-4 bg-white rounded-full p-1.5">
          <Edit className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Profile Image */}
      <div className="px-4 pb-4 relative">
        <div className="absolute -top-16 left-4 w-32 h-32 rounded-full border-4 border-[#1d2226] bg-[#1d2226] overflow-hidden">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={profileData.avatar_url}
              alt={basics.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="pt-20">
          <div className="flex flex-row justify-between w-full">
            <div className="flex justify-between items-start w-[60%]">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">
                    {basics.name} (aliezzahn)
                  </h1>
                  <span className="text-xs text-gray-400">(He/Him)</span>
                </div>
                <p className="text-gray-300">{basics.label}</p>

                <div className="flex items-center gap-1 text-gray-400 mt-1 text-sm">
                  <span>{basics.location.address}</span>
                  <span className="text-gray-500">•</span>
                  <Link
                    to="/biography"
                    className="text-[#70b5f9] hover:underline"
                  >
                    Contact info
                  </Link>
                </div>

                <div className="mt-1 text-[#70b5f9] text-sm">
                  <Link
                    target="_blank"
                    to="https://github.com/aliezzahn"
                    className="hover:underline flex items-center gap-1"
                  >
                    Github <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="mt-1 text-sm">
                  <span className="text-gray-400">
                    <span className="font-bold text-[#70b5f9]">500+</span>{' '}
                    connections
                  </span>
                </div>
              </div>
            </div>
            {/*//*/}
            <div className="flex flex-col gap-2 w-[40%]">
              <div className="flex items-center gap-2">
                <div className="rounded px-3 py-1 text-xs flex items-center gap-2">
                  <img
                    src="/tobtc_logo.jpeg"
                    alt="TOBTC LOGO"
                    className="size-8 bg-orange-500 flex items-center justify-center text-white text-xs"
                  />
                  <span className="font-bold text-[0.9rem]">TOBTC</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded px-3 py-1 text-xs flex items-center gap-2">
                  <img
                    src="/mazust_logo.jpeg"
                    alt="MAZUST LOGO"
                    className="size-8 bg-orange-500 flex items-center justify-center text-white text-xs"
                  />
                  <span className="font-bold text-[0.9rem]">
                    University of Science and Technology of Mazandaran
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="bg-[#70b5f9] hover:bg-[#5da5e9] text-black font-medium rounded-full px-4 py-1 text-sm">
              Open to
            </button>
            <button className="border border-[#70b5f9] text-[#70b5f9] hover:bg-[#70b5f9]/10 font-medium rounded-full px-4 py-1 text-sm">
              Add profile section
            </button>
            <button className="border border-[#70b5f9] text-[#70b5f9] hover:bg-[#70b5f9]/10 font-medium rounded-full px-4 py-1 text-sm">
              Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
