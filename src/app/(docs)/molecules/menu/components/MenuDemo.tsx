'use client';
import Menu from '@/app/ui/molecules/Menu';
import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';
import {
  MoreHorizontal,
  Settings,
  User,
  LogOut,
  Bell,
  Edit,
  Trash2,
  Copy,
  Download,
  Share,
  Eye,
  Archive,
} from 'lucide-react';

export default function MenuDemo() {
  const profileMenuItems = [
    {
      id: 'profile',
      label: 'View Profile',
      icon: <User className='w-4 h-4' />,
      onClick: () => alert('Profile clicked'),
    },
    {
      id: 'settings',
      label: 'Account Settings',
      icon: <Settings className='w-4 h-4' />,
      shortcut: '⌘,',
      onClick: () => alert('Settings clicked'),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell className='w-4 h-4' />,
      onClick: () => alert('Notifications clicked'),
    },
    {
      id: 'divider1',
      type: 'divider' as const,
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: <LogOut className='w-4 h-4' />,
      shortcut: '⇧⌘Q',
      onClick: () => alert('Logout clicked'),
    },
  ];

  const actionMenuItems = [
    {
      id: 'edit',
      label: 'Edit',
      icon: <Edit className='w-4 h-4' />,
      shortcut: '⌘E',
      onClick: () => alert('Edit clicked'),
    },
    {
      id: 'copy',
      label: 'Duplicate',
      icon: <Copy className='w-4 h-4' />,
      shortcut: '⌘D',
      onClick: () => alert('Copy clicked'),
    },
    {
      id: 'download',
      label: 'Download',
      icon: <Download className='w-4 h-4' />,
      onClick: () => alert('Download clicked'),
    },
    {
      id: 'share',
      label: 'Share',
      icon: <Share className='w-4 h-4' />,
      shortcut: '⌘⇧S',
      onClick: () => alert('Share clicked'),
    },
    {
      id: 'divider1',
      type: 'divider' as const,
    },
    {
      id: 'archive',
      label: 'Archive',
      icon: <Archive className='w-4 h-4' />,
      onClick: () => alert('Archive clicked'),
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 className='w-4 h-4' />,
      shortcut: '⌫',
      onClick: () => alert('Delete clicked'),
    },
  ];

  const viewMenuItems = [
    {
      id: 'view',
      label: 'View Options',
      icon: <Eye className='w-4 h-4' />,
      type: 'submenu' as const,
      children: [
        {
          id: 'list',
          label: 'List View',
          checked: true,
          onClick: () => alert('List view selected'),
        },
        {
          id: 'grid',
          label: 'Grid View',
          onClick: () => alert('Grid view selected'),
        },
        {
          id: 'card',
          label: 'Card View',
          onClick: () => alert('Card view selected'),
        },
        {
          id: 'compact',
          label: 'Compact View',
          disabled: true,
          onClick: () => alert('Compact view selected'),
        },
      ],
    },
    {
      id: 'sort',
      label: 'Sort By',
      type: 'submenu' as const,
      children: [
        {
          id: 'name',
          label: 'Name (A-Z)',
          onClick: () => alert('Sort by name'),
        },
        {
          id: 'date',
          label: 'Date Modified',
          checked: true,
          onClick: () => alert('Sort by date'),
        },
        {
          id: 'size',
          label: 'File Size',
          onClick: () => alert('Sort by size'),
        },
        {
          id: 'type',
          label: 'File Type',
          onClick: () => alert('Sort by type'),
        },
      ],
    },
    {
      id: 'filter',
      label: 'Filter',
      type: 'submenu' as const,
      children: [
        {
          id: 'all',
          label: 'Show All',
          checked: true,
          onClick: () => alert('Show all'),
        },
        {
          id: 'images',
          label: 'Images Only',
          onClick: () => alert('Show images'),
        },
        {
          id: 'documents',
          label: 'Documents Only',
          onClick: () => alert('Show documents'),
        },
      ],
    },
    {
      id: 'divider1',
      type: 'divider' as const,
    },
    {
      id: 'refresh',
      label: 'Refresh',
      shortcut: '⌘R',
      onClick: () => alert('Refresh clicked'),
    },
  ];

  const simpleMenuItems = [
    {
      id: 'item1',
      label: 'First Item',
      onClick: () => alert('First item clicked'),
    },
    {
      id: 'item2',
      label: 'Second Item',
      onClick: () => alert('Second item clicked'),
    },
    {
      id: 'item3',
      label: 'Third Item (Disabled)',
      disabled: true,
      onClick: () => alert('Third item clicked'),
    },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Profile Menu
          </h3>
          <div className='flex items-center gap-4'>
            <Menu
              items={profileMenuItems}
              trigger={
                <Button variant='outline' size='sm'>
                  My Account
                </Button>
              }
            />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Click to see profile options
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Action Menu (Right Aligned)
          </h3>
          <div className='flex items-center gap-4'>
            <Menu
              items={actionMenuItems}
              trigger={
                <Button variant='ghost' size='sm'>
                  <MoreHorizontal className='w-4 h-4' />
                </Button>
              }
              placement='bottom-end'
            />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Right-aligned menu with actions
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Context Menu with Submenus
          </h3>
          <div className='flex items-center gap-4'>
            <Menu
              items={viewMenuItems}
              trigger={
                <Button variant='secondary' size='sm'>
                  View Options
                </Button>
              }
            />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Nested submenus with checkmarks
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Simple Menu (Top Placement)
          </h3>
          <div className='flex items-center gap-4 mt-20'>
            <Menu
              items={simpleMenuItems}
              trigger={
                <Button variant='outline' size='sm'>
                  Simple Menu
                </Button>
              }
              placement='top-start'
            />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Opens above the trigger
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Multiple Menus
          </h3>
          <div className='flex items-center gap-4'>
            <Menu
              items={[
                {
                  id: 'new',
                  label: 'New File',
                  shortcut: '⌘N',
                  onClick: () => alert('New file'),
                },
                {
                  id: 'open',
                  label: 'Open',
                  shortcut: '⌘O',
                  onClick: () => alert('Open'),
                },
                {
                  id: 'save',
                  label: 'Save',
                  shortcut: '⌘S',
                  onClick: () => alert('Save'),
                },
              ]}
              trigger={
                <Button variant='outline' size='sm'>
                  File
                </Button>
              }
            />
            <Menu
              items={[
                {
                  id: 'undo',
                  label: 'Undo',
                  shortcut: '⌘Z',
                  onClick: () => alert('Undo'),
                },
                {
                  id: 'redo',
                  label: 'Redo',
                  shortcut: '⌘Y',
                  onClick: () => alert('Redo'),
                },
                { id: 'divider', type: 'divider' as const },
                {
                  id: 'cut',
                  label: 'Cut',
                  shortcut: '⌘X',
                  onClick: () => alert('Cut'),
                },
                {
                  id: 'copy',
                  label: 'Copy',
                  shortcut: '⌘C',
                  onClick: () => alert('Copy'),
                },
              ]}
              trigger={
                <Button variant='outline' size='sm'>
                  Edit
                </Button>
              }
            />
            <Menu
              items={[
                { id: 'about', label: 'About', onClick: () => alert('About') },
                {
                  id: 'help',
                  label: 'Help',
                  shortcut: '⌘?',
                  onClick: () => alert('Help'),
                },
              ]}
              trigger={
                <Button variant='outline' size='sm'>
                  Help
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </Preview>
  );
}
