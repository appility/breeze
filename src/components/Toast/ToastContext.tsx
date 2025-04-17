import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ToastMessage from "./ToastMessage";

// Export Toast Types
export type ToastType = "success" | "error" | "warning";

export interface Toast {
    id: number;
    type: ToastType;
    message: ReactNode;
    duration?: number;
}

// Export Context Type
export interface ToastContextType {
    addToast: (message: ReactNode, type?: ToastType, duration?: number) => void;
}

// Create Toast Context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook to use Toast Context
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

// Toast Provider Component
export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    // Function to add a toast
    const addToast = useCallback((message: ReactNode, type: ToastType = "success", duration: number = 3000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, type, message, duration }]);

        // Auto-remove toast after `duration` ms
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    }, []);

    // Function to remove a toast manually
    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="fixed top-5 right-5 flex flex-col space-y-2 z-50">
                {toasts.map((toast) => (
                    <ToastMessage key={toast.id} toast={{ ...toast, onRemove: removeToast }} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
