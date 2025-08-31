'use client';
import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  siblings?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'ghost';
  disabled?: boolean;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  siblings = 1,
  size = 'md',
  variant = 'default',
  disabled = false,
  className,
}) => {
  const sizeClasses = {
    sm: 'h-8 min-w-8 px-2 text-sm',
    md: 'h-10 min-w-10 px-3 text-sm',
    lg: 'h-12 min-w-12 px-4 text-base',
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const variantClasses = {
    default: {
      button: cn(
        'bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50',
        'dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800'
      ),
      active: cn(
        'bg-blue-600 border-blue-600 text-white hover:bg-blue-700',
        'dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700'
      ),
      disabled:
        'opacity-50 cursor-not-allowed hover:bg-white dark:hover:bg-neutral-900',
    },
    outline: {
      button: cn(
        'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400',
        'dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-neutral-500'
      ),
      active: cn(
        'border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100',
        'dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30'
      ),
      disabled:
        'opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent',
    },
    ghost: {
      button: cn(
        'text-neutral-700 hover:bg-neutral-100',
        'dark:text-neutral-300 dark:hover:bg-neutral-800'
      ),
      active: cn(
        'bg-blue-100 text-blue-700 hover:bg-blue-200',
        'dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30'
      ),
      disabled:
        'opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent',
    },
  };

  // Generate page numbers to display
  const getVisiblePages = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];

    // Always show first page
    if (showFirstLast) {
      pages.push(1);
    }

    // Calculate start and end of sibling pages
    const start = Math.max(showFirstLast ? 2 : 1, currentPage - siblings);
    const end = Math.min(
      showFirstLast ? totalPages - 1 : totalPages,
      currentPage + siblings
    );

    // Add ellipsis after first page if needed
    if (showFirstLast && start > 2) {
      pages.push('ellipsis');
    }

    // Add sibling pages
    for (let i = start; i <= end; i++) {
      if (!showFirstLast || (i !== 1 && i !== totalPages)) {
        pages.push(i);
      }
    }

    // Add ellipsis before last page if needed
    if (showFirstLast && end < totalPages - 1) {
      pages.push('ellipsis');
    }

    // Always show last page
    if (showFirstLast && totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <nav
      className={cn('flex items-center gap-1', className)}
      aria-label='Pagination'
    >
      {/* First page button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={disabled || currentPage === 1}
          className={cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            sizeClasses[size],
            variantClasses[variant].button,
            (disabled || currentPage === 1) && variantClasses[variant].disabled
          )}
          aria-label='Go to first page'
        >
          <ChevronLeft className={iconSizeClasses[size]} />
          <ChevronLeft className={cn(iconSizeClasses[size], '-ml-1')} />
        </button>
      )}

      {/* Previous page button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={disabled || currentPage === 1}
          className={cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            sizeClasses[size],
            variantClasses[variant].button,
            (disabled || currentPage === 1) && variantClasses[variant].disabled
          )}
          aria-label='Go to previous page'
        >
          <ChevronLeft className={iconSizeClasses[size]} />
        </button>
      )}

      {/* Page numbers */}
      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <div
              key={`ellipsis-${index}`}
              className={cn(
                'inline-flex items-center justify-center text-neutral-500 dark:text-neutral-400',
                sizeClasses[size]
              )}
              aria-hidden='true'
            >
              <MoreHorizontal className={iconSizeClasses[size]} />
            </div>
          );
        }

        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={disabled}
            className={cn(
              'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
              sizeClasses[size],
              isActive
                ? variantClasses[variant].active
                : variantClasses[variant].button,
              disabled && variantClasses[variant].disabled
            )}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      {/* Next page button */}
      {showPrevNext && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={disabled || currentPage === totalPages}
          className={cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            sizeClasses[size],
            variantClasses[variant].button,
            (disabled || currentPage === totalPages) &&
              variantClasses[variant].disabled
          )}
          aria-label='Go to next page'
        >
          <ChevronRight className={iconSizeClasses[size]} />
        </button>
      )}

      {/* Last page button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          className={cn(
            'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            sizeClasses[size],
            variantClasses[variant].button,
            (disabled || currentPage === totalPages) &&
              variantClasses[variant].disabled
          )}
          aria-label='Go to last page'
        >
          <ChevronRight className={iconSizeClasses[size]} />
          <ChevronRight className={cn(iconSizeClasses[size], '-ml-1')} />
        </button>
      )}
    </nav>
  );
};

export default Pagination;
