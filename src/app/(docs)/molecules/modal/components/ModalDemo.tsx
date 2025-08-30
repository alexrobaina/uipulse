"use client";

import { useState } from "react";
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from "@/app/ui/molecules/Modal";
import Button from "@/app/ui/atoms/Button";
import Preview from "@/app/components/Preview";

export default function ModalDemo() {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isModernOpen, setIsModernOpen] = useState(false);
  const [isMinimalOpen, setIsMinimalOpen] = useState(false);
  const [isElevatedOpen, setIsElevatedOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  const [isScrollableOpen, setIsScrollableOpen] = useState(false);

  return (
    <Preview>
      <div className="space-y-8 w-full">
        {/* Basic Usage */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Basic Usage</h3>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsBasicOpen(true)}>
              Basic Modal
            </Button>
            
            <Modal isOpen={isBasicOpen} onClose={() => setIsBasicOpen(false)}>
              <ModalHeader>
                <div>
                  <ModalTitle>Welcome to UIpulse</ModalTitle>
                  <ModalDescription>
                    This is a basic modal with clean, modern styling inspired by Vercel.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>
                  This modal demonstrates the clean, modern design principles with excellent typography, 
                  subtle shadows, and smooth animations. It includes proper accessibility features like 
                  focus management and keyboard navigation.
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
        </div>

        {/* Different Variants */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setIsModernOpen(true)} variant="outline">
              Modern
            </Button>
            <Button onClick={() => setIsMinimalOpen(true)} variant="outline">
              Minimal
            </Button>
            <Button onClick={() => setIsElevatedOpen(true)} variant="outline">
              Elevated
            </Button>
            
            {/* Modern Variant */}
            <Modal 
              isOpen={isModernOpen} 
              onClose={() => setIsModernOpen(false)}
              variant="modern"
              size="lg"
            >
              <ModalHeader>
                <div>
                  <ModalTitle>Modern Design</ModalTitle>
                  <ModalDescription>
                    Enhanced shadows and rounded corners for a contemporary look.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <p>
                    This modern variant features more pronounced shadows and larger border radius 
                    for a sleek, contemporary appearance.
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-neutral-900 dark:text-neutral-100">Key Features:</h4>
                    <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                      <li>• Enhanced shadow depth with custom values</li>
                      <li>• Larger border radius (rounded-2xl)</li>
                      <li>• Perfect for feature announcements</li>
                      <li>• Smooth entrance animations</li>
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

            {/* Minimal Variant */}
            <Modal 
              isOpen={isMinimalOpen} 
              onClose={() => setIsMinimalOpen(false)}
              variant="minimal"
            >
              <ModalHeader>
                <div>
                  <ModalTitle>Minimal Style</ModalTitle>
                  <ModalDescription>
                    Clean and simple without borders.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>
                  The minimal variant removes the border for an even cleaner appearance, 
                  perfect for content-focused dialogs.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsMinimalOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            {/* Elevated Variant */}
            <Modal 
              isOpen={isElevatedOpen} 
              onClose={() => setIsElevatedOpen(false)}
              variant="elevated"
            >
              <ModalHeader>
                <div>
                  <ModalTitle>Elevated Design</ModalTitle>
                  <ModalDescription>
                    Sophisticated shadow system for depth.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>
                  The elevated variant uses a sophisticated multi-layer shadow system 
                  to create a sense of depth and importance.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsElevatedOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        {/* Different Use Cases */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Use Cases</h3>
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={() => setIsConfirmOpen(true)} 
              variant="destructive"
              size="sm"
            >
              Delete Item
            </Button>
            
            <Button onClick={() => setIsFormOpen(true)}>
              Create Project
            </Button>

            <Button onClick={() => setIsScrollableOpen(true)} variant="outline">
              Scrollable Content
            </Button>
            
            {/* Confirmation Dialog */}
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

            {/* Form Modal */}
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
                      className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                    >
                      Project Name
                    </label>
                    <input
                      id="project-name"
                      type="text"
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter project name..."
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="description" 
                      className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Brief description of your project..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-neutral-700 dark:text-neutral-300">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'web', label: 'Web Application' },
                        { value: 'mobile', label: 'Mobile App' },
                        { value: 'api', label: 'API Service' },
                        { value: 'other', label: 'Other' }
                      ].map((option) => (
                        <label key={option.value} className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            name="type" 
                            value={option.value}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {option.label}
                          </span>
                        </label>
                      ))}
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

            {/* Scrollable Content Modal */}
            <Modal 
              isOpen={isScrollableOpen} 
              onClose={() => setIsScrollableOpen(false)}
              size="md"
            >
              <ModalHeader>
                <div>
                  <ModalTitle>Terms of Service</ModalTitle>
                  <ModalDescription>
                    Please read through our terms and conditions.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  {Array.from({ length: 20 }, (_, i) => (
                    <p key={i} className="text-sm">
                      {i === 0 && "This is a demonstration of scrollable content within a modal. "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                      commodo consequat.
                    </p>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setIsScrollableOpen(false)}
                >
                  Decline
                </Button>
                <Button onClick={() => setIsScrollableOpen(false)}>
                  Accept
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setIsLargeOpen(true)} variant="outline" size="sm">
              Large Modal
            </Button>
            
            <Modal 
              isOpen={isLargeOpen} 
              onClose={() => setIsLargeOpen(false)}
              size="2xl"
            >
              <ModalHeader>
                <div>
                  <ModalTitle>Large Modal</ModalTitle>
                  <ModalDescription>
                    This modal demonstrates the 2xl size variant.
                  </ModalDescription>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100">Available Sizes</h4>
                    <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                      <li>• xs - max-w-xs</li>
                      <li>• sm - max-w-sm</li>
                      <li>• md - max-w-md (default)</li>
                      <li>• lg - max-w-lg</li>
                      <li>• xl - max-w-xl</li>
                      <li>• 2xl - max-w-2xl</li>
                      <li>• 3xl - max-w-3xl</li>
                      <li>• 4xl - max-w-4xl</li>
                      <li>• full - max-w-[95vw]</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100">Features</h4>
                    <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400">
                      <li>• Responsive design</li>
                      <li>• Keyboard navigation</li>
                      <li>• Focus management</li>
                      <li>• Smooth animations</li>
                      <li>• Accessibility support</li>
                      <li>• Customizable styling</li>
                    </ul>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setIsLargeOpen(false)}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Configuration</h3>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
            <h4 className="font-medium mb-3 text-neutral-900 dark:text-neutral-100">Modal Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Behavior</p>
                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• closeOnOverlayClick</li>
                  <li>• closeOnEscape</li>
                  <li>• showCloseButton</li>
                  <li>• initialFocus</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2 text-neutral-700 dark:text-neutral-300">Styling</p>
                <ul className="space-y-1 text-neutral-600 dark:text-neutral-400">
                  <li>• size (xs to 4xl, full)</li>
                  <li>• variant (default, modern, minimal, elevated)</li>
                  <li>• Custom className</li>
                  <li>• Responsive sizing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Preview>
  );
}