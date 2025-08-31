'use client';

import { ReactNode, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarNav,
  SidebarToggle,
  SidebarUser,
  SidebarLayout,
  type SidebarNavItem,
} from '@/app/ui/molecules/Sidebar';
import Navbar from '@/app/ui/molecules/Navbar';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import { cn } from '@/lib/cn';

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
  sidebarVariant?: 'default' | 'floating' | 'inset';
  className?: string;
  sidebarClassName?: string;
  contentClassName?: string;
  // Navbar props
  showNavbar?: boolean;
  navbarItems?: NavItem[];
  navbarClassName?: string;
}

// Helper function to set active state on navigation items
function setActiveNavItems(
  items: SidebarNavItem[],
  pathname: string
): SidebarNavItem[] {
  return items.map(item => {
    const isActive = item.href ? pathname === item.href : false;

    // Handle nested items
    const updatedItems = item.items
      ? setActiveNavItems(item.items, pathname)
      : undefined;

    // Check if any child is active (for parent highlighting)
    const hasActiveChild = updatedItems?.some(
      child =>
        child.isActive ||
        (child.items && child.items.some(grandChild => grandChild.isActive))
    );

    return {
      ...item,
      isActive: isActive || hasActiveChild || false,
      items: updatedItems,
    };
  });
}

export default function AppLayout({
  user,
  children,
  className,
  navigation,
  brand = 'App',
  sidebarClassName,
  contentClassName,
  navbarClassName,
  navbarItems = [],
  showNavbar = false,
  sidebarVariant = 'default',
}: AppLayoutProps) {
  const pathname = usePathname();

  // Memoized navigation items with active state
  const activeNavigation = useMemo(
    () => setActiveNavItems(navigation, pathname),
    [navigation, pathname]
  );

  return (
    <>
      <ThemeToggle />
      <SidebarLayout
        className={className}
        sidebar={
          <Sidebar variant={sidebarVariant} className={sidebarClassName}>
            <SidebarHeader>
              <div className='flex items-center space-x-2 w-full'>
                {typeof brand === 'string' ? (
                  <div className='text-lg font-bold'>{brand}</div>
                ) : (
                  brand
                )}
              </div>
            </SidebarHeader>
            <SidebarToggle showLabel />

            <SidebarContent>
              <SidebarNav items={activeNavigation} />
            </SidebarContent>

            {/* Enhanced footer with integrated user info and collapse functionality */}
            {user && (
              <SidebarUser
                user={
                  user
                    ? {
                        ...user,
                        status: 'online', // Default status, can be made dynamic
                      }
                    : undefined
                }
                showToggle={true}
                onUserClick={() => {
                  // Optional: Handle user click (e.g., show user menu)
                  console.log('User clicked:', user?.name);
                }}
              />
            )}
          </Sidebar>
        }
      >
        <div className={cn('flex flex-col h-full', contentClassName)}>
          {showNavbar && (
            <Navbar items={navbarItems} className={navbarClassName} />
          )}
          <div className='flex-1 overflow-y-auto'>{children}</div>
        </div>
      </SidebarLayout>
    </>
  );
}

// Higher-order component for pages that need the app layout
export function withAppLayout<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>,
  layoutProps: Omit<AppLayoutProps, 'children'>
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
// export { useSidebar } from "@/app/ui/molecules/Sidebar";
