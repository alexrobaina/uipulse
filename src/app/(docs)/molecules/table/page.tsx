import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { tableCode } from './constants/tableCode';
import { tableImplementation } from './constants/tableImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import TableDemo from './components/TableDemo';

export default function TablePage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <TableDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={tableImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Table'
        description='A flexible, fully-featured table component with sorting, selection, pagination integration, loading states, empty states, and responsive design. Perfect for data display, dashboards, and admin interfaces with complete accessibility support.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={tableCode}
          title='Table Component'
        />
      </div>
    </div>
  );
}
