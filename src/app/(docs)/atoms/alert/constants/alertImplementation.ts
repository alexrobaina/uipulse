export const alertImplementation = `import Alert from "@/app/ui/atoms/Alert";

export default function AlertExamples() {
  return (
    <div className="space-y-6">
      {/* Basic Usage */}
      <Alert variant="info">
        This is a basic informational alert.
      </Alert>

      {/* With Title */}
      <Alert variant="success" title="Success">
        Your action was completed successfully.
      </Alert>

      {/* Dismissible */}
      <Alert 
        variant="warning" 
        title="Warning"
        dismissible 
        onDismiss={() => console.log('Alert dismissed')}
      >
        This is a dismissible warning alert.
      </Alert>

      {/* Without Icon */}
      <Alert variant="default" showIcon={false}>
        This alert displays without an icon.
      </Alert>

      {/* All Variants */}
      <Alert variant="default">Default alert message</Alert>
      <Alert variant="info">Information alert message</Alert>
      <Alert variant="success">Success alert message</Alert>
      <Alert variant="warning">Warning alert message</Alert>
      <Alert variant="error">Error alert message</Alert>

      {/* Complex Content */}
      <Alert variant="error" title="Action Required" dismissible>
        <div className="space-y-2">
          <p>Your payment method was declined.</p>
          <div className="flex gap-2 mt-3">
            <button className="px-3 py-1 bg-red-600 text-white rounded text-xs">
              Update Payment
            </button>
            <button className="px-3 py-1 border border-red-300 text-red-700 rounded text-xs">
              Contact Support
            </button>
          </div>
        </div>
      </Alert>

      {/* Title Only */}
      <Alert variant="success" title="Data saved successfully" />
    </div>
  );
}`;
