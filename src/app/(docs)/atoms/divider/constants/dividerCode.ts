export const dividerCode = `import React from "react";
import { cn } from "@/lib/cn";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  thickness?: "thin" | "medium" | "thick";
  spacing?: "none" | "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  thickness = "thin",
  spacing = "md",
  label,
  className,
}) => {
  const isHorizontal = orientation === "horizontal";

  const thicknessClasses = {
    thin: isHorizontal ? "border-t" : "border-l",
    medium: isHorizontal ? "border-t-2" : "border-l-2", 
    thick: isHorizontal ? "border-t-4" : "border-l-4",
  };

  const variantClasses = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  const spacingClasses = {
    none: "",
    sm: isHorizontal ? "my-2" : "mx-2",
    md: isHorizontal ? "my-4" : "mx-4",
    lg: isHorizontal ? "my-6" : "mx-6",
  };

  const baseClasses = cn(
    "border-neutral-200 dark:border-neutral-800",
    thicknessClasses[thickness],
    variantClasses[variant],
    spacingClasses[spacing],
    isHorizontal ? "w-full" : "h-full",
    className
  );

  if (label && isHorizontal) {
    return (
      <div className={cn("flex items-center", spacingClasses[spacing])}>
        <div className={cn("flex-1", thicknessClasses[thickness], variantClasses[variant], "border-neutral-200 dark:border-neutral-800")} />
        <span className="px-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {label}
        </span>
        <div className={cn("flex-1", thicknessClasses[thickness], variantClasses[variant], "border-neutral-200 dark:border-neutral-800")} />
      </div>
    );
  }

  if (label && !isHorizontal) {
    return (
      <div className={cn("flex flex-col items-center h-full", spacingClasses[spacing])}>
        <div className={cn("flex-1 w-0", thicknessClasses[thickness], variantClasses[variant], "border-neutral-200 dark:border-neutral-800")} />
        <span className="py-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium transform -rotate-90 whitespace-nowrap">
          {label}
        </span>
        <div className={cn("flex-1 w-0", thicknessClasses[thickness], variantClasses[variant], "border-neutral-200 dark:border-neutral-800")} />
      </div>
    );
  }

  return <div className={baseClasses} role="separator" />;
};

export default Divider;`;
