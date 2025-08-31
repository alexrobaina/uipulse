'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ShowMoreProps {
  children: React.ReactNode;
  maxHeight?: number;
  showText?: string;
  hideText?: string;
  gradient?: boolean;
  buttonPosition?: 'left' | 'center' | 'right';
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  className?: string;
}

const ShowMore: React.FC<ShowMoreProps> = ({
  children,
  maxHeight = 150,
  showText = 'Show more',
  hideText = 'Show less',
  gradient = true,
  buttonPosition = 'left',
  variant = 'default',
  size = 'md',
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonPositionClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const variantClasses = {
    default:
      'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    outline: cn(
      'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
      'border border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700',
      'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    ),
    ghost: cn(
      'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
      'hover:bg-neutral-100 dark:hover:bg-neutral-800'
    ),
  };

  return (
    <div className={cn('relative', className)}>
      <div
        className={cn(
          'transition-all duration-300 ease-in-out overflow-hidden',
          !isExpanded && `max-h-[${maxHeight}px]`
        )}
        style={!isExpanded ? { maxHeight: `${maxHeight}px` } : undefined}
      >
        {children}
      </div>

      {!isExpanded && gradient && (
        <div
          className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-neutral-900 pointer-events-none'
          style={{ height: '4rem' }}
        />
      )}

      <div className={cn('flex mt-4', buttonPositionClasses[buttonPosition])}>
        <button
          onClick={toggleExpansion}
          className={cn(
            'inline-flex items-center gap-2 font-medium rounded-md',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'active:scale-95',
            sizeClasses[size],
            variantClasses[variant]
          )}
        >
          {isExpanded ? hideText : showText}
          {isExpanded ? (
            <ChevronUp className='w-4 h-4 transition-transform duration-200' />
          ) : (
            <ChevronDown className='w-4 h-4 transition-transform duration-200' />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShowMore;
