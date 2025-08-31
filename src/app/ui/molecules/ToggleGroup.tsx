'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/cn';

interface ToggleGroupItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface ToggleGroupProps {
  items: ToggleGroupItem[];
  type?: 'single' | 'multiple';
  value?: string | string[];
  defaultValue?: string | string[];
  disabled?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  items,
  type = 'single',
  value,
  defaultValue,
  disabled = false,
  variant = 'default',
  size = 'md',
  orientation = 'horizontal',
  onValueChange,
  className,
}) => {
  const [internalValue, setInternalValue] = useState<string | string[]>(() => {
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    return type === 'single' ? '' : [];
  });

  const currentValue = value ?? internalValue;

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const variantClasses = {
    default: {
      container: 'bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1',
      item: 'rounded-md font-medium transition-all duration-150',
      active:
        'bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-neutral-100',
      inactive:
        'text-neutral-600 hover:text-neutral-900 hover:bg-white/50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-700/50',
    },
    outline: {
      container: 'flex gap-1',
      item: 'border border-neutral-300 dark:border-neutral-600 rounded-md font-medium transition-all duration-150',
      active:
        'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-900/20 dark:text-blue-300',
      inactive:
        'text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-800',
    },
    ghost: {
      container: 'flex gap-1',
      item: 'rounded-md font-medium transition-all duration-150',
      active:
        'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
      inactive:
        'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800',
    },
  };

  const handleItemToggle = (itemValue: string) => {
    const item = items.find(i => i.value === itemValue);
    if (item?.disabled || disabled) return;

    let newValue: string | string[];

    if (type === 'single') {
      newValue = currentValue === itemValue ? '' : itemValue;
    } else {
      const currentArray = Array.isArray(currentValue) ? currentValue : [];
      if (currentArray.includes(itemValue)) {
        newValue = currentArray.filter(v => v !== itemValue);
      } else {
        newValue = [...currentArray, itemValue];
      }
    }

    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const isActive = (itemValue: string): boolean => {
    if (type === 'single') {
      return currentValue === itemValue;
    }
    return Array.isArray(currentValue) && currentValue.includes(itemValue);
  };

  const containerClasses = cn(
    orientation === 'horizontal' ? 'flex' : 'flex flex-col',
    variantClasses[variant].container,
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <div className={containerClasses} role='group'>
      {items.map(item => {
        const active = isActive(item.value);

        return (
          <button
            key={item.value}
            onClick={() => handleItemToggle(item.value)}
            disabled={item.disabled || disabled}
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:z-10',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[size],
              variantClasses[variant].item,
              active
                ? variantClasses[variant].active
                : variantClasses[variant].inactive
            )}
            aria-pressed={active}
            title={item.label}
          >
            {item.icon && (
              <span
                className={cn(
                  'flex-shrink-0 [&>svg]:w-full [&>svg]:h-full',
                  iconSizeClasses[size]
                )}
              >
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ToggleGroup;
