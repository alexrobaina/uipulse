"use client";

import Checkbox from "@/app/ui/atoms/Checkbox";
import Preview from "@/app/components/Preview";
import { useState } from "react";

export default function CheckboxDemo() {
  const [basicChecked, setBasicChecked] = useState(false);
  const [primaryChecked, setPrimaryChecked] = useState(true);
  const [successChecked, setSuccessChecked] = useState(false);
  const [warningChecked, setWarningChecked] = useState(true);
  const [errorChecked, setErrorChecked] = useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = useState(false);
  const [groupChecked, setGroupChecked] = useState([false, true, false]);

  const handleGroupChange = (index: number) => {
    const newChecked = [...groupChecked];
    newChecked[index] = !newChecked[index];
    setGroupChecked(newChecked);
  };

  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Basic Usage
          </h3>
          <div className="space-y-3">
            <Checkbox
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
              label="Default checkbox"
            />
            <Checkbox
              checked={true}
              onChange={() => {}}
              label="Checked checkbox"
            />
            <Checkbox
              checked={false}
              onChange={() => {}}
              label="Unchecked checkbox"
            />
            <Checkbox
              checked={false}
              disabled
              onChange={() => {}}
              label="Disabled checkbox"
            />
            <Checkbox
              checked={true}
              disabled
              onChange={() => {}}
              label="Disabled checked checkbox"
            />
          </div>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Variants
          </h3>
          <div className="space-y-3">
            <Checkbox
              variant="default"
              checked={basicChecked}
              onChange={(e) => setBasicChecked(e.target.checked)}
              label="Default variant"
            />
            <Checkbox
              variant="primary"
              checked={primaryChecked}
              onChange={(e) => setPrimaryChecked(e.target.checked)}
              label="Primary variant"
            />
            <Checkbox
              variant="success"
              checked={successChecked}
              onChange={(e) => setSuccessChecked(e.target.checked)}
              label="Success variant"
            />
            <Checkbox
              variant="warning"
              checked={warningChecked}
              onChange={(e) => setWarningChecked(e.target.checked)}
              label="Warning variant"
            />
            <Checkbox
              variant="error"
              checked={errorChecked}
              onChange={(e) => setErrorChecked(e.target.checked)}
              label="Error variant"
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Sizes
          </h3>
          <div className="space-y-3">
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
        </div>

        {/* Indeterminate State */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Indeterminate State
          </h3>
          <div className="space-y-3">
            <Checkbox
              indeterminate
              checked={indeterminateChecked}
              onChange={(e) => setIndeterminateChecked(e.target.checked)}
              label="Indeterminate checkbox"
              description="Used when some but not all items in a group are selected"
            />
            <Checkbox
              variant="primary"
              indeterminate
              checked={false}
              onChange={() => {}}
              label="Primary indeterminate"
            />
            <Checkbox
              variant="success"
              indeterminate
              checked={false}
              onChange={() => {}}
              label="Success indeterminate"
            />
          </div>
        </div>

        {/* With Descriptions */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            With Descriptions
          </h3>
          <div className="space-y-4">
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
            <Checkbox
              checked={true}
              onChange={() => {}}
              label="Terms and conditions"
              description="I agree to the terms of service and privacy policy"
            />
          </div>
        </div>

        {/* Error States */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Error States
          </h3>
          <div className="space-y-4">
            <Checkbox
              checked={false}
              onChange={() => {}}
              label="Required checkbox"
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
        </div>

        {/* Group Example */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Checkbox Group
          </h3>
          <div className="space-y-3">
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
      </div>
    </Preview>
  );
}
