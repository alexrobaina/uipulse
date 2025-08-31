export const carouselCode = `"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const carouselVariants = cva([
  "relative overflow-hidden rounded-xl",
  "bg-white dark:bg-neutral-900",
], {
  variants: {
    variant: {
      default: [
        "border border-neutral-200 dark:border-neutral-800",
        "shadow-sm",
      ],
      modern: [
        "border border-neutral-200/40 dark:border-neutral-800/40",
        "shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]",
        "dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]",
      ],
      elevated: [
        "border border-neutral-200/50 dark:border-neutral-800/50",
        "shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/40",
      ],
      minimal: [
        "border-transparent",
        "shadow-none",
      ],
    },
    size: {
      sm: "max-w-sm",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
  alt?: string;
}

export interface CarouselProps extends VariantProps<typeof carouselVariants> {
  /**
   * Array of carousel items
   */
  items: CarouselItem[];
  /**
   * Auto-play interval in milliseconds
   */
  autoPlay?: number;
  /**
   * Whether to show navigation arrows
   */
  showNavigation?: boolean;
  /**
   * Whether to show dot indicators
   */
  showIndicators?: boolean;
  /**
   * Whether to pause auto-play on hover
   */
  pauseOnHover?: boolean;
  /**
   * Whether to allow infinite loop
   */
  loop?: boolean;
  /**
   * Navigation variant
   */
  navigationVariant?: "default" | "modern" | "elevated";
  /**
   * Navigation size
   */
  navigationSize?: "sm" | "md" | "lg";
  /**
   * Navigation position
   */
  navigationPosition?: "inside" | "outside";
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Current slide index
   */
  currentSlide?: number;
  /**
   * Default slide index
   */
  defaultSlide?: number;
  /**
   * Slide change callback
   */
  onSlideChange?: (index: number) => void;
  /**
   * Custom aspect ratio
   */
  aspectRatio?: "square" | "video" | "wide" | "none";
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay,
  showNavigation = true,
  showIndicators = true,
  pauseOnHover = true,
  loop = true,
  navigationVariant = "default",
  navigationSize = "md",
  navigationPosition = "inside",
  variant = "default",
  size = "md",
  className,
  currentSlide,
  defaultSlide = 0,
  onSlideChange,
  aspectRatio = "none",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultSlide);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Carousel implementation logic...

  return (
    <div className={cn(carouselVariants({ variant, size }), className)}>
      {/* Carousel content */}
    </div>
  );
};

export default Carousel;`;
