import CodeBlock from '@/app/components/CodeBlock';
import Tab from '@/app/ui/molecules/Tab';
import { quantityInputCode } from './constants/quantityInputCode';
import { quantityInputImplementation } from './constants/quantityInputImplementation';
import HeaderDescription from '@/app/components/HeaderDescription';
import QuantityInputDemo from './components/QuantityInputDemo';

export default function QuantityInputPage() {
  const tabItems = [
    {
      id: 'preview',
      label: 'Preview',
      content: <QuantityInputDemo />,
    },
    {
      id: 'code',
      label: 'Code',
      content: <CodeBlock code={quantityInputImplementation} language='tsx' />,
    },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <HeaderDescription
        title='Quantity Input'
        description='A numeric input component with increment and decrement buttons, perfect for shopping carts and inventory management'
      />

      <Tab items={tabItems} defaultTab='preview' />

      <div className='mb-8 mt-8'>
        <CodeBlock
          maxLines={10}
          language='tsx'
          showLineNumbers
          code={quantityInputCode}
          title='QuantityInput Component'
        />
      </div>
    </div>
  );
}
