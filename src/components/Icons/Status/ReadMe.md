# StatusIcon Component

## Overview

The `StatusIcon` component provides a visual representation of different statuses using SVG icons. It supports various statuses such as **caution, success, warning, error, info, critical, and pending**, and includes accessibility enhancements.

## Usage

```tsx
import StatusIcon from "@appility/breeze/StatusIcon";

const Example = () => {
  return (
    <div className="flex space-x-2">
      <StatusIcon status="success" />
      <StatusIcon status="error" ariaLabel="Error encountered" />
      <StatusIcon status="warning" />
      <StatusIcon status="info" />
    </div>
  );
};
```

## Props

| Prop       | Type                                        | Required | Description                                            | Possible Values |
|------------|--------------------------------------------|----------|--------------------------------------------------------|----------------|
| `status`   | `"caution" \| "success" \| "warning" \| "error" \| "info" \| "critical" \| "pending"` | ✅ Yes   | Defines the type of status icon to display.            | `"caution"`, `"success"`, `"warning"`, `"error"`, `"info"`, `"critical"`, `"pending"` |
| `className` | `string`                                  | ❌ No    | Additional CSS classes for custom styling.             | Any valid CSS class names |
| `style`    | `CSSProperties`                           | ❌ No    | Custom inline styles for the SVG element.             | Any valid CSS object |
| `ariaLabel` | `string`                                 | ❌ No    | Custom `aria-label` for screen readers. Defaults to a status-specific label. | Any string (e.g., `"Operation successful"`). |

## Features

- **7 Predefined Status Icons**:
  - `"caution"` (Yellow Square)
  - `"success"` (Green Circle)
  - `"warning"` (Yellow Triangle)
  - `"error"` (Red Circle)
  - `"info"` (Blue Circle)
  - `"critical"` (Red Triangle)
  - `"pending"` (Blue Ring)
- **Customizable Accessibility**:
  - Uses `role="img"` for screen readers.
  - Default `aria-label` (e.g., `"Success status"`) that can be overridden.
- **Lightweight & Scalable**:
  - Uses **inline SVGs** for better performance.
  - No external dependencies.

## Example

```tsx
import StatusIcon from "@appility/breeze/StatusIcon";

const Example = () => {
  return (
    <div className="flex space-x-4">
      <StatusIcon status="caution" />
      <StatusIcon status="critical" className="w-6 h-6" />
      <StatusIcon status="pending" style={{ width: "16px", height: "16px" }} ariaLabel="Pending status update" />
    </div>
  );
};
```

## Accessibility

- The component uses `role="img"` to indicate that it is an image.
- Provides a default `aria-label` (e.g., `"Success status"`).
- Users can override the label with `ariaLabel="Custom description"`.
- `focusable="false"` prevents keyboard focus unless explicitly needed.
- All icons have meaningful `fill` colors to provide clear visual distinction.

