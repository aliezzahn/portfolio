import { FolderGit2, LifeBuoy, SquareTerminal } from 'lucide-react';
import type * as React from 'react';

import { NavMain } from '@/components/nav-main';
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
          title: 'Educations',
          url: '/educations',
        },
        {
          title: 'Experiences',
          url: '/experiences',
        },
        {
          title: 'Experties',
          url: '/expertise',
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
          url: '/repositories',
        },
        {
          title: 'Packages',
          url: '/packages',
        },
        {
          title: 'Publications',
          url: '/publications',
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
              <Link to="https://www.hncore.website/" target="_blank" className=''>
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
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
