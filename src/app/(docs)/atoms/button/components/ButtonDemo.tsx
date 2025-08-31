import Button from '@/app/ui/atoms/Button';
import Preview from '@/app/components/Preview';

export default function ButtonDemo() {
  return (
    <Preview>
      <div className='flex gap-4 flex-wrap flex-col lg:flex-row'>
        <Button variant='primary' fullWidth>
          Primary Button
        </Button>
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-wrap'>
          <Button loading variant='primary'>
            Primary Button
          </Button>
          <Button loading variant='secondary'>
            Secondary Button
          </Button>
          <Button loading variant='outline'>
            Outline Button
          </Button>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-wrap'>
          <Button variant='primary' size='lg'>
            Primary Button
          </Button>
          <Button variant='secondary' size='lg'>
            Secondary Button
          </Button>
          <Button variant='outline' size='lg'>
            Outline Button
          </Button>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-wrap'>
          <Button loadingText='Loading...' variant='primary'>
            Primary Button
          </Button>
          <Button loadingText='Loading...' variant='secondary'>
            Secondary Button
          </Button>
          <Button loadingText='Loading...' variant='outline'>
            Outline Button
          </Button>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-wrap'>
          <Button variant='primary' size='sm'>
            Primary Button
          </Button>
          <Button variant='secondary' size='sm'>
            Secondary Button
          </Button>
          <Button variant='outline' size='sm'>
            Outline Button
          </Button>
        </div>
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-wrap'>
          <Button variant='primary' size='xs'>
            Primary Button
          </Button>
          <Button variant='secondary' size='xs'>
            Secondary Button
          </Button>
          <Button variant='outline' size='xs'>
            Outline Button
          </Button>
        </div>
      </div>
    </Preview>
  );
}
