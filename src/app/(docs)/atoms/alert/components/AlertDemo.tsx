"use client";

import { useState } from "react";
import Alert from "@/app/ui/atoms/Alert";
import Preview from "@/app/components/Preview";

export default function AlertDemo() {
  const [dismissibleAlerts, setDismissibleAlerts] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const handleDismiss = (variant: keyof typeof dismissibleAlerts) => {
    setDismissibleAlerts((prev) => ({ ...prev, [variant]: false }));
  };

  const resetAlerts = () => {
    setDismissibleAlerts({
      info: true,
      success: true,
      warning: true,
      error: true,
    });
  };

  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Alerts */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Basic Alerts</h3>
          <div className="space-y-4">
            <Alert variant="default">
              This is a default alert for general information.
            </Alert>
            <Alert variant="info">
              This is an info alert for informational messages.
            </Alert>
            <Alert variant="success">
              This is a success alert for positive confirmations.
            </Alert>
            <Alert variant="warning">
              This is a warning alert for caution messages.
            </Alert>
            <Alert variant="error">
              This is an error alert for critical issues.
            </Alert>
          </div>
        </div>

        {/* Alerts with Titles */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">
            Alerts with Titles
          </h3>
          <div className="space-y-4">
            <Alert variant="info" title="Information">
              Your account has been successfully updated with the new settings.
            </Alert>
            <Alert variant="success" title="Success">
              Your changes have been saved successfully and are now live.
            </Alert>
            <Alert variant="warning" title="Warning">
              Your subscription will expire in 3 days. Please renew to continue
              using our services.
            </Alert>
            <Alert variant="error" title="Error">
              Failed to save changes. Please check your connection and try
              again.
            </Alert>
          </div>
        </div>

        {/* Alerts without Icons */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Without Icons</h3>
          <div className="space-y-4">
            <Alert variant="info" showIcon={false} title="Clean Information">
              This alert displays without an icon for a cleaner look.
            </Alert>
            <Alert variant="success" showIcon={false}>
              Simple success message without any icon.
            </Alert>
          </div>
        </div>

        {/* Dismissible Alerts */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">
            Dismissible Alerts
          </h3>
          <div className="space-y-4">
            {dismissibleAlerts.info && (
              <Alert
                variant="info"
                title="Dismissible Info"
                dismissible
                onDismiss={() => handleDismiss("info")}
              >
                You can dismiss this alert by clicking the X button.
              </Alert>
            )}
            {dismissibleAlerts.success && (
              <Alert
                variant="success"
                title="Dismissible Success"
                dismissible
                onDismiss={() => handleDismiss("success")}
              >
                This success alert can be dismissed when no longer needed.
              </Alert>
            )}
            {dismissibleAlerts.warning && (
              <Alert
                variant="warning"
                title="Dismissible Warning"
                dismissible
                onDismiss={() => handleDismiss("warning")}
              >
                Click the close button to dismiss this warning.
              </Alert>
            )}
            {dismissibleAlerts.error && (
              <Alert
                variant="error"
                title="Dismissible Error"
                dismissible
                onDismiss={() => handleDismiss("error")}
              >
                This error alert can be closed when the issue is resolved.
              </Alert>
            )}
          </div>
          {(!dismissibleAlerts.info ||
            !dismissibleAlerts.success ||
            !dismissibleAlerts.warning ||
            !dismissibleAlerts.error) && (
            <button
              onClick={resetAlerts}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Reset Alerts
            </button>
          )}
        </div>

        {/* Complex Content */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Rich Content</h3>
          <div className="space-y-4">
            <Alert variant="info" title="System Update Available">
              <div className="space-y-2">
                <p>
                  A new system update is available with the following
                  improvements:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Enhanced security features</li>
                  <li>Performance optimizations</li>
                  <li>Bug fixes and stability improvements</li>
                </ul>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
                    Update Now
                  </button>
                  <button className="px-3 py-1 border border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-400 rounded text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20">
                    Later
                  </button>
                </div>
              </div>
            </Alert>

            <Alert variant="error" title="Action Required" dismissible>
              <div className="space-y-2">
                <p>
                  Your payment method has been declined. Please update your
                  billing information to continue using our services.
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
                    Update Payment
                  </button>
                  <button className="px-3 py-1 border border-red-300 text-red-700 dark:border-red-600 dark:text-red-400 rounded text-xs hover:bg-red-50 dark:hover:bg-red-900/20">
                    Contact Support
                  </button>
                </div>
              </div>
            </Alert>
          </div>
        </div>

        {/* Title Only */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Title Only</h3>
          <div className="space-y-4">
            <Alert variant="success" title="Data saved successfully" />
            <Alert variant="warning" title="Connection unstable" />
            <Alert variant="error" title="Access denied" />
          </div>
        </div>
      </div>
    </Preview>
  );
}
