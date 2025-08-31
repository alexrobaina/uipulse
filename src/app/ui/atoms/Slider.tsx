'use client';
import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/cn';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  defaultValue?: number[];
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  showTooltip?: boolean;
  formatLabel?: (value: number) => string;
  onValueChange?: (values: number[]) => void;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = [50],
  disabled = false,
  orientation = 'horizontal',
  size = 'md',
  showLabels = false,
  showTooltip = false,
  formatLabel = val => val.toString(),
  onValueChange,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value || defaultValue);
  const [isDragging, setIsDragging] = useState(-1);
  const [showTooltips, setShowTooltips] = useState<boolean[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentValue = value || internalValue;
  const isHorizontal = orientation === 'horizontal';

  const sizeClasses = {
    sm: {
      track: isHorizontal ? 'h-1' : 'w-1 h-32',
      thumb: 'w-3 h-3',
      tooltip: 'text-xs px-1.5 py-0.5',
    },
    md: {
      track: isHorizontal ? 'h-2' : 'w-2 h-40',
      thumb: 'w-4 h-4',
      tooltip: 'text-sm px-2 py-1',
    },
    lg: {
      track: isHorizontal ? 'h-3' : 'w-3 h-48',
      thumb: 'w-5 h-5',
      tooltip: 'text-sm px-2 py-1',
    },
  };

  const getValueFromPosition = useCallback(
    (clientX: number, clientY: number): number => {
      if (!sliderRef.current) return min;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = isHorizontal
        ? Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
        : Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));

      const rawValue = min + percentage * (max - min);
      return Math.round(rawValue / step) * step;
    },
    [min, max, step, isHorizontal]
  );

  const handleMouseDown = (index: number) => (e: React.MouseEvent) => {
    if (disabled) return;
    e.preventDefault();
    setIsDragging(index);
    setShowTooltips(prev => {
      const newTooltips = [...prev];
      newTooltips[index] = true;
      return newTooltips;
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging === -1 || disabled) return;

      const newValue = getValueFromPosition(e.clientX, e.clientY);
      const newValues = [...currentValue];
      newValues[isDragging] = Math.max(min, Math.min(max, newValue));

      if (!value) {
        setInternalValue(newValues);
      }
      onValueChange?.(newValues);
    },
    [
      isDragging,
      disabled,
      getValueFromPosition,
      currentValue,
      min,
      max,
      value,
      onValueChange,
    ]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging !== -1) {
      setShowTooltips(prev => {
        const newTooltips = [...prev];
        newTooltips[isDragging] = false;
        return newTooltips;
      });
      setIsDragging(-1);
    }
  }, [isDragging]);

  React.useEffect(() => {
    if (isDragging !== -1) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getThumbPosition = (val: number) => {
    const percentage = (val - min) / (max - min);
    return isHorizontal ? `${percentage * 100}%` : `${(1 - percentage) * 100}%`;
  };

  const getTrackFill = () => {
    if (currentValue.length === 1) {
      const percentage = (currentValue[0] - min) / (max - min);
      return isHorizontal
        ? { width: `${percentage * 100}%` }
        : {
            height: `${percentage * 100}%`,
            marginTop: `${(1 - percentage) * 100}%`,
          };
    }

    // Multiple thumbs - fill between min and max values
    const minVal = Math.min(...currentValue);
    const maxVal = Math.max(...currentValue);
    const startPercentage = (minVal - min) / (max - min);
    const endPercentage = (maxVal - min) / (max - min);

    return isHorizontal
      ? {
          left: `${startPercentage * 100}%`,
          width: `${(endPercentage - startPercentage) * 100}%`,
        }
      : {
          bottom: `${startPercentage * 100}%`,
          height: `${(endPercentage - startPercentage) * 100}%`,
        };
  };

  return (
    <div
      className={cn('relative', isHorizontal ? 'w-full' : 'h-full', className)}
    >
      {showLabels && (
        <div
          className={cn(
            'flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-2',
            !isHorizontal && 'flex-col h-full'
          )}
        >
          <span>{formatLabel(min)}</span>
          <span>{formatLabel(max)}</span>
        </div>
      )}

      <div
        ref={sliderRef}
        className={cn(
          'relative bg-neutral-200 dark:bg-neutral-700 rounded-full cursor-pointer',
          sizeClasses[size].track,
          disabled && 'opacity-50 cursor-not-allowed',
          isHorizontal ? 'w-full' : 'mx-auto'
        )}
        onClick={e => {
          if (disabled || currentValue.length > 1) return;
          const newValue = getValueFromPosition(e.clientX, e.clientY);
          const newValues = [Math.max(min, Math.min(max, newValue))];

          if (!value) {
            setInternalValue(newValues);
          }
          onValueChange?.(newValues);
        }}
      >
        {/* Track Fill */}
        <div
          className='absolute bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-150'
          style={{
            ...getTrackFill(),
            [isHorizontal ? 'height' : 'width']: '100%',
          }}
        />

        {/* Thumbs */}
        {currentValue.map((val, index) => (
          <div key={index} className='absolute'>
            <div
              className={cn(
                'bg-white dark:bg-neutral-100 border-2 border-blue-600 dark:border-blue-500 rounded-full cursor-pointer',
                'transform transition-all duration-150',
                'hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
                'shadow-sm hover:shadow-md',
                sizeClasses[size].thumb,
                isHorizontal
                  ? '-translate-x-1/2 -translate-y-1/2 top-1/2'
                  : '-translate-x-1/2 -translate-y-1/2 left-1/2',
                isDragging === index && 'scale-110 shadow-md'
              )}
              style={{
                [isHorizontal ? 'left' : 'bottom']: getThumbPosition(val),
              }}
              onMouseDown={handleMouseDown(index)}
              onMouseEnter={() =>
                showTooltip &&
                setShowTooltips(prev => {
                  const newTooltips = [...prev];
                  newTooltips[index] = true;
                  return newTooltips;
                })
              }
              onMouseLeave={() =>
                showTooltip &&
                isDragging === -1 &&
                setShowTooltips(prev => {
                  const newTooltips = [...prev];
                  newTooltips[index] = false;
                  return newTooltips;
                })
              }
              tabIndex={disabled ? -1 : 0}
              role='slider'
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={val}
              aria-label={`Slider thumb ${index + 1}`}
            />

            {/* Tooltip */}
            {showTooltip && showTooltips[index] && (
              <div
                className={cn(
                  'absolute z-10 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded shadow-lg',
                  'pointer-events-none whitespace-nowrap',
                  sizeClasses[size].tooltip,
                  isHorizontal
                    ? 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
                    : 'left-full top-1/2 transform -translate-y-1/2 ml-2'
                )}
                style={{
                  [isHorizontal ? 'left' : 'bottom']: getThumbPosition(val),
                }}
              >
                {formatLabel(val)}
                <div
                  className={cn(
                    'absolute w-0 h-0 border-2',
                    isHorizontal
                      ? 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-neutral-900 dark:border-t-neutral-100'
                      : 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-neutral-900 dark:border-r-neutral-100'
                  )}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
