"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";
import Button from "../atoms/Button";

/**
 * RESPONSIVE SIDEBAR COMPONENT SYSTEM
 * ===================================
 *
 * A complete sidebar solution with responsive behavior, collapse functionality,
 * and mobile overlay support. Acts as both navigation sidebar and "hamburger menu" system.
 *
 * 🖥️  DESKTOP BEHAVIOR (>= 1024px):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ EXPANDED (256px)          │ COLLAPSED (64px)                    │
 * │ ┌─────────────────────┐   │ ┌──────┐                           │
 * │ │ 🏠 Dashboard       │   │ │  🏠  │                           │
 * │ │ 📊 Analytics       │   │ │  📊  │                           │
 * │ │ ⚙️  Settings       │   │ │  ⚙️   │                           │
 * │ └─────────────────────┘   │ └──────┘                           │
 * │ [←] Collapse Button       │ [→] Expand Button                  │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * 📱 MOBILE BEHAVIOR (< 1024px):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ HIDDEN (default)          │ OVERLAY (when opened)               │
 * │                           │ ┌─────────────────────┐            │
 * │ [☰] Hamburger in Navbar   │ │ 🏠 Dashboard       │ [overlay]  │
 * │                           │ │ 📊 Analytics       │            │
 * │ Main Content              │ │ ⚙️  Settings       │            │
 * │                           │ └─────────────────────┘            │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * 🎛️  STATE MANAGEMENT:
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ State         │ Purpose                    │ Affects             │
 * │ isCollapsed   │ Desktop width control      │ w-16 ↔ w-64        │
 * │ isOpen        │ Mobile visibility control  │ hidden ↔ overlay   │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * 🎯 TOGGLE BUTTON ("HAMBURGER MENU") BEHAVIOR:
 * - Desktop: toggleCollapsed() → changes sidebar width
 * - Mobile: setIsOpen() → shows/hides overlay
 * - Icons: ArrowLeft (collapse) / ArrowRight (expand)
 * - Position: Automatically adjusts based on sidebar width
 *
 * 🧩 COMPONENT HIERARCHY:
 * SidebarLayout (provides context + layout)
 *   └── Sidebar (main container)
 *       ├── SidebarHeader (logo/title area)
 *       ├── SidebarContent (scrollable nav area)
 *       │   └── SidebarNav (navigation list)
 *       │       └── SidebarNavItem (individual items)
 *       ├── SidebarFooter (bottom section)
 *       └── SidebarToggle (collapse/hamburger button)
 *
 * 🔄 RESPONSIVE CSS STRATEGY:
 * - Uses Tailwind responsive prefixes (lg:)
 * - Transform-based animations (translate-x)
 * - Fixed positioning on mobile, static on desktop
 * - Overlay backdrop for mobile (z-40)
 * - High z-index for sidebar (z-50)
 */

// Sidebar context interface - manages both collapse and mobile open states
interface SidebarContextType {
  isCollapsed: boolean; // Desktop: controls width (64px vs 256px)
  toggleCollapsed: () => void;
  isOpen: boolean; // Mobile: controls visibility (hidden vs overlay)
  setIsOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

/**
 * Hook to access sidebar state and controls
 * Must be used within a SidebarProvider
 */
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
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
  variant?: "default" | "floating" | "inset";
}

/**
 * Sidebar Provider Component
 * =========================
 * Manages global sidebar state and provides context to all child components
 *
 * @param defaultCollapsed - Initial collapsed state (default: false = expanded)
 *
 * STATE INITIALIZATION:
 * - isCollapsed: false (expanded by default on desktop)
 * - isOpen: false (hidden by default on mobile)
 */
export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: ReactNode;
  defaultCollapsed?: boolean;
}) {
  // Desktop collapse state: false = expanded (256px), true = collapsed (64px)
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  // Mobile visibility state: false = hidden, true = visible overlay
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleCollapsed, isOpen, setIsOpen }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

/**
 * Main Sidebar Component
 * =====================
 * Renders the actual sidebar with responsive behavior
 *
 * RESPONSIVE CSS BREAKDOWN:
 *
 * Base classes:
 * - "fixed left-0 top-0 z-50 h-full" = Fixed position, full height, high z-index
 * - "transition-all duration-300" = Smooth transitions for all properties
 *
 * Desktop behavior (lg: prefixed classes):
 * - "lg:static" = On desktop, sidebar is static (not fixed/overlay)
 * - "lg:translate-x-0" = Always visible on desktop (no translation)
 *
 * Width (controlled by isCollapsed):
 * - isCollapsed ? "w-16" : "w-64" = 64px collapsed, 256px expanded
 *
 * Mobile translation (controlled by isOpen):
 * - isOpen ? "translate-x-0" : "-translate-x-full" = Show/hide via horizontal translation
 * - "lg:translate-x-0" = Override on desktop to always show
 *
 * Mobile overlay:
 * - Dark background appears when mobile sidebar is open
 * - Click overlay to close sidebar
 * - "lg:hidden" = Only show overlay on mobile
 */
export function Sidebar({
  children,
  className,
  variant = "default",
}: SidebarProps) {
  const { isCollapsed, isOpen, setIsOpen } = useSidebar();

  // Visual style variants for different use cases
  const variants = {
    default: "border-r border-neutral-500/30 bg-card",
    floating:
      "border border-neutral-500/30 rounded-lg bg-neutral-50 dark:bg-neutral-900 shadow-sm m-2",
    inset: "bg-muted border-r border-neutral-500/30",
  };

  return (
    <>
      {/* Mobile overlay - appears behind sidebar when open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main sidebar container */}
      <aside
        className={cn(
          // Base positioning and transitions
          "fixed left-0 top-0 z-50 h-full transition-all duration-300 lg:static lg:translate-x-0",

          // Width: 64px when collapsed, 256px when expanded
          isCollapsed ? "w-16" : "w-64",

          // Mobile: hide/show via translation, Desktop: always visible
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",

          // Apply visual variant
          variants[variant],
          className
        )}
      >
        <div className="flex h-full flex-col overflow-hidden">{children}</div>
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
        "flex items-center border-b border-neutral-500/30 h-16 px-4",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Sidebar Content Component
 * ========================
 * Main scrollable content area of the sidebar
 *
 * COLLAPSE BEHAVIOR:
 * - Expanded: p-4 (16px padding)
 * - Collapsed: p-2 (8px padding) - tighter spacing for icon-only view
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
        "flex-1 overflow-y-auto",
        // Adjust padding based on collapsed state
        isCollapsed ? "p-2" : "p-4",
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
    <div className={cn("border-t border-neutral-500/30 p-4", className)}>
      {children}
    </div>
  );
}

/**
 * Sidebar Toggle Button Component
 * ===============================
 * The "hamburger menu" equivalent - controls sidebar visibility/collapse
 *
 * RESPONSIVE BEHAVIOR:
 *
 * Desktop (>= 1024px):
 * - Toggles collapse state (wide ↔ narrow)
 * - Position: Absolutely positioned next to sidebar edge
 * - Icons: ArrowLeft (collapse) / ArrowRight (expand)
 *
 * Mobile (< 1024px):
 * - Toggles open state (hidden ↔ overlay)
 * - Can be positioned as floating button or integrated in navbar
 * - Same icons but different behavior
 *
 * POSITIONING:
 * - Default: Positioned relative to sidebar edge
 *   - Collapsed: left-[80px] (64px sidebar + 16px offset)
 *   - Expanded: left-[206px] (256px sidebar - 50px for button centering)
 * - Floating: Independent positioning (for mobile hamburger in navbar)
 */
interface SidebarToggleProps {
  className?: string;
  variant?: "default" | "floating";
}

export function SidebarToggle({
  className,
  variant = "default",
}: SidebarToggleProps) {
  const { isCollapsed, toggleCollapsed, isOpen, setIsOpen } = useSidebar();
  // RESPONSIVE CLICK BEHAVIOR:
  // Check screen size using CSS media query for more reliable detection
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  // Position toggle button - responsive positioning
  const baseClasses = cn(
    "absolute z-50 top-[14px] flex items-center justify-center p-2 rounded-md",
    "border border-neutral-500/30 hover:text-neutral-900 transition-colors dark:hover:text-neutral-100",
    // Mobile: fixed position for easy access - 10px from left edge
    isMobile
      ? "left-[272px] flex"
      : isCollapsed
      ? "lg:left-[80px]"
      : "lg:left-[206px]",

    isOpen && "left-[206px]"
  );

  // Floating variant for mobile hamburger menus (independent positioning)
  const floatingClasses =
    variant === "floating"
      ? "border border-neutral-500/30 shadow-md w-10 h-10"
      : ""; // Show toggle button on all screen sizes

  return (
    <Button
      variant="ghost"
      onClick={() => {
        if (isMobile) {
          // Mobile: toggle overlay visibility (open/close)
          setIsOpen(!isOpen);
        } else {
          // Desktop: toggle sidebar width (collapse/expand)
          toggleCollapsed();
        }
      }}
      className={cn(baseClasses, floatingClasses, className)}
      aria-label={
        window.matchMedia("(max-width: 1023px)").matches
          ? "Toggle navigation menu"
          : isCollapsed
          ? "Expand sidebar"
          : "Collapse sidebar"
      }
    >
      {/* Icons indicate current state and next action */}
      {!isMobile && isCollapsed && (
        <Menu className="w-5 h-5 text-neutral-800 dark:text-neutral-100" /> // Collapsed → click to expand
      )}
      {!isMobile && !isCollapsed && (
        <ArrowLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-100" /> // Expanded → click to collapse
      )}
      {isMobile && isOpen && (
        <ArrowLeft className="w-5 h-5 text-neutral-800 dark:text-neutral-100" /> // Collapsed → click to expand
      )}
      {isMobile && !isOpen && (
        <Menu className="w-5 h-5 text-neutral-800 dark:text-neutral-100" /> // Expanded → click to collapse
      )}
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
    <nav className={cn("space-y-1", className)}>
      {items.map((item, index) => (
        <SidebarNavItem
          key={index}
          item={item}
          isCollapsed={isCollapsed}
          className={className}
        />
      ))}
    </nav>
  );
}

/**
 * Individual Navigation Item Component
 * ===================================
 * Renders each navigation item with responsive collapse behavior
 *
 * COLLAPSE BEHAVIOR:
 *
 * Expanded (isCollapsed = false):
 * - Full width layout with icon, text, badges, and expand arrows
 * - "justify-between px-3 py-2" = space between icon/text and badges/arrows
 * - Shows title, subtitle, badges, and nested item controls
 *
 * Collapsed (isCollapsed = true):
 * - Icon-only layout, centered
 * - "justify-center p-2" = center icon with smaller padding
 * - Hides text, badges, and controls (space-saving)
 *
 * NESTED NAVIGATION:
 * - level prop tracks nesting depth
 * - "ml-4" indentation for nested items (only when expanded)
 * - Expand/collapse arrows for items with children
 * - Children only show when parent expanded AND sidebar not collapsed
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
        "flex items-center w-full text-sm rounded-md transition-all duration-200",

        // COLLAPSE RESPONSIVE LAYOUT:
        // Collapsed: center icon only with minimal padding
        // Expanded: space between content and badges/arrows
        isCollapsed ? "justify-center p-2" : "justify-between px-3 py-2",

        // Interactive styling (only for clickable items)
        (item.href || hasChildren) &&
          (item.isActive
            ? "bg-accent text-accent-foreground font-medium"
            : "text-foreground hover:bg-accent hover:text-accent-foreground"),

        // Non-interactive items (section headers) get muted styling
        !item.href && !hasChildren && "text-muted-foreground",

        // Nested indentation (only when expanded)
        level > 0 && !isCollapsed && "ml-4",
        item.className,
        "cursor-pointer"
      )}
    >
      {/* Left side: Icon and text content */}
      <div
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "space-x-3"
        )}
      >
        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}

        {/* Text content - hidden when collapsed */}
        {!isCollapsed && (
          <div className={cn("flex flex-col", item.className)}>
            <span className="truncate">{item.title}</span>
            {item.subtitle && (
              <span className="text-xs text-muted-foreground">
                {item.subtitle}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Right side: Badges and controls - hidden when collapsed */}
      {!isCollapsed && (
        <div className="flex items-center space-x-2">
          {/* Badge indicator */}
          {item.badge && (
            <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
              {item.badge}
            </span>
          )}

          {/* Expand/collapse arrow for nested items */}
          {hasChildren && (
            <svg
              className={cn(
                "w-4 h-4 transition-transform",
                isExpanded && "rotate-90" // Rotate when expanded
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );

  // Simple navigation link (no children)
  if (item.href && !hasChildren) {
    return (
      <Link href={item.href} className="block">
        {NavContent}
      </Link>
    );
  }

  // Expandable navigation section or non-link item
  return (
    <div>
      <button
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className="w-full text-left"
        disabled={!hasChildren}
      >
        {NavContent}
      </button>

      {/* Nested children - only show when:
          1. Item has children (hasChildren)
          2. Item is expanded (isExpanded) 
          3. Sidebar is not collapsed (!isCollapsed) */}
      {hasChildren && isExpanded && !isCollapsed && (
        <div className="mt-1 space-y-1">
          {item.items!.map((subItem, index) => (
            <SidebarNavItem
              key={index}
              item={subItem}
              isCollapsed={isCollapsed}
              level={level + 1} // Increase nesting level
              className={className}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Sidebar Layout Component
 * =======================
 * Complete layout wrapper that provides sidebar context and layout structure
 *
 * LAYOUT STRUCTURE:
 * - Wraps everything in SidebarProvider for state management
 * - Flex container: sidebar + main content
 * - "h-screen overflow-hidden" = full viewport height, prevent body scroll
 * - Main content: "flex-1 overflow-y-auto" = takes remaining space, scrollable
 *
 * USAGE:
 * <SidebarLayout sidebar={<Sidebar>...</Sidebar>}>
 *   <YourMainContent />
 * </SidebarLayout>
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
      <div className={cn("flex h-screen overflow-hidden", className)}>
        {sidebar}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
}

export default Sidebar;
