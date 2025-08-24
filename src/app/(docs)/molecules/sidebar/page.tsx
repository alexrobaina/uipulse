"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarToggle,
  SidebarLayout,
  type SidebarNavItem,
} from "@/app/ui/molecules/Sidebar";
import Badge from "@/app/ui/atoms/Badge";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const basicSidebarCode = `import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarNav,
  SidebarToggle,
  SidebarLayout,
} from "@/app/ui/molecules/Sidebar";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
    isActive: true,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon />,
    badge: "12",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
];

export default function Example() {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">App</span>
              <SidebarToggle />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNav items={navItems} />
          </SidebarContent>
        </Sidebar>
      }
    >
      <div className="p-6">
        <h1>Main Content</h1>
      </div>
    </SidebarLayout>
  );
}`;

const advancedSidebarCode = `import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarToggle,
  SidebarLayout,
} from "@/app/ui/molecules/Sidebar";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
    isActive: true,
  },
  {
    title: "Projects",
    icon: <ProjectIcon />,
    items: [
      { title: "Active Projects", href: "/projects/active", badge: "8" },
      { title: "Archived", href: "/projects/archived", badge: "4" },
      { title: "Templates", href: "/projects/templates" },
    ],
  },
  {
    title: "Team",
    href: "/team",
    icon: <TeamIcon />,
    badge: "5",
  },
];

export default function Example() {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar variant="floating" collapsible>
          <SidebarHeader>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">Brand</span>
              <SidebarToggle />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarNav items={navItems} />
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              <span className="text-sm">John Doe</span>
            </div>
          </SidebarFooter>
        </Sidebar>
      }
    >
      <div className="p-6">
        <h1>Main Content Area</h1>
        <p>This layout includes a floating sidebar with nested navigation.</p>
      </div>
    </SidebarLayout>
  );
}`;

// Sample navigation items for preview
const basicNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        className="w-5 h-5"
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
        className="w-5 h-5"
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
        className="w-5 h-5"
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

const advancedNavItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        className="w-5 h-5"
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
    icon: (
      <svg
        className="w-5 h-5"
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
    items: [
      { title: "Active Projects", href: "/projects/active", badge: "8" },
      { title: "Archived", href: "/projects/archived", badge: "4" },
      { title: "Templates", href: "/projects/templates" },
    ],
  },
  {
    title: "Team",
    href: "/team",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
    badge: "5",
  },
];

export default function SidebarPage() {
  const tabItems = [
    {
      id: "basic",
      label: "Basic",
      content: (
        <Preview centered={false} className="h-96">
          <SidebarLayout
            sidebar={
              <Sidebar>
                <SidebarHeader>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">App</span>
                    <SidebarToggle />
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarNav items={basicNavItems} />
                </SidebarContent>
              </Sidebar>
            }
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Main Content</h2>
              <p className="text-gray-600">
                This is the main content area. The sidebar provides navigation
                and can be collapsed on desktop or toggled on mobile.
              </p>
            </div>
          </SidebarLayout>
        </Preview>
      ),
    },
    {
      id: "advanced",
      label: "Advanced",
      content: (
        <Preview centered={false} className="h-96">
          <SidebarLayout
            sidebar={
              <Sidebar variant="floating">
                <SidebarHeader>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Brand</span>
                    <SidebarToggle />
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarNav items={advancedNavItems} />
                </SidebarContent>
                <SidebarFooter>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      JD
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                  </div>
                </SidebarFooter>
              </Sidebar>
            }
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Advanced Layout</h2>
              <p className="text-gray-600 mb-4">
                This example shows a floating sidebar with nested navigation,
                badges, and a footer section.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Feature 1</h3>
                  <p className="text-sm text-gray-600">Some content here</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Feature 2</h3>
                  <p className="text-sm text-gray-600">More content here</p>
                </div>
              </div>
            </div>
          </SidebarLayout>
        </Preview>
      ),
    },
    {
      id: "basic-code",
      label: "Basic Code",
      content: <CodeBlock code={basicSidebarCode} language="tsx" />,
    },
    {
      id: "advanced-code",
      label: "Advanced Code",
      content: <CodeBlock code={advancedSidebarCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sidebar</h1>
        <p className="text-gray-600 mb-4">
          A flexible and responsive sidebar component with support for nested
          navigation, collapsible states, and multiple variants.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="primary">Responsive</Badge>
          <Badge variant="success">Collapsible</Badge>
          <Badge variant="default">Nested Navigation</Badge>
          <Badge variant="default">Multiple Variants</Badge>
        </div>
      </div>

      <Tabs items={tabItems} defaultTab="basic" />

      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Features</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              • <strong>Responsive:</strong> Automatic mobile/desktop behavior
            </li>
            <li>
              • <strong>Collapsible:</strong> Toggle between expanded and
              collapsed states
            </li>
            <li>
              • <strong>Nested Navigation:</strong> Support for hierarchical
              menu items
            </li>
            <li>
              • <strong>Multiple Variants:</strong> Default, floating, and inset
              styles
            </li>
            <li>
              • <strong>Badges:</strong> Display counts or status indicators
            </li>
            <li>
              • <strong>Icons:</strong> Support for custom icons in navigation
              items
            </li>
            <li>
              • <strong>Context API:</strong> Shared state management across
              components
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Component Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Core Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SidebarProvider - Context provider</li>
                <li>• Sidebar - Main container</li>
                <li>• SidebarLayout - Layout wrapper</li>
                <li>• SidebarToggle - Collapse/expand button</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Layout Components</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SidebarHeader - Top section</li>
                <li>• SidebarContent - Main content area</li>
                <li>• SidebarFooter - Bottom section</li>
                <li>• SidebarNav - Navigation component</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
