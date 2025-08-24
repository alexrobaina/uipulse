"use client";

import { useState } from "react";
import Modal from "@/app/ui/molecules/Modal";
import Button from "@/app/ui/atoms/Button";
import CodeBlock from "@/app/components/CodeBlock";
import Preview from "@/app/components/Preview";
import Tabs from "@/app/components/Tabs";

const modalCode = `"use client";

import { useState } from "react";
import Modal from "@/app/ui/molecules/Modal";
import Button from "@/app/ui/atoms/Button";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
      >
        <p className="text-gray-600">
          This is the modal content. You can put any React components here.
        </p>
        <div className="mt-4 space-x-2">
          <Button variant="primary">Confirm</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}`;

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const tabItems = [
    {
      id: "preview",
      label: "Preview",
      content: (
        <Preview>
          <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Example Modal"
            >
              <p className="text-gray-600">
                This is the modal content. You can put any React components
                here.
              </p>
              <div className="mt-4 space-x-2">
                <Button variant="primary">Confirm</Button>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </div>
        </Preview>
      ),
    },
    {
      id: "code",
      label: "Code",
      content: <CodeBlock code={modalCode} language="tsx" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Modal</h1>
        <p className="text-gray-600">
          A modal dialog component for displaying content in an overlay.
        </p>
      </div>

      <Tabs items={tabItems} defaultTab="preview" />
    </div>
  );
}
