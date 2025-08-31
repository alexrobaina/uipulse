import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { searchModalCode } from './constants/searchModalCode';
import { searchModalImplementation } from './constants/searchModalImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import SearchModalDemo from './components/SearchModalDemo';

export default function SearchModalPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <SearchModalDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={searchModalImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Search Modal'
        description='A command palette-style modal for navigating documentation. Features real-time search, keyboard navigation, and customizable results for enhanced user experience.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={15}
          language='tsx'
          showLineNumbers
          code={searchModalCode}
          title='SearchModal Component'
        />
      </div>
    </div>
  );
}
