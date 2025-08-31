export const modalImplementation = `import { useState } from "react";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from "@/app/ui/molecules/Modal";
import Button from "@/app/ui/atoms/Button";

export default function ModalExample() {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isModernOpen, setIsModernOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Basic Modal */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Modal</h3>
        <Button onClick={() => setIsBasicOpen(true)}>
          Open Basic Modal
        </Button>
        
        <Modal isOpen={isBasicOpen} onClose={() => setIsBasicOpen(false)}>
          <ModalHeader>
            <div>
              <ModalTitle>Welcome to UIpulse</ModalTitle>
              <ModalDescription>
                This is a basic modal example with Vercel-inspired styling.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>
              This modal demonstrates the clean, modern design principles 
              inspired by Vercel's interface. Notice the subtle shadows, 
              rounded corners, and excellent typography hierarchy.
            </p>
            <p className="mt-4">
              The modal includes proper accessibility features like focus 
              management, escape key handling, and ARIA attributes.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={() => setIsBasicOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsBasicOpen(false)}>
              Got it
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* Modern Variant */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Modern Variant</h3>
        <Button onClick={() => setIsModernOpen(true)} variant="outline">
          Open Modern Modal
        </Button>
        
        <Modal 
          isOpen={isModernOpen} 
          onClose={() => setIsModernOpen(false)}
          variant="modern"
          size="lg"
        >
          <ModalHeader>
            <div>
              <ModalTitle>Enhanced Experience</ModalTitle>
              <ModalDescription>
                Modern variant with enhanced shadows and rounded corners.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p>
                This modern variant features more pronounced shadows and 
                larger border radius for a contemporary look.
              </p>
              <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• Enhanced shadow depth</li>
                  <li>• Larger border radius (rounded-2xl)</li>
                  <li>• Smooth animations</li>
                  <li>• Perfect for feature announcements</li>
                </ul>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsModernOpen(false)}>
              Awesome!
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* Confirmation Dialog */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Confirmation Dialog</h3>
        <Button 
          onClick={() => setIsConfirmOpen(true)} 
          variant="destructive"
          size="sm"
        >
          Delete Item
        </Button>
        
        <Modal 
          isOpen={isConfirmOpen} 
          onClose={() => setIsConfirmOpen(false)}
          size="sm"
          closeOnOverlayClick={false}
        >
          <ModalHeader>
            <div>
              <ModalTitle>Delete Confirmation</ModalTitle>
              <ModalDescription>
                This action cannot be undone. Are you sure?
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>
              This will permanently delete the selected item and remove 
              all associated data from our servers.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => setIsConfirmOpen(false)}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* Form Modal */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Form Modal</h3>
        <Button onClick={() => setIsFormOpen(true)} variant="default">
          Create New Project
        </Button>
        
        <Modal 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)}
          size="xl"
          initialFocus="#project-name"
        >
          <ModalHeader>
            <div>
              <ModalTitle>Create New Project</ModalTitle>
              <ModalDescription>
                Set up your new project with the details below.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalBody>
            <form className="space-y-4">
              <div>
                <label 
                  htmlFor="project-name" 
                  className="block text-sm font-medium mb-2"
                >
                  Project Name
                </label>
                <input
                  id="project-name"
                  type="text"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter project name..."
                />
              </div>
              <div>
                <label 
                  htmlFor="description" 
                  className="block text-sm font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of your project..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="type" value="web" />
                    <span className="text-sm">Web Application</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="type" value="mobile" />
                    <span className="text-sm">Mobile App</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="type" value="api" />
                    <span className="text-sm">API Service</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="type" value="other" />
                    <span className="text-sm">Other</span>
                  </label>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsFormOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setIsFormOpen(false)}>
              Create Project
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
            <Button
              key={size}
              variant="outline"
              size="sm"
              onClick={() => {
                // This would open modals of different sizes
                console.log(\`Opening \${size} modal\`);
              }}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}`;
