import React, { CSSProperties, ReactNode } from "react";

interface StatusIconProps {
  status: "caution" | "success" | "warning" | "error" | "info" | "critical" | "pending";
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  children?: ReactNode;
}

const StatusIcon: React.FC<StatusIconProps> = ({ status, className = "", style, ariaLabel, children }) => {
  const statusIcons = {
    caution: <rect x="4" y="4" width="16" height="16" fill="#fce83a" stroke="#fce83a" />,
    success: <circle cx="12" cy="12" r="10" fill="#4CAF50" stroke="#4CAF50" />,
    warning: <polygon points="12,4 22,20 2,20" fill="#FFC107" stroke="#FFC107" />,
    error: <circle cx="12" cy="12" r="10" fill="#F44336" stroke="#F44336" />,
    info: <circle cx="12" cy="12" r="10" fill="#2196F3" stroke="#2196F3" />,
    critical: <path d="M12 21L3 5h18L12 21z" fill="#ff3838" stroke="#ff3838" />,
    pending: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="#2dccff" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" fill="#2dccff" />
      </>
    ),
  };

  const defaultAriaLabels: Record<StatusIconProps["status"], string> = {
    caution: "Caution status",
    success: "Success status",
    warning: "Warning status",
    error: "Error status",
    info: "Info status",
    critical: "Critical status",
    pending: "Pending status",
  };

  return (
    <svg
      width="1em" // scalable
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`} // Allows Tailwind classes
      style={{ fontSize: "1.5rem", ...style }} //  Default size (can be overridden)
      role="img"
      aria-label={ariaLabel || defaultAriaLabels[status]}
      focusable="false"
    >
      {statusIcons[status] || statusIcons.info}
      {children}
    </svg>
  );
};

export default StatusIcon;
