export const sidebarImplementation = `"use client";

import { ReactNode, useState, createContext, useContext, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowLeft, Menu, X } from "lucide-react";
import Button from "../atoms/Button";

// Sidebar context interface
interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

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

interface SidebarProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "floating" | "inset";
}

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
      setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    };
    
    checkIsMobile();
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    mediaQuery.addEventListener("change", checkIsMobile);
    
    return () => mediaQuery.removeEventListener("change", checkIsMobile);
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

export function Sidebar({
  children,
  className,
  variant = "default",
}: SidebarProps) {
  const { isCollapsed, isOpen, setIsOpen, isMobile } = useSidebar();

  const variants = {
    default: [
      "border-r border-neutral-200 bg-white text-neutral-900",
      "dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
    ],
    floating: [
      "border border-neutral-200 rounded-xl bg-white text-neutral-900 shadow-sm m-4",
      "dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100",
    ],
    inset: [
      "bg-neutral-50 border-r border-neutral-200 text-neutral-900",
      "dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100",
    ],
  };

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          "relative flex h-full flex-col transition-all duration-300 ease-out",
          "lg:static lg:translate-x-0",
          isMobile ? [
            "fixed left-0 top-0 z-50 h-screen",
            isOpen ? "translate-x-0" : "-translate-x-full"
          ] : [],
          isCollapsed ? "w-16" : "w-64",
          variants[variant],
          className
        )}
      >
        {isMobile && isOpen && (
          <div className="flex justify-end p-4 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex h-full flex-col overflow-hidden">
          {children}
        </div>
      </aside>
    </>
  );
}`;
