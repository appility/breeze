import React, { JSX } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  id?: string;
  name: string;
  label: string;
  errorMessage?: string;
  options: Option[];
  renderSelect: (
    props: React.SelectHTMLAttributes<HTMLSelectElement> & { disabled?: boolean },
    options: Option[]
  ) => JSX.Element;
}

export function SelectField({ id, name, label, errorMessage, options, renderSelect }: SelectProps): JSX.Element | null {
  return (
    <div className={`relative w-full ${errorMessage ? "border-l-4 border-red-600 pl-3" : ""}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>

      {errorMessage && <p className="text-red-600 text-sm mt-1 mb-1">{errorMessage}</p>}

      <div className="relative">
        {renderSelect(
          {
            id,
            name,
            className: `
            w-full appearance-none text-sm px-3 py-2 pr-10 border rounded-md
            leading-[1.5rem]  // force line-height to 24px
            focus:outline-none focus:ring
            ${errorMessage ? "border-red-600 focus:ring-red-500" : "border-gray-300 focus:ring-[#00BA8D]"}
          `,          
          },
          options
        )}
        <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}

export default SelectField