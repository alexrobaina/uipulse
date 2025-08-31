import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { toggleGroupCode } from './constants/toggleGroupCode';
import { toggleGroupImplementation } from './constants/toggleGroupImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ToggleGroupDemo from './components/ToggleGroupDemo';

export default function ToggleGroupPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ToggleGroupDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={toggleGroupImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Toggle Group'
        description='A set of toggle buttons that work together for single or multiple selection modes'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={toggleGroupCode}
          title='Toggle Group Component'
        />
      </div>
    </div>
  );
}
