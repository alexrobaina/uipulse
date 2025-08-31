import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { sliderModalCode } from './constants/sliderModalCode';
import { sliderModalImplementation } from './constants/sliderModalImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import SliderModalDemo from './components/SliderModalDemo';

export default function SliderModalPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <SliderModalDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={sliderModalImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='SliderModal'
        description='A modal that slides in from any side of the screen with smooth animations, overlay support, keyboard navigation, and full accessibility. Perfect for sidebars, drawers, notifications, and contextual content panels.'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={20}
          language='tsx'
          showLineNumbers
          code={sliderModalCode}
          title='SliderModal Component'
        />
      </div>
    </div>
  );
}
