'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const carouselVariants = cva(
  ['relative overflow-hidden rounded-xl', 'bg-white dark:bg-neutral-900'],
  {
    variants: {
      variant: {
        default: [
          'border border-neutral-200 dark:border-neutral-800',
          'shadow-sm',
        ],
        modern: [
          'border border-neutral-200/40 dark:border-neutral-800/40',
          'shadow-[0_2px_8px_0px_rgba(0,0,0,0.04)]',
          'dark:shadow-[0_2px_8px_0px_rgba(0,0,0,0.15)]',
        ],
        elevated: [
          'border border-neutral-200/50 dark:border-neutral-800/50',
          'shadow-lg shadow-neutral-200/20 dark:shadow-neutral-900/40',
        ],
        minimal: ['border-transparent', 'shadow-none'],
      },
      size: {
        sm: 'max-w-sm',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const navigationVariants = cva(
  [
    'absolute top-1/2 -translate-y-1/2 z-10',
    'flex items-center justify-center',
    'rounded-full border transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2',
    'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-white dark:bg-neutral-800',
          'border-neutral-200 dark:border-neutral-700',
          'text-neutral-700 dark:text-neutral-300',
          'hover:bg-neutral-50 dark:hover:bg-neutral-700',
          'hover:border-neutral-300 dark:hover:border-neutral-600',
        ],
        modern: [
          'bg-white/90 dark:bg-neutral-800/90',
          'border-neutral-200/60 dark:border-neutral-700/60',
          'text-neutral-700 dark:text-neutral-300',
          'backdrop-blur-sm',
          'hover:bg-white dark:hover:bg-neutral-800',
        ],
        elevated: [
          'bg-white dark:bg-neutral-800',
          'border-neutral-200/50 dark:border-neutral-700/50',
          'text-neutral-700 dark:text-neutral-300',
          'shadow-lg shadow-neutral-900/10 dark:shadow-neutral-900/20',
          'hover:shadow-xl',
        ],
      },
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      position: {
        inside: '',
        outside: '',
      },
    },
    compoundVariants: [
      {
        position: 'inside',
        className: 'm-4',
      },
      {
        position: 'outside',
        className: '-m-2',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'inside',
    },
  }
);

const indicatorVariants = cva(
  ['w-2 h-2 rounded-full transition-all duration-300', 'cursor-pointer'],
  {
    variants: {
      variant: {
        default: [
          'bg-neutral-300 dark:bg-neutral-600',
          'hover:bg-neutral-400 dark:hover:bg-neutral-500',
        ],
        modern: [
          'bg-neutral-300/60 dark:bg-neutral-600/60',
          'hover:bg-neutral-400/80 dark:hover:bg-neutral-500/80',
        ],
      },
      active: {
        true: ['bg-blue-600 dark:bg-blue-500', 'scale-125'],
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      active: false,
    },
  }
);

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
   * Number of slides to show at once
   */
  slidesToShow?: number;
  /**
   * Number of slides to scroll at once
   */
  slidesToScroll?: number;
  /**
   * Navigation variant
   */
  navigationVariant?: 'default' | 'modern' | 'elevated';
  /**
   * Navigation size
   */
  navigationSize?: 'sm' | 'md' | 'lg';
  /**
   * Navigation position
   */
  navigationPosition?: 'inside' | 'outside';
  /**
   * Whether to show navigation outside content area
   */
  showNavigationOutside?: boolean;
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
  aspectRatio?: 'square' | 'video' | 'wide' | 'none';
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay,
  showNavigation = true,
  showIndicators = true,
  pauseOnHover = true,
  loop = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  navigationVariant = 'default',
  navigationSize = 'md',
  navigationPosition = 'inside',
  showNavigationOutside = false,
  variant = 'default',
  size = 'md',
  className,
  currentSlide,
  defaultSlide = 0,
  onSlideChange,
  aspectRatio = 'none',
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultSlide);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const actualCurrentSlide =
    currentSlide !== undefined ? currentSlide : activeIndex;

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    none: '',
  };

  const startAutoPlay = useCallback(() => {
    if (autoPlay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        if (!isHovered || !pauseOnHover) {
          setActiveIndex(prev => {
            if (loop) {
              return prev >= items.length - 1 ? 0 : prev + slidesToScroll;
            }
            return Math.min(prev + slidesToScroll, items.length - 1);
          });
        }
      }, autoPlay);
    }
  }, [autoPlay, items.length, isHovered, pauseOnHover, loop, slidesToScroll]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    if (currentSlide !== undefined) {
      setActiveIndex(currentSlide);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, items.length - 1));
    if (currentSlide === undefined) {
      setActiveIndex(newIndex);
    }
    onSlideChange?.(newIndex);
  };

  const goToPrevious = () => {
    if (loop && actualCurrentSlide === 0) {
      goToSlide(items.length - 1);
    } else if (actualCurrentSlide > 0) {
      goToSlide(actualCurrentSlide - slidesToScroll);
    }
  };

  const goToNext = () => {
    if (loop && actualCurrentSlide >= items.length - 1) {
      goToSlide(0);
    } else if (actualCurrentSlide < items.length - 1) {
      goToSlide(actualCurrentSlide + slidesToScroll);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  };

  const canGoPrevious = loop || actualCurrentSlide > 0;
  const canGoNext = loop || actualCurrentSlide < items.length - 1;

  return (
    <div
      className={cn(
        carouselVariants({ variant, size }),
        showNavigationOutside && 'px-12',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='region'
      aria-label='Image carousel'
    >
      {/* Main carousel container */}
      <div
        ref={containerRef}
        className={cn(
          'relative overflow-hidden',
          aspectRatio !== 'none' && aspectRatioClasses[aspectRatio]
        )}
      >
        {/* Slides container */}
        <div
          className='flex transition-transform duration-500 ease-out h-full'
          style={{
            transform: `translateX(-${(actualCurrentSlide * 100) / slidesToShow}%)`,
            width: `${(items.length * 100) / slidesToShow}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'flex-shrink-0 h-full',
                aspectRatio === 'none' && 'min-h-[200px]'
              )}
              style={{ width: `${100 / items.length}%` }}
              role='group'
              aria-roledescription='slide'
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              <div className='w-full h-full flex items-center justify-center'>
                {item.content}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {showNavigation && items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              disabled={!canGoPrevious}
              className={cn(
                navigationVariants({
                  variant: navigationVariant,
                  size: navigationSize,
                  position: showNavigationOutside
                    ? 'outside'
                    : navigationPosition,
                }),
                'left-0'
              )}
              aria-label='Go to previous slide'
            >
              <ChevronLeft className='w-4 h-4' />
            </button>

            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={cn(
                navigationVariants({
                  variant: navigationVariant,
                  size: navigationSize,
                  position: showNavigationOutside
                    ? 'outside'
                    : navigationPosition,
                }),
                'right-0'
              )}
              aria-label='Go to next slide'
            >
              <ChevronRight className='w-4 h-4' />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {showIndicators && items.length > 1 && (
        <div className='flex justify-center space-x-2 mt-4'>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                indicatorVariants({
                  variant: variant === 'modern' ? 'modern' : 'default',
                  active: index === actualCurrentSlide,
                })
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      <div className='absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded'>
        {actualCurrentSlide + 1} / {items.length}
      </div>
    </div>
  );
};

export default Carousel;
