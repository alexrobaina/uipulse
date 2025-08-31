'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { cn } from '@/lib/cn';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  shortcut?: string;
  type?: 'item' | 'divider' | 'submenu';
  checked?: boolean;
  children?: MenuItem[];
  onClick?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  trigger: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  className?: string;
}

const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  placement = 'bottom-start',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);

  const placementClasses = {
    'bottom-start': 'top-full left-0 mt-1',
    'bottom-end': 'top-full right-0 mt-1',
    'top-start': 'bottom-full left-0 mb-1',
    'top-end': 'bottom-full right-0 mb-1',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenSubmenus(new Set());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;

    if (item.type === 'submenu') {
      const newOpenSubmenus = new Set(openSubmenus);
      if (openSubmenus.has(item.id)) {
        newOpenSubmenus.delete(item.id);
      } else {
        newOpenSubmenus.add(item.id);
      }
      setOpenSubmenus(newOpenSubmenus);
    } else {
      item.onClick?.();
      setIsOpen(false);
      setOpenSubmenus(new Set());
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    if (item.type === 'divider') {
      return (
        <div
          key={item.id}
          className='my-1 border-t border-neutral-200 dark:border-neutral-700'
        />
      );
    }

    const isSubmenuOpen = openSubmenus.has(item.id);

    return (
      <div key={item.id} className='relative'>
        <button
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
          className={cn(
            'w-full flex items-center justify-between px-3 py-2 text-left text-sm',
            'hover:bg-neutral-50 dark:hover:bg-neutral-800',
            'focus:bg-neutral-50 dark:focus:bg-neutral-800 focus:outline-none',
            'text-neutral-900 dark:text-neutral-100',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-150'
          )}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          <div className='flex items-center gap-2 flex-1 min-w-0'>
            {item.icon && (
              <span className='flex-shrink-0 text-neutral-500 dark:text-neutral-400'>
                {item.icon}
              </span>
            )}
            <span className='truncate'>{item.label}</span>
            {item.checked && (
              <Check className='w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0' />
            )}
          </div>

          <div className='flex items-center gap-2 flex-shrink-0'>
            {item.shortcut && (
              <span className='text-xs text-neutral-500 dark:text-neutral-400'>
                {item.shortcut}
              </span>
            )}
            {item.type === 'submenu' && (
              <ChevronRight className='w-4 h-4 text-neutral-400' />
            )}
          </div>
        </button>

        {/* Submenu */}
        {item.type === 'submenu' && item.children && isSubmenuOpen && (
          <div className='bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700 ml-4'>
            {item.children.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={cn('relative inline-block', className)} ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 min-w-48 bg-white dark:bg-neutral-900',
            'border border-neutral-200 dark:border-neutral-700',
            'rounded-lg shadow-lg py-1',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            placementClasses[placement]
          )}
        >
          {items.map(item => renderMenuItem(item))}
        </div>
      )}
    </div>
  );
};

export default Menu;
