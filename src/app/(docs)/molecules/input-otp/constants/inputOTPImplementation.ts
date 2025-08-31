export const inputOTPImplementation = `'use client';

import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { cn } from '@/lib/cn';

interface InputOTPProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  autoFocus?: boolean;
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
  mask = false,
  separator,
  separatorIndexes = [],
  size = 'md',
  variant = 'outline',
  onValueChange,
  onComplete,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(value ?? defaultValue);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const currentValue = value !== undefined ? value : internalValue;

  // Always render \`length\` inputs; pull each digit from currentValue
  const digits = Array.from({ length }, (_, i) => currentValue[i] ?? '');

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (currentValue.replace(/\\s+/g, '').length === length && onComplete) {
      onComplete(currentValue.slice(0, length));
    }
  }, [currentValue, length, onComplete]);

  const updateValue = (newValue: string) => {
    const next = newValue.slice(0, length);
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  };

  const focusAt = (i: number) => {
    const idx = Math.max(0, Math.min(length - 1, i));
    inputRefs.current[idx]?.focus();
  };

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (disabled) return;

    // accept only the last numeric char typed
    const raw = e.target.value;
    const lastDigit = (raw.match(/\\d/g) ?? []).pop() ?? '';

    const newDigits = [...digits];
    newDigits[index] = lastDigit;
    updateValue(newDigits.join(''));

    // auto-advance if a digit was entered
    if (lastDigit && index < length - 1) {
      setTimeout(() => focusAt(index + 1), 0);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (e.key) {
      case 'Backspace': {
        e.preventDefault();
        const newDigits = [...digits];
        if (newDigits[index]) {
          newDigits[index] = '';
          updateValue(newDigits.join(''));
        } else if (index > 0) {
          newDigits[index - 1] = '';
          updateValue(newDigits.join(''));
          setTimeout(() => focusAt(index - 1), 0);
        }
        return;
      }

      case 'Delete': {
        e.preventDefault();
        const newDigits = [...digits];
        newDigits[index] = '';
        updateValue(newDigits.join(''));
        return;
      }

      case 'ArrowLeft':
        e.preventDefault();
        if (index > 0) focusAt(index - 1);
        return;

      case 'ArrowRight':
        e.preventDefault();
        if (index < length - 1) focusAt(index + 1);
        return;

      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault();
        return;

      default:
        // numeric only (allow navigation/modifier keys)
        if (
          !/\\d/.test(e.key) &&
          !['Tab', 'Shift', 'Control', 'Alt', 'Meta'].includes(e.key) &&
          !e.ctrlKey &&
          !e.metaKey
        ) {
          e.preventDefault();
        }
    }
  };

  const handleFocus = (index: number) => {
    if (disabled) return;
    setFocusedIndex(index);
    // select content for quick overwrite
    setTimeout(() => inputRefs.current[index]?.select(), 0);
  };

  const handleBlur = () => setFocusedIndex(-1);

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    if (disabled) return;

    const pastedDigits = e.clipboardData.getData('text').replace(/\\D/g, '');
    if (!pastedDigits) return;

    const start = focusedIndex >= 0 ? focusedIndex : 0;
    const newDigits = [...digits];

    let write = 0;
    for (let i = start; i < length && write < pastedDigits.length; i++) {
      newDigits[i] = pastedDigits[write++];
    }

    updateValue(newDigits.join(''));

    // focus last filled cell
    const nextIndex = Math.min(start + pastedDigits.length - 1, length - 1);
    setTimeout(() => focusAt(nextIndex), 0);
  };

  const sizeStyles = {
    sm: { input: 'w-10 h-10 text-sm', gap: 'gap-2' },
    md: { input: 'w-12 h-12 text-base', gap: 'gap-2' },
    lg: { input: 'w-14 h-14 text-lg', gap: 'gap-3' },
  } as const;

  const variantStyles = {
    default: {
      base: 'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900',
      focus:
        'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
      disabled: 'disabled:bg-neutral-100 dark:disabled:bg-neutral-800',
    },
    outline: {
      base: 'border-2 border-neutral-300 dark:border-neutral-600 bg-transparent',
      focus:
        'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20',
      disabled: 'disabled:bg-neutral-50 dark:disabled:bg-neutral-900',
    },
    filled: {
      base: 'border border-transparent bg-neutral-100 dark:bg-neutral-800',
      focus:
        'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 dark:focus:ring-blue-400/20 focus:bg-white dark:focus:bg-neutral-900',
      disabled: 'disabled:bg-neutral-200 dark:disabled:bg-neutral-700',
    },
  } as const;

  const shouldShowSeparator = (index: number) =>
    !!separator && separatorIndexes.includes(index);

  return (
    <div
      className={cn('flex items-center', sizeStyles[size].gap, className)}
      onPaste={handlePaste}
    >
      {digits.map((digit, index) => (
        <React.Fragment key={index}>
          <input
            ref={el => {
              inputRefs.current[index] = el;
            }}
            type='text'
            inputMode='numeric'
            autoComplete='one-time-code'
            maxLength={1}
            value={mask && digit ? '•' : digit}
            disabled={disabled}
            className={cn(
              'text-center font-mono font-medium rounded-lg transition-all duration-200',
              'text-neutral-900 dark:text-neutral-100',
              'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
              sizeStyles[size].input,
              variantStyles[variant].base,
              variantStyles[variant].focus,
              'disabled:cursor-not-allowed disabled:opacity-50',
              variantStyles[variant].disabled,
              'focus:outline-none',
              focusedIndex === index &&
                !disabled &&
                'ring-2 ring-blue-500/20 border-blue-500 dark:border-blue-400 scale-105'
            )}
            onChange={e => handleInputChange(index, e)}
            onKeyDown={e => handleKeyDown(index, e)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            aria-label={\`Digit \${index + 1} of \${length}\`}
            aria-describedby={\`otp-input-\${index}\`}
          />
          {shouldShowSeparator(index) && (
            <div className='flex items-center justify-center text-neutral-400 dark:text-neutral-500 px-2'>
              {separator}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InputOTP;`;
