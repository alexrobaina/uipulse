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
    <main className='min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50  '>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Hero Section */}
        <section className='text-center mb-16'>
          <header className='inline-flex items-center space-x-2 mb-6'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
              <span className='text-white text-xl font-bold'>UI</span>
            </div>
            <h1 className='text-4xl font-bold text-neutral-900 dark:text-neutral-100'>
              UIPulse
            </h1>
          </header>

          <p className='text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto'>
            A comprehensive UI component library built with React, TypeScript,
            and Tailwind CSS.{' '}
            <strong className='text-neutral-900 dark:text-neutral-100'>
              35 production-ready components
            </strong>{' '}
            for your next project. Inspired by the beautiful designs of{' '}
            <strong className='text-neutral-900 dark:text-neutral-100'>
              Vercel UI
            </strong>{' '}
            and{' '}
            <strong className='text-neutral-900 dark:text-neutral-100'>
              GitHub
            </strong>
            .
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
        </section>

        {/* Features Section */}
        <section
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
          aria-labelledby='features-heading'
        >
          <h2 id='features-heading' className='sr-only'>
            Features
          </h2>
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
              Copy & Paste Ready
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Simply copy the component folder into your project. No
              dependencies to install - just pure, self-contained components.
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
              Atomic Design Pattern
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Built using atomic design principles - atoms, molecules, and
              organisms that you can mix and match to build complex interfaces.
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
              Production Ready
            </h3>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Each component is battle-tested with proper accessibility,
              TypeScript types, and follows React best practices.
            </p>
          </Card>
        </section>

        {/* Project Templates Section */}
        <section className='mb-16' aria-labelledby='templates-heading'>
          <div className='text-center mb-12'>
            <h2
              id='templates-heading'
              className='text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4'
            >
              Project Templates Coming Soon
            </h2>
            <p className='text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto'>
              Jump-start your development with pre-configured project templates
              that include UIPulse components and best practices.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card className='p-6 text-center border-2 border-dashed border-neutral-300 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors'>
              <div className='w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-orange-600 dark:text-orange-400'
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
                Vite.js Template
              </h3>
              <p className='text-neutral-600 dark:text-neutral-400 text-sm mb-4'>
                Lightning-fast development with Vite.js, React, TypeScript, and
                UIPulse components pre-configured.
              </p>
              <Badge variant='default'>Coming Soon</Badge>
            </Card>

            <Card className='p-6 text-center border-2 border-dashed border-neutral-300 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors'>
              <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-blue-600 dark:text-blue-400'
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
                Next.js Template
              </h3>
              <p className='text-neutral-600 dark:text-neutral-400 text-sm mb-4'>
                Full-stack React framework with server-side rendering, API
                routes, and UIPulse components ready to use.
              </p>
              <Badge variant='default'>Coming Soon</Badge>
            </Card>

            <Card className='p-6 text-center border-2 border-dashed border-neutral-300 dark:border-neutral-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors'>
              <div className='w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-purple-600 dark:text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
                Electron Template
              </h3>
              <p className='text-neutral-600 dark:text-neutral-400 text-sm mb-4'>
                Cross-platform desktop applications with Electron, React, and
                UIPulse components for native-like UIs.
              </p>
              <Badge variant='default'>Coming Soon</Badge>
            </Card>
          </div>
        </section>

        {/* GitHub Repository Section */}
        <section className='mb-16' aria-labelledby='github-heading'>
          <div className='text-center'>
            <Card className='p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800'>
              <div className='w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-10 h-10 text-green-600 dark:text-green-400'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </div>
              <h2
                id='github-heading'
                className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4'
              >
                Open Source & Community Driven
              </h2>
              <p className='text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto'>
                UIPulse is completely open source and free to use. Join our
                community, contribute, and help us build the best UI component
                library together.
              </p>
              <div className='flex flex-wrap justify-center gap-4 mb-6'>
                <a
                  href='https://github.com/alexrobaina/uipulse'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors font-medium'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                  Visit Repository
                </a>
                <Button
                  variant='outline'
                  onClick={() =>
                    window.open(
                      'https://github.com/alexrobaina/uipulse',
                      '_blank'
                    )
                  }
                  className='flex items-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                    />
                  </svg>
                  Clone Project
                </Button>
              </div>
              <div className='text-center'>
                <p className='text-sm text-neutral-500 dark:text-neutral-400 mb-3'>
                  Show your support by starring the repository
                </p>
                <div className='flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400'>
                  <svg
                    className='w-5 h-5 text-yellow-500'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                  </svg>
                  <span className='font-medium'>Star UIPulse on GitHub</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Components Grid */}
        <section className='mb-16' aria-labelledby='components-heading'>
          <h2
            id='components-heading'
            className='text-3xl font-bold text-neutral-900 dark:text-neutral-100 text-center mb-12'
          >
            Available Components
          </h2>

          {/* Atoms Section */}
          <div className='mb-12' aria-labelledby='atoms-heading'>
            <div className='flex items-center justify-center gap-2 mb-8'>
              <h3
                id='atoms-heading'
                className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'
              >
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
          <div aria-labelledby='molecules-heading'>
            <div className='flex items-center justify-center gap-2 mb-8'>
              <h3
                id='molecules-heading'
                className='text-xl font-semibold text-neutral-900 dark:text-neutral-100'
              >
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
        </section>

        {/* CTA Section */}
        <section className='text-center' aria-labelledby='cta-heading'>
          <Card className='p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800'>
            <h2
              id='cta-heading'
              className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4'
            >
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
        </section>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleSearchNavigation}
        searchResults={allSearchResults}
        placeholder='Search components, demos, and documentation...'
      />
    </main>
  );
}
