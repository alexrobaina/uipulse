import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { navigationMenuCode } from './constants/navigationMenuCode';
import { navigationMenuImplementation } from './constants/navigationMenuImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import NavigationMenuDemo from './components/NavigationMenuDemo';

export default function NavigationMenuPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <NavigationMenuDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={navigationMenuImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='NavigationMenu'
        description='A sophisticated navigation menu component with nested dropdowns, hover states, keyboard navigation, and full accessibility. Supports both horizontal and vertical orientations with customizable trigger modes and styling variants.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={navigationMenuCode}
          title='NavigationMenu Component'
        />
      </div>
    </div>
  );
}
