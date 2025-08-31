import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { breadcrumbCode } from './constants/breadcrumbCode';
import { breadcrumbImplementation } from './constants/breadcrumbImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import BreadcrumbDemo from './components/BreadcrumbDemo';

export default function BreadcrumbPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <BreadcrumbDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={breadcrumbImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Breadcrumb'
        description="A navigation component that shows the user's current location within a website hierarchy"
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={breadcrumbCode}
          title='Breadcrumb Component'
        />
      </div>
    </div>
  );
}
