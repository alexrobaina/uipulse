"use client";

import { ReactNode } from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarNav,
  SidebarToggle,
  SidebarLayout,
  type SidebarNavItem,
  useSidebar,
} from "@/app/ui/molecules/Sidebar";
import Navbar from "@/app/ui/molecules/Navbar";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { cn } from "@/lib/cn";

interface NavItem {
  label: string;
  href: string;
}

interface AppLayoutProps {
  children: ReactNode;
  navigation: SidebarNavItem[];
  brand?: string | ReactNode;
  user?: {
    name: string;
    avatar?: string | ReactNode;
    email?: string;
  };
  sidebarVariant?: "default" | "floating" | "inset";
  className?: string;
  sidebarClassName?: string;
  contentClassName?: string;
  // Navbar props
  showNavbar?: boolean;
  navbarItems?: NavItem[];
  navbarClassName?: string;
}

export default function AppLayout({
  user,
  children,
  className,
  navigation,
  brand = "App",
  sidebarClassName,
  contentClassName,
  navbarClassName,
  navbarItems = [],
  showNavbar = false,
  sidebarVariant = "default",
}: AppLayoutProps) {
  return (
    <SidebarLayout
      className={className}
      sidebar={
        <Sidebar variant={sidebarVariant} className={sidebarClassName}>
          <SidebarHeader>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                {typeof brand === "string" ? (
                  <div className="text-lg font-bold">{brand}</div>
                ) : (
                  brand
                )}
              </div>
              <SidebarToggle />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarNav items={navigation} />
          </SidebarContent>

          {user && (
            <SidebarFooter>
              <div className="flex items-center space-x-3 w-full">
                <div className="flex-shrink-0">
                  {user.avatar ? (
                    typeof user.avatar === "string" ? (
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                        style={{
                          minWidth: "32px",
                          minHeight: "32px",
                        }}
                      />
                    ) : (
                      user.avatar
                    )
                  ) : (
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">
                    {user.name}
                  </div>
                  {user.email && (
                    <div className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </div>
                  )}
                </div>
              </div>
            </SidebarFooter>
          )}
        </Sidebar>
      }
    >
      <div className={cn("flex flex-col h-full", contentClassName)}>
        {showNavbar && (
          <Navbar
            items={navbarItems}
            className={navbarClassName}
            rightContent={<ThemeToggle />}
          />
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </SidebarLayout>
  );
}

// Higher-order component for pages that need the app layout
export function withAppLayout<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  layoutProps: Omit<AppLayoutProps, "children">
) {
  return function WrappedComponent(props: P) {
    return (
      <AppLayout {...layoutProps}>
        <Component {...props} />
      </AppLayout>
    );
  };
}

// Hook for accessing layout context (if needed)
export { useSidebar } from "@/app/ui/molecules/Sidebar";
