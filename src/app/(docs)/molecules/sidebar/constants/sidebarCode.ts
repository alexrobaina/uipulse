export const sidebarCode = `import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarUser,
  SidebarNav,
  SidebarMobileToggle,
  SidebarLayout,
  type SidebarNavItem,
} from "@/app/ui/molecules/Sidebar";

// Navigation items
const navItems: SidebarNavItem[] = [
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

// User data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://example.com/avatar.jpg",
  status: "online", // online, offline, away, busy
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">Your App</span>
              <SidebarMobileToggle /> {/* Mobile hamburger */}
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarNav items={navItems} />
          </SidebarContent>
          
          {/* Enhanced footer with user info + collapse button */}
          <SidebarUser
            user={user}
            showToggle={true}
            onUserClick={() => {
              // Handle user profile click
              console.log("User profile clicked");
            }}
          />
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}

// Alternative: Just collapse functionality (no user)
export function MinimalSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <span className="font-bold text-lg">App</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav items={navItems} />
      </SidebarContent>
      <SidebarUser showToggle={true} /> {/* Only collapse button */}
    </Sidebar>
  );
}`;