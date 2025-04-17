# AlertMessage Component

## Overview

`AlertMessage` is a component for displaying alert messages with different styles such as **info, success, warning, danger, and dark**.

## Usage

```tsx
import AlertMessage from "@appility/breeze/AlertMessage";

const Example = () => {
  return (
    <AlertMessage
      alert={{
        id: 1,
        type: "success",
        message: "Your changes have been saved successfully!"
      }}
    />
  );
};
```

## Props

| Prop    | Type                                                                      | Required | Description                                                           | Possible Values                                      |
| ------- | ------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------- | ---------------------------------------------------- |
| `alert` | `{ id: number; type: AlertType; message: ReactNode; duration?: number; }` | ✅ Yes   | The alert object containing ID, type, message, and optional duration. | N/A                                                |
| `id`    | `number`                                                                  | ✅ Yes   | A unique identifier for the alert message.                           | Any positive integer                               |
| `type`  | `"info" \| "danger" \| "success" \| "warning" \| "dark"`                  | ✅ Yes   | Defines the visual style and importance of the alert.                | `"info"`, `"danger"`, `"success"`, `"warning"`, `"dark"` |
| `message` | `ReactNode`                                                             | ✅ Yes   | The content of the alert message.                                    | Any valid React node (text, JSX, etc.)             |

## Alert Styles

Each alert type corresponds to a different style:

- **info**: Blue-themed (`text-blue-800 bg-blue-50`)
- **danger**: Red-themed (`text-red-800 bg-red-50`)
- **success**: Green-themed (`text-green-800 bg-green-50`)
- **warning**: Yellow-themed (`text-yellow-800 bg-yellow-50`)
- **dark**: Gray-themed (`text-gray-800 bg-gray-50`)

## Accessibility

- The `aria-live` attribute is set dynamically:
  - `assertive` for `"danger"` and `"warning"` alerts.
  - `polite` for other alert types.

## Example

```tsx
import AlertMessage from "@appility/breeze/AlertMessage";

const Example = () => {
  return (
    <AlertMessage
      alert={{
        id: 1,
        type: "warning",
        message: "Please check your input.",
      }}
    />
  );
};
```
