export const sliderModalCode = `"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const contentVariants = cva([
  "relative bg-white dark:bg-neutral-900",
  "shadow-2xl border-0",
  "flex flex-col",
  "transition-all duration-300 ease-out",
  "focus:outline-none",
], {
  variants: {
    side: {
      left: [
        "h-full w-full max-w-sm sm:max-w-md lg:max-w-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
      ],
      right: [
        "h-full w-full max-w-sm sm:max-w-md lg:max-w-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      ],
      top: [
        "w-full h-full max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      ],
      bottom: [
        "w-full h-full max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      ],
    },
    variant: {
      default: [
        "border-neutral-200 dark:border-neutral-800",
      ],
      modern: [
        "border-neutral-200/40 dark:border-neutral-800/40",
        "backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95",
      ],
      elevated: [
        "border-neutral-200/50 dark:border-neutral-800/50",
        "shadow-2xl shadow-neutral-900/25",
      ],
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  defaultVariants: {
    side: "right",
    variant: "default",
    size: "md",
  },
});

export interface SliderModalProps extends VariantProps<typeof contentVariants> {
  /**
   * Whether the modal is open
   */
  open?: boolean;
  /**
   * Default open state
   */
  defaultOpen?: boolean;
  /**
   * Open state change handler
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Modal title
   */
  title?: string;
  /**
   * Modal description
   */
  description?: string;
  /**
   * Modal content
   */
  children?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Custom header content
   */
  header?: React.ReactNode;
  /**
   * Whether to show the close button
   */
  showCloseButton?: boolean;
  /**
   * Whether to close on overlay click
   */
  closeOnOverlayClick?: boolean;
  /**
   * Whether to close on escape key
   */
  closeOnEscape?: boolean;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom trigger element
   */
  trigger?: React.ReactNode;
}

const SliderModal: React.FC<SliderModalProps> = ({
  open,
  defaultOpen = false,
  onOpenChange,
  side = "right",
  variant = "default",
  size = "md",
  title,
  description,
  children,
  footer,
  header,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  trigger,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isOpen = open !== undefined ? open : internalOpen;

  // Modal implementation logic...

  return (
    <>
      {trigger && (
        <div onClick={() => handleOpenChange(true)}>
          {trigger}
        </div>
      )}
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Content */}
          <div
            ref={contentRef}
            className={cn(contentVariants({ side, variant, size }), className)}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal content */}
          </div>
        </div>
      )}
    </>
  );
};

export default SliderModal;`;
