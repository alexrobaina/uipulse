export const switchCode = `import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const switchVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent",
    "transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2",
    "focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-neutral-200 data-[state=checked]:bg-blue-600",
          "dark:bg-neutral-700 dark:data-[state=checked]:bg-blue-500",
        ],
        success: [
          "bg-neutral-200 data-[state=checked]:bg-green-600",
          "dark:bg-neutral-700 dark:data-[state=checked]:bg-green-500",
        ],
        warning: [
          "bg-neutral-200 data-[state=checked]:bg-yellow-600",
          "dark:bg-neutral-700 dark:data-[state=checked]:bg-yellow-500",
        ],
        error: [
          "bg-neutral-200 data-[state=checked]:bg-red-600",
          "dark:bg-neutral-700 dark:data-[state=checked]:bg-red-500",
        ],
      },
      size: {
        sm: "h-4 w-7",
        md: "h-5 w-9",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  [
    "pointer-events-none inline-block transform rounded-full bg-white shadow ring-0",
    "transition duration-200 ease-in-out",
  ],
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        md: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        lg: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /**
   * Whether the switch is checked
   */
  checked?: boolean;
  /**
   * Callback fired when the state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * The controlled checked state of the switch
   */
  defaultChecked?: boolean;
  /**
   * Visual variant of the switch
   */
  variant?: VariantProps<typeof switchVariants>["variant"];
  /**
   * Size of the switch
   */
  size?: VariantProps<typeof switchVariants>["size"];
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Label for the switch (for accessibility)
   */
  "aria-label"?: string;
  /**
   * Description for the switch (for accessibility)
   */
  "aria-describedby"?: string;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      onCheckedChange,
      defaultChecked = false,
      variant = "default",
      size = "md",
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : defaultChecked;

    const handleClick = () => {
      if (disabled) return;
      onCheckedChange?.(!isChecked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        disabled={disabled}
        className={cn(switchVariants({ variant, size }), className)}
        onClick={handleClick}
        {...props}
      >
        <span
          className={cn(switchThumbVariants({ size }))}
          data-state={isChecked ? "checked" : "unchecked"}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";

export { Switch, switchVariants, switchThumbVariants };
export default Switch;`;
