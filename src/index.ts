import "./index.css"; // Import Tailwind styles globally

// Export all individual components
export { default as Alert } from "./components/Alert";
export { default as Banner } from "./components/Banner";
export { default as Breadcrumbs } from "./components/Breadcrumbs";
export { default as Button } from "./components/Button";
export { default as ConfirmDialog } from "./components/ConfirmDialog";
export { default as Container } from "./components/Container";
export { default as Header } from "./components/Header";
export { default as StatusIcon } from "./components/Icons/Status";
export { default as InfoIcon } from "./components/Icons/Info";
export { default as LoadingIcon } from "./components/Icons/Loading";
export { default as LoadingWrapper } from "./components/LoadingWrapper";
export { default as Logo } from "./components/Logo";
export { default as Page } from "./components/Page";
export { default as Popover } from "./components/Popover";
export { default as Switch } from "./components/Switch";
export { default as Tabs } from "./components/Tabs";
// Form
export { default as Input } from "./components/Form/Input"
export { default as DateInput } from "./components/Form/DateInput"
export { default as Select } from "./components/Form/Select"
export { default as Combobox } from "./components/Form/Combobox"
export { default as Checkbox } from "./components/Form/Checkbox"
export { default as FileUpload } from "./components/Form/FileUpload"

// Export components with named exports
export * from "./components/Dropdown";
export * from "./components/Layouts";
export * from "./components/Table";
export * from "./components/Toast";

