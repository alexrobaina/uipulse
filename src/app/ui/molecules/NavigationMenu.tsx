'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const navigationMenuVariants = cva(['relative flex items-center'], {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col items-stretch',
    },
    variant: {
      default: '',
      modern: '',
      minimal: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
});

const menuItemVariants = cva(
  [
    'relative flex items-center justify-between',
    'px-3 py-2 text-sm font-medium',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2',
    'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        default: [
          'text-neutral-700 dark:text-neutral-300',
          'hover:text-neutral-900 dark:hover:text-neutral-100',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          'rounded-md',
        ],
        modern: [
          'text-neutral-600 dark:text-neutral-400',
          'hover:text-neutral-900 dark:hover:text-neutral-100',
          'hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
          'rounded-lg',
        ],
        minimal: [
          'text-neutral-600 dark:text-neutral-400',
          'hover:text-neutral-900 dark:hover:text-neutral-100',
          'rounded-none border-b-2 border-transparent',
          'hover:border-neutral-200 dark:hover:border-neutral-700',
        ],
      },
      active: {
        true: '',
        false: '',
      },
      disabled: {
        true: [
          'opacity-50 cursor-not-allowed',
          'hover:text-current hover:bg-transparent hover:border-transparent',
        ],
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        active: true,
        className: [
          'bg-neutral-100 dark:bg-neutral-800',
          'text-neutral-900 dark:text-neutral-100',
        ],
      },
      {
        variant: 'modern',
        active: true,
        className: [
          'bg-blue-50 dark:bg-blue-900/20',
          'text-blue-900 dark:text-blue-100',
        ],
      },
      {
        variant: 'minimal',
        active: true,
        className: [
          'border-blue-500 dark:border-blue-400',
          'text-blue-600 dark:text-blue-400',
        ],
      },
    ],
    defaultVariants: {
      variant: 'default',
      active: false,
      disabled: false,
    },
  }
);

const dropdownVariants = cva(
  [
    'absolute z-50 min-w-[200px]',
    'bg-white dark:bg-neutral-900',
    'border border-neutral-200 dark:border-neutral-800',
    'rounded-lg shadow-lg',
    'py-2',
    'transition-all duration-200 ease-out',
    'opacity-0 invisible scale-95',
    'data-[state=open]:opacity-100 data-[state=open]:visible data-[state=open]:scale-100',
  ],
  {
    variants: {
      variant: {
        default: ['shadow-lg shadow-neutral-900/10 dark:shadow-neutral-900/20'],
        modern: [
          'shadow-[0_8px_25px_0px_rgba(0,0,0,0.06)]',
          'dark:shadow-[0_8px_25px_0px_rgba(0,0,0,0.25)]',
          'backdrop-blur-xl bg-white/95 dark:bg-neutral-900/95',
        ],
        minimal: ['shadow-md'],
      },
      position: {
        'bottom-start': 'top-full left-0 mt-1',
        'bottom-end': 'top-full right-0 mt-1',
        'top-start': 'bottom-full left-0 mb-1',
        'top-end': 'bottom-full right-0 mb-1',
        'right-start': 'left-full top-0 ml-1',
        'left-start': 'right-full top-0 mr-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'bottom-start',
    },
  }
);

export interface NavigationMenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  children?: NavigationMenuItem[];
  onClick?: () => void;
  badge?: string | number;
  description?: string;
}

export interface NavigationMenuProps
  extends VariantProps<typeof navigationMenuVariants> {
  /**
   * Menu items
   */
  items: NavigationMenuItem[];
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Whether to show icons
   */
  showIcons?: boolean;
  /**
   * Trigger mode for dropdowns
   */
  trigger?: 'hover' | 'click';
  /**
   * Delay before closing on mouse leave (ms)
   */
  closeDelay?: number;
  /**
   * Maximum nesting depth
   */
  maxDepth?: number;
  /**
   * Item click handler
   */
  onItemClick?: (item: NavigationMenuItem) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  items,
  orientation = 'horizontal',
  variant = 'default',
  className,
  showIcons = true,
  trigger = 'hover',
  closeDelay = 150,
  maxDepth = 3,
  onItemClick,
}) => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const clearTimeout = (itemId: string) => {
    const timeout = timeoutRefs.current.get(itemId);
    if (timeout) {
      global.clearTimeout(timeout);
      timeoutRefs.current.delete(itemId);
    }
  };

  const openMenu = (itemId: string) => {
    clearTimeout(itemId);
    setOpenMenus(prev => new Set([...prev, itemId]));
  };

  const closeMenu = (itemId: string, delay: number = 0) => {
    clearTimeout(itemId);
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setOpenMenus(prev => {
          const newSet = new Set(prev);
          newSet.delete(itemId);
          return newSet;
        });
      }, delay);
      timeoutRefs.current.set(itemId, timeout);
    } else {
      setOpenMenus(prev => {
        const newSet = new Set(prev);
        newSet.delete(itemId);
        return newSet;
      });
    }
  };

  const handleItemClick = (item: NavigationMenuItem) => {
    if (item.disabled) return;

    if (trigger === 'click' && item.children && item.children.length > 0) {
      if (openMenus.has(item.id)) {
        closeMenu(item.id);
      } else {
        openMenu(item.id);
      }
    } else {
      if (item.onClick) {
        item.onClick();
      }
      if (item.href) {
        window.location.href = item.href;
      }
      onItemClick?.(item);

      // Close all menus after navigation
      setOpenMenus(new Set());
    }
  };

  const handleMouseEnter = (itemId: string) => {
    if (trigger === 'hover') {
      openMenu(itemId);
    }
  };

  const handleMouseLeave = (itemId: string) => {
    if (trigger === 'hover') {
      closeMenu(itemId, closeDelay);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    item: NavigationMenuItem
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleItemClick(item);
    } else if (event.key === 'Escape' && openMenus.has(item.id)) {
      closeMenu(item.id);
    } else if (event.key === 'ArrowDown' && item.children) {
      event.preventDefault();
      openMenu(item.id);
    }
  };

  const renderMenuItem = (
    item: NavigationMenuItem,
    depth: number = 0
  ): React.ReactNode => {
    const hasChildren =
      item.children && item.children.length > 0 && depth < maxDepth;
    const isOpen = openMenus.has(item.id);
    const isVertical = orientation === 'vertical';

    return (
      <div
        key={item.id}
        className='relative'
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={() => handleMouseLeave(item.id)}
      >
        <div
          onClick={() => handleItemClick(item)}
          onKeyDown={e => handleKeyDown(e, item)}
          className={cn(
            menuItemVariants({
              variant,
              active: item.active,
              disabled: item.disabled,
            })
          )}
          tabIndex={item.disabled ? -1 : 0}
          role='menuitem'
          aria-haspopup={hasChildren ? 'true' : undefined}
          aria-expanded={hasChildren ? isOpen : undefined}
        >
          <div className='flex items-center gap-2 min-w-0'>
            {showIcons && item.icon && (
              <div className='flex-shrink-0 w-4 h-4'>{item.icon}</div>
            )}

            <span className='truncate'>{item.label}</span>

            {item.badge && (
              <span className='ml-auto flex-shrink-0 px-1.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded'>
                {item.badge}
              </span>
            )}
          </div>

          {hasChildren && (
            <div className='flex-shrink-0 ml-2'>
              {isVertical || depth > 0 ? (
                <ChevronRight
                  className={cn(
                    'w-3 h-3 transition-transform duration-200',
                    isOpen && 'rotate-90'
                  )}
                />
              ) : (
                <ChevronDown
                  className={cn(
                    'w-3 h-3 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              )}
            </div>
          )}
        </div>

        {/* Dropdown menu */}
        {hasChildren && (
          <div
            className={cn(
              dropdownVariants({
                variant,
                position:
                  isVertical || depth > 0 ? 'right-start' : 'bottom-start',
              })
            )}
            data-state={isOpen ? 'open' : 'closed'}
            role='menu'
            aria-orientation='vertical'
          >
            {item.children!.map(child => (
              <div key={child.id}>
                {child.description ? (
                  <div className='px-3 py-2'>
                    <div
                      onClick={() => handleItemClick(child)}
                      onKeyDown={e => handleKeyDown(e, child)}
                      className={cn(
                        'flex items-start gap-3 p-2 rounded-md cursor-pointer',
                        'hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                        child.disabled &&
                          'opacity-50 cursor-not-allowed hover:bg-transparent'
                      )}
                      tabIndex={child.disabled ? -1 : 0}
                      role='menuitem'
                    >
                      {showIcons && child.icon && (
                        <div className='flex-shrink-0 w-4 h-4 mt-0.5'>
                          {child.icon}
                        </div>
                      )}
                      <div className='min-w-0'>
                        <div className='font-medium text-neutral-900 dark:text-neutral-100'>
                          {child.label}
                        </div>
                        <div className='text-xs text-neutral-600 dark:text-neutral-400 mt-0.5'>
                          {child.description}
                        </div>
                      </div>
                      {child.badge && (
                        <span className='ml-auto flex-shrink-0 px-1.5 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded'>
                          {child.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className='px-1'>{renderMenuItem(child, depth + 1)}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <nav
      className={cn(
        navigationMenuVariants({ orientation, variant }),
        className
      )}
      role='menubar'
      aria-orientation={orientation}
    >
      {items.map(item => renderMenuItem(item))}
    </nav>
  );
};

export default NavigationMenu;
