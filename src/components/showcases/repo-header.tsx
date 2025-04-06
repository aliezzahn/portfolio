import { Code, Eye, GitFork, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export function RepoHeader() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <Link to="#" className="hover:underline font-medium">
          username
        </Link>
        <span>/</span>
        <Link to="#" className="hover:underline font-medium text-blue-600">
          my-awesome-project
        </Link>
        <span className="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 border border-gray-300 font-medium">
          Public
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <p className="text-gray-600 max-w-2xl">
          A description of this awesome project. This is where you would
          describe what your project does and why it&#39;s useful.
        </p>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="h-8">
            <Eye className="w-4 h-4 mr-1.5" />
            Watch
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-xs bg-gray-100">
              12
            </span>
          </Button>

          <Button variant="outline" size="sm" className="h-8">
            <Star className="w-4 h-4 mr-1.5" />
            Star
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-xs bg-gray-100">
              48
            </span>
          </Button>

          <Button variant="outline" size="sm" className="h-8">
            <GitFork className="w-4 h-4 mr-1.5" />
            Fork
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-xs bg-gray-100">
              10
            </span>
          </Button>

          <Button variant="outline" size="sm" className="h-8">
            <Code className="w-4 h-4 mr-1.5" />
            Code
          </Button>
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-gray-200 mb-4">
        <Link
          to="#"
          className="px-4 py-2 border-b-2 border-orange-500 font-medium text-sm flex items-center"
        >
          <Code className="w-4 h-4 mr-2" />
          Code
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Issues
          <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs bg-gray-100">
            5
          </span>
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Pull Requests
          <span className="ml-2 px-1.5 py-0.5 rounded-full text-xs bg-gray-100">
            2
          </span>
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Actions
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Projects
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Wiki
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Security
        </Link>
        <Link
          to="#"
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm flex items-center"
        >
          Insights
        </Link>
      </div>
    </div>
  );
}
