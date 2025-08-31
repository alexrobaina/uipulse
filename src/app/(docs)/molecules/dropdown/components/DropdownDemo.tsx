'use client';
import Dropdown from '@/app/ui/molecules/Dropdown';
import Preview from '@/app/components/Preview';
import {
  User,
  Settings,
  Mail,
  Globe,
  Star,
  Building,
  MapPin,
} from 'lucide-react';
import { useState } from 'react';

export default function DropdownDemo() {
  const [selectedCountry, setSelectedCountry] = useState<string | number>('');
  const [selectedUser, setSelectedUser] = useState<string | number>('');
  const [selectedPriority, setSelectedPriority] = useState<string | number>(
    'medium'
  );

  const countries = [
    {
      id: 1,
      label: 'United States',
      value: 'us',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      id: 2,
      label: 'Canada',
      value: 'ca',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      id: 3,
      label: 'United Kingdom',
      value: 'uk',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      id: 4,
      label: 'Germany',
      value: 'de',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      id: 5,
      label: 'France',
      value: 'fr',
      icon: <Globe className='w-4 h-4' />,
    },
    { id: 6, label: 'Spain', value: 'es', icon: <Globe className='w-4 h-4' /> },
    { id: 7, label: 'Italy', value: 'it', icon: <Globe className='w-4 h-4' /> },
    { id: 8, label: 'Japan', value: 'jp', icon: <Globe className='w-4 h-4' /> },
    {
      id: 9,
      label: 'Australia',
      value: 'au',
      icon: <Globe className='w-4 h-4' />,
    },
  ];

  const users = [
    {
      id: 1,
      label: 'John Smith',
      value: 'john',
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 2,
      label: 'Sarah Johnson',
      value: 'sarah',
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 3,
      label: 'Mike Wilson',
      value: 'mike',
      disabled: true,
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 4,
      label: 'Emma Davis',
      value: 'emma',
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 5,
      label: 'Alex Brown',
      value: 'alex',
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 6,
      label: 'Lisa Garcia',
      value: 'lisa',
      icon: <User className='w-4 h-4' />,
    },
    {
      id: 7,
      label: 'David Martinez',
      value: 'david',
      icon: <User className='w-4 h-4' />,
    },
  ];

  const categories = [
    { id: 1, label: 'Technology', value: 'tech' },
    { id: 2, label: 'Design', value: 'design' },
    { id: 3, label: 'Marketing', value: 'marketing' },
    { id: 4, label: 'Sales', value: 'sales' },
    { id: 5, label: 'Support', value: 'support' },
    { id: 6, label: 'Finance', value: 'finance' },
    { id: 7, label: 'Operations', value: 'operations' },
  ];

  const priorities = [
    {
      id: 1,
      label: 'Low',
      value: 'low',
      icon: <div className='w-3 h-3 rounded-full bg-green-500'></div>,
    },
    {
      id: 2,
      label: 'Medium',
      value: 'medium',
      icon: <div className='w-3 h-3 rounded-full bg-yellow-500'></div>,
    },
    {
      id: 3,
      label: 'High',
      value: 'high',
      icon: <div className='w-3 h-3 rounded-full bg-red-500'></div>,
    },
    {
      id: 4,
      label: 'Critical',
      value: 'critical',
      icon: <div className='w-3 h-3 rounded-full bg-red-700'></div>,
    },
  ];

  const departments = [
    {
      id: 1,
      label: 'Engineering',
      value: 'eng',
      icon: <Building className='w-4 h-4' />,
    },
    {
      id: 2,
      label: 'Product',
      value: 'product',
      icon: <Star className='w-4 h-4' />,
    },
    {
      id: 3,
      label: 'Design',
      value: 'design',
      icon: <Settings className='w-4 h-4' />,
    },
    {
      id: 4,
      label: 'Marketing',
      value: 'marketing',
      icon: <Mail className='w-4 h-4' />,
    },
    {
      id: 5,
      label: 'Sales (Unavailable)',
      value: 'sales',
      disabled: true,
      icon: <Building className='w-4 h-4' />,
    },
  ];

  return (
    <Preview>
      <div className='space-y-8 w-full max-w-lg'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Basic Dropdown
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Select Category
            </label>
            <Dropdown items={categories} placeholder='Choose a category' />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Icons
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Select Country
            </label>
            <Dropdown
              items={countries}
              value={selectedCountry}
              placeholder='Choose a country'
              onSelectionChange={setSelectedCountry}
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Searchable Dropdown
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Select User (Type to search)
            </label>
            <Dropdown
              items={users}
              value={selectedUser}
              placeholder='Choose a user'
              searchable
              onSelectionChange={setSelectedUser}
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Pre-selected Value
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Priority Level
            </label>
            <Dropdown
              items={priorities}
              value={selectedPriority}
              placeholder='Select priority'
              onSelectionChange={setSelectedPriority}
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Disabled Items
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Select Department
            </label>
            <Dropdown items={departments} placeholder='Choose department' />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Disabled Dropdown
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Unavailable Selection
            </label>
            <Dropdown
              items={categories}
              placeholder='This dropdown is disabled'
              disabled
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Form Example
          </h3>
          <div className='space-y-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
            <div className='grid grid-cols-1 gap-4'>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Country *
                </label>
                <Dropdown
                  items={countries.slice(0, 5)}
                  placeholder='Select your country'
                  searchable
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Department
                </label>
                <Dropdown items={departments} placeholder='Choose department' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
