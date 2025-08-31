import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { navbarCode } from './constants/navbarCode';
import { navbarImplementation } from './constants/navbarImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import NavbarDemo from './components/NavbarDemo';

export default function NavbarPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <NavbarDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={navbarImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Navbar'
        description='A responsive navigation bar component with brand, navigation items, and actions. Features mobile menu support and multiple variants for different design needs.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={navbarCode}
          title='Navbar Component Usage'
        />
      </div>
    </div>
  );
}
