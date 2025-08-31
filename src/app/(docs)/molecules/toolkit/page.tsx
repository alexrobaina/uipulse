import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { toolkitCode } from './constants/toolkitCode';
import { toolkitImplementation } from './constants/toolkitImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ToolkitDemo from './components/ToolkitDemo';

export default function ToolkitPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ToolkitDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={toolkitImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Toolkit'
        description='A flexible toolbar component for grouping related actions and tools with multiple variants and selection modes'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={toolkitCode}
          title='Toolkit Component'
        />
      </div>
    </div>
  );
}
