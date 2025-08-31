import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { tabCode } from './constants/tabCode';
import { tabImplementation } from './constants/tabImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import TabDemo from './components/TabDemo';

export default function TabPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <TabDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={tabImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Tab'
        description='A versatile tab component with multiple variants, sizes, and support for icons, badges, and disabled states'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={tabCode}
          title='Tab Component'
        />
      </div>
    </div>
  );
}
