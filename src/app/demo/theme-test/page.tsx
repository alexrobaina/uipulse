'use client';

import { useState } from 'react';
import Button from '@/app/ui/atoms/Button';
import Input from '@/app/ui/atoms/Input';
import Badge from '@/app/ui/atoms/Badge';
import Alert from '@/app/ui/atoms/Alert';
import Avatar from '@/app/ui/atoms/Avatar';
import Switch from '@/app/ui/atoms/Switch';
import Checkbox from '@/app/ui/atoms/Checkbox';
import Progress from '@/app/ui/atoms/Progress';
import Spinner from '@/app/ui/atoms/Spinner';
import Divider from '@/app/ui/atoms/Divider';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/app/ui/molecules/Card';
import Dropdown from '@/app/ui/molecules/Dropdown';
import Modal from '@/app/ui/molecules/Modal';
import Tab from '@/app/ui/molecules/Tab';
import Breadcrumb from '@/app/ui/molecules/Breadcrumb';
import Accordion from '@/app/ui/molecules/Accordion';
import { ThemeToggle } from '@/app/components/ThemeToggle';

export default function ThemeTestPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const tabItems = [
    {
      id: 'atoms',
      label: 'Atoms',
      content: <div>Atomic components showcase</div>,
    },
    {
      id: 'molecules',
      label: 'Molecules',
      content: <div>Molecular components showcase</div>,
    },
  ];

  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'Demo' },
    { label: 'Theme Test' },
  ];

  const accordionItems = [
    {
      id: 'item-1',
      title: 'Theme System',
      content:
        'Our theme system supports both light and dark modes with automatic detection.',
    },
    {
      id: 'item-2',
      title: 'Component Variants',
      content:
        'Each component includes multiple variants for different use cases.',
    },
  ];

  const dropdownItems = [
    { id: 'option1', value: 'option1', label: 'Option 1' },
    { id: 'option2', value: 'option2', label: 'Option 2' },
    { id: 'option3', value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className='max-w-6xl mx-auto p-6 space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100'>
          Theme Test Page
        </h1>
        <ThemeToggle />
      </div>

      <div className='text-neutral-600 dark:text-neutral-400'>
        This page showcases our component library in both light and dark modes.
        Use the theme toggle above to switch between themes.
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-4'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Input label='Email' placeholder='Enter your email' />
          <Input
            label='Password'
            type='password'
            placeholder='Enter your password'
          />
          <Input
            label='Error State'
            error='This field is required'
            placeholder='Error example'
          />

          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <Checkbox
                checked={checkboxValue}
                onChange={e => setCheckboxValue(e.target.checked)}
              />
              <label className='text-sm text-neutral-900 dark:text-neutral-100'>
                Accept terms and conditions
              </label>
            </div>

            <div className='flex items-center space-x-2'>
              <Switch
                checked={switchValue}
                onCheckedChange={checked => setSwitchValue(checked)}
              />
              <label className='text-sm text-neutral-900 dark:text-neutral-100'>
                Enable notifications
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='error'>Error</Badge>
            <Badge variant='outline'>Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Alert variant='default' title='Default Alert'>
            This is a default alert message.
          </Alert>
          <Alert variant='info' title='Info Alert'>
            This is an informational alert message.
          </Alert>
          <Alert variant='success' title='Success Alert'>
            This is a success alert message.
          </Alert>
          <Alert variant='warning' title='Warning Alert'>
            This is a warning alert message.
          </Alert>
          <Alert variant='error' title='Error Alert'>
            This is an error alert message.
          </Alert>
        </CardContent>
      </Card>

      {/* Avatars */}
      <Card>
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap items-center gap-4'>
            <Avatar
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
              alt='John Doe'
              fallback='John Doe'
              size='md'
              showStatus
              status='online'
            />
            <Avatar fallback='Jane Smith' size='md' showStatus status='away' />
            <Avatar
              fallback='Bob Wilson'
              size='md'
              showStatus
              status='offline'
            />
            <Avatar fallback='Alice Johnson' size='lg' variant='square' />
          </div>
        </CardContent>
      </Card>

      {/* Progress & Loading */}
      <Card>
        <CardHeader>
          <CardTitle>Progress & Loading</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Progress Bars
            </div>
            <Progress value={25} size='sm' />
            <Progress value={50} />
            <Progress value={75} variant='success' />
          </div>

          <Divider />

          <div className='space-y-2'>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Spinners
            </div>
            <div className='flex items-center space-x-4'>
              <Spinner size='sm' />
              <Spinner />
              <Spinner size='lg' />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Components */}
      <Card>
        <CardHeader>
          <CardTitle>Interactive Components</CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2'>
              Dropdown Selection
            </label>
            <Dropdown
              items={dropdownItems}
              value={dropdownValue}
              onSelectionChange={value => setDropdownValue(String(value))}
              placeholder='Select an option'
            />
          </div>

          <div>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
              <div className='space-y-4'>
                <h2 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                  Theme Test Modal
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400'>
                  This modal demonstrates how our components work in different
                  themes.
                </p>
                <div className='flex space-x-2'>
                  <Button variant='outline' onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                </div>
              </div>
            </Modal>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>
        <CardContent>
          <Tab items={tabItems} defaultTab='atoms' />
        </CardContent>
      </Card>

      {/* Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion items={accordionItems} />
        </CardContent>
      </Card>

      {/* Card Variants */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card variant='default'>
          <CardHeader>
            <CardTitle size='sm'>Default Card</CardTitle>
          </CardHeader>
          <CardContent size='sm'>
            This is a default card with standard styling.
          </CardContent>
          <CardFooter justify='end'>
            <Button size='sm' variant='ghost'>
              Cancel
            </Button>
            <Button size='sm'>Save</Button>
          </CardFooter>
        </Card>

        <Card variant='elevated'>
          <CardHeader>
            <CardTitle size='sm'>Elevated Card</CardTitle>
          </CardHeader>
          <CardContent size='sm'>
            This is an elevated card with more shadow.
          </CardContent>
          <CardFooter justify='end'>
            <Button size='sm' variant='ghost'>
              Cancel
            </Button>
            <Button size='sm'>Save</Button>
          </CardFooter>
        </Card>

        <Card variant='modern'>
          <CardHeader>
            <CardTitle size='sm'>Modern Card</CardTitle>
          </CardHeader>
          <CardContent size='sm'>
            This is a modern card with subtle styling.
          </CardContent>
          <CardFooter justify='end'>
            <Button size='sm' variant='ghost'>
              Cancel
            </Button>
            <Button size='sm'>Save</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Component Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Component Library Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                13
              </div>
              <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                Atomic Components
              </div>
            </div>
            <div>
              <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                22
              </div>
              <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                Molecular Components
              </div>
            </div>
            <div>
              <div className='text-2xl font-bold text-green-600 dark:text-green-400'>
                35
              </div>
              <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                Total Components
              </div>
            </div>
            <div>
              <div className='text-2xl font-bold text-orange-600 dark:text-orange-400'>
                2
              </div>
              <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                Theme Modes
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
