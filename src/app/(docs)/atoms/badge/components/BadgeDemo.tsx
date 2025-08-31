import Badge from '@/app/ui/atoms/Badge';
import Preview from '@/app/components/Preview';

export default function BadgeDemo() {
  return (
    <Preview>
      <div className='space-y-6 w-full'>
        {/* Basic Usage */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>Basic Usage</h3>
          <div className='flex flex-wrap gap-2'>
            <Badge>Default Badge</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='error'>Error</Badge>
            <Badge variant='outline'>Outline</Badge>
          </div>
        </div>

        {/* Color Variants */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>
            Color Variants
          </h3>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='success'>Success</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='error'>Error</Badge>
            <Badge variant='outline'>Outline</Badge>
          </div>
        </div>

        {/* Different Content Types */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>
            Content Examples
          </h3>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='primary'>New</Badge>
            <Badge variant='success'>✓ Verified</Badge>
            <Badge variant='warning'>⚠ Beta</Badge>
            <Badge variant='error'>✗ Deprecated</Badge>
            <Badge variant='default'>123</Badge>
          </div>
        </div>

        {/* Status Indicators */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>
            Status Indicators
          </h3>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='success'>Active</Badge>
            <Badge variant='warning'>Pending</Badge>
            <Badge variant='error'>Inactive</Badge>
            <Badge variant='default'>Draft</Badge>
            <Badge variant='primary'>Published</Badge>
          </div>
        </div>

        {/* Notification Badges */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>
            Notification Badges
          </h3>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='error'>99+</Badge>
            <Badge variant='primary'>5</Badge>
            <Badge variant='warning'>!</Badge>
            <Badge variant='success'>✓</Badge>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className='space-y-2'>
          <h3 className='text-sm font-medium text-foreground'>In Context</h3>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>User Profile</span>
              <Badge variant='success'>Verified</Badge>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>Feature Flag</span>
              <Badge variant='warning'>Beta</Badge>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>API Status</span>
              <Badge variant='error'>Down</Badge>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>Messages</span>
              <Badge variant='primary'>3</Badge>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
