export const modalCode = `"use client";

import { ReactNode, useEffect, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { X } from "lucide-react";

const modalOverlayVariants = cva([
  "fixed inset-0 z-50 flex items-center justify-center p-4",
  "bg-black/80 backdrop-blur-sm",
  "transition-all duration-300 ease-out",
  "animate-in fade-in-0",
]);

const modalContentVariants = cva(
  [
    "relative w-full max-h-[90vh] overflow-hidden",
    "bg-white text-neutral-900",
    "dark:bg-neutral-900 dark:text-neutral-100",
    "border border-neutral-200/50 dark:border-neutral-800/50",
    "shadow-2xl",
    "transition-all duration-300 ease-out",
    "animate-in zoom-in-95 fade-in-0 slide-in-from-bottom-4",
    "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2",
  ],
  {
    variants: {
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        full: "max-w-[95vw]",
      },
      variant: {
        default: [
          "rounded-xl",
        ],
        modern: [
          "rounded-2xl",
          "shadow-[0_25px_50px_-12px_rgb(0,0,0,0.25)]",
          "dark:shadow-[0_25px_50px_-12px_rgb(0,0,0,0.5)]",
        ],
        minimal: [
          "rounded-lg",
          "shadow-lg",
          "border-0",
        ],
        elevated: [
          "rounded-xl",
          "shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1),_0_10px_10px_-5px_rgb(0,0,0,0.04)]",
          "dark:shadow-[0_20px_25px_-5px_rgb(0,0,0,0.3),_0_10px_10px_-5px_rgb(0,0,0,0.2)]",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

const modalHeaderVariants = cva([
  "flex items-center justify-between",
  "px-6 py-5",
  "border-b border-neutral-100 dark:border-neutral-800",
]);

const modalTitleVariants = cva([
  "text-xl font-semibold leading-6 tracking-tight",
  "text-neutral-900 dark:text-neutral-100",
]);

const modalDescriptionVariants = cva([
  "mt-1 text-sm leading-5",
  "text-neutral-500 dark:text-neutral-400",
]);

const modalBodyVariants = cva([
  "px-6 py-5 overflow-y-auto",
  "text-neutral-700 dark:text-neutral-300",
  "text-sm leading-relaxed",
]);

const modalFooterVariants = cva([
  "flex items-center justify-end gap-3",
  "px-6 py-5",
  "bg-neutral-50/50 dark:bg-neutral-800/20",
  "border-t border-neutral-100 dark:border-neutral-800",
]);

const modalCloseButtonVariants = cva([
  "absolute top-4 right-4 z-10",
  "flex items-center justify-center",
  "w-8 h-8 rounded-full",
  "text-neutral-400 hover:text-neutral-600",
  "dark:text-neutral-500 dark:hover:text-neutral-300",
  "hover:bg-neutral-100 dark:hover:bg-neutral-800",
  "transition-all duration-200",
  "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2",
  "focus:ring-offset-white dark:focus:ring-offset-neutral-900",
]);

export interface ModalProps extends VariantProps<typeof modalContentVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  initialFocus?: string;
}

export interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

export interface ModalTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface ModalDescriptionProps {
  children: ReactNode;
  className?: string;
}

export interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      children,
      className,
      size = "md",
      variant = "default",
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      initialFocus,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && closeOnEscape) {
          onClose();
        }
      };

      const handleFocus = () => {
        if (initialFocus) {
          const element = document.querySelector(initialFocus) as HTMLElement;
          element?.focus();
        }
      };

      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      
      document.addEventListener("keydown", handleEscape);
      const timer = setTimeout(handleFocus, 150);

      return () => {
        document.body.style.overflow = originalStyle;
        document.removeEventListener("keydown", handleEscape);
        clearTimeout(timer);
      };
    }, [isOpen, onClose, closeOnEscape, initialFocus]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div 
        className={modalOverlayVariants()} 
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div
          ref={ref}
          className={cn(modalContentVariants({ size, variant }), className)}
          tabIndex={-1}
          {...props}
        >
          {showCloseButton && (
            <button
              onClick={onClose}
              className={modalCloseButtonVariants()}
              aria-label="Close modal"
              type="button"
            >
              <X className="w-4 h-4" strokeWidth={2} />
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modalHeaderVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, className, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        id="modal-title"
        className={cn(modalTitleVariants(), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        id="modal-description"
        className={cn(modalDescriptionVariants(), className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modalBodyVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modalFooterVariants(), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Modal.displayName = "Modal";
ModalHeader.displayName = "ModalHeader";
ModalTitle.displayName = "ModalTitle";
ModalDescription.displayName = "ModalDescription";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";

export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  modalOverlayVariants,
  modalContentVariants,
  modalHeaderVariants,
  modalTitleVariants,
  modalDescriptionVariants,
  modalBodyVariants,
  modalFooterVariants,
  modalCloseButtonVariants,
};
export default Modal;`;
