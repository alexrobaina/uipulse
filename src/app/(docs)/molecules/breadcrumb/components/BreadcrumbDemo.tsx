import Breadcrumb from '@/app/ui/molecules/Breadcrumb';
import Preview from '@/app/components/Preview';
import { Home, Folder } from 'lucide-react';

export default function BreadcrumbDemo() {
  const basicBreadcrumb = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', current: true },
  ];

  const deepBreadcrumb = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Web App', href: '/projects/webapp' },
    { label: 'Components', href: '/projects/webapp/components' },
    { label: 'Navigation', current: true },
  ];

  const simpleBreadcrumb = [
    { label: 'Documentation', href: '/docs' },
    { label: 'Breadcrumb', current: true },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Basic Breadcrumb
          </h3>
          <Breadcrumb items={basicBreadcrumb} />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Home Icon
          </h3>
          <Breadcrumb items={basicBreadcrumb} showHomeIcon />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Deep Navigation
          </h3>
          <Breadcrumb items={deepBreadcrumb} showHomeIcon />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Simple Path
          </h3>
          <Breadcrumb items={simpleBreadcrumb} />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Custom Separator
          </h3>
          <Breadcrumb
            items={basicBreadcrumb}
            separator={<Folder className='w-3 h-3' />}
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            No Links (Read-only)
          </h3>
          <Breadcrumb
            items={[
              { label: 'Reports' },
              { label: 'Analytics' },
              { label: 'Traffic', current: true },
            ]}
          />
        </div>
      </div>
    </Preview>
  );
}
