import React, { useState, useRef, useEffect, JSX } from 'react';

interface DropdownProps {
    icon?: 'vertical' | 'horizontal';
    position?: 'left' | 'right';
    children: React.ReactNode;
}

export function Dropdown({ icon = 'vertical', position = 'right', children }: DropdownProps): JSX.Element | null {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                data-testid="dropdown-toggle"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
            >
                {icon === 'vertical' ? (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                )}
            </button>

            <div
                className={`z-10 absolute ${position === 'right' ? 'right-0' : 'left-0'} ${isOpen ? 'block' : 'hidden'
                    } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44`}
            >
                {children}
            </div>
        </div>
    );
}

interface DropdownItemProps extends React.HTMLAttributes<HTMLElement> {
    as?: 'a' | 'button';
    className?: string;
    children: React.ReactNode;
}

export function DropdownItem({
    as: Component = 'a',
    className = '',
    children,
    ...props
}: DropdownItemProps) {
    return (
        <Component
            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}


