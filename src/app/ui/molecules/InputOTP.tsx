'use client';
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';

interface InputOTPProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  mask?: boolean;
  separator?: React.ReactNode;
  separatorIndexes?: number[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  className?: string;
}

const InputOTP: React.FC<InputOTPProps> = ({
  length = 6,
  value,
  defaultValue = '',
  disabled = false,
  autoFocus = false,
  placeholder = '',
  mask = false,
  separator,
  separatorIndexes = [],
  size = 'md',
  variant = 'default',
  onValueChange,
  onComplete,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value || defaultValue);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const currentValue = value ?? internalValue;
  const digits = currentValue.padEnd(length, '').slice(0, length).split('');

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (currentValue.length === length) {
      onComplete?.(currentValue);
    }
  }, [currentValue, length, onComplete]);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const variantClasses = {
    default: cn(
      'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900',
      'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20'
    ),
    outline: cn(
      'border-2 border-neutral-300 dark:border-neutral-600 bg-transparent',
      'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20'
    ),
    filled: cn(
      'border border-transparent bg-neutral-100 dark:bg-neutral-800',
      'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20'
    ),
  };

  const handleInputChange = (index: number, inputValue: string) => {
    if (disabled) return;

    // Handle paste
    if (inputValue.length > 1) {
      const pastedValue = inputValue.replace(/\D/g, '').slice(0, length);
      const newValue = pastedValue.padEnd(length, '').slice(0, length);
      const newDigits = currentValue.split('');

      for (let i = 0; i < pastedValue.length && index + i < length; i++) {
        newDigits[index + i] = pastedValue[i];
      }

      const finalValue = newDigits.join('').replace(/\s/g, '');

      if (!value) {
        setInternalValue(finalValue);
      }
      onValueChange?.(finalValue);

      // Focus the next empty input or the last input
      const nextIndex = Math.min(index + pastedValue.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // Handle single character input
    const numericValue = inputValue.replace(/\D/g, '');
    if (numericValue.length <= 1) {
      const newDigits = [...digits];
      newDigits[index] = numericValue;
      const newValue = newDigits.join('').replace(/\s/g, '');

      if (!value) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);

      // Move to next input if value was entered
      if (numericValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === 'Delete') {
      const newDigits = [...digits];
      newDigits[index] = '';
      const newValue = newDigits.join('').replace(/\s/g, '');

      if (!value) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    }
  };

  const handleFocus = (index: number) => {
    if (!disabled) {
      setFocusedIndex(index);
      // Select all text when focusing
      inputRefs.current[index]?.select();
    }
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  const shouldShowSeparator = (index: number) => {
    return separator && separatorIndexes.includes(index);
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {digits.map((digit, index) => (
        <React.Fragment key={index}>
          <input
            ref={el => (inputRefs.current[index] = el)}
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            maxLength={1}
            value={mask && digit ? '•' : digit}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              'text-center font-mono font-medium rounded-md transition-all duration-150',
              'text-neutral-900 dark:text-neutral-100',
              'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              sizeClasses[size],
              variantClasses[variant],
              focusedIndex === index &&
                !disabled &&
                'ring-2 ring-blue-500/20 border-blue-500 dark:border-blue-400'
            )}
            onChange={e => handleInputChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            aria-label={`Digit ${index + 1} of ${length}`}
          />
          {shouldShowSeparator(index) && (
            <div className='flex items-center justify-center text-neutral-400 dark:text-neutral-500'>
              {separator}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InputOTP;
