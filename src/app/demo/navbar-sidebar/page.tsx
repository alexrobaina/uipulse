"use client";

import { Home, Settings, Users, FileText, Bell } from "lucide-react";
import AppLayout from "@/app/components/AppLayout";
import type { SidebarNavItem } from "@/app/ui/molecules/Sidebar";

const navigation: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/demo/navbar-sidebar",
    icon: <Home className="w-5 h-5" />,
    isActive: true,
  },
  {
    title: "Users",
    href: "/demo/navbar-sidebar/users",
    icon: <Users className="w-5 h-5" />,
    badge: "12",
  },
  {
    title: "Documents",
    icon: <FileText className="w-5 h-5" />,
    items: [
      {
        title: "All Documents",
        href: "/demo/navbar-sidebar/documents",
      },
      {
        title: "Shared",
        href: "/demo/navbar-sidebar/documents/shared",
        badge: "3",
      },
      {
        title: "Recent",
        href: "/demo/navbar-sidebar/documents/recent",
      },
    ],
  },
  {
    title: "Settings",
    href: "/demo/navbar-sidebar/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

const navbarItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NavbarSidebarDemo() {
  return (
    <AppLayout
      navigation={navigation}
      brand="UIpulse"
      showNavbar={true}
      navbarItems={navbarItems}
      user={{
        name: "John Doe",
        email: "john@example.com",
      }}
      sidebarVariant="default"
    >
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Navbar + Sidebar Integration Demo
          </h1>

          <div className="grid gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Responsive navbar with hamburger menu</li>
                <li>• Collapsible sidebar with navigation</li>
                <li>• Mobile-friendly with proper touch targets</li>
                <li>• Dark mode support with theme toggle</li>
                <li>• Integrated state management between components</li>
                <li>• Clean separation of concerns</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Usage Instructions</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    Mobile (1024px):
                  </h3>
                  <ul className="space-y-1 ml-4">
                    <li>• Use hamburger button in navbar to open sidebar</li>
                    <li>• Tap outside sidebar or hamburger again to close</li>
                    <li>• Navbar hamburger also toggles mobile menu</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-foreground mb-2">
                    Desktop (≥ 1024px):
                  </h3>
                  <ul className="space-y-1 ml-4">
                    <li>• Sidebar is always visible</li>
                    <li>
                      • Click toggle button in sidebar header to collapse/expand
                    </li>
                    <li>• Navbar shows full navigation menu</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Component Structure
              </h2>
              <div className="bg-muted p-4 rounded text-sm font-mono">
                <div>AppLayout</div>
                <div className="ml-4">
                  ├── Sidebar (with SidebarProvider context)
                </div>
                <div className="ml-8">├── SidebarHeader (brand + toggle)</div>
                <div className="ml-8">├── SidebarContent (navigation)</div>
                <div className="ml-8">└── SidebarFooter (user info)</div>
                <div className="ml-4">└── Main Content</div>
                <div className="ml-8">
                  ├── Navbar (optional, integrates with sidebar)
                </div>
                <div className="ml-8">└── Page Content</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
