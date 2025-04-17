interface InputProps {
  id?: string;
  name: string;
  label: string;
  errorMessage?: string;
  hideLabel?: boolean;
  renderInput: (
    props: React.InputHTMLAttributes<HTMLInputElement> & { disabled?: boolean }
  ) => JSX.Element;  
}

export function InputField({
  id,
  name,
  label,
  errorMessage,
  hideLabel = false,
  renderInput,
}: InputProps): React.JSX.Element | null {
  return (
    <div className={`relative w-full ${errorMessage ? "border-l-4 border-red-600 pl-3" : ""}`}>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-700 mb-1 ${hideLabel ? "sr-only" : ""}`}
      >
        {label}
      </label>

      {errorMessage && (
        <p className="text-red-600 text-sm mt-1 mb-1">{errorMessage}</p>
      )}

      {renderInput({
        id,
        name,
        className: `w-full px-3 py-2 text-sm leading-[1.5rem] leading-5 border rounded-md focus:outline-none focus:ring ${
          errorMessage
            ? "border-red-600 focus:ring-red-500"
            : "border-gray-300 focus:ring-[#00BA8D]"
        }`,
      })}
    </div>
  );
}

export default InputField