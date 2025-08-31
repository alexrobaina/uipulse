import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { menuCode } from './constants/menuCode';
import { menuImplementation } from './constants/menuImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import MenuDemo from './components/MenuDemo';

export default function MenuPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <MenuDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={menuImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Menu'
        description='A flexible dropdown menu component with support for icons, keyboard shortcuts, nested submenus, and various placement options'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={menuCode}
          title='Menu Component'
        />
      </div>
    </div>
  );
}
