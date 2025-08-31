import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { modalCode } from './constants/modalCode';
import { modalImplementation } from './constants/modalImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import ModalDemo from './components/ModalDemo';

export default function ModalPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <ModalDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={modalImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Modal'
        description='A sophisticated modal component with Vercel-inspired design. Features multiple variants, smooth animations, and excellent accessibility support for dialogs, confirmations, and forms.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={15}
          language='tsx'
          showLineNumbers
          code={modalCode}
          title='Modal Component'
        />
      </div>
    </div>
  );
}
