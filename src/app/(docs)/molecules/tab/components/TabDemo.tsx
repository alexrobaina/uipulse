import Tab from '@/app/ui/molecules/Tab';
import Preview from '@/app/components/Preview';
import {
  User,
  Settings,
  Bell,
  FileText,
  Image,
  Video,
  BarChart,
  Calendar,
  Mail,
} from 'lucide-react';

export default function TabDemo() {
  const profileTabs = [
    {
      id: 'profile',
      label: 'Profile',
      icon: <User className='w-4 h-4' />,
      content: (
        <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
          <h4 className='text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100'>
            Profile Information
          </h4>
          <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
            Manage your profile settings and personal information here.
          </p>
          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center'>
                <User className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <div>
                <p className='font-medium text-neutral-900 dark:text-neutral-100'>
                  John Doe
                </p>
                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                  john.doe@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className='w-4 h-4' />,
      content: (
        <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
          <h4 className='text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100'>
            Account Settings
          </h4>
          <p className='text-neutral-600 dark:text-neutral-400 mb-4'>
            Configure your account preferences and security options.
          </p>
          <div className='space-y-3'>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className='rounded' defaultChecked />
              <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                Email notifications
              </span>
            </label>
            <label className='flex items-center gap-2'>
              <input type='checkbox' className='rounded' />
              <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                SMS notifications
              </span>
            </label>
          </div>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell className='w-4 h-4' />,
      badge: '3',
      content: (
        <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
          <h4 className='text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100'>
            Recent Notifications
          </h4>
          <div className='space-y-2'>
            <div className='p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400'>
              <p className='text-sm text-neutral-900 dark:text-neutral-100'>
                New message received
              </p>
              <p className='text-xs text-neutral-500 dark:text-neutral-400'>
                2 minutes ago
              </p>
            </div>
            <div className='p-2 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400'>
              <p className='text-sm text-neutral-900 dark:text-neutral-100'>
                Profile updated successfully
              </p>
              <p className='text-xs text-neutral-500 dark:text-neutral-400'>
                1 hour ago
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const mediaTabs = [
    {
      id: 'documents',
      label: 'Documents',
      icon: <FileText className='w-4 h-4' />,
      badge: 12,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Document Library
          </h4>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Your uploaded documents and files are displayed here.
          </p>
        </div>
      ),
    },
    {
      id: 'images',
      label: 'Images',
      icon: <Image className='w-4 h-4' />,
      badge: 24,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Image Gallery
          </h4>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Browse and manage your image collection.
          </p>
        </div>
      ),
    },
    {
      id: 'videos',
      label: 'Videos',
      icon: <Video className='w-4 h-4' />,
      badge: 8,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Video Collection
          </h4>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Your video files and media content.
          </p>
        </div>
      ),
    },
  ];

  const dashboardTabs = [
    {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart className='w-4 h-4' />,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Analytics Overview
          </h4>
          <div className='grid grid-cols-2 gap-4'>
            <div className='p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Page Views
              </p>
              <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                1,234
              </p>
            </div>
            <div className='p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Users
              </p>
              <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                567
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: <Calendar className='w-4 h-4' />,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Upcoming Events
          </h4>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Your calendar and scheduled events.
          </p>
        </div>
      ),
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <Mail className='w-4 h-4' />,
      badge: 5,
      content: (
        <div className='p-4'>
          <h4 className='font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            Recent Messages
          </h4>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>
            Your latest messages and communications.
          </p>
        </div>
      ),
    },
  ];

  const simpleTabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className='p-4 text-neutral-700 dark:text-neutral-300'>
          <p>This is the overview section with general information.</p>
        </div>
      ),
    },
    {
      id: 'details',
      label: 'Details',
      content: (
        <div className='p-4 text-neutral-700 dark:text-neutral-300'>
          <p>Detailed information and specifications are shown here.</p>
        </div>
      ),
    },
    {
      id: 'advanced',
      label: 'Advanced',
      disabled: true,
      content: (
        <div className='p-4 text-neutral-700 dark:text-neutral-300'>
          <p>Advanced settings and configurations.</p>
        </div>
      ),
    },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Default Variant with Icons and Badges
          </h3>
          <Tab items={profileTabs} defaultTab='profile' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Pills Variant (Small Size)
          </h3>
          <Tab items={mediaTabs} variant='pills' size='sm' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Underline Variant
          </h3>
          <Tab items={simpleTabs} variant='underline' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Full Width Pills (Large Size)
          </h3>
          <Tab items={dashboardTabs} variant='pills' fullWidth size='lg' />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Full Width Default
          </h3>
          <Tab
            items={[
              {
                id: 'all',
                label: 'All Items',
                content: <div className='p-4'>All items content</div>,
              },
              {
                id: 'active',
                label: 'Active',
                badge: 12,
                content: <div className='p-4'>Active items</div>,
              },
              {
                id: 'archived',
                label: 'Archived',
                badge: 3,
                content: <div className='p-4'>Archived items</div>,
              },
            ]}
            fullWidth
            size='md'
          />
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Responsive Layout Example
          </h3>
          <div className='max-w-2xl'>
            <Tab
              items={[
                {
                  id: 'mobile',
                  label: 'Mobile',
                  content: (
                    <div className='p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
                      <h4 className='font-medium mb-2'>Mobile View</h4>
                      <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                        Optimized for mobile devices
                      </p>
                    </div>
                  ),
                },
                {
                  id: 'tablet',
                  label: 'Tablet',
                  content: (
                    <div className='p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
                      <h4 className='font-medium mb-2'>Tablet View</h4>
                      <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                        Adapted for tablet screens
                      </p>
                    </div>
                  ),
                },
                {
                  id: 'desktop',
                  label: 'Desktop',
                  content: (
                    <div className='p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
                      <h4 className='font-medium mb-2'>Desktop View</h4>
                      <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                        Full desktop experience
                      </p>
                    </div>
                  ),
                },
              ]}
              variant='underline'
              fullWidth
            />
          </div>
        </div>
      </div>
    </Preview>
  );
}
