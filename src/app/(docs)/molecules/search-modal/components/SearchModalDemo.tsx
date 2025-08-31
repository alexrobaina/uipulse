'use client';

import { useState } from 'react';
import SearchModal from '@/app/ui/molecules/SearchModal';
import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';

export default function SearchModalDemo() {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const customSearchResults = [
    {
      id: '1',
      title: 'Button Component',
      description: 'Interactive button with multiple variants and states',
      type: 'component' as const,
      url: '/docs/atoms/button',
    },
    {
      id: '2',
      title: 'Modal Component',
      description: 'Overlay dialog for important content and forms',
      type: 'component' as const,
      url: '/docs/molecules/modal',
    },
    {
      id: '3',
      title: 'Search Modal',
      description: 'Command palette for navigating documentation',
      type: 'component' as const,
      url: '/docs/molecules/search-modal',
    },
    {
      id: '4',
      title: 'Getting Started',
      description: 'Learn how to use the UIpulse component library',
      type: 'page' as const,
      url: '/docs/getting-started',
    },
    {
      id: '5',
      title: 'Theme Configuration',
      description: 'Customize colors, typography, and design tokens',
      type: 'section' as const,
      url: '/docs/theming',
    },
    {
      id: '6',
      title: 'Installation Guide',
      description: 'Step-by-step setup instructions',
      type: 'page' as const,
      url: '/docs/installation',
    },
    {
      id: '7',
      title: 'Input Component',
      description: 'Form input with validation and styling',
      type: 'component' as const,
      url: '/docs/atoms/input',
    },
    {
      id: '8',
      title: 'Card Component',
      description: 'Container for grouping related content',
      type: 'component' as const,
      url: '/docs/molecules/card',
    },
  ];

  const handleNavigate = (url: string) => {
    console.log('Navigating to:', url);
  };

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Basic Usage */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Basic Usage
          </h3>
          <div className='flex flex-wrap gap-3'>
            <Button onClick={() => setIsBasicOpen(true)}>
              Open Search Modal
            </Button>

            <SearchModal
              isOpen={isBasicOpen}
              onClose={() => setIsBasicOpen(false)}
              onNavigate={handleNavigate}
            />
          </div>
        </div>

        {/* Custom Search Results */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Custom Search Results
          </h3>
          <div className='flex flex-wrap gap-3'>
            <Button onClick={() => setIsCustomOpen(true)} variant='outline'>
              Custom Results
            </Button>

            <SearchModal
              isOpen={isCustomOpen}
              onClose={() => setIsCustomOpen(false)}
              onNavigate={handleNavigate}
              searchResults={customSearchResults}
              placeholder='Search UIpulse docs...'
            />
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Keyboard Shortcuts
          </h3>
          <div className='bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg'>
            <h4 className='font-medium mb-3 text-neutral-900 dark:text-neutral-100'>
              Available Shortcuts
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
              <div>
                <p className='font-medium mb-2 text-neutral-700 dark:text-neutral-300'>
                  Navigation
                </p>
                <ul className='space-y-1 text-neutral-600 dark:text-neutral-400'>
                  <li>
                    •{' '}
                    <kbd className='px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs'>
                      ↑↓
                    </kbd>{' '}
                    Navigate results
                  </li>
                  <li>
                    •{' '}
                    <kbd className='px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs'>
                      Enter
                    </kbd>{' '}
                    Select result
                  </li>
                  <li>
                    •{' '}
                    <kbd className='px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-xs'>
                      Esc
                    </kbd>{' '}
                    Close modal
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-medium mb-2 text-neutral-700 dark:text-neutral-300'>
                  Search
                </p>
                <ul className='space-y-1 text-neutral-600 dark:text-neutral-400'>
                  <li>• Real-time filtering</li>
                  <li>• Search titles and descriptions</li>
                  <li>• Auto-focus on open</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Features
          </h3>
          <div className='bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-medium mb-3 text-neutral-900 dark:text-neutral-100'>
                  Core Features
                </h4>
                <ul className='text-sm space-y-1 text-neutral-600 dark:text-neutral-400'>
                  <li>• Real-time search filtering</li>
                  <li>• Keyboard navigation</li>
                  <li>• Custom search results</li>
                  <li>• Auto-focus and accessibility</li>
                  <li>• Click outside to close</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium mb-3 text-neutral-900 dark:text-neutral-100'>
                  Design
                </h4>
                <ul className='text-sm space-y-1 text-neutral-600 dark:text-neutral-400'>
                  <li>• Command palette inspired</li>
                  <li>• Clean, minimal interface</li>
                  <li>• Dark mode support</li>
                  <li>• Smooth animations</li>
                  <li>• Icon support</li>
                  <li>• Result type indicators</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
