export const toolkitCode = `"use client";
import React, { useState } from "react";
import { cn } from "@/lib/cn";

interface ToolkitItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

interface ToolkitProps {
  items: ToolkitItem[];
  variant?: "default" | "outline" | "ghost" | "filled";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "sm" | "md";
  allowMultiple?: boolean;
  activeItems?: string[];
  onItemsChange?: (activeItems: string[]) => void;
  className?: string;
}

const Toolkit: React.FC<ToolkitProps> = ({
  items,
  variant = "default",
  size = "md",
  orientation = "horizontal",
  spacing = "none",
  allowMultiple = false,
  activeItems = [],
  onItemsChange,
  className,
}) => {
  const [internalActiveItems, setInternalActiveItems] = useState<string[]>(
    activeItems.length > 0 ? activeItems : items.filter(item => item.active).map(item => item.id)
  );

  const currentActiveItems = activeItems.length > 0 ? activeItems : internalActiveItems;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4", 
    lg: "w-5 h-5",
  };

  const spacingClasses = {
    none: "",
    sm: orientation === "horizontal" ? "gap-1" : "gap-1",
    md: orientation === "horizontal" ? "gap-2" : "gap-2",
  };

  const variantClasses = {
    default: {
      container: "bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1",
      item: "rounded-md transition-all duration-150",
      active: "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-neutral-100",
      inactive: "text-neutral-600 hover:text-neutral-900 hover:bg-white/50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50",
      disabled: "opacity-50 cursor-not-allowed",
    },
    outline: {
      container: "border border-neutral-200 dark:border-neutral-700 rounded-lg p-1",
      item: "rounded-md border border-transparent transition-all duration-150",
      active: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      inactive: "text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-800",
      disabled: "opacity-50 cursor-not-allowed",
    },
    ghost: {
      container: "",
      item: "rounded-md transition-all duration-150",
      active: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
      inactive: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800",
      disabled: "opacity-50 cursor-not-allowed",
    },
    filled: {
      container: "bg-neutral-900 dark:bg-neutral-100 rounded-lg p-1",
      item: "rounded-md transition-all duration-150",
      active: "bg-blue-600 text-white dark:bg-blue-500 dark:text-white",
      inactive: "text-neutral-400 hover:text-white hover:bg-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-900 dark:hover:bg-neutral-200",
      disabled: "opacity-50 cursor-not-allowed",
    },
  };

  const handleItemClick = (item: ToolkitItem) => {
    if (item.disabled) return;

    let newActiveItems: string[];

    if (allowMultiple) {
      if (currentActiveItems.includes(item.id)) {
        newActiveItems = currentActiveItems.filter(id => id !== item.id);
      } else {
        newActiveItems = [...currentActiveItems, item.id];
      }
    } else {
      newActiveItems = currentActiveItems.includes(item.id) ? [] : [item.id];
    }

    if (activeItems.length === 0) {
      setInternalActiveItems(newActiveItems);
    }
    
    onItemsChange?.(newActiveItems);
    item.onClick?.();
  };

  const containerClasses = cn(
    "inline-flex",
    orientation === "horizontal" ? "flex-row" : "flex-col",
    spacingClasses[spacing],
    variantClasses[variant].container,
    className
  );

  return (
    <div className={containerClasses} role="toolbar">
      {items.map((item) => {
        const isActive = currentActiveItems.includes(item.id);
        
        return (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            disabled={item.disabled}
            className={cn(
              "inline-flex items-center justify-center gap-2 font-medium",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1",
              sizeClasses[size],
              variantClasses[variant].item,
              isActive
                ? variantClasses[variant].active
                : variantClasses[variant].inactive,
              item.disabled && variantClasses[variant].disabled
            )}
            aria-pressed={isActive}
            title={item.label}
          >
            {item.icon && (
              <span className={cn("flex-shrink-0", iconSizeClasses[size])}>
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Toolkit;`;
