import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { checkboxCode } from './constants/checkboxCode';
import { checkboxImplementation } from './constants/checkboxImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import CheckboxDemo from './components/CheckboxDemo';

export default function CheckboxPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <CheckboxDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={checkboxImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Checkbox'
        description='A versatile checkbox component with multiple variants, sizes, and states. Supports labels, descriptions, error states, and indeterminate states for complex form interactions.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={15}
          language='tsx'
          showLineNumbers
          code={checkboxCode}
          title='Checkbox Component'
        />
      </div>
    </div>
  );
}
