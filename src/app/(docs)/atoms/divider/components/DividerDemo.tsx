import Divider from '@/app/ui/atoms/Divider';
import Preview from '@/app/components/Preview';

export default function DividerDemo() {
  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Basic Horizontal
          </h3>
          <div className='space-y-2'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Content above
            </p>
            <Divider />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Content below
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Thickness Variants
          </h3>
          <div className='space-y-4'>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Thin
              </p>
              <Divider thickness='thin' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Medium
              </p>
              <Divider thickness='medium' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Thick
              </p>
              <Divider thickness='thick' />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Style Variants
          </h3>
          <div className='space-y-4'>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Solid
              </p>
              <Divider variant='solid' thickness='medium' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Dashed
              </p>
              <Divider variant='dashed' thickness='medium' />
            </div>
            <div>
              <p className='text-xs text-neutral-500 dark:text-neutral-400 mb-2'>
                Dotted
              </p>
              <Divider variant='dotted' thickness='medium' />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Labels
          </h3>
          <div className='space-y-6'>
            <div>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Section one content
              </p>
              <Divider label='OR' spacing='lg' />
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Section two content
              </p>
            </div>
            <div>
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Login form
              </p>
              <Divider label='Continue with' spacing='md' variant='dashed' />
              <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                Social login buttons
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Spacing Options
          </h3>
          <div className='space-y-2'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Content
            </p>
            <Divider spacing='sm' />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Small spacing
            </p>
            <Divider spacing='md' />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Medium spacing
            </p>
            <Divider spacing='lg' />
            <p className='text-sm text-neutral-600 dark:text-neutral-400'>
              Large spacing
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Vertical Dividers
          </h3>
          <div className='flex items-center gap-4 h-16'>
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Item 1
            </span>
            <Divider orientation='vertical' spacing='none' />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Item 2
            </span>
            <Divider orientation='vertical' thickness='medium' spacing='none' />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Item 3
            </span>
            <Divider orientation='vertical' variant='dashed' spacing='none' />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Item 4
            </span>
          </div>
        </div>
      </div>
    </Preview>
  );
}
