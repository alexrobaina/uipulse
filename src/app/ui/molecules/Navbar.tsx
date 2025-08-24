"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { useSidebar } from "./Sidebar";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string | React.ReactNode;
  items: NavItem[];
  className?: string;
  rightContent?: React.ReactNode;
}

export default function Navbar({
  brand,
  items,
  className,
  rightContent,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-500/30 shadow-sm h-16",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between py-2 py-1 md:p-2 h-16">
          <div className="flex items-center space-x-4">
            {/* Brand */}
            {brand && (
              <Link href="/" className="text-xl font-bold text-neutral-500">
                {typeof brand === "string" ? brand : brand}
              </Link>
            )}
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {rightContent && (
              <div className="flex items-center space-x-2">{rightContent}</div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {rightContent && (
              <div className="flex items-center space-x-2">{rightContent}</div>
            )}
            {items.length > 0 && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-muted-ne hover:bg-accent hover:text-accent-ne transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-ne hover:text-ne hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
