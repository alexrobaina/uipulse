import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppLayout from '@/app/components/AppLayout';
import { SidebarNavItem } from '@/app/ui/molecules/Sidebar';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Home, Atom, Layers3, Eye } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://uipulse.com'),
  title: {
    default: 'UIPulse - React Component Library',
    template: '%s | UIPulse',
  },
  description:
    'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS. 35 production-ready components for modern web applications.',
  keywords: [
    'react',
    'components',
    'ui library',
    'typescript',
    'tailwind css',
    'atomic design',
    'component library',
    'ui components',
    'react ui',
    'design system',
    'frontend',
    'web development',
    'responsive design',
    'accessibility',
  ],
  authors: [{ name: 'Alex Robaina' }],
  creator: 'Alex Robaina',
  publisher: 'UIPulse',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uipulse.com',
    siteName: 'UIPulse',
    title: 'UIPulse - React Component Library',
    description:
      'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS. 35 production-ready components for modern web applications.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UIPulse - React Component Library',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'UIPulse - React Component Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UIPulse - React Component Library',
    description:
      'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS. 35 production-ready components for modern web applications.',
    creator: '@alexrobaina',
    images: ['/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'Technology',
  classification: 'Software Development Tools',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Navigation configuration
const navigationItems: SidebarNavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className='w-5 h-5' />,
  },
  {
    title: 'Demo',
    icon: <Eye className='w-5 h-5' />,
    items: [
      { title: 'Layout', href: '/demo/layout' },
      { title: 'Theme Test', href: '/demo/theme-test' },
    ],
  },
  {
    title: 'Components',
    className: 'text-foreground font-medium',
  },
  {
    title: 'Atoms',
    icon: <Atom className='w-5 h-5' />,
    items: [
      { title: 'Alert', href: '/atoms/alert' },
      { title: 'Avatar', href: '/atoms/avatar' },
      { title: 'Badge', href: '/atoms/badge' },
      { title: 'Button', href: '/atoms/button' },
      { title: 'Checkbox', href: '/atoms/checkbox' },
      { title: 'Divider', href: '/atoms/divider' },
      { title: 'Input', href: '/atoms/input' },
      { title: 'Progress', href: '/atoms/progress' },
      { title: 'Show More', href: '/atoms/show-more' },
      { title: 'Slider', href: '/atoms/slider' },
      { title: 'Spinner', href: '/atoms/spinner' },
      { title: 'Switch', href: '/atoms/switch' },
      { title: 'Tooltip', href: '/atoms/tooltip' },
    ],
  },
  {
    title: 'Molecules',
    icon: <Layers3 className='w-5 h-5' />,
    items: [
      { title: 'Accordion', href: '/molecules/accordion' },
      { title: 'Breadcrumb', href: '/molecules/breadcrumb' },
      { title: 'ButtonGroup', href: '/molecules/button-group' },
      { title: 'Calendar', href: '/molecules/calendar' },
      { title: 'Card', href: '/molecules/card' },
      { title: 'Carousel', href: '/molecules/carousel' },
      { title: 'Currency Input', href: '/molecules/currency-input' },
      { title: 'Dropdown', href: '/molecules/dropdown' },
      { title: 'File Uploader', href: '/molecules/file-uploader' },
      { title: 'Input OTP', href: '/molecules/input-otp' },
      { title: 'Menu', href: '/molecules/menu' },
      { title: 'Modal', href: '/molecules/modal' },
      { title: 'Navbar', href: '/molecules/navbar' },
      { title: 'Navigation Menu', href: '/molecules/navigation-menu' },
      { title: 'Pagination', href: '/molecules/pagination' },
      { title: 'Search Modal', href: '/molecules/search-modal' },
      { title: 'Quantity Input', href: '/molecules/quantity-input' },
      { title: 'Sidebar', href: '/molecules/sidebar' },
      { title: 'Slider Modal', href: '/molecules/slider-modal' },
      { title: 'Tab', href: '/molecules/tab' },
      { title: 'Table', href: '/molecules/table' },
      { title: 'Toggle Group', href: '/molecules/toggle-group' },
      { title: 'Toolkit', href: '/molecules/toolkit' },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#3b82f6' />
        <meta name='msapplication-TileColor' content='#3b82f6' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=5'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'UIPulse',
              url: 'https://uipulse.com',
              description:
                'A comprehensive UI component library built with React, TypeScript, and Tailwind CSS. 35 production-ready components for modern web applications.',
              author: {
                '@type': 'Person',
                name: 'Alex Robaina',
                url: 'https://github.com/alexrobaina',
              },
              publisher: {
                '@type': 'Organization',
                name: 'UIPulse',
                url: 'https://uipulse.com',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://uipulse.com/?search={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              sameAs: ['https://github.com/alexrobaina/uipulse'],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <AppLayout
            showNavbar
            navigation={navigationItems}
            brand={
              <div className='flex items-center space-x-2 gap-4'>
                <div className='w-8 h-8 bg-primary rounded-xl flex items-center justify-center'>
                  <span className='text-primary-foreground text-sm font-bold'>
                    UI
                  </span>
                </div>
                <span className='font-bold text-lg text-foreground'>
                  UIPulse
                </span>
              </div>
            }
            sidebarVariant='default'
          >
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
