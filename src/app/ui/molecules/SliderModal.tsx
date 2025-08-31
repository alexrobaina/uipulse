'use client';
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const sliderModalVariants = cva(['fixed inset-0 z-50 flex'], {
  variants: {
    side: {
      left: 'justify-start items-stretch',
      right: 'justify-end items-stretch',
      top: 'items-start justify-stretch flex-col',
      bottom: 'items-end justify-stretch flex-col',
    },
  },
  defaultVariants: {
    side: 'right',
  },
});

const overlayVariants = cva([
  'fixed inset-0 bg-black/50 backdrop-blur-sm',
  'transition-opacity duration-300 ease-out',
  'data-[state=open]:opacity-100 data-[state=closed]:opacity-0',
]);

const contentVariants = cva(
  [
    'relative bg-white dark:bg-neutral-900',
    'shadow-2xl border-0',
    'flex flex-col',
    'transition-all duration-300 ease-out',
    'focus:outline-none',
  ],
  {
    variants: {
      side: {
        left: [
          'h-full w-full max-w-sm sm:max-w-md lg:max-w-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
        right: [
          'h-full w-full max-w-sm sm:max-w-md lg:max-w-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
        top: [
          'w-full h-full max-h-[50vh] lg:max-h-[70vh]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
        bottom: [
          'w-full h-full max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh]',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
      variant: {
        default: ['border-neutral-200 dark:border-neutral-800'],
        modern: [
          'border-neutral-200/40 dark:border-neutral-800/40',
          'backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95',
        ],
        elevated: [
          'border-neutral-200/50 dark:border-neutral-800/50',
          'shadow-2xl shadow-neutral-900/25',
        ],
      },
      size: {
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
    compoundVariants: [
      // Left/Right sizing
      {
        side: ['left', 'right'],
        size: 'sm',
        className: 'max-w-sm',
      },
      {
        side: ['left', 'right'],
        size: 'md',
        className: 'max-w-md',
      },
      {
        side: ['left', 'right'],
        size: 'lg',
        className: 'max-w-lg',
      },
      {
        side: ['left', 'right'],
        size: 'xl',
        className: 'max-w-2xl',
      },
      // Top/Bottom sizing
      {
        side: ['top', 'bottom'],
        size: 'sm',
        className: 'max-h-[30vh]',
      },
      {
        side: ['top', 'bottom'],
        size: 'md',
        className: 'max-h-[50vh]',
      },
      {
        side: ['top', 'bottom'],
        size: 'lg',
        className: 'max-h-[70vh]',
      },
      {
        side: ['top', 'bottom'],
        size: 'xl',
        className: 'max-h-[85vh]',
      },
    ],
    defaultVariants: {
      side: 'right',
      variant: 'default',
      size: 'md',
    },
  }
);

const headerVariants = cva([
  'flex items-center justify-between p-6 border-b',
  'border-neutral-200 dark:border-neutral-800',
  'bg-neutral-50/50 dark:bg-neutral-800/50',
]);

const titleVariants = cva([
  'text-lg font-semibold text-neutral-900 dark:text-neutral-100',
  'leading-none tracking-tight',
]);

const descriptionVariants = cva([
  'text-sm text-neutral-600 dark:text-neutral-400',
  'mt-1',
]);

const closeButtonVariants = cva([
  'rounded-md p-2 text-neutral-400 hover:text-neutral-600',
  'dark:text-neutral-500 dark:hover:text-neutral-300',
  'hover:bg-neutral-100 dark:hover:bg-neutral-800',
  'transition-colors duration-150',
  'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2',
  'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
]);

const bodyVariants = cva([
  'flex-1 overflow-y-auto p-6',
  'text-neutral-700 dark:text-neutral-300',
]);

const footerVariants = cva([
  'flex items-center justify-end gap-3 p-6 border-t',
  'border-neutral-200 dark:border-neutral-800',
  'bg-neutral-50/50 dark:bg-neutral-800/50',
]);

export interface SliderModalProps extends VariantProps<typeof contentVariants> {
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
   * Prevent scroll on body when open
   */
  preventScroll?: boolean;
  /**
   * Custom overlay class name
   */
  overlayClassName?: string;
  /**
   * Custom trigger element
   */
  trigger?: React.ReactNode;
}

const SliderModal: React.FC<SliderModalProps> = ({
  side = 'right',
  variant = 'default',
  size = 'md',
  title,
  description,
  children,
  footer,
  header,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  preventScroll = true,
  overlayClassName,
  trigger,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
  };

  const handleClose = () => {
    handleOpenChange(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen && closeOnEscape) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, closeOnEscape]);

  useEffect(() => {
    if (isOpen && preventScroll) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, preventScroll]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Trigger */}
      {trigger && <div onClick={() => handleOpenChange(true)}>{trigger}</div>}

      {/* Modal */}
      {isOpen && (
        <div className={cn(sliderModalVariants({ side }))}>
          {/* Overlay */}
          <div
            className={cn(overlayVariants(), overlayClassName)}
            data-state={isOpen ? 'open' : 'closed'}
            onClick={handleOverlayClick}
          />

          {/* Content */}
          <div
            ref={contentRef}
            className={cn(contentVariants({ side, variant, size }), className)}
            data-state={isOpen ? 'open' : 'closed'}
            role='dialog'
            aria-modal='true'
            aria-labelledby={title ? 'slider-modal-title' : undefined}
            aria-describedby={
              description ? 'slider-modal-description' : undefined
            }
            tabIndex={-1}
          >
            {/* Header */}
            {(header || title || description || showCloseButton) && (
              <div className={headerVariants()}>
                <div className='flex-1 min-w-0'>
                  {header || (
                    <>
                      {title && (
                        <h2 id='slider-modal-title' className={titleVariants()}>
                          {title}
                        </h2>
                      )}
                      {description && (
                        <p
                          id='slider-modal-description'
                          className={descriptionVariants()}
                        >
                          {description}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {showCloseButton && (
                  <button
                    onClick={handleClose}
                    className={closeButtonVariants()}
                    aria-label='Close modal'
                  >
                    <X className='w-4 h-4' />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            {children && <div className={bodyVariants()}>{children}</div>}

            {/* Footer */}
            {footer && <div className={footerVariants()}>{footer}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default SliderModal;
