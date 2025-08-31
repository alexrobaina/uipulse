import CodeBlock from '@/app/components/CodeBlock';

import Tab from '@/app/ui/molecules/Tab';
import { buttonCode } from './contants/buttonCode';
import { buttonImplementation } from './contants/buttonImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ButtonDemo from './components/ButtonDemo';

export default function ButtonPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ButtonDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={buttonImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Button'
        description='Implement the button component with the following variants:'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={buttonCode}
          title='Button Component'
        />
      </div>
    </div>
  );
}
