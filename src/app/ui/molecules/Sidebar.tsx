'use client';

import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { ArrowLeft, Menu, X } from 'lucide-react';
import Button from '../atoms/Button';

/**
 * RESPONSIVE SIDEBAR COMPONENT SYSTEM - VERCEL INSPIRED
 * ====================================================
 *
 * A modern sidebar solution with responsive behavior following Vercel's design patterns.
 * Features clean integration with main layout and proper z-index management.
 *
 * 🖥️  DESKTOP BEHAVIOR (>= 1024px):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ EXPANDED (256px)          │ COLLAPSED (64px)                    │
 * │ ┌─────────────────────┐   │ ┌──────┐                           │
 * │ │ 🏠 Dashboard       │   │ │  🏠  │                           │
 * │ │ 📊 Analytics       │   │ │  📊  │                           │
 * │ │ ⚙️  Settings       │   │ │  ⚙️   │                           │
 * │ │                    │   │ │      │                           │
 * │ │ [←] Toggle         │   │ │ [→]  │                           │
 * │ └─────────────────────┘   │ └──────┘                           │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * 📱 MOBILE BEHAVIOR (< 1024px):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ [☰] Navbar/Header         │ OVERLAY (when opened)               │
 * │                           │ ┌─────────────────────┐ [×]        │
 * │ Main Content              │ │ 🏠 Dashboard       │            │
 * │                           │ │ 📊 Analytics       │            │
 * │                           │ │ ⚙️  Settings       │            │
 * │                           │ └─────────────────────┘            │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * 🎛️  CONTROL STRATEGY:
 * - Desktop: Toggle button integrated within sidebar (bottom or dedicated area)
 * - Mobile: Hamburger button provided for external integration (navbar/header)
 * - No floating/fixed positioning conflicts
 * - Clean z-index management
 */

// Sidebar context interface
interface SidebarContextType {
  isCollapsed: boolean; // Desktop: controls width (64px vs 256px)
  toggleCollapsed: () => void;
  isOpen: boolean; // Mobile: controls visibility (hidden vs overlay)
  setIsOpen: (open: boolean) => void;
  isMobile: boolean; // Current screen size state
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

/**
 * Hook to access sidebar state and controls
 */
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

// Navigation item interface
export interface SidebarNavItem {
  title: string;
  href?: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
  items?: SidebarNavItem[];
  badge?: string | number;
  isActive?: boolean;
}

// Main Sidebar component props
interface SidebarProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'floating' | 'inset';
}

/**
 * Sidebar Provider Component
 */
export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: ReactNode;
  defaultCollapsed?: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches);
    };

    checkIsMobile();
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    mediaQuery.addEventListener('change', checkIsMobile);

    return () => mediaQuery.removeEventListener('change', checkIsMobile);
  }, []);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleCollapsed, isOpen, setIsOpen, isMobile }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * Main Sidebar Component with Vercel-inspired design
 */
export function Sidebar({
  children,
  className,
  variant = 'default',
}: SidebarProps) {
  const { isCollapsed, isOpen, setIsOpen, isMobile } = useSidebar();

  // Visual style variants
  const variants = {
    default: [
      'border-r border-neutral-200 bg-white text-neutral-900',
      'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100',
    ],
    floating: [
      'border border-neutral-200 rounded-xl bg-white text-neutral-900 shadow-sm m-4',
      'dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100',
    ],
    inset: [
      'bg-neutral-50 border-r border-neutral-200 text-neutral-900',
      'dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100',
    ],
  };

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isMobile && isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main sidebar container */}
      <aside
        className={cn(
          // Base positioning and transitions
          'relative flex flex-col transition-all duration-300 ease-out h-auto',

          // Desktop: static positioning, responsive width
          'lg:static lg:translate-x-0',

          // Mobile: fixed positioning with overlay behavior
          isMobile
            ? [
                'fixed left-0 top-0 z-50 h-screen',
                isOpen ? 'translate-x-0' : '-translate-x-full',
              ]
            : [],

          // Width: responsive based on collapsed state
          isCollapsed ? 'w-16' : 'w-64',

          // Apply visual variant
          variants[variant],
          className
        )}
      >
        {/* Mobile close button - only visible on mobile when open */}
        {isMobile && isOpen && (
          <div className='flex justify-end p-4 lg:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsOpen(false)}
              className='h-8 w-8 p-0'
              aria-label='Close sidebar'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
        )}

        {/* Sidebar content */}
        <div className='flex h-full flex-col overflow-hidden'>{children}</div>
      </aside>
    </>
  );
}

// Sidebar header component
interface SidebarHeaderProps {
  children: ReactNode;
  className?: string;
}

export function SidebarHeader({ children, className }: SidebarHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center border-b border-neutral-200 dark:border-neutral-800 h-16 px-4',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Sidebar Content Component
 */
interface SidebarContentProps {
  children: ReactNode;
  className?: string;
}

export function SidebarContent({ children, className }: SidebarContentProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        'flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600',
        // Adjust padding based on collapsed state
        isCollapsed ? 'p-2' : 'p-4',
        className
      )}
    >
      {children}
    </div>
  );
}

// Sidebar footer component
interface SidebarFooterProps {
  children: ReactNode;
  className?: string;
}

export function SidebarFooter({ children, className }: SidebarFooterProps) {
  return (
    <div
      className={cn(
        'border-t border-neutral-200 dark:border-neutral-800 p-4 mt-auto',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Standalone Sidebar Toggle Button - Can be used independently
 * This component provides a standalone collapse/expand button that can be used
 * anywhere in the sidebar layout, regardless of user authentication status.
 *
 * Usage:
 * - Place in SidebarFooter for bottom positioning
 * - Use in SidebarContent for custom positioning
 * - Works independently of SidebarUser component
 */
interface SidebarToggleProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'minimal' | 'compact';
}

export function SidebarToggle({
  className,
  showLabel = false,
  variant = 'default',
}: SidebarToggleProps) {
  const { isCollapsed, toggleCollapsed, isMobile } = useSidebar();

  // Don't render on mobile - mobile uses external hamburger
  if (isMobile) return null;

  // Variant styles
  const variants = {
    default: cn(
      'flex items-center justify-start w-full h-9 px-3',
      'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
      'dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800',
      'transition-all duration-200',
      isCollapsed && 'justify-center px-0'
    ),
    minimal: cn(
      'flex items-center justify-center h-8 w-8 p-0',
      'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100/50',
      'dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50',
      'transition-all duration-200 rounded-md'
    ),
    compact: cn(
      'flex items-center w-full h-8',
      'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
      'dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800',
      'transition-all duration-200 rounded-md',
      isCollapsed ? 'justify-center px-0' : 'justify-between px-2'
    ),
  };

  return (
    <Button
      variant='ghost'
      onClick={toggleCollapsed}
      className={cn(variants[variant], className, 'm-3 w-auto')}
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
    >
      {variant === 'minimal' ? (
        isCollapsed ? (
          <Menu className='h-4 w-4' />
        ) : (
          <ArrowLeft className='h-4 w-4' />
        )
      ) : isCollapsed ? (
        <Menu className='h-4 w-4' />
      ) : (
        <>
          <div className='flex items-center space-x-2'>
            <ArrowLeft className='h-4 w-4' />
            {showLabel && (
              <span className='text-sm font-medium'>
                {variant === 'compact' ? 'Hide' : 'Collapse'}
              </span>
            )}
          </div>
          {variant === 'compact' && !showLabel && (
            <ArrowLeft className='h-4 w-4' />
          )}
        </>
      )}
    </Button>
  );
}

/**
 * Enhanced Sidebar User Component with optional toggle functionality
 *
 * This component displays user information in the sidebar and can optionally
 * include collapse functionality. It's designed to work independently or
 * alongside the standalone SidebarToggle component.
 *
 * Usage scenarios:
 * 1. User logged in with toggle: <SidebarUser user={user} showToggle={true} />
 * 2. User logged in without toggle: <SidebarUser user={user} showToggle={false} />
 * 3. No user, only toggle: <SidebarUser showToggle={true} />
 * 4. Standalone toggle: Use <SidebarToggle /> instead
 */
interface SidebarUserProps {
  user?: {
    name: string;
    avatar?: string | React.ReactNode;
    email?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
  };
  showToggle?: boolean;
  onUserClick?: () => void;
  className?: string;
}

export function SidebarUser({
  user,
  showToggle = false, // Changed default to false to be more explicit
  onUserClick,
  className,
}: SidebarUserProps) {
  const { isCollapsed, toggleCollapsed, isMobile } = useSidebar();

  // Don't render if no user and no toggle requested
  if (!user && !showToggle) return null;

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-neutral-400 dark:bg-neutral-600',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
  };

  return (
    <div
      className={cn(
        'border-t border-neutral-200 dark:border-neutral-800',
        'bg-neutral-50/50 dark:bg-neutral-800/30',
        isCollapsed ? 'p-2' : 'p-4',
        className
      )}
    >
      {/* User Info Section - only show if user exists */}
      {user && (
        <div
          className={cn(
            'flex items-center transition-all duration-200',
            isCollapsed ? 'justify-center' : 'space-x-3',
            // Add margin bottom only if toggle is also shown
            showToggle && !isMobile ? (isCollapsed ? 'mb-2' : 'mb-3') : '',
            onUserClick &&
              'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg p-2 -m-2'
          )}
          onClick={onUserClick}
        >
          {/* Avatar Section */}
          <div className='relative flex-shrink-0'>
            {user.avatar ? (
              typeof user.avatar === 'string' ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className='w-8 h-8 rounded-full object-cover'
                />
              ) : (
                user.avatar
              )
            ) : (
              <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium'>
                {user.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()}
              </div>
            )}

            {/* Status Indicator */}
            {user.status && !isCollapsed && (
              <span
                className={cn(
                  'absolute -bottom-0.5 -right-0.5 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-neutral-900',
                  statusColors[user.status]
                )}
                aria-label={`Status: ${user.status}`}
              />
            )}
          </div>

          {/* User Details - hidden when collapsed */}
          {!isCollapsed && (
            <div className='flex-1 min-w-0'>
              <div className='text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate'>
                {user.name}
              </div>
              {user.email && (
                <div className='text-xs text-neutral-500 dark:text-neutral-400 truncate'>
                  {user.email}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Mobile Hamburger Button - For external use in navbar/header
 * This is exported for use in your navbar or main layout
 */
interface SidebarMobileToggleProps {
  className?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'destructive'
    | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon';
}

export function SidebarMobileToggle({
  className,
  variant = 'ghost',
  size = 'md',
}: SidebarMobileToggleProps) {
  const { isOpen, setIsOpen, isMobile } = useSidebar();

  // Only render on mobile
  if (!isMobile) return null;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        'lg:hidden', // Ensure it's hidden on desktop
        className
      )}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
    </Button>
  );
}

// Sidebar navigation component
interface SidebarNavProps {
  items: SidebarNavItem[];
  className?: string;
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  const { isCollapsed } = useSidebar();

  return (
    <nav className={cn('space-y-1', className)}>
      {items.map((item, index) => (
        <SidebarNavItem
          key={index}
          item={item}
          isActive={item.isActive}
          isCollapsed={isCollapsed}
          className={className}
        />
      ))}
    </nav>
  );
}

/**
 * Individual Navigation Item Component
 */
interface SidebarNavItemProps {
  item: SidebarNavItem;
  isCollapsed: boolean;
  level?: number;
  className?: string;
}

function SidebarNavItem({
  item,
  isCollapsed,
  level = 0,
  className,
}: SidebarNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.items && item.items.length > 0;

  const NavContent = (
    <div
      className={cn(
        'relative flex items-center text-sm rounded-lg transition-all duration-200 w-auto',
        // Layout based on collapsed state
        isCollapsed ? 'justify-center p-2' : 'justify-between px-3 py-2',

        // Interactive styling
        (item.href || hasChildren) &&
          (item.isActive
            ? 'bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100 font-medium border border-blue-200 dark:border-blue-800'
            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 hover:border-neutral-200 dark:hover:border-neutral-700 border border-transparent'),

        // Non-interactive items
        !item.href && !hasChildren && 'text-neutral-500 dark:text-neutral-400',

        // Nested indentation
        level > 0 && !isCollapsed && 'ml-4',
        item.className,
        'cursor-pointer'
      )}
    >
      {/* Active indicator mark */}
      {item.isActive && (
        <div
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-blue-600 dark:bg-blue-400 transition-all duration-200',
            isCollapsed ? 'h-6' : 'h-8'
          )}
        />
      )}
      {/* Left side: Icon and text */}
      <div
        className={cn(
          'flex items-center',
          isCollapsed ? 'justify-center' : 'space-x-3'
        )}
      >
        {item.icon && (
          <span className='flex-shrink-0 w-4 h-4 flex items-center justify-center'>
            {item.icon}
          </span>
        )}

        {/* Text content - hidden when collapsed */}
        {!isCollapsed && (
          <div className='flex flex-col min-w-0 flex-1'>
            <span className='truncate font-medium'>{item.title}</span>
            {item.subtitle && (
              <span className='text-xs text-neutral-500 dark:text-neutral-400 truncate'>
                {item.subtitle}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Right side: Badges and controls */}
      {!isCollapsed && (
        <div className='flex items-center space-x-2'>
          {/* Badge indicator */}
          {item.badge && (
            <span className='px-1.5 py-0.5 text-xs bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300 rounded-md'>
              {item.badge}
            </span>
          )}

          {/* Expand/collapse arrow */}
          {hasChildren && (
            <svg
              className={cn(
                'w-4 h-4 transition-transform text-neutral-400',
                isExpanded && 'rotate-90'
              )}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );

  // Simple navigation link
  if (item.href && !hasChildren) {
    return (
      <Link href={item.href} className='block'>
        {NavContent}
      </Link>
    );
  }

  // Expandable section or non-link item
  return (
    <div>
      <button
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className='w-full text-left'
        disabled={!hasChildren}
      >
        {NavContent}
      </button>

      {/* Nested children */}
      {hasChildren && isExpanded && !isCollapsed && (
        <div className='mt-1 space-y-1'>
          {item.items!.map((subItem, index) => (
            <SidebarNavItem
              key={index}
              item={subItem}
              isCollapsed={isCollapsed}
              level={level + 1}
              className={className}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Sidebar Layout Component - Complete layout wrapper
 */
interface SidebarLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SidebarLayout({
  sidebar,
  children,
  className,
}: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <div className={cn('flex h-screen overflow-hidden', className)}>
        {sidebar}
        <main className='flex-1 overflow-y-auto relative'>{children}</main>
      </div>
    </SidebarProvider>
  );
}

export default Sidebar;
