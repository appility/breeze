import { JSX, ReactNode } from "react";


type AlertType = "info" | "danger" | "success" | "warning" | "dark";

interface AlertProps {
    alert: {
        id: number;
        type: AlertType;
        message: ReactNode;
        duration?: number;
    };
}

export const AlertMessage = ({ alert }: AlertProps): JSX.Element | null => {
    const { type, message } = alert;

    // Define styles based on type
    const alertStyles: Record<AlertType, string> = {
        info: "text-blue-800 bg-blue-50",
        danger: "text-red-800 bg-red-50",
        success: "text-green-800 bg-green-50",
        warning: "text-yellow-800 bg-yellow-50",
        dark: "text-gray-800 bg-gray-50",
    };

    // Set ARIA live based on alert type
    const ariaLive = type === "danger" || type === "warning" ? "assertive" : "polite";

    return (
        <div
            data-testid="alert"
            className={`p-4 mb-4 text-sm rounded-lg transition-opacity duration-500 ease-in-out 
             ${alertStyles[type]}`}
            role="alert"
            aria-live={ariaLive}
        >
            {message}
        </div>
    );
};

export default AlertMessage;
