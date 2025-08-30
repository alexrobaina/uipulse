"use client";

import { useState, ReactNode, forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

const navbarVariants = cva(
  [
    "w-full border-b transition-colors duration-200",
    "bg-white/95 backdrop-blur-sm text-neutral-900",
    "dark:bg-neutral-900/95 dark:text-neutral-100",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-200",
          "dark:border-neutral-800",
        ],
        floating: [
          "border-neutral-300 shadow-sm",
          "dark:border-neutral-700 dark:shadow-lg",
        ],
        solid: [
          "border-neutral-200 bg-white dark:bg-neutral-900",
          "dark:border-neutral-800",
        ],
        ghost: [
          "border-transparent bg-transparent backdrop-blur-none",
          "dark:bg-transparent",
        ],
      },
      size: {
        sm: "h-12",
        md: "h-16",
        lg: "h-20",
      },
      sticky: {
        true: "sticky top-0 z-40",
        false: "relative",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      sticky: false,
    },
  }
);

const navbarContainerVariants = cva([
  "mx-auto flex items-center justify-between px-4 h-full",
], {
  variants: {
    maxWidth: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md", 
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    maxWidth: "xl",
  },
});

const navbarBrandVariants = cva([
  "flex items-center space-x-2 font-bold text-lg",
  "text-neutral-900 dark:text-neutral-100",
  "hover:text-neutral-700 dark:hover:text-neutral-300",
  "transition-colors duration-200",
]);

const navbarMenuVariants = cva([
  "hidden md:flex items-center space-x-8",
]);

const navbarLinkVariants = cva([
  "text-sm font-medium transition-colors duration-200",
  "text-neutral-600 hover:text-neutral-900",
  "dark:text-neutral-400 dark:hover:text-neutral-100",
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  "rounded-md px-3 py-2",
], {
  variants: {
    active: {
      true: [
        "text-neutral-900 dark:text-neutral-100",
        "bg-neutral-100 dark:bg-neutral-800",
      ],
      false: "",
    },
  },
});

const navbarMobileButtonVariants = cva([
  "md:hidden flex items-center justify-center",
  "w-10 h-10 rounded-md",
  "text-neutral-600 hover:text-neutral-900",
  "dark:text-neutral-400 dark:hover:text-neutral-100",
  "hover:bg-neutral-100 dark:hover:bg-neutral-800",
  "transition-colors duration-200",
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
]);

const navbarMobileMenuVariants = cva([
  "absolute top-full left-0 w-full z-50",
  "bg-white dark:bg-neutral-900",
  "border-b border-neutral-200 dark:border-neutral-800",
  "shadow-lg md:hidden",
  "animate-in slide-in-from-top-2 fade-in-0 duration-200",
]);

const navbarActionsVariants = cva([
  "flex items-center space-x-4",
]);

export interface NavbarItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
}

export interface NavbarProps
  extends VariantProps<typeof navbarVariants>,
    VariantProps<typeof navbarContainerVariants> {
  /**
   * Brand content (logo, company name, etc.)
   */
  brand?: ReactNode;
  /**
   * Navigation items
   */
  items?: NavbarItem[];
  /**
   * Right-side content (buttons, user menu, etc.)
   */
  actions?: ReactNode;
  /**
   * Additional className for the navbar
   */
  className?: string;
  /**
   * Additional className for the container
   */
  containerClassName?: string;
}

export interface NavbarBrandProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export interface NavbarMenuProps {
  children: ReactNode;
  className?: string;
}

export interface NavbarLinkProps extends VariantProps<typeof navbarLinkVariants> {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
}

export interface NavbarActionsProps {
  children: ReactNode;
  className?: string;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      brand,
      items = [],
      actions,
      variant = "default",
      size = "md",
      sticky = false,
      maxWidth = "xl",
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <nav
        ref={ref}
        className={cn(navbarVariants({ variant, size, sticky }), className)}
        {...props}
      >
        <div
          className={cn(
            navbarContainerVariants({ maxWidth }),
            containerClassName
          )}
        >
          {/* Brand */}
          {brand && <div className={navbarBrandVariants()}>{brand}</div>}

          {/* Desktop Menu */}
          {items.length > 0 && (
            <div className={navbarMenuVariants()}>
              {items.map((item) => (
                <NavbarLink
                  key={item.href}
                  href={item.href}
                  active={item.active}
                  external={item.external}
                >
                  {item.label}
                </NavbarLink>
              ))}
            </div>
          )}

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {actions && (
              <div className={navbarActionsVariants()}>{actions}</div>
            )}

            {/* Mobile Menu Button */}
            {items.length > 0 && (
              <button
                className={navbarMobileButtonVariants()}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && items.length > 0 && (
          <div className={navbarMobileMenuVariants()}>
            <div className="px-4 py-2 space-y-1">
              {items.map((item) => (
                <NavbarLink
                  key={item.href}
                  href={item.href}
                  active={item.active}
                  external={item.external}
                  className="block w-full text-left"
                >
                  {item.label}
                </NavbarLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

const NavbarBrand = forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ children, href = "/", className, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(navbarBrandVariants(), className)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

const NavbarMenu = forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(navbarMenuVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ children, href, active = false, external = false, className, ...props }, ref) => {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(navbarLinkVariants({ active }), className)}
        {...linkProps}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

const NavbarActions = forwardRef<HTMLDivElement, NavbarActionsProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(navbarActionsVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Navbar.displayName = "Navbar";
NavbarBrand.displayName = "NavbarBrand";
NavbarMenu.displayName = "NavbarMenu";
NavbarLink.displayName = "NavbarLink";
NavbarActions.displayName = "NavbarActions";

export {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarLink,
  NavbarActions,
  navbarVariants,
  navbarContainerVariants,
  navbarBrandVariants,
  navbarMenuVariants,
  navbarLinkVariants,
  navbarMobileButtonVariants,
  navbarMobileMenuVariants,
  navbarActionsVariants,
};
export default Navbar;