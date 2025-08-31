'use client';
import SliderModal from '@/app/ui/molecules/SliderModal';
import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function SliderModalDemo() {
  const [rightModal, setRightModal] = useState(false);
  const [leftModal, setLeftModal] = useState(false);
  const [topModal, setTopModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Basic Usage */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Basic Usage
          </h3>
          <div className='flex flex-wrap gap-4'>
            <SliderModal
              trigger={<Button>Open Right Modal</Button>}
              title='Settings'
              description='Manage your account settings and preferences.'
              side='right'
              variant='modern'
            >
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                    Display Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                    placeholder='Enter your display name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                    placeholder='Enter your email'
                  />
                </div>
                <div>
                  <label className='flex items-center space-x-2'>
                    <input type='checkbox' className='rounded' />
                    <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                      Receive email notifications
                    </span>
                  </label>
                </div>
              </div>
            </SliderModal>
          </div>
        </div>

        {/* Different Sides */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Different Sides
          </h3>
          <div className='flex flex-wrap gap-4'>
            <Button onClick={() => setRightModal(true)}>Right Side</Button>
            <Button onClick={() => setLeftModal(true)} variant='outline'>
              Left Side
            </Button>
            <Button onClick={() => setTopModal(true)} variant='outline'>
              Top Side
            </Button>
            <Button onClick={() => setBottomModal(true)} variant='outline'>
              Bottom Side
            </Button>
          </div>
        </div>

        {/* Different Variants */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Different Variants
          </h3>
          <div className='flex flex-wrap gap-4'>
            <SliderModal
              trigger={<Button variant='outline'>Default Variant</Button>}
              title='Default Modal'
              description='Standard modal with default styling.'
              variant='default'
            >
              <p>
                This is a default styled modal with standard borders and
                shadows.
              </p>
            </SliderModal>

            <SliderModal
              trigger={<Button variant='outline'>Modern Variant</Button>}
              title='Modern Modal'
              description='Modern modal with backdrop blur effect.'
              variant='modern'
            >
              <p>
                This is a modern styled modal with backdrop blur and refined
                aesthetics.
              </p>
            </SliderModal>

            <SliderModal
              trigger={<Button variant='outline'>Elevated Variant</Button>}
              title='Elevated Modal'
              description='Elevated modal with enhanced shadows.'
              variant='elevated'
            >
              <p>
                This is an elevated modal with enhanced shadow effects for more
                prominence.
              </p>
            </SliderModal>
          </div>
        </div>

        {/* Different Sizes */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Different Sizes
          </h3>
          <div className='flex flex-wrap gap-4'>
            <SliderModal
              trigger={<Button size='sm'>Small</Button>}
              title='Small Modal'
              size='sm'
              variant='modern'
            >
              <p>This is a small modal with compact dimensions.</p>
            </SliderModal>

            <SliderModal
              trigger={<Button size='sm'>Medium</Button>}
              title='Medium Modal'
              size='md'
              variant='modern'
            >
              <p>This is a medium-sized modal with standard dimensions.</p>
            </SliderModal>

            <SliderModal
              trigger={<Button size='sm'>Large</Button>}
              title='Large Modal'
              size='lg'
              variant='modern'
            >
              <p>
                This is a large modal with expanded dimensions for more content.
              </p>
            </SliderModal>

            <SliderModal
              trigger={<Button size='sm'>Extra Large</Button>}
              title='Extra Large Modal'
              size='xl'
              variant='modern'
            >
              <p>
                This is an extra large modal with maximum dimensions for
                extensive content.
              </p>
            </SliderModal>
          </div>
        </div>

        {/* With Footer */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            With Footer
          </h3>
          <SliderModal
            trigger={<Button>Open with Footer</Button>}
            title='Confirm Action'
            description='Are you sure you want to proceed with this action?'
            variant='modern'
            footer={
              <div className='flex gap-3'>
                <Button variant='outline' size='sm'>
                  Cancel
                </Button>
                <Button size='sm'>Confirm</Button>
              </div>
            }
          >
            <div className='space-y-4'>
              <p>
                This action cannot be undone. Please review the details below:
              </p>
              <ul className='list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400'>
                <li>All data will be permanently deleted</li>
                <li>Associated files will be removed</li>
                <li>This action affects all team members</li>
              </ul>
            </div>
          </SliderModal>
        </div>

        {/* Custom Header */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Custom Header
          </h3>
          <SliderModal
            trigger={<Button>Custom Header</Button>}
            variant='modern'
            header={
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                  <svg
                    className='w-5 h-5 text-white'
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
                </div>
                <div>
                  <h2 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                    User Profile
                  </h2>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Manage your profile information
                  </p>
                </div>
              </div>
            }
          >
            <div className='space-y-4'>
              <div className='flex items-center space-x-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full'></div>
                <div>
                  <h3 className='font-medium text-neutral-900 dark:text-neutral-100'>
                    John Doe
                  </h3>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <div className='pt-4 border-t border-neutral-200 dark:border-neutral-700'>
                <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                  Member since January 2024
                </p>
              </div>
            </div>
          </SliderModal>
        </div>

        {/* Shopping Cart Example */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Shopping Cart Example
          </h3>
          <SliderModal
            trigger={
              <Button>
                <svg
                  className='w-4 h-4 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4M9 17h6'
                  />
                </svg>
                Shopping Cart (2)
              </Button>
            }
            title='Shopping Cart'
            description='Review your items before checkout'
            variant='modern'
            size='lg'
            footer={
              <div className='flex items-center justify-between w-full'>
                <div className='text-left'>
                  <p className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                    Total: $127.98
                  </p>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Including taxes and shipping
                  </p>
                </div>
                <div className='flex gap-3'>
                  <Button variant='outline' size='sm'>
                    Continue Shopping
                  </Button>
                  <Button size='sm'>Checkout</Button>
                </div>
              </div>
            }
          >
            <div className='space-y-4'>
              {/* Cart Item 1 */}
              <div className='flex items-center space-x-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg'></div>
                <div className='flex-1'>
                  <h4 className='font-medium text-neutral-900 dark:text-neutral-100'>
                    Premium Headphones
                  </h4>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Wireless, Noise Canceling
                  </p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                      $89.99
                    </span>
                    <div className='flex items-center space-x-2'>
                      <button className='w-8 h-8 flex items-center justify-center border border-neutral-300 dark:border-neutral-600 rounded'>
                        -
                      </button>
                      <span>1</span>
                      <button className='w-8 h-8 flex items-center justify-center border border-neutral-300 dark:border-neutral-600 rounded'>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className='flex items-center space-x-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg'></div>
                <div className='flex-1'>
                  <h4 className='font-medium text-neutral-900 dark:text-neutral-100'>
                    Smartphone Case
                  </h4>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    Clear, Drop Protection
                  </p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-lg font-semibold text-neutral-900 dark:text-neutral-100'>
                      $37.99
                    </span>
                    <div className='flex items-center space-x-2'>
                      <button className='w-8 h-8 flex items-center justify-center border border-neutral-300 dark:border-neutral-600 rounded'>
                        -
                      </button>
                      <span>1</span>
                      <button className='w-8 h-8 flex items-center justify-center border border-neutral-300 dark:border-neutral-600 rounded'>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SliderModal>
        </div>

        {/* Modals for different sides */}
        <SliderModal
          open={rightModal}
          onOpenChange={setRightModal}
          title='Right Side Modal'
          description='This modal slides in from the right side.'
          side='right'
          variant='modern'
        >
          <p>
            Content for right side modal. This is useful for navigation menus,
            settings panels, or detailed views.
          </p>
        </SliderModal>

        <SliderModal
          open={leftModal}
          onOpenChange={setLeftModal}
          title='Left Side Modal'
          description='This modal slides in from the left side.'
          side='left'
          variant='modern'
        >
          <p>
            Content for left side modal. Perfect for sidebars, navigation
            panels, or contextual information.
          </p>
        </SliderModal>

        <SliderModal
          open={topModal}
          onOpenChange={setTopModal}
          title='Top Modal'
          description='This modal slides down from the top.'
          side='top'
          variant='modern'
        >
          <p>
            Content for top modal. Great for notifications, announcements, or
            quick actions.
          </p>
        </SliderModal>

        <SliderModal
          open={bottomModal}
          onOpenChange={setBottomModal}
          title='Bottom Modal'
          description='This modal slides up from the bottom.'
          side='bottom'
          variant='modern'
        >
          <p>
            Content for bottom modal. Ideal for mobile-friendly sheets, quick
            forms, or action panels.
          </p>
        </SliderModal>
      </div>
    </Preview>
  );
}
