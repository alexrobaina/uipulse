import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { progressCode } from './constants/progressCode';
import { progressImplementation } from './constants/progressImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ProgressDemo from './components/ProgressDemo';

export default function ProgressPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ProgressDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={progressImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Progress'
        description='A progress bar component that shows the completion progress of a task with customizable variants, sizes, and text display options.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={progressCode}
          title='Progress Component'
        />
      </div>
    </div>
  );
}
