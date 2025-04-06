import { ChevronRight, Edit, Plus, Check } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Button } from '@/components/ui/button.tsx';

// #74e5c0
export default function InterestsSection() {
  return (
    <div className="bg-[#1d2226] rounded-lg border border-[#38434f] p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Interests</h2>
        <div className="flex gap-2">
          <button>
            <Plus className="w-4 h-4 text-gray-400" />
          </button>
          <button>
            <Edit className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <Tabs defaultValue="companies" className="w-full">
        <TabsList className="grid grid-cols-3 bg-inherit">
          <TabsTrigger
            value="companies"
            className="data-[state=active]:bg-inherit pb-4 data-[state=active]:text-[#74e5c0] data-[state=active]:border-b-[#74e5c0] data-[state=active]:border-b-2 rounded-none"
          >
            Companies
          </TabsTrigger>
          <TabsTrigger
            value="newsletters"
            className="data-[state=active]:bg-inherit pb-4 data-[state=active]:text-[#74e5c0] data-[state=active]:border-b-[#74e5c0] data-[state=active]:border-b-2 rounded-none"
          >
            Newsletters
          </TabsTrigger>
          <TabsTrigger
            value="schools"
            className="data-[state=active]:bg-inherit pb-4 data-[state=active]:text-[#74e5c0] data-[state=active]:border-b-[#74e5c0] data-[state=active]:border-b-2 rounded-none"
          >
            Schools
          </TabsTrigger>
        </TabsList>
        <Separator className="bg-gray-400 mt-[2px] border-b-[1px] border-[#38434f]" />
        <div className="mt-2">
          <TabsContent value="companies" className="w-full">
            <div className="w-full flex flex-row gap-4">
              <div className="w-full">
                <div className="w-full flex flex-row gap-2">
                  <div>
                    <img
                      className="size-14 rounded-md"
                      src="/github_logo.jpeg"
                      alt="TOBTC Logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Github</div>
                    <div className="text-sm text-gray-400/80">
                      {new Intl.NumberFormat().format(4725956)} followers
                    </div>
                    <div className="mt-2 opacity-80">
                      <Button className="bg-inherit border border-gray-500 text-gray-300 rounded-full">
                        <Check className="size-5 stroke-white stroke-3" />
                        <span className="font-bold text-[16px]">Following</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-row gap-2">
                  <div>
                    <img
                      className="size-14 rounded-md"
                      src="/tobtc_logo.jpeg"
                      alt="TOBTC Logo"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">TOBTC</div>
                    <div className="text-sm text-gray-400/80">
                      {new Intl.NumberFormat().format(137)} followers
                    </div>
                    <div className="mt-2 opacity-80">
                      <Button className="bg-inherit border border-gray-500 text-gray-300 rounded-full">
                        <Check className="size-5 stroke-white stroke-3" />
                        <span className="font-bold text-[16px]">Following</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="newsletters">
            <div className="w-full">
              <div className="w-full flex flex-row gap-2">
                <div>
                  <img
                    className="size-14 rounded-md"
                    src="/tobtc_logo.jpeg"
                    alt="TOBTC Logo"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">TOBTC</div>
                  <div className="text-sm text-gray-400/80">
                    {new Intl.NumberFormat().format(137)} followers
                  </div>
                  <div className="mt-2 opacity-80">
                    <Button className="bg-inherit border border-gray-500 text-gray-300 rounded-full">
                      <Check className="size-5 stroke-white stroke-3" />
                      <span className="font-bold text-[16px]">Following</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schools">
            <div className="w-full">
              <div className="w-full flex flex-row gap-2">
                <div>
                  <img
                    className="size-14 rounded-md"
                    src="/github_logo.jpeg"
                    alt="TOBTC Logo"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">Github</div>
                  <div className="text-sm text-gray-400/80">
                    {new Intl.NumberFormat().format(4725956)} followers
                  </div>
                  <div className="mt-2 opacity-80">
                    <Button className="bg-inherit border border-gray-500 text-gray-300 rounded-full">
                      <Check className="size-5 stroke-white stroke-3" />
                      <span className="font-bold text-[16px]">Following</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      <button className="mt-4 text-gray-400 text-sm flex items-center hover:text-white">
        Show all companies
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}
