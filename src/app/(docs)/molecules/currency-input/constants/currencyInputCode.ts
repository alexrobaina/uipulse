export const currencyInputCode = `import React, { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

interface CurrencyInputProps {
  value?: number;
  currency?: string;
  locale?: string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  precision?: number;
  onValueChange?: (value: number) => void;
  className?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value = 0,
  currency = "USD",
  locale = "en-US",
  placeholder,
  disabled = false,
  min = 0,
  max = Infinity,
  precision = 2,
  onValueChange,
  className,
}) => {
  const [displayValue, setDisplayValue] = useState("");
  const [focused, setFocused] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(amount);
  };

  const parseCurrencyString = (str: string): number => {
    const numericString = str.replace(/[^0-9.-]/g, "");
    const parsed = parseFloat(numericString);
    return isNaN(parsed) ? 0 : parsed;
  };

  useEffect(() => {
    if (!focused) {
      setDisplayValue(value > 0 ? formatCurrency(value) : "");
    }
  }, [value, currency, locale, precision, focused]);

  const handleFocus = () => {
    setFocused(true);
    if (value > 0) {
      setDisplayValue(value.toFixed(precision));
    }
  };

  const handleBlur = () => {
    setFocused(false);
    const numericValue = parseCurrencyString(displayValue);
    const clampedValue = Math.min(Math.max(numericValue, min), max);
    
    onValueChange?.(clampedValue);
    setDisplayValue(clampedValue > 0 ? formatCurrency(clampedValue) : "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (focused) {
      // When focused, allow raw number input
      const numericValue = inputValue.replace(/[^0-9.-]/g, "");
      setDisplayValue(numericValue);
    } else {
      setDisplayValue(inputValue);
    }
  };

  const getCurrencySymbol = () => {
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });
    
    const parts = formatter.formatToParts(0);
    const currencyPart = parts.find(part => part.type === "currency");
    return currencyPart?.value || "$";
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
          {getCurrencySymbol()}
        </span>
      </div>
      
      <input
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={placeholder || formatCurrency(0)}
        className={cn(
          "w-full pl-8 pr-3 py-2 border border-neutral-300 rounded-lg bg-white",
          "text-sm text-neutral-900 placeholder:text-neutral-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
          "dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100",
          "dark:placeholder:text-neutral-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/20",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-colors duration-150"
        )}
      />
    </div>
  );
};

export default CurrencyInput;`;
