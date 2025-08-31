import { ReactNode } from 'react';

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}

interface SEOHeadProps {
  children?: ReactNode;
}

export function SEOHead({ children }: SEOHeadProps) {
  return (
    <head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=5'
      />
      <meta name='format-detection' content='telephone=no' />
      <meta name='theme-color' content='#3b82f6' />
      <meta name='msapplication-TileColor' content='#3b82f6' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link rel='dns-prefetch' href='//fonts.googleapis.com' />
      <link rel='dns-prefetch' href='//fonts.gstatic.com' />
      {children}
    </head>
  );
}

interface BreadcrumbNavProps {
  breadcrumbs: Array<{ name: string; url: string; current?: boolean }>;
}

export function BreadcrumbNav({ breadcrumbs }: BreadcrumbNavProps) {
  return (
    <nav aria-label='Breadcrumb' className='mb-6'>
      <ol className='flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.url} className='flex items-center'>
            {index > 0 && (
              <svg
                className='w-4 h-4 mx-2 text-neutral-400'
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
            )}
            {breadcrumb.current ? (
              <span
                className='font-medium text-neutral-900 dark:text-neutral-100'
                aria-current='page'
              >
                {breadcrumb.name}
              </span>
            ) : (
              <a
                href={breadcrumb.url}
                className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                {breadcrumb.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
