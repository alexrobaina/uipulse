import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({
  className,
  title,
  description,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {title && (
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
