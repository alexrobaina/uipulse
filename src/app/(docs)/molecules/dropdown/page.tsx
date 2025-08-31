import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { dropdownCode } from './constants/dropdownCode';
import { dropdownImplementation } from './constants/dropdownImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import DropdownDemo from './components/DropdownDemo';

export default function DropdownPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <DropdownDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={dropdownImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Dropdown'
        description='A customizable dropdown/select component with search functionality, icons, and keyboard navigation support'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={dropdownCode}
          title='Dropdown Component'
        />
      </div>
    </div>
  );
}
