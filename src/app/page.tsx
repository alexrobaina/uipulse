'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import Button from '@/app/ui/atoms/Button';
import Card from '@/app/ui/molecules/Card';
import Badge from '@/app/ui/atoms/Badge';
import SearchModal from '@/app/ui/molecules/SearchModal';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  // Add keyboard shortcut to open search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  const atomComponents = [
    {
      name: 'Alert',
      description: 'Status messages and notifications',
      href: '/atoms/alert',
      type: 'Atom',
    },
    {
      name: 'Avatar',
      description: 'User profile pictures and placeholders',
      href: '/atoms/avatar',
      type: 'Atom',
    },
    {
      name: 'Badge',
      description: 'Status indicators and labels',
      href: '/atoms/badge',
      type: 'Atom',
    },
    {
      name: 'Button',
      description: 'Interactive buttons with variants',
      href: '/atoms/button',
      type: 'Atom',
    },
    {
      name: 'Checkbox',
      description: 'Selection controls with states',
      href: '/atoms/checkbox',
      type: 'Atom',
    },
    {
      name: 'Divider',
      description: 'Content separators and spacers',
      href: '/atoms/divider',
      type: 'Atom',
    },
    {
      name: 'Input',
      description: 'Text input with validation',
      href: '/atoms/input',
      type: 'Atom',
    },
    {
      name: 'Progress',
      description: 'Progress indicators and loading bars',
      href: '/atoms/progress',
      type: 'Atom',
    },
    {
      name: 'Show More',
      description: 'Expandable content sections',
      href: '/atoms/show-more',
      type: 'Atom',
    },
    {
      name: 'Spinner',
      description: 'Loading spinners and indicators',
      href: '/atoms/spinner',
      type: 'Atom',
    },
    {
      name: 'Switch',
      description: 'Toggle switches and controls',
      href: '/atoms/switch',
      type: 'Atom',
    },
    {
      name: 'Tooltip',
      description: 'Contextual information popups',
      href: '/atoms/tooltip',
      type: 'Atom',
    },
  ];

  const moleculeComponents = [
    {
      name: 'Accordion',
      description: 'Collapsible content panels',
      href: '/molecules/accordion',
      type: 'Molecule',
    },
    {
      name: 'Breadcrumb',
      description: 'Navigation breadcrumbs',
      href: '/molecules/breadcrumb',
      type: 'Molecule',
    },
    {
      name: 'Button Group',
      description: 'Grouped button controls',
      href: '/molecules/button-group',
      type: 'Molecule',
    },
    {
      name: 'Calendar',
      description: 'Date selection and calendars',
      href: '/molecules/calendar',
      type: 'Molecule',
    },
    {
      name: 'Card',
      description: 'Content containers',
      href: '/molecules/card',
      type: 'Molecule',
    },
    {
      name: 'Carousel',
      description: 'Image and content carousels',
      href: '/molecules/carousel',
      type: 'Molecule',
    },
    {
      name: 'Currency Input',
      description: 'Currency formatted inputs',
      href: '/molecules/currency-input',
      type: 'Molecule',
    },
    {
      name: 'Dropdown',
      description: 'Selection dropdowns with search',
      href: '/molecules/dropdown',
      type: 'Molecule',
    },
    {
      name: 'File Uploader',
      description: 'Drag & drop file uploads',
      href: '/molecules/file-uploader',
      type: 'Molecule',
    },
    {
      name: 'Input OTP',
      description: 'One-time password inputs',
      href: '/molecules/input-otp',
      type: 'Molecule',
    },
    {
      name: 'Menu',
      description: 'Context menus and dropdowns',
      href: '/molecules/menu',
      type: 'Molecule',
    },
    {
      name: 'Modal',
      description: 'Dialog overlays',
      href: '/molecules/modal',
      type: 'Molecule',
    },
    {
      name: 'Navbar',
      description: 'Navigation headers',
      href: '/molecules/navbar',
      type: 'Molecule',
    },
    {
      name: 'Navigation Menu',
      description: 'Complex navigation systems',
      href: '/molecules/navigation-menu',
      type: 'Molecule',
    },
    {
      name: 'Pagination',
      description: 'Page navigation controls',
      href: '/molecules/pagination',
      type: 'Molecule',
    },
    {
      name: 'Quantity Input',
      description: 'Numeric quantity selectors',
      href: '/molecules/quantity-input',
      type: 'Molecule',
    },
    {
      name: 'Sidebar',
      description: 'Side navigation panels',
      href: '/molecules/sidebar',
      type: 'Molecule',
    },
    {
      name: 'Slider Modal',
      description: 'Sliding modal dialogs',
      href: '/molecules/slider-modal',
      type: 'Molecule',
    },
    {
      name: 'Tab',
      description: 'Tabbed content interfaces',
      href: '/molecules/tab',
      type: 'Molecule',
    },
    {
      name: 'Table',
      description: 'Data tables with sorting',
      href: '/molecules/table',
      type: 'Molecule',
    },
    {
      name: 'Toggle Group',
      description: 'Toggle button groups',
      href: '/molecules/toggle-group',
      type: 'Molecule',
    },
    {
      name: 'Toolkit',
      description: 'Action toolbars',
      href: '/molecules/toolkit',
      type: 'Molecule',
    },
  ];

  // Create comprehensive search data
  const allSearchResults = [
    // Atom components
    ...atomComponents.map(component => ({
      id: `atom-${component.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: component.name,
      description: component.description,
      type: 'component' as const,
      url: component.href,
    })),
    // Molecule components
    ...moleculeComponents.map(component => ({
      id: `molecule-${component.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: component.name,
      description: component.description,
      type: 'component' as const,
      url: component.href,
    })),
    // Demo pages
    {
      id: 'demo-layout',
      title: 'Layout Demo',
      description: 'Complete layout demonstration with sidebar and components',
      type: 'page' as const,
      url: '/demo/layout',
    },
    {
      id: 'demo-navbar-sidebar',
      title: 'Navbar + Sidebar Demo',
      description: 'Navigation layout with navbar and sidebar combination',
      type: 'page' as const,
      url: '/demo/navbar-sidebar',
    },
    {
      id: 'demo-enhanced-sidebar',
      title: 'Enhanced Sidebar Demo',
      description: 'Advanced sidebar with enhanced features and styling',
      type: 'page' as const,
      url: '/demo/enhanced-sidebar',
    },
    {
      id: 'demo-theme-test',
      title: 'Theme Test',
      description: 'Test page for theme switching and dark mode',
      type: 'page' as const,
      url: '/demo/theme-test',
    },
  ];

  const handleSearchNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <div className='min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50  '>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 mb-6'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
              <span className='text-white text-xl font-bold'>UI</span>
            </div>
            <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100'>
              UIPulse
            </h1>
          </div>

          <p className='text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto'>
            A comprehensive UI component library built with React, TypeScript,
            and Tailwind CSS.{' '}
            <strong className='text-neutral-900 dark:text-neutral-100'>
              35 production-ready components
            </strong>{' '}
            for your next project.
          </p>
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            <Button
              variant='outline'
              onClick={() => setIsSearchOpen(true)}
              className='flex items-center gap-2'
            >
              <Search className='w-4 h-4' />
              Search Components
              <kbd className='hidden sm:inline-flex items-center justify-center px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-700 rounded border border-neutral-300 dark:border-neutral-600 ml-2'>
                ⌘K
              </kbd>
            </Button>
          </div>
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            <Badge variant='primary'>35 Components</Badge>
            <Badge variant='success'>React + TypeScript</Badge>
            <Badge variant='default'>Tailwind CSS</Badge>
            <Badge variant='default'>Accessibility Ready</Badge>
            <Badge variant='default'>Dark Mode</Badge>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/demo/layout'>
              <Button variant='primary'>View Live Demo</Button>
            </Link>
            <Link href='/atoms/button'>
              <Button variant='outline'>Browse Components</Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          <Card className='p-6 text-center'>
            <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-6 h-6 text-blue-600 dark:text-blue-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Fast Development
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Pre-built components that speed up your development process with
              consistent design patterns.
            </p>
          </Card>

          <Card className='p-6 text-center'>
            <div className='w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-6 h-6 text-green-600 dark:text-green-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Highly Customizable
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Easy to customize with Tailwind CSS classes and built-in variant
              support for different use cases.
            </p>
          </Card>

          <Card className='p-6 text-center'>
            <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-6 h-6 text-purple-600 dark:text-purple-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Accessible
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Built with accessibility in mind, including keyboard navigation,
              focus management, and ARIA attributes.
            </p>
          </Card>
        </div>

        {/* Components Grid */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100 text-center mb-12'>
            Available Components
          </h2>

          {/* Atoms Section */}
          <div className='mb-12'>
            <div className='flex items-center justify-center gap-2 mb-8'>
              <h3 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                Atoms
              </h3>
              <Badge variant='default'>
                {atomComponents.length} Components
              </Badge>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {atomComponents.map(component => (
                <Link
                  key={component.name}
                  href={component.href}
                  className='block group'
                >
                  <Card className='p-6 h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-blue-200 dark:group-hover:border-blue-600'>
                    <div className='flex items-start justify-between mb-3'>
                      <h4 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        {component.name}
                      </h4>
                      <Badge variant='default'>{component.type}</Badge>
                    </div>
                    <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
                      {component.description}
                    </p>
                    <div className='mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium'>
                      View Documentation
                      <svg
                        className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Molecules Section */}
          <div>
            <div className='flex items-center justify-center gap-2 mb-8'>
              <h3 className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'>
                Molecules
              </h3>
              <Badge variant='primary'>
                {moleculeComponents.length} Components
              </Badge>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {moleculeComponents.map(component => (
                <Link
                  key={component.name}
                  href={component.href}
                  className='block group'
                >
                  <Card className='p-6 h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-blue-200 dark:group-hover:border-blue-600'>
                    <div className='flex items-start justify-between mb-3'>
                      <h4 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        {component.name}
                      </h4>
                      <Badge variant='primary'>{component.type}</Badge>
                    </div>
                    <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
                      {component.description}
                    </p>
                    <div className='mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium'>
                      View Documentation
                      <svg
                        className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <Card className='p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800'>
            <h2 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4'>
              Ready to get started?
            </h2>
            <p className='text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto'>
              Explore our component library and see how easy it is to build
              beautiful UIs with UIPulse.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link href='/demo/layout'>
                <Button variant='primary'>Try Live Demo</Button>
              </Link>
              <Link href='/atoms/button'>
                <Button variant='outline'>View Documentation</Button>
              </Link>
              <Button
                variant='secondary'
                onClick={() => setIsSearchOpen(true)}
                className='flex items-center gap-2'
              >
                <Search className='w-4 h-4' />
                Search
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchNavigation}
        searchResults={allSearchResults}
        placeholder='Search components, demos, and documentation...'
      />
    </div>
  );
}
