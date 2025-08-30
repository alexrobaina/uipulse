"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarToggle,
  SidebarUser,
  SidebarProvider,
  type SidebarNavItem,
} from "@/app/ui/molecules/Sidebar";
import Badge from "@/app/ui/atoms/Badge";

const basicNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
      </svg>
    ),
    isActive: true,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    badge: "12",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function SidebarDemo() {
  const demoUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    status: "online" as const,
  };

  return (
    <div className="space-y-6">
      {/* Basic Demo */}
      <div className="h-96 w-full border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar className="static">
              <SidebarHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">UI</span>
                  </div>
                  <span className="font-bold text-lg">UIPulse</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarNav items={basicNavItems} />
              </SidebarContent>
              
              {/* Enhanced footer with integrated user info and collapse */}
              <SidebarUser
                user={demoUser}
                showToggle={true}
                onUserClick={() => console.log("User profile clicked")}
              />
            </Sidebar>
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                Enhanced Sidebar Demo
              </h2>
              <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                <p>
                  This sidebar features an integrated footer that combines:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• User profile with avatar and status indicator</li>
                  <li>• Responsive collapse/expand functionality</li>
                  <li>• Smooth animations and hover effects</li>
                  <li>• Dark mode support</li>
                  <li>• Mobile-responsive design</li>
                </ul>
                <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-800/30 rounded-lg">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    Try it out:
                  </p>
                  <p className="text-sm">
                    Click the collapse button to see how the sidebar adapts, 
                    or click on the user profile area for custom actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}