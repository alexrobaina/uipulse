import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

// Define button group variants using class-variance-authority
const buttonGroupVariants = cva(['inline-flex', 'shadow-sm'], {
  variants: {
    variant: {
      default: ['rounded-lg', 'isolate'],
      attached: ['rounded-lg', 'isolate'],
      separated: ['gap-1'],
      pill: ['rounded-full', 'isolate'],
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
  },
  compoundVariants: [
    // Attached spacing by orientation
    {
      variant: 'attached',
      orientation: 'horizontal',
      className: '-space-x-px',
    },
    {
      variant: 'attached',
      orientation: 'vertical',
      className: '-space-y-px',
    },
  ],
});

// Define button variants for buttons within the group
const buttonGroupItemVariants = cva(
  [
    'relative inline-flex items-center justify-center',
    'font-medium transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-white text-neutral-900 border border-neutral-300',
          'hover:bg-neutral-50 hover:text-blue-700',
          'focus:z-10 focus:ring-blue-500',
          'active:bg-neutral-100',
          'dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-600',
          'dark:hover:bg-neutral-700 dark:hover:text-blue-400',
          'dark:focus:ring-blue-400',
          'dark:active:bg-neutral-600',
        ],
        primary: [
          'bg-blue-600 text-white border border-blue-600',
          'hover:bg-blue-700 hover:border-blue-700',
          'focus:z-10 focus:ring-blue-500',
          'active:bg-blue-800',
          'dark:bg-blue-600 dark:border-blue-600',
          'dark:hover:bg-blue-700',
          'dark:focus:ring-blue-400',
          'dark:active:bg-blue-800',
        ],
        secondary: [
          'bg-neutral-100 text-neutral-900 border border-neutral-300',
          'hover:bg-neutral-200',
          'focus:z-10 focus:ring-neutral-500',
          'active:bg-neutral-300',
          'dark:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-600',
          'dark:hover:bg-neutral-600',
          'dark:focus:ring-neutral-400',
          'dark:active:bg-neutral-500',
        ],
        outline: [
          'bg-transparent text-neutral-700 border border-neutral-300',
          'hover:bg-neutral-50 hover:text-neutral-900',
          'focus:z-10 focus:ring-neutral-500',
          'active:bg-neutral-100',
          'dark:text-neutral-300 dark:border-neutral-600',
          'dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
          'dark:focus:ring-neutral-400',
          'dark:active:bg-neutral-700',
        ],
      },
      size: {
        xs: 'px-2 py-1 text-xs min-h-6',
        sm: 'px-3 py-1.5 text-sm min-h-8',
        md: 'px-4 py-2 text-sm min-h-10',
        lg: 'px-6 py-3 text-base min-h-12',
        xl: 'px-8 py-4 text-lg min-h-14',
      },
      position: {
        first: '',
        middle: '',
        last: '',
        only: '',
      },
      groupVariant: {
        default: '',
        attached: '',
        separated: '',
        pill: '',
      },
      orientation: {
        horizontal: '',
        vertical: '',
      },
    },
    compoundVariants: [
      // Default variant positioning (horizontal)
      {
        groupVariant: 'default',
        position: 'first',
        orientation: 'horizontal',
        className: 'rounded-l-lg rounded-r-none',
      },
      {
        groupVariant: 'default',
        position: 'middle',
        orientation: 'horizontal',
        className: 'rounded-none',
      },
      {
        groupVariant: 'default',
        position: 'last',
        orientation: 'horizontal',
        className: 'rounded-r-lg rounded-l-none',
      },
      {
        groupVariant: 'default',
        position: 'only',
        orientation: 'horizontal',
        className: 'rounded-lg',
      },
      // Default variant positioning (vertical)
      {
        groupVariant: 'default',
        position: 'first',
        orientation: 'vertical',
        className: 'rounded-t-lg rounded-b-none',
      },
      {
        groupVariant: 'default',
        position: 'middle',
        orientation: 'vertical',
        className: 'rounded-none',
      },
      {
        groupVariant: 'default',
        position: 'last',
        orientation: 'vertical',
        className: 'rounded-b-lg rounded-t-none',
      },
      {
        groupVariant: 'default',
        position: 'only',
        orientation: 'vertical',
        className: 'rounded-lg',
      },
      // Attached variant positioning (horizontal)
      {
        groupVariant: 'attached',
        position: 'first',
        orientation: 'horizontal',
        className: 'rounded-l-lg rounded-r-none border-r-0',
      },
      {
        groupVariant: 'attached',
        position: 'middle',
        orientation: 'horizontal',
        className: 'rounded-none border-r-0',
      },
      {
        groupVariant: 'attached',
        position: 'last',
        orientation: 'horizontal',
        className: 'rounded-r-lg rounded-l-none',
      },
      {
        groupVariant: 'attached',
        position: 'only',
        orientation: 'horizontal',
        className: 'rounded-lg',
      },
      // Attached variant positioning (vertical)
      {
        groupVariant: 'attached',
        position: 'first',
        orientation: 'vertical',
        className: 'rounded-t-lg rounded-b-none border-b-0',
      },
      {
        groupVariant: 'attached',
        position: 'middle',
        orientation: 'vertical',
        className: 'rounded-none border-b-0',
      },
      {
        groupVariant: 'attached',
        position: 'last',
        orientation: 'vertical',
        className: 'rounded-b-lg rounded-t-none',
      },
      {
        groupVariant: 'attached',
        position: 'only',
        orientation: 'vertical',
        className: 'rounded-lg',
      },
      // Separated variant positioning
      {
        groupVariant: 'separated',
        className: 'rounded-lg',
      },
      // Pill variant positioning (horizontal)
      {
        groupVariant: 'pill',
        position: 'first',
        orientation: 'horizontal',
        className: 'rounded-l-full rounded-r-none',
      },
      {
        groupVariant: 'pill',
        position: 'middle',
        orientation: 'horizontal',
        className: 'rounded-none',
      },
      {
        groupVariant: 'pill',
        position: 'last',
        orientation: 'horizontal',
        className: 'rounded-r-full rounded-l-none',
      },
      {
        groupVariant: 'pill',
        position: 'only',
        orientation: 'horizontal',
        className: 'rounded-full',
      },
      // Pill variant positioning (vertical)
      {
        groupVariant: 'pill',
        position: 'first',
        orientation: 'vertical',
        className: 'rounded-t-full rounded-b-none',
      },
      {
        groupVariant: 'pill',
        position: 'middle',
        orientation: 'vertical',
        className: 'rounded-none',
      },
      {
        groupVariant: 'pill',
        position: 'last',
        orientation: 'vertical',
        className: 'rounded-b-full rounded-t-none',
      },
      {
        groupVariant: 'pill',
        position: 'only',
        orientation: 'vertical',
        className: 'rounded-full',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'middle',
      groupVariant: 'default',
      orientation: 'horizontal',
    },
  }
);

export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * The buttons to render in the group. Each button will be automatically styled.
   */
  children: ReactNode;
  /**
   * The button variant to apply to all buttons in the group.
   */
  buttonVariant?: 'default' | 'primary' | 'secondary' | 'outline';
  /**
   * If true, the group will take up the full width of its container.
   */
  fullWidth?: boolean;
}

export interface ButtonGroupItemProps
  extends HTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactNode;
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the button will be in an active/selected state.
   */
  active?: boolean;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      orientation = 'horizontal',
      buttonVariant = 'default',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const childCount = childrenArray.length;

    const getPosition = (index: number, total: number) => {
      if (total === 1) return 'only';
      if (index === 0) return 'first';
      if (index === total - 1) return 'last';
      return 'middle';
    };

    return (
      <div
        className={cn(
          buttonGroupVariants({ variant, size, orientation }),
          fullWidth && 'w-full',
          className
        )}
        role='group'
        ref={ref}
        {...props}
      >
        {childrenArray.map((child, index) => {
          if (React.isValidElement(child)) {
            const position = getPosition(index, childCount);
            return React.cloneElement(
              child as ReactElement<ButtonGroupItemProps>,
              {
                key: index,
                className: cn(
                  buttonGroupItemVariants({
                    variant: buttonVariant,
                    size,
                    position,
                    groupVariant: variant,
                    orientation,
                  }),
                  (child as ReactElement<ButtonGroupItemProps>).props.active &&
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
                  fullWidth && 'flex-1',
                  (child as ReactElement<ButtonGroupItemProps>).props.className
                ),
              }
            );
          }
          return child;
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

// ButtonGroupItem component for individual buttons
const ButtonGroupItem = forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  (
    { children, className, disabled = false, active = false, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={className}
        data-active={active}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonGroupItem.displayName = 'ButtonGroupItem';

export {
  ButtonGroup,
  ButtonGroupItem,
  buttonGroupVariants,
  buttonGroupItemVariants,
};
export default ButtonGroup;
