import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { tooltipCode } from './constants/tooltipCode';
import { tooltipImplementation } from './constants/tooltipImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import TooltipDemo from './components/TooltipDemo';

export default function TooltipPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <TooltipDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={tooltipImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Tooltip'
        description='A floating information panel that appears when hovering or clicking on an element, providing additional context or help'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={tooltipCode}
          title='Tooltip Component'
        />
      </div>
    </div>
  );
}
