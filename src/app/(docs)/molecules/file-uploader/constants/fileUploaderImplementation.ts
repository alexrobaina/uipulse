export const fileUploaderImplementation = `import FileUploader from "@/app/ui/molecules/FileUploader";
import { useState } from "react";

export default function FileUploaderExample() {
  const [singleFile, setSingleFile] = useState<File[]>([]);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  return (
    <div className="space-y-8">
      {/* Single file uploader */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Single File Upload</h3>
        <FileUploader
          multiple={false}
          maxSize={5 * 1024 * 1024} // 5MB
          onFilesChange={setSingleFile}
        />
        {singleFile.length > 0 && (
          <p className="text-sm text-neutral-600">
            Selected: {singleFile[0].name}
          </p>
        )}
      </div>

      {/* Multiple files uploader */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Multiple Files Upload</h3>
        <FileUploader
          multiple
          maxFiles={5}
          maxSize={10 * 1024 * 1024} // 10MB
          onFilesChange={setMultipleFiles}
        />
        {multipleFiles.length > 0 && (
          <p className="text-sm text-neutral-600">
            {multipleFiles.length} file(s) selected
          </p>
        )}
      </div>

      {/* Images only uploader */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Images Only</h3>
        <FileUploader
          multiple
          accept="image/*"
          maxFiles={3}
          maxSize={2 * 1024 * 1024} // 2MB
          onFilesChange={setImageFiles}
        />
      </div>

      {/* Disabled uploader */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Disabled Uploader</h3>
        <FileUploader
          disabled
          onFilesChange={() => {}}
        />
      </div>
    </div>
  );
}`;
