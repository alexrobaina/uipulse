'use client';

import { useState } from 'react';
import { ButtonGroup, ButtonGroupItem } from '@/app/ui/molecules/ButtonGroup';
import Tab from '@/app/ui/molecules/Tab';
import {
  Copy,
  Download,
  Share,
  Heart,
  Star,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Calendar,
  User,
  Settings,
  Home,
  Search,
  Bell,
  Mail,
} from 'lucide-react';

export function ButtonGroupDemo() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedView, setSelectedView] = useState('grid');
  const [selectedNav, setSelectedNav] = useState('home');

  const renderBasicExamples = () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Default</h3>
        <ButtonGroup>
          <ButtonGroupItem>First</ButtonGroupItem>
          <ButtonGroupItem>Second</ButtonGroupItem>
          <ButtonGroupItem>Third</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Attached</h3>
        <ButtonGroup variant='attached'>
          <ButtonGroupItem>First</ButtonGroupItem>
          <ButtonGroupItem>Second</ButtonGroupItem>
          <ButtonGroupItem>Third</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Separated</h3>
        <ButtonGroup variant='separated'>
          <ButtonGroupItem>First</ButtonGroupItem>
          <ButtonGroupItem>Second</ButtonGroupItem>
          <ButtonGroupItem>Third</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Pill</h3>
        <ButtonGroup variant='pill'>
          <ButtonGroupItem>First</ButtonGroupItem>
          <ButtonGroupItem>Second</ButtonGroupItem>
          <ButtonGroupItem>Third</ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  );

  const renderVariantExamples = () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Default</h3>
        <ButtonGroup buttonVariant='default'>
          <ButtonGroupItem>Copy</ButtonGroupItem>
          <ButtonGroupItem>Download</ButtonGroupItem>
          <ButtonGroupItem>Share</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Primary</h3>
        <ButtonGroup buttonVariant='primary'>
          <ButtonGroupItem>Copy</ButtonGroupItem>
          <ButtonGroupItem>Download</ButtonGroupItem>
          <ButtonGroupItem>Share</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Secondary</h3>
        <ButtonGroup buttonVariant='secondary'>
          <ButtonGroupItem>Copy</ButtonGroupItem>
          <ButtonGroupItem>Download</ButtonGroupItem>
          <ButtonGroupItem>Share</ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Outline</h3>
        <ButtonGroup buttonVariant='outline'>
          <ButtonGroupItem>Copy</ButtonGroupItem>
          <ButtonGroupItem>Download</ButtonGroupItem>
          <ButtonGroupItem>Share</ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  );

  const renderIconExamples = () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Icons Only</h3>
        <ButtonGroup>
          <ButtonGroupItem>
            <Copy className='w-4 h-4' />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Download className='w-4 h-4' />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Share className='w-4 h-4' />
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Icons with Text</h3>
        <ButtonGroup>
          <ButtonGroupItem>
            <Copy className='w-4 h-4 mr-2' />
            Copy
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Download className='w-4 h-4 mr-2' />
            Download
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Share className='w-4 h-4 mr-2' />
            Share
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Action Buttons</h3>
        <ButtonGroup variant='separated'>
          <ButtonGroupItem>
            <Heart className='w-4 h-4 mr-2' />
            Like
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Star className='w-4 h-4 mr-2' />
            Star
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Bookmark className='w-4 h-4 mr-2' />
            Save
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Navigation</h3>
        <ButtonGroup variant='attached'>
          <ButtonGroupItem>
            <ChevronLeft className='w-4 h-4' />
          </ButtonGroupItem>
          <ButtonGroupItem>Page 1 of 10</ButtonGroupItem>
          <ButtonGroupItem>
            <ChevronRight className='w-4 h-4' />
          </ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  );

  const renderVerticalExamples = () => (
    <div className='space-y-8'>
      <div className='flex gap-8'>
        <div>
          <h3 className='text-lg font-medium mb-4'>Default Vertical</h3>
          <ButtonGroup orientation='vertical'>
            <ButtonGroupItem>First</ButtonGroupItem>
            <ButtonGroupItem>Second</ButtonGroupItem>
            <ButtonGroupItem>Third</ButtonGroupItem>
          </ButtonGroup>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-4'>Attached Vertical</h3>
          <ButtonGroup orientation='vertical' variant='attached'>
            <ButtonGroupItem>First</ButtonGroupItem>
            <ButtonGroupItem>Second</ButtonGroupItem>
            <ButtonGroupItem>Third</ButtonGroupItem>
          </ButtonGroup>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-4'>With Icons Vertical</h3>
          <ButtonGroup orientation='vertical' variant='separated'>
            <ButtonGroupItem>
              <Home className='w-4 h-4 mr-2' />
              Home
            </ButtonGroupItem>
            <ButtonGroupItem>
              <User className='w-4 h-4 mr-2' />
              Profile
            </ButtonGroupItem>
            <ButtonGroupItem>
              <Settings className='w-4 h-4 mr-2' />
              Settings
            </ButtonGroupItem>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );

  const renderInteractiveExamples = () => (
    <div className='space-y-8'>
      <div>
        <h3 className='text-lg font-medium mb-4'>Filter Buttons</h3>
        <ButtonGroup>
          <ButtonGroupItem
            active={selectedFilter === 'all'}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedFilter === 'active'}
            onClick={() => setSelectedFilter('active')}
          >
            Active
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedFilter === 'inactive'}
            onClick={() => setSelectedFilter('inactive')}
          >
            Inactive
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>View Toggle</h3>
        <ButtonGroup variant='attached'>
          <ButtonGroupItem
            active={selectedView === 'grid'}
            onClick={() => setSelectedView('grid')}
          >
            <Grid className='w-4 h-4' />
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedView === 'list'}
            onClick={() => setSelectedView('list')}
          >
            <List className='w-4 h-4' />
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Navigation Menu</h3>
        <ButtonGroup orientation='vertical' variant='separated' fullWidth>
          <ButtonGroupItem
            active={selectedNav === 'home'}
            onClick={() => setSelectedNav('home')}
          >
            <Home className='w-4 h-4 mr-2' />
            Home
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedNav === 'search'}
            onClick={() => setSelectedNav('search')}
          >
            <Search className='w-4 h-4 mr-2' />
            Search
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedNav === 'notifications'}
            onClick={() => setSelectedNav('notifications')}
          >
            <Bell className='w-4 h-4 mr-2' />
            Notifications
          </ButtonGroupItem>
          <ButtonGroupItem
            active={selectedNav === 'messages'}
            onClick={() => setSelectedNav('messages')}
          >
            <Mail className='w-4 h-4 mr-2' />
            Messages
          </ButtonGroupItem>
        </ButtonGroup>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Sizes</h3>
        <div className='space-y-4'>
          <div>
            <h4 className='text-sm font-medium mb-2'>Extra Small</h4>
            <ButtonGroup size='xs'>
              <ButtonGroupItem>XS</ButtonGroupItem>
              <ButtonGroupItem>Button</ButtonGroupItem>
              <ButtonGroupItem>Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-2'>Small</h4>
            <ButtonGroup size='sm'>
              <ButtonGroupItem>Small</ButtonGroupItem>
              <ButtonGroupItem>Button</ButtonGroupItem>
              <ButtonGroupItem>Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-2'>Medium (Default)</h4>
            <ButtonGroup size='md'>
              <ButtonGroupItem>Medium</ButtonGroupItem>
              <ButtonGroupItem>Button</ButtonGroupItem>
              <ButtonGroupItem>Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-2'>Large</h4>
            <ButtonGroup size='lg'>
              <ButtonGroupItem>Large</ButtonGroupItem>
              <ButtonGroupItem>Button</ButtonGroupItem>
              <ButtonGroupItem>Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-2'>Extra Large</h4>
            <ButtonGroup size='xl'>
              <ButtonGroupItem>XL</ButtonGroupItem>
              <ButtonGroupItem>Button</ButtonGroupItem>
              <ButtonGroupItem>Group</ButtonGroupItem>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium mb-4'>Full Width</h3>
        <ButtonGroup fullWidth>
          <ButtonGroupItem>
            <Calendar className='w-4 h-4 mr-2' />
            Calendar
          </ButtonGroupItem>
          <ButtonGroupItem>
            <User className='w-4 h-4 mr-2' />
            Profile
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Settings className='w-4 h-4 mr-2' />
            Settings
          </ButtonGroupItem>
        </ButtonGroup>
      </div>
    </div>
  );

  const tabItems = [
    { id: 'basic', label: 'Basic', content: renderBasicExamples() },
    { id: 'variants', label: 'Variants', content: renderVariantExamples() },
    { id: 'icons', label: 'With Icons', content: renderIconExamples() },
    { id: 'vertical', label: 'Vertical', content: renderVerticalExamples() },
    {
      id: 'interactive',
      label: 'Interactive',
      content: renderInteractiveExamples(),
    },
  ];

  return (
    <div className='w-full'>
      <Tab items={tabItems} defaultTab='basic' />
    </div>
  );
}
