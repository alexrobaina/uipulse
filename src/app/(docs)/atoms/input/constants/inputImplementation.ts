export const inputImplementation = `
import Input from "@/app/ui/atoms/Input";

export default function InputPage() {
  return (
    <div className="space-y-6 w-full max-w-md">
      {/* Basic Input */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Basic Input</h3>
        <Input placeholder="Enter your text here" />
      </div>

      {/* Input with Label */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">With Label</h3>
        <Input label="Email Address" placeholder="Enter your email" />
      </div>

      {/* Input with Error */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Error State</h3>
        <Input 
          label="Username"
          placeholder="Enter username" 
          error="This field is required" 
        />
      </div>

      {/* Disabled Input */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-foreground">Disabled</h3>
        <Input 
          label="Disabled Field"
          placeholder="This input is disabled" 
          disabled 
        />
      </div>

      {/* Different Input Types */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-foreground">Input Types</h3>
        <div className="space-y-3">
          <Input 
            type="email"
            label="Email"
            placeholder="user@example.com" 
          />
          <Input 
            type="password"
            label="Password"
            placeholder="Enter your password" 
          />
          <Input 
            type="number"
            label="Age"
            placeholder="25" 
          />
          <Input 
            type="tel"
            label="Phone"
            placeholder="+1 (555) 123-4567" 
          />
        </div>
      </div>

      {/* Input with different styling scenarios */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-foreground">Various States</h3>
        <div className="space-y-3">
          <Input 
            label="Required Field"
            placeholder="This field is required"
            required
          />
          <Input 
            label="Read Only"
            value="This is read only text"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}`;
