import Tooltip from '@/app/ui/atoms/Tooltip';
import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';
import { HelpCircle, Info, Settings, Star } from 'lucide-react';

export default function TooltipDemo() {
  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Positions
          </h3>
          <div className='flex items-center justify-center gap-8'>
            <Tooltip content='Tooltip on top' position='top'>
              <Button variant='outline'>Top</Button>
            </Tooltip>

            <Tooltip content='Tooltip on bottom' position='bottom'>
              <Button variant='outline'>Bottom</Button>
            </Tooltip>

            <Tooltip content='Tooltip on left' position='left'>
              <Button variant='outline'>Left</Button>
            </Tooltip>

            <Tooltip content='Tooltip on right' position='right'>
              <Button variant='outline'>Right</Button>
            </Tooltip>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Triggers
          </h3>
          <div className='flex items-center gap-4'>
            <Tooltip content='Hover to see this tooltip' trigger='hover'>
              <Button variant='secondary'>Hover Me</Button>
            </Tooltip>

            <Tooltip content='Click to toggle this tooltip' trigger='click'>
              <Button variant='secondary'>Click Me</Button>
            </Tooltip>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Custom Delays
          </h3>
          <div className='flex items-center gap-4'>
            <Tooltip content='Fast tooltip (100ms delay)' delay={100}>
              <Button variant='outline' size='sm'>
                Fast (100ms)
              </Button>
            </Tooltip>

            <Tooltip content='Default tooltip (200ms delay)'>
              <Button variant='outline' size='sm'>
                Default (200ms)
              </Button>
            </Tooltip>

            <Tooltip content='Slow tooltip (500ms delay)' delay={500}>
              <Button variant='outline' size='sm'>
                Slow (500ms)
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Icons
          </h3>
          <div className='flex items-center gap-6'>
            <Tooltip content='Get help and support'>
              <HelpCircle className='w-5 h-5 text-neutral-500 hover:text-neutral-700 cursor-pointer transition-colors' />
            </Tooltip>

            <Tooltip content='Additional information' position='bottom'>
              <Info className='w-5 h-5 text-blue-500 hover:text-blue-600 cursor-pointer transition-colors' />
            </Tooltip>

            <Tooltip content='Open settings' position='right'>
              <Settings className='w-5 h-5 text-neutral-600 hover:text-neutral-800 cursor-pointer transition-colors' />
            </Tooltip>

            <Tooltip content='Add to favorites' position='left'>
              <Star className='w-5 h-5 text-yellow-500 hover:text-yellow-600 cursor-pointer transition-colors' />
            </Tooltip>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Form Labels with Help
          </h3>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <label className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Email Address
              </label>
              <Tooltip
                content="We'll never share your email with anyone else"
                position='right'
              >
                <HelpCircle className='w-4 h-4 text-neutral-400 hover:text-neutral-600 cursor-pointer transition-colors' />
              </Tooltip>
            </div>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full max-w-sm px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors'
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Long Content
          </h3>
          <div className='flex items-center gap-4'>
            <Tooltip content='This is a longer tooltip message that demonstrates how the component handles more text content'>
              <Button variant='outline'>Long Message</Button>
            </Tooltip>

            <Tooltip content='Short tip'>
              <Button variant='outline'>Short Message</Button>
            </Tooltip>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            In Cards
          </h3>
          <div className='grid grid-cols-2 gap-4 max-w-lg'>
            <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
              <div className='flex items-center justify-between'>
                <h4 className='font-medium'>Feature 1</h4>
                <Tooltip content='This feature helps you manage your data effectively'>
                  <Info className='w-4 h-4 text-blue-500 cursor-pointer' />
                </Tooltip>
              </div>
              <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-1'>
                Some description text here.
              </p>
            </div>

            <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
              <div className='flex items-center justify-between'>
                <h4 className='font-medium'>Feature 2</h4>
                <Tooltip
                  content='Advanced analytics and reporting tools'
                  position='left'
                >
                  <Info className='w-4 h-4 text-blue-500 cursor-pointer' />
                </Tooltip>
              </div>
              <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-1'>
                More description content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
