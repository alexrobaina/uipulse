export const checkboxImplementation = `import Checkbox from "@/app/ui/atoms/Checkbox";
import { useState } from "react";

export default function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  const [groupChecked, setGroupChecked] = useState([false, true, false]);

  const handleGroupChange = (index: number) => {
    const newChecked = [...groupChecked];
    newChecked[index] = !newChecked[index];
    setGroupChecked(newChecked);
  };

  return (
    <div className="space-y-6">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        
        <Checkbox
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          label="Accept terms and conditions"
        />
        
        <Checkbox
          checked={true}
          onChange={() => {}}
          label="Default checked state"
        />
        
        <Checkbox
          disabled
          checked={false}
          onChange={() => {}}
          label="Disabled checkbox"
        />
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        
        <Checkbox
          variant="primary"
          checked={true}
          onChange={() => {}}
          label="Primary variant"
        />
        
        <Checkbox
          variant="success"
          checked={true}
          onChange={() => {}}
          label="Success variant"
        />
        
        <Checkbox
          variant="warning"
          checked={true}
          onChange={() => {}}
          label="Warning variant"
        />
        
        <Checkbox
          variant="error"
          checked={true}
          onChange={() => {}}
          label="Error variant"
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        
        <Checkbox
          size="sm"
          checked={true}
          onChange={() => {}}
          label="Small checkbox"
        />
        
        <Checkbox
          size="md"
          checked={true}
          onChange={() => {}}
          label="Medium checkbox (default)"
        />
        
        <Checkbox
          size="lg"
          checked={true}
          onChange={() => {}}
          label="Large checkbox"
        />
      </div>

      {/* With Descriptions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Descriptions</h3>
        
        <Checkbox
          checked={true}
          onChange={() => {}}
          label="Newsletter subscription"
          description="Receive weekly updates about new features and improvements"
        />
        
        <Checkbox
          checked={false}
          onChange={() => {}}
          label="Marketing emails"
          description="Get notified about special offers and promotions"
        />
      </div>

      {/* Error States */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Error States</h3>
        
        <Checkbox
          checked={false}
          onChange={() => {}}
          label="Required field"
          description="This field is required"
          error="Please check this box to continue"
        />
        
        <Checkbox
          variant="error"
          checked={false}
          onChange={() => {}}
          label="Invalid selection"
          error="This option is currently unavailable"
        />
      </div>

      {/* Indeterminate State */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Indeterminate State</h3>
        
        <Checkbox
          indeterminate
          checked={false}
          onChange={() => {}}
          label="Indeterminate checkbox"
          description="Used when some but not all items in a group are selected"
        />
      </div>

      {/* Checkbox Group */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checkbox Group</h3>
        
        <Checkbox
          indeterminate={
            groupChecked.some(Boolean) && !groupChecked.every(Boolean)
          }
          checked={groupChecked.every(Boolean)}
          onChange={(e) => {
            const allChecked = e.target.checked;
            setGroupChecked([allChecked, allChecked, allChecked]);
          }}
          label="Select all"
          description="Toggle all options below"
        />
        
        <div className="ml-6 space-y-2">
          <Checkbox
            checked={groupChecked[0]}
            onChange={() => handleGroupChange(0)}
            label="Option 1"
          />
          <Checkbox
            checked={groupChecked[1]}
            onChange={() => handleGroupChange(1)}
            label="Option 2"
          />
          <Checkbox
            checked={groupChecked[2]}
            onChange={() => handleGroupChange(2)}
            label="Option 3"
          />
        </div>
      </div>
    </div>
  );
}`;
