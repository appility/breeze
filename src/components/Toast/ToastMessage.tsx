import { useState, useEffect, ReactNode } from "react";

type ToastType = "success" | "error" | "warning";

interface ToastProps {
    toast: {
        id: number;
        type: ToastType;
        message: ReactNode;
        duration?: number;
        onRemove: (id: number) => void; // Callback to remove toast after fade-out
    };
}

const ToastMessage = ({ toast }: ToastProps): React.JSX.Element | null => {
    const { id, type, message, duration = 3000, onRemove } = toast;
    const [fadeOut, setFadeOut] = useState(false);

    // Define styles based on type
    const toastStyles: Record<ToastType, string> = {
        success: "text-green-500 bg-green-100",
        error: "text-red-500 bg-red-100",
        warning: "text-orange-500 bg-orange-100",
    };

    useEffect(() => {
        // Start fade-out before removing from DOM
        const fadeTimer = setTimeout(() => setFadeOut(true), duration);
        const removeTimer = setTimeout(() => onRemove(id), duration + 500); // Wait for fade-out

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [id, duration, onRemove]);

    return (
        <div
            className={`flex items-center w-full max-w-sm p-4 rounded-lg shadow-sm transition-opacity duration-500 ease-in-out 
                ${fadeOut ? "opacity-0" : "opacity-100"} 
                ${type === "success" ? "bg-green-100 text-green-700" : ""}
                ${type === "error" ? "bg-red-100 text-red-700" : ""}
                ${type === "warning" ? "bg-yellow-100 text-yellow-700" : ""}`}
        >
            {/* Icon */}
            <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${toastStyles[toast.type]}`}>
                {toast.type === "success" && (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                )}
                {toast.type === "error" && (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                )}
                {toast.type === "warning" && (
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                    </svg>
                )}
            </div>

            {/* Message */}
            <div className="text-sm">{message}</div>

            {/* Close Button */}
            <button onClick={() => setFadeOut(true)} className="ml-auto text-gray-600 hover:text-gray-800 px-2">
                ✖
            </button>
        </div>
    );
};

export default ToastMessage;


