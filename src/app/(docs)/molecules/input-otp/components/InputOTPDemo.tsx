'use client';
import { useState } from 'react';
import InputOTP from '@/app/ui/molecules/InputOTP';
import Preview from '@/app/components/Preview';
import { Minus, Dot } from 'lucide-react';

export default function InputOTPDemo() {
  const [basicValue, setBasicValue] = useState('');
  const [separatorValue, setSeparatorValue] = useState('');
  const [pinValue, setPinValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [maskedValue, setMaskedValue] = useState('');
  const [autoFocusValue, setAutoFocusValue] = useState('');

  return (
    <Preview>
      <div className='space-y-12 w-full max-w-2xl mx-auto'>
        {/* Basic Example */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Basic 6-digit OTP
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Standard OTP input with 6 digits
            </p>
          </div>
          <InputOTP
            length={6}
            value={basicValue}
            onValueChange={setBasicValue}
          />
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Value: "{basicValue}"
          </p>
        </div>

        {/* Variants */}
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Style Variants
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
              Different visual styles for various use cases
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Default
              </h4>
              <InputOTP length={4} variant='default' />
              <p className='text-xs text-neutral-500 dark:text-neutral-500'>
                Clean border with subtle background
              </p>
            </div>

            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Outline
              </h4>
              <InputOTP length={4} variant='outline' />
              <p className='text-xs text-neutral-500 dark:text-neutral-500'>
                Bold borders with transparent background
              </p>
            </div>

            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Filled
              </h4>
              <InputOTP length={4} variant='filled' />
              <p className='text-xs text-neutral-500 dark:text-neutral-500'>
                Subtle filled background, becomes white on focus
              </p>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Size Variants
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
              Different sizes for different contexts
            </p>
          </div>

          <div className='space-y-6'>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Small (40×40px)
              </h4>
              <InputOTP length={4} size='sm' variant='outline' />
            </div>

            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Medium - Default (48×48px)
              </h4>
              <InputOTP length={4} size='md' variant='outline' />
            </div>

            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Large (56×56px)
              </h4>
              <InputOTP length={4} size='lg' variant='outline' />
            </div>
          </div>
        </div>

        {/* With Separators */}
        <div className='space-y-6'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              With Separators
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-4'>
              Group digits with custom separators
            </p>
          </div>

          <div className='space-y-6'>
            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Dash Separator
              </h4>
              <InputOTP
                length={6}
                value={separatorValue}
                onValueChange={setSeparatorValue}
                separator={<Minus className='w-4 h-4' />}
                separatorIndexes={[2]}
              />
              <p className='text-xs text-neutral-500 dark:text-neutral-500'>
                Value: "{separatorValue}"
              </p>
            </div>

            <div className='space-y-3'>
              <h4 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                Dot Separator
              </h4>
              <InputOTP
                length={6}
                separator={<Dot className='w-3 h-3' />}
                separatorIndexes={[2]}
              />
            </div>
          </div>
        </div>

        {/* 4-digit PIN */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              4-digit PIN
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Shorter OTP for PIN codes
            </p>
          </div>
          <InputOTP
            length={4}
            value={pinValue}
            onValueChange={setPinValue}
            variant='filled'
          />
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Value: "{pinValue}"
          </p>
        </div>

        {/* Phone Verification */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Phone Number Verification
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-1'>
              Complete verification flow example
            </p>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Enter the 6-digit code sent to +1 (555) 000-0000
            </p>
          </div>
          <InputOTP
            length={6}
            value={phoneValue}
            onValueChange={setPhoneValue}
            separator={<span className='text-neutral-400 font-mono'>-</span>}
            separatorIndexes={[2]}
            variant='outline'
            onComplete={value => {
              console.log('OTP completed:', value);
            }}
          />
          {phoneValue.length === 6 && (
            <div className='flex items-center gap-2 text-green-600 dark:text-green-400'>
              <div className='w-4 h-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center'>
                <svg
                  className='w-2.5 h-2.5 text-green-600 dark:text-green-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='text-sm font-medium'>
                Code verified successfully!
              </span>
            </div>
          )}
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Value: "{phoneValue}"
          </p>
        </div>

        {/* Masked Input */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Masked Input
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Hide entered digits for security
            </p>
          </div>
          <InputOTP
            length={4}
            value={maskedValue}
            onValueChange={setMaskedValue}
            mask={true}
            variant='filled'
          />
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Actual value: "{maskedValue}" (displayed as dots)
          </p>
        </div>

        {/* Auto Focus */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Auto Focus
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Automatically focus first input on mount
            </p>
          </div>
          <InputOTP
            length={5}
            value={autoFocusValue}
            onValueChange={setAutoFocusValue}
            autoFocus={true}
          />
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Value: "{autoFocusValue}"
          </p>
        </div>

        {/* Disabled State */}
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
              Disabled State
            </h3>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-3'>
              Non-interactive state for display purposes
            </p>
          </div>
          <InputOTP length={6} disabled defaultValue='123456' />
          <p className='text-xs text-neutral-500 dark:text-neutral-500'>
            Disabled with preset value
          </p>
        </div>

        {/* Features Showcase */}
        <div className='space-y-4 p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700'>
          <h3 className='text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2'>
            ✨ Interactive Features
          </h3>
          <ul className='text-sm text-neutral-600 dark:text-neutral-400 space-y-2'>
            <li>
              • <strong>Auto-advance:</strong> Automatically moves to next input
              when typing
            </li>
            <li>
              • <strong>Backspace:</strong> Moves to previous input and clears
              digit
            </li>
            <li>
              • <strong>Arrow keys:</strong> Navigate between inputs
            </li>
            <li>
              • <strong>Paste support:</strong> Paste 6-digit codes from
              clipboard
            </li>
            <li>
              • <strong>Mobile optimized:</strong> Shows numeric keyboard on
              mobile devices
            </li>
            <li>
              • <strong>Validation:</strong> Only accepts numeric input
            </li>
          </ul>
        </div>
      </div>
    </Preview>
  );
}

export { InputOTPDemo };
