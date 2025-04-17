
interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}

const ToggleSwitch = ({ checked, onChange, label, disabled, className = "" }: ToggleSwitchProps) => {
    return (
        <label className={`inline-flex items-center cursor-pointer ${className}`}>
            <input
                type="checkbox"
                className="sr-only peer"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
            />
            <div
                className={`relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 
                    peer-focus:ring-blue-300 peer-checked:bg-blue-600 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                    after:content-[""] after:absolute after:z-40 after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
                    after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
            ></div>
            {label && <span className="ms-3 text-sm font-medium text-gray-900">{label}</span>}
        </label>
    );
};

export default ToggleSwitch;

