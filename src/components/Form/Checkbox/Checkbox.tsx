import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import { useRef } from 'react';
import './Checkbox.css';

interface CustomCheckboxProps {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
  }
  
  export function Checkbox({
    label,
    size = 'md',
    checked,
    onChange,
    disabled = false
  }: CustomCheckboxProps) {
    const ref = useRef<HTMLButtonElement>(null);
  
    const handleClick = () => {
      if (!disabled) {
        onChange(!checked);
      }
    };
  
    return (
      <div
        className={`inline-flex items-center space-x-2 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
        onClick={() => !disabled && ref.current?.click()}
      >
        <HeadlessCheckbox
          ref={ref}
          checked={checked}
          onChange={handleClick}
          className={`checkbox checkbox-${size}`}
          disabled={disabled} // ✅ Here
        >
          <svg className="checkbox-icon" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </HeadlessCheckbox>
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </div>
    );
  }
  

export default Checkbox;
