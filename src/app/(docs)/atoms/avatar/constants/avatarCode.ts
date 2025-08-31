export const avatarCode = `import { HTMLAttributes, forwardRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const avatarVariants = cva(
  [
    "relative flex shrink-0 overflow-hidden",
    "bg-neutral-100 dark:bg-neutral-800",
    "text-neutral-600 dark:text-neutral-400",
    "select-none items-center justify-center",
    "font-medium",
  ],
  {
    variants: {
      variant: {
        circle: "rounded-full",
        square: "rounded-lg",
        rounded: "rounded-md",
      },
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
        "2xl": "h-20 w-20 text-xl",
      },
    },
    defaultVariants: {
      variant: "circle",
      size: "md",
    },
  }
);

const avatarImageVariants = cva("aspect-square h-full w-full object-cover", {
  variants: {
    variant: {
      circle: "rounded-full",
      square: "rounded-lg",
      rounded: "rounded-md",
    },
  },
});

const avatarFallbackVariants = cva(
  [
    "flex h-full w-full items-center justify-center",
    "bg-neutral-100 dark:bg-neutral-800",
    "text-neutral-600 dark:text-neutral-400",
    "font-medium uppercase",
  ],
  {
    variants: {
      variant: {
        circle: "rounded-full",
        square: "rounded-lg",
        rounded: "rounded-md",
      },
    },
  }
);

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Alt text for the image
   */
  alt?: string;
  /**
   * Fallback content (usually initials)
   */
  fallback?: string;
  /**
   * Show online status indicator
   */
  showStatus?: boolean;
  /**
   * Status of the user
   */
  status?: "online" | "offline" | "away" | "busy";
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      fallback,
      showStatus = false,
      status = "offline",
      variant = "circle",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };

    const displayFallback = !src || imageError || !imageLoaded;
    const initials = fallback ? getInitials(fallback) : "?";

    const statusColors = {
      online: "bg-green-500",
      offline: "bg-neutral-400 dark:bg-neutral-600",
      away: "bg-yellow-500",
      busy: "bg-red-500",
    };

    const statusSizes = {
      xs: "h-1.5 w-1.5",
      sm: "h-2 w-2",
      md: "h-2.5 w-2.5",
      lg: "h-3 w-3",
      xl: "h-3.5 w-3.5",
      "2xl": "h-4 w-4",
    };

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ variant, size }), className)}
        {...props}
      >
        {src && !imageError && (
          <img
            src={src}
            alt={alt || fallback || "Avatar"}
            className={cn(avatarImageVariants({ variant }))}
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded && !imageError ? 'block' : 'none' }}
          />
        )}
        
        {displayFallback && (
          <div className={cn(avatarFallbackVariants({ variant }))}>
            {initials}
          </div>
        )}

        {showStatus && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-neutral-900",
              statusColors[status],
              statusSizes[size]
            )}
            aria-label={\`Status: \${status}\`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants, avatarImageVariants, avatarFallbackVariants };
export default Avatar;`;
