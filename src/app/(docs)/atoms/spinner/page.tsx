import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { spinnerCode } from './constants/spinnerCode';
import { spinnerImplementation } from './constants/spinnerImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import SpinnerDemo from './components/SpinnerDemo';

export default function SpinnerPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <SpinnerDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={spinnerImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Spinner'
        description='A loading spinner component to indicate progress or loading states with customizable sizes and variants'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={spinnerCode}
          title='Spinner Component'
        />
      </div>
    </div>
  );
}
