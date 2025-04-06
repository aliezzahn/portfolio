import {
  FolderGit2,
  LifeBuoy,
  SquareTerminal,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Badge,
  GitBranch,
  Package,
  Book,
  Monitor,
} from 'lucide-react';
import type * as React from 'react';

// import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router';
import { NavDocuments } from '@/components/nav-documents.tsx';

const data = {
  user: {
    name: 'aliezzahn',
    email: 'aliezzahn@gmail.com',
    avatar: 'https://avatars.githubusercontent.com/u/164005474?v=4',
  },
  navMain: [
    {
      title: 'Informations',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Biography',
          url: 'informations/biography',
          icon: User,
        },
        {
          title: 'Educations',
          url: 'informations/educations',
          icon: GraduationCap,
        },
        {
          title: 'Experiences',
          url: 'informations/experiences',
          icon: Briefcase,
        },
        {
          title: 'Experties',
          url: 'informations/expertise',
          icon: Award,
        },
        {
          title: 'Certificates',
          url: 'informations/certificates',
          icon: Badge,
        },
      ],
    },
    {
      title: 'Projects',
      url: '#',
      icon: FolderGit2,
      items: [
        {
          title: 'Repositories',
          url: 'projects/repositories',
          icon: GitBranch,
        },
        {
          title: 'Packages',
          url: 'projects/packages',
          icon: Package,
        },
        {
          title: 'Publications',
          url: 'projects/publications',
          icon: Book,
        },
        {
          title: 'Showcases',
          url: 'showcases',
          icon: Monitor,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      url: '/contact',
      icon: LifeBuoy,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link
                to="https://www.hncore.website/"
                target="_blank"
                className=""
              >
                <div className="text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg">
                  <img src="https://www.hncore.website/logo.png" className="" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">HN Core</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/*<NavMain items={data.navMain} />*/}
        <NavDocuments title="Informations" items={data.navMain[0].items} />
        <NavDocuments title="Projects" items={data.navMain[1].items} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
