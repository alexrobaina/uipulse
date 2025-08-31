'use client';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/cn';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click';
  delay?: number;
  children: React.ReactNode;
  className?: string;
  useFixedPosition?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  trigger = 'hover',
  delay = 200,
  children,
  className,
  useFixedPosition = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const positionClasses = useFixedPosition
    ? {
        top: '',
        bottom: '',
        left: '',
        right: '',
      }
    : {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
      };

  const calculateFixedPosition = () => {
    if (!triggerRef.current || !useFixedPosition) return;

    const rect = triggerRef.current.getBoundingClientRect();
    let x = 0,
      y = 0;

    switch (position) {
      case 'right':
        x = rect.right + 8;
        y = rect.top + rect.height / 2;
        break;
      case 'left':
        x = rect.left - 8;
        y = rect.top + rect.height / 2;
        break;
      case 'top':
        x = rect.left + rect.width / 2;
        y = rect.top - 8;
        break;
      case 'bottom':
        x = rect.left + rect.width / 2;
        y = rect.bottom + 8;
        break;
    }

    setTooltipPosition({ x, y });
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-neutral-900 dark:border-t-neutral-100',
    bottom:
      'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-neutral-900 dark:border-b-neutral-100',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-neutral-900 dark:border-l-neutral-100',
    right:
      'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-neutral-900 dark:border-r-neutral-100',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trigger === 'click' &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [trigger]);

  const showTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      if (useFixedPosition) {
        calculateFixedPosition();
      }
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      showTooltip();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      hideTooltip();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsVisible(!isVisible);
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={cn('relative inline-block', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}

        {isVisible && !useFixedPosition && (
          <div
            className={cn(
              'absolute z-[9999] px-2 py-1 text-sm text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded shadow-lg',
              'whitespace-nowrap pointer-events-none',
              'animate-in fade-in-0 zoom-in-95 duration-150',
              positionClasses[position]
            )}
            role='tooltip'
          >
            {content}
            <div
              className={cn(
                'absolute w-0 h-0 border-4',
                arrowClasses[position]
              )}
            />
          </div>
        )}
      </div>

      {isVisible &&
        useFixedPosition &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className={cn(
              'fixed px-2 py-1 text-sm text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded shadow-lg',
              'whitespace-nowrap pointer-events-none',
              'animate-in fade-in-0 zoom-in-95 duration-150',
              position === 'right' && '-translate-y-1/2',
              position === 'left' && '-translate-y-1/2 -translate-x-full',
              position === 'top' && '-translate-x-1/2 -translate-y-full',
              position === 'bottom' && '-translate-x-1/2'
            )}
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              zIndex: 9999,
            }}
            role='tooltip'
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip;
