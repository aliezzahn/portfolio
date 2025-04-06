import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import { SidebarIcon } from 'lucide-react';
import { useLocation } from 'react-router';
import { SearchCommand } from './search-command';
import { ThemeToggle } from './theme-toggle';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const { pathname } = useLocation();

  const path = pathname.split('/').slice(1);
  
  function getBreadcrumbTitle() {
    return capitalizeFirstLetter(path[0]);
  }

  function getBreadcrumbSubTitle() {
    if (path.length > 1) {
      return capitalizeFirstLetter(path[1]);
    }
    return null;
  }

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{getBreadcrumbTitle()}</BreadcrumbLink>
            </BreadcrumbItem>
            {getBreadcrumbSubTitle() && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getBreadcrumbSubTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full sm:ml-auto sm:w-auto">
          <SearchCommand />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
