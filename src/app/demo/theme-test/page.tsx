"use client";

import { useState } from "react";
import Button from "@/app/ui/atoms/Button";
import Input from "@/app/ui/atoms/Input";
import Badge from "@/app/ui/atoms/Badge";
import Alert from "@/app/ui/atoms/Alert";
import Avatar from "@/app/ui/atoms/Avatar";
import Switch from "@/app/ui/atoms/Switch";
import Checkbox from "@/app/ui/atoms/Checkbox";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/app/ui/molecules/Card";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function ThemeTestPage() {
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Theme Test Page
        </h1>
        <ThemeToggle />
      </div>

      <div className="text-neutral-600 dark:text-neutral-400">
        This page tests all components in both light and dark modes. Use the theme toggle above to switch modes.
      </div>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" type="password" placeholder="Enter your password" />
          <Input label="Error State" error="This field is required" placeholder="Error example" />
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                checked={checkboxValue}
                onCheckedChange={setCheckboxValue}
              />
              <label className="text-sm text-neutral-900 dark:text-neutral-100">
                Accept terms and conditions
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                checked={switchValue}
                onCheckedChange={setSwitchValue}
              />
              <label className="text-sm text-neutral-900 dark:text-neutral-100">
                Enable notifications
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="default" title="Default Alert">
            This is a default alert message.
          </Alert>
          <Alert variant="info" title="Info Alert">
            This is an informational alert message.
          </Alert>
          <Alert variant="success" title="Success Alert">
            This is a success alert message.
          </Alert>
          <Alert variant="warning" title="Warning Alert">
            This is a warning alert message.
          </Alert>
          <Alert variant="error" title="Error Alert">
            This is an error alert message.
          </Alert>
        </CardContent>
      </Card>

      {/* Avatars */}
      <Card>
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
              alt="John Doe"
              fallback="John Doe"
              size="md"
              showStatus
              status="online"
            />
            <Avatar
              fallback="Jane Smith"
              size="md"
              showStatus
              status="away"
            />
            <Avatar
              fallback="Bob Wilson"
              size="md"
              showStatus
              status="offline"
            />
            <Avatar
              fallback="Alice Johnson"
              size="lg"
              variant="square"
            />
          </div>
        </CardContent>
      </Card>

      {/* Card Variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card variant="default">
          <CardHeader>
            <CardTitle size="sm">Default Card</CardTitle>
          </CardHeader>
          <CardContent size="sm">
            This is a default card with standard styling.
          </CardContent>
          <CardFooter justify="end">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle size="sm">Elevated Card</CardTitle>
          </CardHeader>
          <CardContent size="sm">
            This is an elevated card with more shadow.
          </CardContent>
          <CardFooter justify="end">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <Card variant="modern">
          <CardHeader>
            <CardTitle size="sm">Modern Card</CardTitle>
          </CardHeader>
          <CardContent size="sm">
            This is a modern card with subtle styling.
          </CardContent>
          <CardFooter justify="end">
            <Button size="sm" variant="ghost">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}