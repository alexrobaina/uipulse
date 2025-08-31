import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { dividerCode } from './constants/dividerCode';
import { dividerImplementation } from './constants/dividerImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import DividerDemo from './components/DividerDemo';

export default function DividerPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <DividerDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={dividerImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Divider'
        description='A flexible separator component for visually dividing content sections'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={dividerCode}
          title='Divider Component'
        />
      </div>
    </div>
  );
}
