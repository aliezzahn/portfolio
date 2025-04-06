import { BarChart2, ChevronRight, Eye, Search, Users } from 'lucide-react';

export default function AnalyticsSection() {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <h2 className="font-bold mb-2">Analytics</h2>
      <div className="flex items-center text-xs text-gray-400 mb-4">
        <Eye className="w-3 h-3 mr-1" />
        <span>Private to you</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-gray-400 mt-1" />
          <div>
            <div className="font-bold">0 profile views</div>
            <div className="text-xs text-gray-400">
              Discover who&#39;s viewed your profile.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <BarChart2 className="w-4 h-4 text-gray-400 mt-1" />
          <div>
            <div className="font-bold">0 post impressions</div>
            <div className="text-xs text-gray-400">
              Start a post to increase engagement.
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Search className="w-4 h-4 text-gray-400 mt-1" />
          <div>
            <div className="font-bold">0 search appearances</div>
            <div className="text-xs text-gray-400">
              See how often you appear in search results.
            </div>
          </div>
        </div>
      </div>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all analytics
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
