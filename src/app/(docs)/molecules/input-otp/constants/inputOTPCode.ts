export const inputOTPCode = {
  usage: `import InputOTP from '@/app/ui/molecules/InputOTP';
import { useState } from 'react';

export default function InputOTPExample() {
  const [value, setValue] = useState('');

  return (
    <InputOTP 
      length={6} 
      value={value} 
      onValueChange={setValue} 
    />
  );
}`,

  props: `interface InputOTPProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  mask?: boolean;
  separator?: React.ReactNode;
  separatorIndexes?: number[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'filled';
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  className?: string;
}`,

  basic: `function BasicInputOTP() {
  const [value, setValue] = useState('');

  return (
    <InputOTP 
      length={6} 
      value={value} 
      onValueChange={setValue}
    />
  );
}`,

  withSeparator: `function WithSeparator() {
  const [value, setValue] = useState('');

  return (
    <InputOTP 
      length={6} 
      value={value} 
      onValueChange={setValue}
      separator={<span className="text-neutral-400">-</span>}
      separatorIndexes={[2]}
    />
  );
}`,

  fourDigit: `function FourDigitPIN() {
  const [value, setValue] = useState('');

  return (
    <InputOTP 
      length={4} 
      value={value} 
      onValueChange={setValue} 
    />
  );
}`,

  withMask: `function MaskedInput() {
  const [value, setValue] = useState('');

  return (
    <InputOTP 
      length={4}
      value={value}
      onValueChange={setValue}
      mask={true}
    />
  );
}`,

  withVariants: `function VariantExamples() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <InputOTP length={4} variant="default" />
      <InputOTP length={4} variant="outline" />
      <InputOTP length={4} variant="filled" />
    </div>
  );
}`,

  withSizes: `function SizeExamples() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <InputOTP length={4} size="sm" />
      <InputOTP length={4} size="md" />
      <InputOTP length={4} size="lg" />
    </div>
  );
}`,

  disabled: `function DisabledInputOTP() {
  return (
    <InputOTP 
      length={6} 
      disabled 
      defaultValue="123456" 
    />
  );
}`,

  phoneVerification: `function PhoneVerification() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-2">
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        Enter the 6-digit code sent to +1 (555) 000-0000
      </p>
      <InputOTP 
        length={6}
        value={value}
        onValueChange={setValue}
        separator={<span className="text-neutral-400">-</span>}
        separatorIndexes={[3]}
      />
      {value.length === 6 && (
        <p className="text-sm text-green-600 dark:text-green-400">
          ✓ Code verified successfully
        </p>
      )}
    </div>
  );
}`,
};
