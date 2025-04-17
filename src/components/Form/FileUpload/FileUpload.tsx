import React, { useState, DragEvent } from "react";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

import "./FileUpload.css";

interface FileUploadProps {
  onChange: (file: File | null) => void;
  accept?: string;
  label?: string;
  description?: string;
  fileName?: string;
}

export function FileUpload({
    onChange,
    accept = ".pdf,.doc,.docx",
    label = "Upload document",
    description = "Excel document, up to 100Mb",
    fileName,
  }: FileUploadProps): React.JSX.Element | null {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files?.[0] || null;
    onChange(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <div
      className={`file-upload-container ${isDragOver ? "drag-over" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="file-upload-inner">
        <DocumentPlusIcon className="file-upload-icon" aria-hidden="true" />
        <div className="file-upload-label-row">
          <label htmlFor="file-upload" className="file-upload-label">
            <span>{label}</span>
            <input
              id="file-upload"
              name="file"
              type="file"
              className="sr-only"
              accept={accept}
              onChange={handleFileChange}
            />
          </label>
          <p className="file-upload-or-text">or drag and drop</p>
        </div>
        {fileName ? (
          <p className="file-upload-filename">{fileName}</p>
        ) : (
          <p className="file-upload-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
