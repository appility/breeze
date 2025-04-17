import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

interface ComboboxProps<T> {
  id?: string;
  name: string;
  label: string;
  items: T[];
  labelKey: keyof T;
  onChange: (value: T | null) => void;
  errorMessage?: string;
  placeholder?: string;
  renderSelect?: (props: React.InputHTMLAttributes<HTMLInputElement>) => JSX.Element;
}

export function ComboboxComponent<T>({
  id,
  name,
  label,
  items,
  labelKey,
  onChange,
  errorMessage,
  placeholder = "Search...",
  renderSelect,
}: ComboboxProps<T>) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<T | null>(null);

  /** ✅ Filter items based on query */
  const filteredItems =
    query === ""
      ? items
      : items.filter((item) => {
          const value = String(item[labelKey]).toLowerCase();
          return value.includes(query.toLowerCase());
        });

  return (
    <div className="relative w-full">
      {/* Label */}
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Error Message */}
      {errorMessage && <p className="text-red-600 text-sm mt-1 mb-1">{errorMessage}</p>}

      <Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          onChange(value);
        }}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          {/* custom renderSelect or default styling */}
          {renderSelect ? (
            renderSelect({
              id,
              name,
              className: clsx(
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring",
                errorMessage
                  ? "border-red-600 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#00BA8D]"
              ),
              value: selected ? String(selected[labelKey]) : "",
              onChange: (event) => setQuery(event.target.value),
              placeholder,
            })
          ) : (
            <ComboboxInput
              className={clsx(
                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring",
                errorMessage
                  ? "border-red-600 focus:ring-red-500"
                  : "border-gray-300 focus:ring-[#00BA8D]"
              )}
              displayValue={(item: T | null) => (item ? String(item[labelKey]) : "")}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
            />
          )}

          <ComboboxButton className="absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </ComboboxButton>
        </div>

        <ComboboxOptions className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white border border-gray-300 shadow-lg">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <ComboboxOption
                key={index}
                value={item}
                className="cursor-pointer select-none px-3 py-2 hover:bg-blue-500 hover:text-white"
              >
                {String(item[labelKey])}
              </ComboboxOption>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}

export default ComboboxComponent;
