'use client';
import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, MoreHorizontal } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const tableVariants = cva(
  ['w-full border-collapse', 'bg-white dark:bg-neutral-900'],
  {
    variants: {
      variant: {
        default: [
          'border border-neutral-200 dark:border-neutral-800',
          'rounded-lg overflow-hidden',
        ],
        modern: [
          'border border-neutral-200/40 dark:border-neutral-800/40',
          'rounded-xl overflow-hidden',
          'shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]',
          'dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]',
        ],
        minimal: ['border-0'],
        striped: [
          'border border-neutral-200 dark:border-neutral-800',
          'rounded-lg overflow-hidden',
        ],
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const headerVariants = cva(
  [
    'text-left font-semibold',
    'text-neutral-900 dark:text-neutral-100',
    'bg-neutral-50/50 dark:bg-neutral-800/50',
    'border-b border-neutral-200 dark:border-neutral-800',
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
      },
      sortable: {
        true: 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-150',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      sortable: false,
    },
  }
);

const cellVariants = cva(
  [
    'text-neutral-700 dark:text-neutral-300',
    'border-b border-neutral-200 dark:border-neutral-800 last:border-b-0',
  ],
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
      },
      variant: {
        default: '',
        striped: '',
      },
    },
    compoundVariants: [
      {
        variant: 'striped',
        className: 'even:bg-neutral-50/50 dark:even:bg-neutral-800/30',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

const checkboxVariants = cva([
  'rounded border-neutral-300 dark:border-neutral-600',
  'text-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2',
  'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
]);

export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = any>
  extends VariantProps<typeof tableVariants> {
  /**
   * Table columns configuration
   */
  columns: TableColumn<T>[];
  /**
   * Table data
   */
  data: T[];
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Empty state message
   */
  emptyMessage?: React.ReactNode;
  /**
   * Enable row selection
   */
  selectable?: boolean;
  /**
   * Selection mode
   */
  selectionMode?: 'single' | 'multiple';
  /**
   * Selected rows
   */
  selectedRows?: T[];
  /**
   * Default selected rows
   */
  defaultSelectedRows?: T[];
  /**
   * Row selection change handler
   */
  onSelectionChange?: (selectedRows: T[]) => void;
  /**
   * Row click handler
   */
  onRowClick?: (row: T, index: number) => void;
  /**
   * Sort configuration
   */
  sortBy?: keyof T | string;
  /**
   * Sort direction
   */
  sortDirection?: SortDirection;
  /**
   * Default sort configuration
   */
  defaultSort?: {
    key: keyof T | string;
    direction: SortDirection;
  };
  /**
   * Sort change handler
   */
  onSortChange?: (sortBy: keyof T | string, direction: SortDirection) => void;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Row key extractor
   */
  getRowKey?: (row: T, index: number) => string | number;
  /**
   * Custom row class name
   */
  rowClassName?: string | ((row: T, index: number) => string);
  /**
   * Enable hover effects
   */
  hoverable?: boolean;
  /**
   * Sticky header
   */
  stickyHeader?: boolean;
  /**
   * Max height for scrollable table
   */
  maxHeight?: string | number;
  /**
   * Show loading overlay
   */
  showLoadingOverlay?: boolean;
}

const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  emptyMessage = 'No data available',
  selectable = false,
  selectionMode = 'multiple',
  selectedRows,
  defaultSelectedRows = [],
  onSelectionChange,
  onRowClick,
  sortBy,
  sortDirection,
  defaultSort,
  onSortChange,
  variant = 'default',
  size = 'md',
  className,
  getRowKey = (row, index) => row.id || index,
  rowClassName,
  hoverable = true,
  stickyHeader = false,
  maxHeight,
  showLoadingOverlay = false,
}: TableProps<T>) => {
  const [internalSelectedRows, setInternalSelectedRows] =
    useState<T[]>(defaultSelectedRows);
  const [internalSort, setInternalSort] = useState<{
    key: keyof T | string;
    direction: SortDirection;
  }>(defaultSort || { key: '', direction: null });

  const actualSelectedRows =
    selectedRows !== undefined ? selectedRows : internalSelectedRows;
  const actualSortBy = sortBy !== undefined ? sortBy : internalSort.key;
  const actualSortDirection =
    sortDirection !== undefined ? sortDirection : internalSort.direction;

  const sortedData = useMemo(() => {
    if (!actualSortBy || !actualSortDirection) return data;

    return [...data].sort((a, b) => {
      const aValue = a[actualSortBy];
      const bValue = b[actualSortBy];

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      return actualSortDirection === 'desc' ? -comparison : comparison;
    });
  }, [data, actualSortBy, actualSortDirection]);

  const handleSort = (columnKey: keyof T | string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    let newDirection: SortDirection = 'asc';
    if (actualSortBy === columnKey) {
      if (actualSortDirection === 'asc') {
        newDirection = 'desc';
      } else if (actualSortDirection === 'desc') {
        newDirection = null;
      }
    }

    const newSort = { key: columnKey, direction: newDirection };

    if (sortBy === undefined && sortDirection === undefined) {
      setInternalSort(newSort);
    }

    onSortChange?.(columnKey, newDirection);
  };

  const handleRowSelection = (row: T, checked: boolean) => {
    let newSelectedRows: T[];

    if (selectionMode === 'single') {
      newSelectedRows = checked ? [row] : [];
    } else {
      if (checked) {
        newSelectedRows = [...actualSelectedRows, row];
      } else {
        newSelectedRows = actualSelectedRows.filter(
          selectedRow => getRowKey(selectedRow, 0) !== getRowKey(row, 0)
        );
      }
    }

    if (selectedRows === undefined) {
      setInternalSelectedRows(newSelectedRows);
    }

    onSelectionChange?.(newSelectedRows);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? [...sortedData] : [];

    if (selectedRows === undefined) {
      setInternalSelectedRows(newSelectedRows);
    }

    onSelectionChange?.(newSelectedRows);
  };

  const isRowSelected = (row: T) => {
    return actualSelectedRows.some(
      selectedRow => getRowKey(selectedRow, 0) === getRowKey(row, 0)
    );
  };

  const isAllSelected =
    actualSelectedRows.length > 0 &&
    actualSelectedRows.length === sortedData.length;
  const isIndeterminate =
    actualSelectedRows.length > 0 &&
    actualSelectedRows.length < sortedData.length;

  const LoadingOverlay = () => (
    <div className='absolute inset-0 bg-white/80 dark:bg-neutral-900/80 flex items-center justify-center z-10'>
      <div className='flex items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
        <div className='animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent'></div>
        <span className='text-sm'>Loading...</span>
      </div>
    </div>
  );

  const EmptyState = () => (
    <tr>
      <td
        colSpan={columns.length + (selectable ? 1 : 0)}
        className={cn(cellVariants({ size }), 'text-center py-12')}
      >
        <div className='flex flex-col items-center space-y-2 text-neutral-500 dark:text-neutral-400'>
          <svg
            className='w-12 h-12'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
            />
          </svg>
          <div className='text-sm'>{emptyMessage}</div>
        </div>
      </td>
    </tr>
  );

  return (
    <div className='relative'>
      <div
        className={cn('overflow-auto', maxHeight && `max-h-[${maxHeight}px]`)}
        style={
          maxHeight
            ? {
                maxHeight:
                  typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
              }
            : undefined
        }
      >
        <table className={cn(tableVariants({ variant, size }), className)}>
          {/* Header */}
          <thead className={cn(stickyHeader && 'sticky top-0 z-10')}>
            <tr>
              {selectable && (
                <th className={cn(headerVariants({ size }), 'w-12')}>
                  {selectionMode === 'multiple' && (
                    <input
                      type='checkbox'
                      className={checkboxVariants()}
                      checked={isAllSelected}
                      ref={input => {
                        if (input) input.indeterminate = isIndeterminate;
                      }}
                      onChange={e => handleSelectAll(e.target.checked)}
                      aria-label='Select all rows'
                    />
                  )}
                </th>
              )}
              {columns.map(column => (
                <th
                  key={String(column.key)}
                  className={cn(
                    headerVariants({
                      size,
                      sortable: column.sortable,
                    }),
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right',
                    column.className
                  )}
                  style={column.width ? { width: column.width } : undefined}
                  onClick={() => column.sortable && handleSort(column.key)}
                  aria-sort={
                    actualSortBy === column.key
                      ? actualSortDirection === 'asc'
                        ? 'ascending'
                        : actualSortDirection === 'desc'
                          ? 'descending'
                          : 'none'
                      : undefined
                  }
                >
                  <div className='flex items-center gap-2'>
                    <span>{column.title}</span>
                    {column.sortable && (
                      <div className='flex flex-col'>
                        <ChevronUp
                          className={cn(
                            'w-3 h-3 -mb-1',
                            actualSortBy === column.key &&
                              actualSortDirection === 'asc'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-neutral-400 dark:text-neutral-600'
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            'w-3 h-3',
                            actualSortBy === column.key &&
                              actualSortDirection === 'desc'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-neutral-400 dark:text-neutral-600'
                          )}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {loading && !showLoadingOverlay ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className={cn(cellVariants({ size }), 'text-center py-8')}
                >
                  <div className='flex items-center justify-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                    <div className='animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent'></div>
                    <span className='text-sm'>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <EmptyState />
            ) : (
              sortedData.map((row, index) => {
                const rowKey = getRowKey(row, index);
                const isSelected = isRowSelected(row);
                const computedRowClassName =
                  typeof rowClassName === 'function'
                    ? rowClassName(row, index)
                    : rowClassName;

                return (
                  <tr
                    key={rowKey}
                    className={cn(
                      hoverable &&
                        'hover:bg-neutral-50 dark:hover:bg-neutral-800/50',
                      onRowClick && 'cursor-pointer',
                      isSelected && 'bg-blue-50 dark:bg-blue-900/20',
                      variant === 'striped' &&
                        index % 2 === 1 &&
                        'bg-neutral-50/50 dark:bg-neutral-800/30',
                      'transition-colors duration-150',
                      computedRowClassName
                    )}
                    onClick={() => onRowClick?.(row, index)}
                  >
                    {selectable && (
                      <td
                        className={cn(cellVariants({ size, variant }), 'w-12')}
                      >
                        <input
                          type='checkbox'
                          className={checkboxVariants()}
                          checked={isSelected}
                          onChange={e =>
                            handleRowSelection(row, e.target.checked)
                          }
                          onClick={e => e.stopPropagation()}
                          aria-label={`Select row ${index + 1}`}
                        />
                      </td>
                    )}
                    {columns.map(column => (
                      <td
                        key={String(column.key)}
                        className={cn(
                          cellVariants({ size, variant }),
                          column.align === 'center' && 'text-center',
                          column.align === 'right' && 'text-right',
                          column.className
                        )}
                      >
                        {column.render
                          ? column.render(row[column.key], row, index)
                          : String(row[column.key] || '')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Loading overlay */}
      {loading && showLoadingOverlay && <LoadingOverlay />}
    </div>
  );
};

export default Table;
