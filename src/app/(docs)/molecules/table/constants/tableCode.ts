export const tableCode = `"use client";
import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const tableVariants = cva([
  "w-full border-collapse",
  "bg-white dark:bg-neutral-900",
], {
  variants: {
    variant: {
      default: [
        "border border-neutral-200 dark:border-neutral-800",
        "rounded-lg overflow-hidden",
      ],
      modern: [
        "border border-neutral-200/40 dark:border-neutral-800/40",
        "rounded-xl overflow-hidden",
        "shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]",
        "dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]",
      ],
      minimal: [
        "border-0",
      ],
      striped: [
        "border border-neutral-200 dark:border-neutral-800",
        "rounded-lg overflow-hidden",
      ],
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type SortDirection = "asc" | "desc" | null;

export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  sortable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = any> extends VariantProps<typeof tableVariants> {
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
  selectionMode?: "single" | "multiple";
  /**
   * Selected rows
   */
  selectedRows?: T[];
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
}

const Table = <T extends Record<string, any>>({
  columns,
  data,
  loading = false,
  emptyMessage = "No data available",
  selectable = false,
  selectionMode = "multiple",
  selectedRows,
  onSelectionChange,
  onRowClick,
  sortBy,
  sortDirection,
  onSortChange,
  variant = "default",
  size = "md",
  className,
  getRowKey = (row, index) => row.id || index,
  hoverable = true,
  stickyHeader = false,
  maxHeight,
}: TableProps<T>) => {
  const [internalSelectedRows, setInternalSelectedRows] = useState<T[]>([]);
  const [internalSort, setInternalSort] = useState<{
    key: keyof T | string;
    direction: SortDirection;
  }>({ key: "", direction: null });

  // Table implementation logic...

  return (
    <div className="relative">
      <div 
        className="overflow-auto"
        style={maxHeight ? { maxHeight: typeof maxHeight === "number" ? maxHeight + "px" : maxHeight } : undefined}
      >
        <table className={cn(tableVariants({ variant, size }), className)}>
          <thead className={cn(stickyHeader && "sticky top-0 z-10")}>
            {/* Table header */}
          </thead>
          <tbody>
            {/* Table body */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;`;
