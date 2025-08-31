'use client';
import QuantityInput from '@/app/ui/molecules/QuantityInput';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function QuantityInputDemo() {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(50);
  const [limitedQuantity, setLimitedQuantity] = useState(5);
  const [stepQuantity, setStepQuantity] = useState(10);

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Sizes
          </h3>
          <div className='flex items-center gap-6'>
            <div className='text-center space-y-2'>
              <QuantityInput size='sm' value={1} />
              <p className='text-xs text-neutral-500'>Small</p>
            </div>
            <div className='text-center space-y-2'>
              <QuantityInput size='md' value={2} />
              <p className='text-xs text-neutral-500'>Medium</p>
            </div>
            <div className='text-center space-y-2'>
              <QuantityInput size='lg' value={3} />
              <p className='text-xs text-neutral-500'>Large</p>
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Shopping Cart (1-10 items)
          </h3>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-neutral-700 dark:text-neutral-300'>
              Quantity:
            </span>
            <QuantityInput
              value={cartQuantity}
              min={1}
              max={10}
              onValueChange={setCartQuantity}
            />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Current: {cartQuantity} {cartQuantity === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Inventory Management (0-1000, step 10)
          </h3>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-neutral-700 dark:text-neutral-300'>
              Stock Level:
            </span>
            <QuantityInput
              value={stockQuantity}
              min={0}
              max={1000}
              step={10}
              onValueChange={setStockQuantity}
            />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              {stockQuantity} units in stock
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Limited Range (2-10 only)
          </h3>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-neutral-700 dark:text-neutral-300'>
              Select:
            </span>
            <QuantityInput
              value={limitedQuantity}
              min={2}
              max={10}
              step={1}
              onValueChange={setLimitedQuantity}
            />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              (minimum 2, maximum 10)
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Custom Step Size (step by 5)
          </h3>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-neutral-700 dark:text-neutral-300'>
              Value:
            </span>
            <QuantityInput
              value={stepQuantity}
              min={0}
              max={100}
              step={5}
              onValueChange={setStepQuantity}
            />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              Increments by 5
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Disabled State
          </h3>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-neutral-700 dark:text-neutral-300'>
              Quantity:
            </span>
            <QuantityInput value={5} disabled />
            <span className='text-sm text-neutral-600 dark:text-neutral-400'>
              (disabled)
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            In Form Context
          </h3>
          <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg max-w-md'>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Product Name
                </label>
                <input
                  type='text'
                  placeholder='Enter product name'
                  className='w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Quantity
                </label>
                <QuantityInput value={1} min={1} max={99} />
              </div>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Bulk Quantity (step by 10)
                </label>
                <QuantityInput
                  value={10}
                  min={10}
                  max={1000}
                  step={10}
                  size='sm'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
