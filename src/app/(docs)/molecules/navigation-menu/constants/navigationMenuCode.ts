export const navigationMenuCode = `"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const navigationMenuVariants = cva([
  "relative flex items-center",
], {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-stretch",
    },
    variant: {
      default: "",
      modern: "",
      minimal: "",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
  },
});

const menuItemVariants = cva([
  "relative flex items-center justify-between",
  "px-3 py-2 text-sm font-medium",
  "transition-colors duration-150",
  "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
  "cursor-pointer",
], {
  variants: {
    variant: {
      default: [
        "text-neutral-700 dark:text-neutral-300",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "rounded-md",
      ],
      modern: [
        "text-neutral-600 dark:text-neutral-400",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "hover:bg-neutral-50 dark:hover:bg-neutral-800/50",
        "rounded-lg",
      ],
      minimal: [
        "text-neutral-600 dark:text-neutral-400",
        "hover:text-neutral-900 dark:hover:text-neutral-100",
        "rounded-none border-b-2 border-transparent",
        "hover:border-neutral-200 dark:hover:border-neutral-700",
      ],
    },
    active: {
      true: "",
      false: "",
    },
    disabled: {
      true: [
        "opacity-50 cursor-not-allowed",
        "hover:text-current hover:bg-transparent",
      ],
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    active: false,
    disabled: false,
  },
});

export interface NavigationMenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  children?: NavigationMenuItem[];
  onClick?: () => void;
  badge?: string | number;
  description?: string;
}

export interface NavigationMenuProps extends VariantProps<typeof navigationMenuVariants> {
  /**
   * Menu items
   */
  items: NavigationMenuItem[];
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Whether to show icons
   */
  showIcons?: boolean;
  /**
   * Trigger mode for dropdowns
   */
  trigger?: "hover" | "click";
  /**
   * Delay before closing on mouse leave (ms)
   */
  closeDelay?: number;
  /**
   * Item click handler
   */
  onItemClick?: (item: NavigationMenuItem) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  orientation = "horizontal",
  variant = "default",
  className,
  showIcons = true,
  trigger = "hover",
  closeDelay = 150,
  onItemClick,
}) => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  // Navigation menu implementation logic...

  return (
    <nav
      className={cn(navigationMenuVariants({ orientation, variant }), className)}
      role="menubar"
      aria-orientation={orientation}
    >
      {items.map(item => renderMenuItem(item))}
    </nav>
  );
};

export default NavigationMenu;`;
