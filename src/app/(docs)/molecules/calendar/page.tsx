import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { calendarCode } from './constants/calendarCode';
import { calendarImplementation } from './constants/calendarImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import CalendarDemo from './components/CalendarDemo';

export default function CalendarPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <CalendarDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={calendarImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Calendar'
        description='A comprehensive calendar component with single/multiple/range selection modes, month navigation, disabled dates support, and full accessibility. Features Vercel-inspired design with customizable variants and keyboard navigation.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={calendarCode}
          title='Calendar Component'
        />
      </div>
    </div>
  );
}
