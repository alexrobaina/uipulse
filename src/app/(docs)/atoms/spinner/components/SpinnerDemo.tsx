'use client';
import Spinner from '@/app/ui/atoms/Spinner';
import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function SpinnerDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Sizes
          </h3>
          <div className='flex items-center gap-4'>
            <div className='text-center space-y-2'>
              <Spinner size='xs' />
              <p className='text-xs text-neutral-500'>XS</p>
            </div>
            <div className='text-center space-y-2'>
              <Spinner size='sm' />
              <p className='text-xs text-neutral-500'>SM</p>
            </div>
            <div className='text-center space-y-2'>
              <Spinner size='md' />
              <p className='text-xs text-neutral-500'>MD</p>
            </div>
            <div className='text-center space-y-2'>
              <Spinner size='lg' />
              <p className='text-xs text-neutral-500'>LG</p>
            </div>
            <div className='text-center space-y-2'>
              <Spinner size='xl' />
              <p className='text-xs text-neutral-500'>XL</p>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Variants
          </h3>
          <div className='flex items-center gap-6'>
            <div className='text-center space-y-2'>
              <Spinner variant='default' />
              <p className='text-xs text-neutral-500'>Default</p>
            </div>
            <div className='text-center space-y-2'>
              <Spinner variant='primary' />
              <p className='text-xs text-neutral-500'>Primary</p>
            </div>
            <div className='text-center space-y-2'>
              <div className='bg-neutral-900 dark:bg-white p-3 rounded'>
                <Spinner variant='white' />
              </div>
              <p className='text-xs text-neutral-500'>White</p>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            In Button
          </h3>
          <Button
            onClick={simulateLoading}
            disabled={isLoading}
            className='flex items-center gap-2'
          >
            {isLoading && <Spinner size='sm' variant='white' />}
            {isLoading ? 'Loading...' : 'Start Loading'}
          </Button>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Centered in Container
          </h3>
          <div className='w-full h-32 flex items-center justify-center border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg'>
            <Spinner size='lg' variant='primary' />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Inline with Text
          </h3>
          <p className='text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-2'>
            <Spinner size='sm' />
            Processing your request...
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Loading Overlay Example
          </h3>
          <div className='relative p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
            <div className='space-y-3'>
              <h4 className='text-lg font-medium'>Content Area</h4>
              <p className='text-neutral-600 dark:text-neutral-400'>
                This represents some content that would be loading...
              </p>
            </div>
            <div className='absolute inset-0 bg-white/80 dark:bg-neutral-900/80 flex items-center justify-center rounded-lg'>
              <div className='text-center space-y-2'>
                <Spinner size='lg' variant='primary' />
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Loading content...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
