import { SidebarIcon } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
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
import { useLocation } from 'react-router';
import { SearchCommand } from './search-command';

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const location = useLocation();

  function getBreadcrumbTitle() {
    if (
      location.pathname.includes('educations') ||
      location.pathname.includes('experiences') ||
      location.pathname.includes('expertise')
    ) {
      return 'Information';
    } else if (
      location.pathname.includes('repositories') ||
      location.pathname.includes('packages') ||
      location.pathname.includes('publications')
    ) {
      return 'Projects';
    } else if (location.pathname === '/') {
      return 'About';
    } else if (location.pathname.includes('contact')) {
      return 'Me';
    }
  }

  function getBreadcrumbSubTitle() {
    if (location.pathname.includes('educations')) {
      return 'Educations';
    } else if (location.pathname.includes('experiences')) {
      return 'Experiences';
    } else if (location.pathname.includes('expertise')) {
      return 'Expertise';
    } else if (location.pathname.includes('contact')) {
      return 'Contact';
    } else if (location.pathname.includes('repositories')) {
      return 'Repositories';
    } else if (location.pathname.includes('packages')) {
      return 'Packages';
    } else if (location.pathname.includes('publications')) {
      return 'Publications';
    } else if (location.pathname === '/') {
      return 'Me';
    }
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
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{getBreadcrumbSubTitle()}</BreadcrumbPage>
            </BreadcrumbItem>
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
