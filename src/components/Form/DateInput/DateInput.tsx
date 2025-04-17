import React from "react";
import InputField from "../Input/Input";
import "./DateInput.css";

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <InputField
        name={rest.name ?? ""}
        label={label}
        errorMessage={errorMessage}
        renderInput={(props) => (
          <input
            {...props}
            {...rest}
            ref={ref}
            readOnly
            className={`${props.className} ${rest.className ?? ""}`}
          />
        )}
      />
    );
  }
);

DateInput.displayName = "DateInput";
export default DateInput;
