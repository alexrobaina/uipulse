import Carousel, { CarouselItem } from '@/app/ui/molecules/Carousel';
import Preview from '@/app/components/Preview';

export default function CarouselDemo() {
  const imageSlides: CarouselItem[] = [
    {
      id: '1',
      content: (
        <div className='w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold'>
          Slide 1
        </div>
      ),
      alt: 'First slide',
    },
    {
      id: '2',
      content: (
        <div className='w-full h-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold'>
          Slide 2
        </div>
      ),
      alt: 'Second slide',
    },
    {
      id: '3',
      content: (
        <div className='w-full h-full bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold'>
          Slide 3
        </div>
      ),
      alt: 'Third slide',
    },
    {
      id: '4',
      content: (
        <div className='w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold'>
          Slide 4
        </div>
      ),
      alt: 'Fourth slide',
    },
  ];

  const contentSlides: CarouselItem[] = [
    {
      id: 'testimonial-1',
      content: (
        <div className='p-8 text-center'>
          <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-blue-600 dark:text-blue-400'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z' />
            </svg>
          </div>
          <blockquote className='text-lg text-neutral-700 dark:text-neutral-300 mb-4'>
            "This carousel component is exactly what I needed for my project.
            The API is intuitive and the animations are smooth."
          </blockquote>
          <cite className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            — Sarah Johnson, Frontend Developer
          </cite>
        </div>
      ),
    },
    {
      id: 'testimonial-2',
      content: (
        <div className='p-8 text-center'>
          <div className='w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-green-600 dark:text-green-400'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z' />
            </svg>
          </div>
          <blockquote className='text-lg text-neutral-700 dark:text-neutral-300 mb-4'>
            "Great accessibility features and the auto-play functionality works
            perfectly. Highly recommended!"
          </blockquote>
          <cite className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            — Mike Chen, UX Designer
          </cite>
        </div>
      ),
    },
    {
      id: 'testimonial-3',
      content: (
        <div className='p-8 text-center'>
          <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-purple-600 dark:text-purple-400'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z' />
            </svg>
          </div>
          <blockquote className='text-lg text-neutral-700 dark:text-neutral-300 mb-4'>
            "The customization options are fantastic. I was able to match it
            perfectly to our design system."
          </blockquote>
          <cite className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            — Alex Rodriguez, Product Manager
          </cite>
        </div>
      ),
    },
  ];

  const productSlides: CarouselItem[] = [
    {
      id: 'product-1',
      content: (
        <div className='bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700'>
          <div className='aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            UIpulse Pro
          </h3>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
            Professional component library with 200+ premium components and
            advanced customization options.
          </p>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
              $49/mo
            </span>
            <span className='px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs rounded'>
              Popular
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'product-2',
      content: (
        <div className='bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700'>
          <div className='aspect-square bg-gradient-to-br from-green-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            UIpulse Enterprise
          </h3>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
            Complete design system solution for large teams with unlimited
            components and dedicated support.
          </p>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
              $199/mo
            </span>
            <span className='px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-xs rounded'>
              Enterprise
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'product-3',
      content: (
        <div className='bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700'>
          <div className='aspect-square bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mb-4 flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
              />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            UIpulse Custom
          </h3>
          <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
            Tailored solution designed specifically for your needs with bespoke
            components and full source code.
          </p>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
              Custom
            </span>
            <span className='px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-xs rounded'>
              Bespoke
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Basic Usage */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Basic Usage
          </h3>
          <Carousel items={imageSlides} aspectRatio='video' />
        </div>

        {/* Auto-play */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Auto-play (3 seconds)
          </h3>
          <Carousel
            items={imageSlides}
            autoPlay={3000}
            pauseOnHover
            aspectRatio='video'
            variant='modern'
          />
        </div>

        {/* Different Variants */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Variants
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Default
              </span>
              <Carousel
                items={imageSlides.slice(0, 3)}
                variant='default'
                size='sm'
                aspectRatio='square'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Modern
              </span>
              <Carousel
                items={imageSlides.slice(0, 3)}
                variant='modern'
                size='sm'
                aspectRatio='square'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Elevated
              </span>
              <Carousel
                items={imageSlides.slice(0, 3)}
                variant='elevated'
                size='sm'
                aspectRatio='square'
              />
            </div>
          </div>
        </div>

        {/* Navigation Styles */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Navigation Styles
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Inside Navigation
              </span>
              <Carousel
                items={imageSlides.slice(0, 3)}
                variant='modern'
                navigationVariant='modern'
                navigationPosition='inside'
                aspectRatio='video'
              />
            </div>
            <div className='space-y-2'>
              <span className='text-xs text-neutral-500 dark:text-neutral-400 font-medium'>
                Outside Navigation
              </span>
              <Carousel
                items={imageSlides.slice(0, 3)}
                variant='modern'
                navigationVariant='elevated'
                showNavigationOutside
                aspectRatio='video'
              />
            </div>
          </div>
        </div>

        {/* Content Carousel - Testimonials */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Content Carousel - Testimonials
          </h3>
          <Carousel
            items={contentSlides}
            variant='modern'
            autoPlay={5000}
            pauseOnHover
            navigationVariant='modern'
          />
        </div>

        {/* Product Showcase */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Product Showcase
          </h3>
          <Carousel
            items={productSlides}
            variant='minimal'
            navigationVariant='elevated'
            showNavigationOutside
          />
        </div>

        {/* Without Indicators */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Without Indicators
          </h3>
          <Carousel
            items={imageSlides}
            variant='modern'
            showIndicators={false}
            aspectRatio='video'
          />
        </div>

        {/* Without Navigation */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Without Navigation
          </h3>
          <Carousel
            items={imageSlides}
            variant='modern'
            showNavigation={false}
            autoPlay={2000}
            aspectRatio='video'
          />
        </div>

        {/* No Loop */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            No Loop (Finite)
          </h3>
          <Carousel
            items={imageSlides}
            variant='modern'
            loop={false}
            aspectRatio='video'
          />
        </div>
      </div>
    </Preview>
  );
}
