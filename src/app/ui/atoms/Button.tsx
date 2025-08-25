import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-neutral-900 text-neutral-100 hover:bg-neutral-900/90 focus:ring-ring",
      secondary:
        "bg-neutral-50 text-neutral-900 hover:bg-neutral-50/80 focus:ring-ring",
      outline:
        "border border-input bg-neutral-50 text-neutral-900 hover:bg-neutral-50/80 focus:ring-ring",
      ghost:
        "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50/80 focus:ring-ring",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400",
      md: "px-4 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50/80 focus:ring-ring",
      lg: "px-6 py-3 text-base text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50/80 focus:ring-ring",
    };

    return (
      <button
        className={
          cn(
            "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
            variants[variant] as string,
            sizes[size] as string,
            className
          ) as string
        }
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
