'use client';

import AppLayout from '@/app/components/AppLayout';
import { SidebarNavItem } from '@/app/ui/molecules/Sidebar';
import Card from '@/app/ui/molecules/Card';
import Button from '@/app/ui/atoms/Button';
import Badge from '@/app/ui/atoms/Badge';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  BarChart3,
  Settings,
  Package,
  UserCheck,
  CheckCircle,
  DollarSign,
} from 'lucide-react';

// Sample navigation configuration
const navigationItems: SidebarNavItem[] = [
  {
    title: 'Dashboard',
    href: '/demo/layout',
    icon: <LayoutDashboard className='w-5 h-5' />,
    isActive: true,
  },
  {
    title: 'Projects',
    icon: <FolderKanban className='w-5 h-5' />,
    items: [
      { title: 'Active Projects', href: '/projects/active', badge: '8' },
      { title: 'Archived', href: '/projects/archived', badge: '4' },
      { title: 'Templates', href: '/projects/templates' },
      { title: 'Shared', href: '/projects/shared', badge: '2' },
    ],
  },
  {
    title: 'Team',
    href: '/team',
    icon: <Users className='w-5 h-5' />,
    badge: '5',
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: <BarChart3 className='w-5 h-5' />,
  },
  {
    title: 'Settings',
    icon: <Settings className='w-5 h-5' />,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
      { title: 'Billing', href: '/settings/billing', badge: '!' },
      { title: 'Integrations', href: '/settings/integrations' },
    ],
  },
];

const sampleUser = {
  name: 'John Doe',
  email: 'john@example.com',
};

export default function LayoutDemoPage() {
  return (
    <AppLayout
      navigation={navigationItems}
      brand={
        <div className='flex items-center space-x-2'>
          <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center'>
            <span className='text-white text-sm font-bold'>UI</span>
          </div>
          <span className='font-bold text-lg'>UIPulse</span>
        </div>
      }
      user={sampleUser}
      sidebarVariant='default'
    >
      <div className='p-6 space-y-6'>
        {/* Header */}
        <div className='border-b border-neutral-200 dark:border-neutral-800 pb-4'>
          <h1 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
            Dashboard
          </h1>
          <p className='text-neutral-600 dark:text-neutral-400'>
            Welcome back! Here&apos;s what&apos;s happening with your projects.
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card className='p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Total Projects
                </p>
                <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                  24
                </p>
              </div>
              <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center'>
                <Package className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
            </div>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Team Members
                </p>
                <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                  12
                </p>
              </div>
              <div className='w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center'>
                <UserCheck className='w-6 h-6 text-green-600 dark:text-green-400' />
              </div>
            </div>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Completed Tasks
                </p>
                <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                  89%
                </p>
              </div>
              <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center'>
                <CheckCircle className='w-6 h-6 text-purple-600 dark:text-purple-400' />
              </div>
            </div>
          </Card>

          <Card className='p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Revenue
                </p>
                <p className='text-2xl font-bold text-neutral-900 dark:text-neutral-100'>
                  $52K
                </p>
              </div>
              <div className='w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center'>
                <DollarSign className='w-6 h-6 text-yellow-600 dark:text-yellow-400' />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <Card title='Recent Projects' className='p-6'>
            <div className='space-y-4'>
              {[
                {
                  name: 'E-commerce Platform',
                  status: 'In Progress',
                  progress: 75,
                },
                { name: 'Mobile App Redesign', status: 'Review', progress: 90 },
                {
                  name: 'Dashboard Analytics',
                  status: 'Planning',
                  progress: 25,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg'
                >
                  <div className='flex-1'>
                    <h4 className='font-medium text-neutral-900 dark:text-neutral-100'>
                      {project.name}
                    </h4>
                    <div className='flex items-center space-x-2 mt-1'>
                      <Badge
                        variant={
                          project.status === 'In Progress'
                            ? 'primary'
                            : project.status === 'Review'
                              ? 'warning'
                              : 'default'
                        }
                      >
                        {project.status}
                      </Badge>
                      <span className='text-sm text-neutral-500 dark:text-neutral-400'>
                        {project.progress}% complete
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title='Team Activity' className='p-6'>
            <div className='space-y-4'>
              {[
                {
                  user: 'Alice Johnson',
                  action: 'completed task',
                  item: 'User Authentication',
                  time: '2 hours ago',
                },
                {
                  user: 'Bob Smith',
                  action: 'created',
                  item: 'New Project Template',
                  time: '4 hours ago',
                },
                {
                  user: 'Carol Davis',
                  action: 'updated',
                  item: 'Design System',
                  time: '6 hours ago',
                },
              ].map((activity, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='w-8 h-8 bg-neutral-300 dark:bg-neutral-700 rounded-full flex items-center justify-center'>
                    <span className='text-xs font-medium text-neutral-700 dark:text-neutral-300'>
                      {activity.user
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm text-neutral-900 dark:text-neutral-100'>
                      <span className='font-medium'>{activity.user}</span>{' '}
                      {activity.action}{' '}
                      <span className='font-medium'>{activity.item}</span>
                    </p>
                    <p className='text-xs text-neutral-500 dark:text-neutral-400'>
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-wrap gap-4'>
          <Button variant='primary'>Create New Project</Button>
          <Button variant='outline'>Invite Team Member</Button>
          <Button variant='ghost'>View All Projects</Button>
        </div>
      </div>
    </AppLayout>
  );
}
