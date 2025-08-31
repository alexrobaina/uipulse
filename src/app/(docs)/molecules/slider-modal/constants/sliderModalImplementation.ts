export const sliderModalImplementation = `import SliderModal from "@/app/ui/molecules/SliderModal";
import Button from "@/app/ui/atoms/Button";

export default function SliderModalExample() {

  return (
    <div className="space-y-8">
      {/* Basic Usage */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Basic Usage</h3>
        <SliderModal
          trigger={<Button>Open Modal</Button>}
          title="Settings"
          description="Manage your account settings and preferences."
          side="right"
          variant="modern"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Display Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your display name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </SliderModal>
      </div>

      {/* Different Sides */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Different Sides</h3>
        <div className="flex flex-wrap gap-4">
          <SliderModal
            trigger={<Button>Right Side</Button>}
            title="Right Modal"
            side="right"
            variant="modern"
          >
            <p>This modal slides in from the right side.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">Left Side</Button>}
            title="Left Modal"
            side="left"
            variant="modern"
          >
            <p>This modal slides in from the left side.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">Top Side</Button>}
            title="Top Modal"
            side="top"
            variant="modern"
          >
            <p>This modal slides down from the top.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">Bottom Side</Button>}
            title="Bottom Modal"
            side="bottom"
            variant="modern"
          >
            <p>This modal slides up from the bottom.</p>
          </SliderModal>
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Different Variants</h3>
        <div className="flex flex-wrap gap-4">
          <SliderModal
            trigger={<Button variant="outline">Default</Button>}
            title="Default Modal"
            variant="default"
          >
            <p>Default styled modal with standard appearance.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">Modern</Button>}
            title="Modern Modal"
            variant="modern"
          >
            <p>Modern styled modal with backdrop blur effect.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">Elevated</Button>}
            title="Elevated Modal"
            variant="elevated"
          >
            <p>Elevated modal with enhanced shadow effects.</p>
          </SliderModal>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="flex flex-wrap gap-4">
          <SliderModal
            trigger={<Button size="sm">Small</Button>}
            title="Small Modal"
            size="sm"
            variant="modern"
          >
            <p>Small modal with compact dimensions.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button size="sm">Medium</Button>}
            title="Medium Modal"
            size="md"
            variant="modern"
          >
            <p>Medium-sized modal with standard dimensions.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button size="sm">Large</Button>}
            title="Large Modal"
            size="lg"
            variant="modern"
          >
            <p>Large modal with expanded dimensions.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button size="sm">Extra Large</Button>}
            title="Extra Large Modal"
            size="xl"
            variant="modern"
          >
            <p>Extra large modal with maximum dimensions.</p>
          </SliderModal>
        </div>
      </div>

      {/* With Footer */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">With Footer</h3>
        <SliderModal
          trigger={<Button>Modal with Footer</Button>}
          title="Confirm Action"
          description="Are you sure you want to proceed?"
          variant="modern"
          footer={
            <div className="flex gap-3">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </div>
          }
        >
          <p>This action cannot be undone. Please confirm to proceed.</p>
        </SliderModal>
      </div>

      {/* Custom Header */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Custom Header</h3>
        <SliderModal
          trigger={<Button>Custom Header</Button>}
          variant="modern"
          header={
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">JD</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  john.doe@example.com
                </p>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <p>Profile information and settings for John Doe.</p>
            <div className="pt-4 border-t">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Member since January 2024
              </p>
            </div>
          </div>
        </SliderModal>
      </div>

      {/* Configuration Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Configuration Options</h3>
        <div className="flex flex-wrap gap-4">
          <SliderModal
            trigger={<Button variant="outline">No Close Button</Button>}
            title="No Close Button"
            showCloseButton={false}
            variant="modern"
            footer={
              <Button size="sm">Close</Button>
            }
          >
            <p>This modal doesn't show the default close button in the header.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">No Overlay Close</Button>}
            title="No Overlay Close"
            closeOnOverlayClick={false}
            variant="modern"
          >
            <p>This modal won't close when clicking the overlay. Use the X button or Escape key.</p>
          </SliderModal>

          <SliderModal
            trigger={<Button variant="outline">No Escape Close</Button>}
            title="No Escape Close"
            closeOnEscape={false}
            variant="modern"
          >
            <p>This modal won't close when pressing the Escape key. Use the X button or overlay click.</p>
          </SliderModal>
        </div>
      </div>
    </div>
  );
}`;
