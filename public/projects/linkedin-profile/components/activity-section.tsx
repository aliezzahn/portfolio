import { ChevronRight, Edit } from 'lucide-react';

export default function ActivitySection() {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">Activity</h2>
        <div className="flex gap-2">
          <button className="border border-[#70b5f9] text-[#70b5f9] hover:bg-[#70b5f9]/10 font-medium rounded-full px-4 py-1 text-sm">
            Create a post
          </button>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-300 mb-2">3 followers</div>
      <div className="text-sm text-gray-300">You haven&#39;t posted yet</div>
      <div className="text-xs text-gray-400">
        Posts you share will be displayed here.
      </div>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all activity
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
