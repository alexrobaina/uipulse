import NavigationMenu, {
  NavigationMenuItem,
} from '@/app/ui/molecules/NavigationMenu';
import Preview from '@/app/components/Preview';

export default function NavigationMenuDemo() {
  const horizontalMenuItems: NavigationMenuItem[] = [
    {
      id: 'products',
      label: 'Products',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
          />
        </svg>
      ),
      children: [
        {
          id: 'uipulse-pro',
          label: 'UIpulse Pro',
          description: 'Professional component library with advanced features',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ),
          badge: 'Popular',
        },
        {
          id: 'uipulse-enterprise',
          label: 'UIpulse Enterprise',
          description: 'Complete design system solution for large teams',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              />
            </svg>
          ),
          badge: 'New',
        },
        {
          id: 'templates',
          label: 'Templates',
          description: 'Pre-built templates and starter kits',
          icon: (
            <svg
              className='w-4 h-4'
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
          ),
        },
      ],
    },
    {
      id: 'solutions',
      label: 'Solutions',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
      children: [
        {
          id: 'startups',
          label: 'For Startups',
          description: 'Fast-track your MVP with our component library',
          icon: (
            <svg
              className='w-4 h-4'
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
          ),
        },
        {
          id: 'enterprise',
          label: 'For Enterprise',
          description: 'Scalable design system for large organizations',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
              />
            </svg>
          ),
        },
        {
          id: 'agencies',
          label: 'For Agencies',
          description: 'Streamline client projects with consistent components',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          ),
        },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
      children: [
        {
          id: 'documentation',
          label: 'Documentation',
          description: 'Comprehensive guides and API reference',
          href: '/docs',
        },
        {
          id: 'examples',
          label: 'Examples',
          description: 'Live examples and code snippets',
          href: '/examples',
        },
        {
          id: 'blog',
          label: 'Blog',
          description: 'Design system tips and best practices',
          href: '/blog',
        },
        {
          id: 'community',
          label: 'Community',
          description: 'Join our Discord community',
          badge: '4.2k',
        },
      ],
    },
    {
      id: 'pricing',
      label: 'Pricing',
      href: '/pricing',
    },
    {
      id: 'support',
      label: 'Support',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      children: [
        {
          id: 'help-center',
          label: 'Help Center',
          description: 'Find answers to common questions',
        },
        {
          id: 'contact',
          label: 'Contact Us',
          description: 'Get in touch with our support team',
        },
        {
          id: 'status',
          label: 'System Status',
          description: 'Check our service availability',
          badge: 'All systems operational',
        },
      ],
    },
  ];

  const verticalMenuItems: NavigationMenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z'
          />
        </svg>
      ),
      active: true,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
          />
        </svg>
      ),
      badge: 12,
      children: [
        {
          id: 'my-projects',
          label: 'My Projects',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          ),
        },
        {
          id: 'shared-projects',
          label: 'Shared Projects',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          ),
        },
        {
          id: 'archived-projects',
          label: 'Archived Projects',
          icon: (
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
              />
            </svg>
          ),
        },
      ],
    },
    {
      id: 'team',
      label: 'Team',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      children: [
        {
          id: 'members',
          label: 'Members',
          badge: '8',
        },
        {
          id: 'invitations',
          label: 'Invitations',
          badge: '2',
        },
        {
          id: 'permissions',
          label: 'Permissions',
        },
      ],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
          />
        </svg>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      children: [
        {
          id: 'general',
          label: 'General',
        },
        {
          id: 'security',
          label: 'Security',
        },
        {
          id: 'notifications',
          label: 'Notifications',
        },
        {
          id: 'billing',
          label: 'Billing',
          badge: 'Pro',
        },
      ],
    },
  ];

  const clickMenuItems: NavigationMenuItem[] = [
    {
      id: 'file',
      label: 'File',
      children: [
        { id: 'new', label: 'New', badge: 'Ctrl+N' },
        { id: 'open', label: 'Open', badge: 'Ctrl+O' },
        { id: 'save', label: 'Save', badge: 'Ctrl+S' },
        { id: 'save-as', label: 'Save As...', badge: 'Ctrl+Shift+S' },
        {
          id: 'export',
          label: 'Export',
          children: [
            { id: 'pdf', label: 'Export as PDF' },
            { id: 'png', label: 'Export as PNG' },
            { id: 'svg', label: 'Export as SVG' },
          ],
        },
        { id: 'exit', label: 'Exit', disabled: true },
      ],
    },
    {
      id: 'edit',
      label: 'Edit',
      children: [
        { id: 'undo', label: 'Undo', badge: 'Ctrl+Z' },
        { id: 'redo', label: 'Redo', badge: 'Ctrl+Y' },
        { id: 'cut', label: 'Cut', badge: 'Ctrl+X' },
        { id: 'copy', label: 'Copy', badge: 'Ctrl+C' },
        { id: 'paste', label: 'Paste', badge: 'Ctrl+V' },
      ],
    },
    {
      id: 'view',
      label: 'View',
      children: [
        { id: 'zoom-in', label: 'Zoom In', badge: 'Ctrl++' },
        { id: 'zoom-out', label: 'Zoom Out', badge: 'Ctrl+-' },
        { id: 'fullscreen', label: 'Full Screen', badge: 'F11' },
      ],
    },
    {
      id: 'help',
      label: 'Help',
      children: [
        { id: 'docs', label: 'Documentation' },
        { id: 'shortcuts', label: 'Keyboard Shortcuts' },
        { id: 'about', label: 'About' },
      ],
    },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Horizontal Menu - Default */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Horizontal Menu - Default Variant
          </h3>
          <div className='p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'>
            <NavigationMenu
              items={horizontalMenuItems}
              orientation='horizontal'
              variant='default'
            />
          </div>
        </div>

        {/* Horizontal Menu - Modern */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Horizontal Menu - Modern Variant
          </h3>
          <div className='p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'>
            <NavigationMenu
              items={horizontalMenuItems}
              orientation='horizontal'
              variant='modern'
            />
          </div>
        </div>

        {/* Horizontal Menu - Minimal */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Horizontal Menu - Minimal Variant
          </h3>
          <div className='p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'>
            <NavigationMenu
              items={horizontalMenuItems}
              orientation='horizontal'
              variant='minimal'
            />
          </div>
        </div>

        {/* Vertical Sidebar Menu */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Vertical Sidebar Menu
          </h3>
          <div className='flex'>
            <div className='w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4'>
              <NavigationMenu
                items={verticalMenuItems}
                orientation='vertical'
                variant='modern'
              />
            </div>
          </div>
        </div>

        {/* Click Trigger Menu */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Click Trigger Menu (Desktop App Style)
          </h3>
          <div className='p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'>
            <NavigationMenu
              items={clickMenuItems}
              orientation='horizontal'
              variant='minimal'
              trigger='click'
            />
          </div>
        </div>

        {/* Without Icons */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Without Icons
          </h3>
          <div className='p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'>
            <NavigationMenu
              items={horizontalMenuItems}
              orientation='horizontal'
              variant='modern'
              showIcons={false}
            />
          </div>
        </div>

        {/* Mobile-Style Vertical Menu */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Mobile-Style Vertical Menu
          </h3>
          <div className='max-w-sm'>
            <div className='bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-2'>
              <NavigationMenu
                items={[
                  {
                    id: 'home',
                    label: 'Home',
                    icon: (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                        />
                      </svg>
                    ),
                    active: true,
                  },
                  {
                    id: 'explore',
                    label: 'Explore',
                    icon: (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                      </svg>
                    ),
                  },
                  {
                    id: 'notifications',
                    label: 'Notifications',
                    icon: (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 17h5l-5 5v-5zM15 17H9a4 4 0 01-4-4V8a4 4 0 014-4h6a4 4 0 014 4v5a4 4 0 01-4 4z'
                        />
                      </svg>
                    ),
                    badge: '3',
                  },
                  {
                    id: 'profile',
                    label: 'Profile',
                    icon: (
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    ),
                  },
                ]}
                orientation='vertical'
                variant='default'
                trigger='click'
              />
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
