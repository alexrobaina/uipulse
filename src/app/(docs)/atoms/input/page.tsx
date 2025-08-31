import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { inputCode } from './constants/inputCode';
import { inputImplementation } from './constants/inputImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import InputDemo from './components/InputDemo';

export default function InputPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <InputDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={inputImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Input'
        description='Implement the input component with the following variants:'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={inputCode}
          title='Input Component'
        />
      </div>
    </div>
  );
}
