"use client";

import { useState } from "react";
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarUser,
  SidebarNav,
  type SidebarNavItem,
} from "@/app/ui/molecules/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/molecules/Card";
import Button from "@/app/ui/atoms/Button";
import Badge from "@/app/ui/atoms/Badge";
import { Home, Settings, Users, BarChart3, PlusCircle, Bell } from "lucide-react";

const navigationItems: SidebarNavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <Home className="w-4 h-4" />,
    isActive: true,
  },
  {
    title: "Analytics",
    href: "/analytics", 
    icon: <BarChart3 className="w-4 h-4" />,
    badge: "New",
  },
  {
    title: "Team",
    icon: <Users className="w-4 h-4" />,
    items: [
      { title: "Members", href: "/team/members", badge: "12" },
      { title: "Roles", href: "/team/roles" },
      { title: "Permissions", href: "/team/permissions" },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="w-4 h-4" />,
  },
];

export default function EnhancedSidebarDemo() {
  const [userStatus, setUserStatus] = useState<"online" | "offline" | "away" | "busy">("online");
  const [userClickCount, setUserClickCount] = useState(0);

  const demoUser = {
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9dae55d?w=150",
    status: userStatus,
  };

  const statusOptions = [
    { value: "online", label: "Online", color: "bg-green-500" },
    { value: "away", label: "Away", color: "bg-yellow-500" },
    { value: "busy", label: "Busy", color: "bg-red-500" },
    { value: "offline", label: "Offline", color: "bg-neutral-400" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Enhanced Sidebar Demo
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Experience the new integrated sidebar with user profile and collapse functionality.
        </p>
      </div>

      {/* Demo Controls */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle size="sm">Demo Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                User Status:
              </span>
              <div className="flex gap-2">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setUserStatus(option.value as any)}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all
                      ${userStatus === option.value 
                        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' 
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-300'
                      }
                    `}
                  >
                    <span className={`w-2 h-2 rounded-full ${option.color}`} />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <Badge variant="outline">
              User clicks: {userClickCount}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Sidebar Demo */}
      <div className="h-[500px] w-full border rounded-lg overflow-hidden shadow-sm">
        <SidebarProvider defaultCollapsed={false}>
          <div className="flex h-full">
            {/* Enhanced Sidebar */}
            <Sidebar className="static">
              <SidebarHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-bold">DS</span>
                  </div>
                  <span className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
                    Dashboard
                  </span>
                </div>
              </SidebarHeader>

              <SidebarContent>
                <SidebarNav items={navigationItems} />
              </SidebarContent>

              {/* The star of the show: Enhanced footer */}
              <SidebarUser
                user={demoUser}
                showToggle={true}
                onUserClick={() => {
                  setUserClickCount(prev => prev + 1);
                  console.log("User profile clicked! Count:", userClickCount + 1);
                }}
              />
            </Sidebar>

            {/* Main Content Area */}
            <div className="flex-1 p-6 bg-neutral-50/50 dark:bg-neutral-900/20">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Sidebar Features
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    This enhanced sidebar combines user management with navigation controls.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                  <Card variant="modern">
                    <CardHeader>
                      <CardTitle size="sm">🎯 Key Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                            Integrated User Profile
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Avatar, name, email, and status indicator
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                            Smart Collapse Button
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Smooth transitions with icon changes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                            Responsive Design
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            Adapts beautifully to collapsed state
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="modern">
                    <CardHeader>
                      <CardTitle size="sm">🚀 Try It Out</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          Interactive Elements:
                        </p>
                        <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                          <li>• Click the collapse button to toggle sidebar width</li>
                          <li>• Click the user profile to increment the counter</li>
                          <li>• Change user status with the controls above</li>
                          <li>• Try dark mode with the theme toggle</li>
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-2 mb-2">
                          <Bell className="w-4 h-4 text-neutral-500" />
                          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            Status: {userStatus.charAt(0).toUpperCase() + userStatus.slice(1)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PlusCircle className="w-4 h-4 text-neutral-500" />
                          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            Profile clicks: {userClickCount}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>

      {/* Usage Example */}
      <Card>
        <CardHeader>
          <CardTitle size="sm">Implementation Example</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-neutral-900 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-neutral-100 dark:text-neutral-200">
{`<SidebarUser
  user={{
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com", 
    avatar: "https://example.com/avatar.jpg",
    status: "online" // online | offline | away | busy
  }}
  showToggle={true}
  onUserClick={() => {
    // Handle user profile click
    console.log("User profile clicked");
  }}
/>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}