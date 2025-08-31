import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { showMoreCode } from './constants/showMoreCode';
import { showMoreImplementation } from './constants/showMoreImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ShowMoreDemo from './components/ShowMoreDemo';

export default function ShowMorePage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ShowMoreDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={showMoreImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Show More'
        description='A collapsible content component that truncates long text or content and provides an expand/collapse toggle'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={showMoreCode}
          title='ShowMore Component'
        />
      </div>
    </div>
  );
}
