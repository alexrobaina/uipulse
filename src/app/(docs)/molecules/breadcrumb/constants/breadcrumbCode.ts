export const breadcrumbCode = `import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/cn";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <ChevronRight className="w-4 h-4" />,
  showHomeIcon = false,
  className,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1", className)}
    >
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="text-neutral-400 dark:text-neutral-600 mx-2">
                {separator}
              </span>
            )}
            {index === 0 && showHomeIcon && (
              <Home className="w-4 h-4 mr-1 text-neutral-500 dark:text-neutral-400" />
            )}
            {item.href && !item.current ? (
              <a
                href={item.href}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 text-sm font-medium transition-colors duration-150"
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(
                  "text-sm font-medium",
                  item.current
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-500 dark:text-neutral-400"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`;
