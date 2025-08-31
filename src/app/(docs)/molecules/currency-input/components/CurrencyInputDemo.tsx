'use client';
import CurrencyInput from '@/app/ui/molecules/CurrencyInput';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

export default function CurrencyInputDemo() {
  const [price, setPrice] = useState(29.99);
  const [budget, setBudget] = useState(1000);
  const [euroPrice, setEuroPrice] = useState(25.5);
  const [gbpPrice, setGbpPrice] = useState(22.75);

  return (
    <Preview>
      <div className='space-y-8 w-full max-w-lg'>
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            USD Currency
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Product Price
            </label>
            <CurrencyInput
              value={price}
              currency='USD'
              locale='en-US'
              onValueChange={setPrice}
            />
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              Current value: ${price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            With Min/Max Limits
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Budget ($100 - $10,000)
            </label>
            <CurrencyInput
              value={budget}
              currency='USD'
              locale='en-US'
              min={100}
              max={10000}
              onValueChange={setBudget}
            />
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              Range: $100.00 - $10,000.00
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Different Currencies
          </h3>
          <div className='grid grid-cols-1 gap-4'>
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Euro (EUR)
              </label>
              <CurrencyInput
                value={euroPrice}
                currency='EUR'
                locale='de-DE'
                onValueChange={setEuroPrice}
              />
            </div>
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                British Pound (GBP)
              </label>
              <CurrencyInput
                value={gbpPrice}
                currency='GBP'
                locale='en-GB'
                onValueChange={setGbpPrice}
              />
            </div>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Japanese Yen (No Decimals)
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Price in JPY
            </label>
            <CurrencyInput
              value={2999}
              currency='JPY'
              locale='ja-JP'
              precision={0}
            />
            <p className='text-xs text-neutral-500 dark:text-neutral-400'>
              JPY typically doesn't use decimal places
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Custom Placeholder
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Enter Amount
            </label>
            <CurrencyInput
              value={0}
              currency='USD'
              placeholder='Enter price...'
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            Disabled State
          </h3>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Fixed Price
            </label>
            <CurrencyInput value={49.99} currency='USD' disabled />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-900 dark:text-neutral-100'>
            In Form Context
          </h3>
          <div className='p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg'>
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
                  Price *
                </label>
                <CurrencyInput
                  value={0}
                  currency='USD'
                  locale='en-US'
                  min={0.01}
                  placeholder='Enter price'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1'>
                  Discount Amount
                </label>
                <CurrencyInput
                  value={0}
                  currency='USD'
                  locale='en-US'
                  min={0}
                  placeholder='Optional discount'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}
