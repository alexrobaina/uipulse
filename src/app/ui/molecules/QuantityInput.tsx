import React, { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/cn';

interface QuantityInputProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onValueChange?: (value: number) => void;
  className?: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  value = 1,
  min = 0,
  max = Infinity,
  step = 1,
  disabled = false,
  size = 'md',
  onValueChange,
  className,
}) => {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  const sizeClasses = {
    sm: {
      button: 'w-7 h-7',
      input: 'h-7 px-2 text-sm',
      icon: 'w-3 h-3',
    },
    md: {
      button: 'w-9 h-9',
      input: 'h-9 px-3 text-sm',
      icon: 'w-4 h-4',
    },
    lg: {
      button: 'w-11 h-11',
      input: 'h-11 px-4 text-base',
      icon: 'w-5 h-5',
    },
  };

  const updateQuantity = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setQuantity(clampedValue);
    onValueChange?.(clampedValue);
  };

  const increment = () => {
    if (!disabled && quantity + step <= max) {
      updateQuantity(quantity + step);
    }
  };

  const decrement = () => {
    if (!disabled && quantity - step >= min) {
      updateQuantity(quantity - step);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    updateQuantity(newValue);
  };

  const canDecrement = !disabled && quantity > min;
  const canIncrement = !disabled && quantity < max;

  return (
    <div className={cn('flex items-center', className)}>
      <button
        type='button'
        onClick={decrement}
        disabled={!canDecrement}
        className={cn(
          'flex items-center justify-center border border-neutral-300 rounded-l-lg bg-white',
          'hover:bg-neutral-50 active:bg-neutral-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
          'dark:bg-neutral-900 dark:border-neutral-700',
          'dark:hover:bg-neutral-800 dark:active:bg-neutral-700',
          'dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-neutral-900',
          'transition-colors duration-150',
          sizeClasses[size].button
        )}
      >
        <Minus
          className={cn(
            'text-neutral-600 dark:text-neutral-400',
            sizeClasses[size].icon
          )}
        />
      </button>

      <input
        type='number'
        value={quantity}
        onChange={handleInputChange}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        className={cn(
          'border-t border-b border-neutral-300 bg-white text-center font-medium',
          'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:z-10',
          'dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100',
          'dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'text-neutral-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
          sizeClasses[size].input,
          'min-w-[60px]'
        )}
      />

      <button
        type='button'
        onClick={increment}
        disabled={!canIncrement}
        className={cn(
          'flex items-center justify-center border border-neutral-300 rounded-r-lg bg-white',
          'hover:bg-neutral-50 active:bg-neutral-100',
          'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
          'dark:bg-neutral-900 dark:border-neutral-700',
          'dark:hover:bg-neutral-800 dark:active:bg-neutral-700',
          'dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-neutral-900',
          'transition-colors duration-150',
          sizeClasses[size].button
        )}
      >
        <Plus
          className={cn(
            'text-neutral-600 dark:text-neutral-400',
            sizeClasses[size].icon
          )}
        />
      </button>
    </div>
  );
};

export default QuantityInput;
