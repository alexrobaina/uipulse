'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
  variant?: 'default' | 'bordered' | 'separated';
  className?: string;
  onValueChange?: (value: string | string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  type = 'single',
  defaultValue,
  collapsible = true,
  variant = 'default',
  className,
  onValueChange,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  useEffect(() => {
    if (defaultValue) {
      const newValue = Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue];
      setOpenItems(newValue);
    }
  }, [defaultValue]);

  const handleItemClick = (itemId: string) => {
    const item = items.find(i => i.id === itemId);
    if (item?.disabled) return;

    let newOpenItems: string[];

    if (type === 'single') {
      if (openItems.includes(itemId)) {
        newOpenItems = collapsible ? [] : [itemId];
      } else {
        newOpenItems = [itemId];
      }
    } else {
      if (openItems.includes(itemId)) {
        newOpenItems = openItems.filter(id => id !== itemId);
      } else {
        newOpenItems = [...openItems, itemId];
      }
    }

    setOpenItems(newOpenItems);
    onValueChange?.(type === 'single' ? newOpenItems[0] || '' : newOpenItems);
  };

  const variantClasses = {
    default: {
      container:
        'border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden',
      item: 'border-b border-neutral-200 dark:border-neutral-800 last:border-b-0',
      trigger:
        'w-full px-4 py-3 text-left bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150',
      content: 'px-4 pb-4 bg-white dark:bg-neutral-900',
    },
    bordered: {
      container: 'space-y-2',
      item: 'border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden',
      trigger:
        'w-full px-4 py-3 text-left bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150',
      content:
        'px-4 pb-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800',
    },
    separated: {
      container: 'space-y-4',
      item: 'bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800',
      trigger:
        'w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150 rounded-lg',
      content: 'px-4 pb-4',
    },
  };

  return (
    <div className={cn(variantClasses[variant].container, className)}>
      {items.map(item => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className={variantClasses[variant].item}>
            <button
              onClick={() => handleItemClick(item.id)}
              disabled={item.disabled}
              className={cn(
                'flex items-center justify-between font-medium text-neutral-900 dark:text-neutral-100',
                'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                variantClasses[variant].trigger
              )}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className='flex items-center gap-2'>
                {item.icon && (
                  <span className='flex-shrink-0 text-neutral-600 dark:text-neutral-400'>
                    {item.icon}
                  </span>
                )}
                <span>{item.title}</span>
              </div>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-neutral-500 transition-transform duration-200',
                  isOpen && 'transform rotate-180'
                )}
              />
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                'transition-all duration-200 ease-in-out',
                isOpen ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
              )}
              style={{
                maxHeight: isOpen ? '1000px' : '0',
                transition:
                  'max-height 0.2s ease-in-out, opacity 0.2s ease-in-out',
              }}
            >
              <div className={cn(variantClasses[variant].content)}>
                <div className='text-neutral-600 dark:text-neutral-400'>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
