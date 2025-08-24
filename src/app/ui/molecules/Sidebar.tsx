"use client";

import { ReactNode, useState, createContext, useContext } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";

// Sidebar context for managing state
interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

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

// Sidebar provider component
export function SidebarProvider({
  children,
  defaultCollapsed = false,
}: {
  children: ReactNode;
  defaultCollapsed?: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
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

// Main Sidebar component
export function Sidebar({
  children,
  className,
  variant = "default",
}: SidebarProps) {
  const { isCollapsed, isOpen, setIsOpen } = useSidebar();

  const variants = {
    default: "border-r border-neutral-500/30 bg-card",
    floating:
      "border border-neutral-500/30 rounded-lg bg-neutral-50 dark:bg-neutral-900 shadow-sm m-2",
    inset: "bg-muted border-r border-neutral-500/30",
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full transition-all duration-300 lg:static lg:translate-x-0",
          isCollapsed ? "w-16" : "w-64",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
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

// Sidebar content component
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

// Sidebar toggle button
interface SidebarToggleProps {
  className?: string;
  variant?: "default" | "floating";
}

export function SidebarToggle({
  className,
  variant = "default",
}: SidebarToggleProps) {
  const { isCollapsed, toggleCollapsed, isOpen, setIsOpen } = useSidebar();

  const baseClasses = `${
    isCollapsed ? "left-[80px]" : "left-[206px]"
  } absolute z-50 top-[14px] items-center border border-neutral-500/30 justify-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors`;

  // For floating variant (mobile), position it differently to avoid navbar conflicts
  const floatingClasses =
    variant === "floating"
      ? "border border-neutral-500/30 shadow-md lg:hidden w-10 h-10"
      : " lg:flex"; // Hide default toggle on mobile when navbar handles it

  return (
    <button
      onClick={() => {
        // On mobile, toggle open/close
        if (window.innerWidth < 1024) {
          setIsOpen(!isOpen);
        } else {
          // On desktop, toggle collapsed
          toggleCollapsed();
        }
      }}
      className={cn(baseClasses, floatingClasses, className)}
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {isCollapsed ? (
        <ArrowRight className="w-5 h-5" />
      ) : (
        <ArrowLeft className="w-5 h-5" />
      )}
    </button>
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

// Individual navigation item component
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
        // Adjust padding and layout based on collapsed state
        isCollapsed ? "justify-center p-2" : "justify-between px-3 py-2",
        // Only apply hover and active styles if item has href or children (is interactive)
        (item.href || hasChildren) &&
          (item.isActive
            ? "bg-accent text-accent-foreground font-medium"
            : "text-foreground hover:bg-accent hover:text-accent-foreground"),
        // For non-interactive items (headers), use muted text as default
        !item.href && !hasChildren && "text-muted-foreground",
        level > 0 && !isCollapsed && "ml-4",
        item.className,
        "cursor-pointer"
      )}
    >
      <div
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "space-x-3"
        )}
      >
        {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
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

      {!isCollapsed && (
        <div className="flex items-center space-x-2">
          {item.badge && (
            <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
              {item.badge}
            </span>
          )}
          {hasChildren && (
            <svg
              className={cn(
                "w-4 h-4 transition-transform",
                isExpanded && "rotate-90"
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

  if (item.href && !hasChildren) {
    return (
      <Link href={item.href} className="block">
        {NavContent}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className="w-full text-left"
        disabled={!hasChildren}
      >
        {NavContent}
      </button>

      {hasChildren && isExpanded && !isCollapsed && (
        <div className="mt-1 space-y-1">
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

// Layout component that includes sidebar
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
