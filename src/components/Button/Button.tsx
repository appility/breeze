import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "neutral";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
