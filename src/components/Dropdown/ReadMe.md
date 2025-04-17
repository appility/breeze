# Dropdown Component

## Overview

The `Dropdown` component provides a simple and accessible dropdown menu with customizable icons and positioning.

## Usage

```tsx
import { Dropdown, DropdownItem } from "@appility/breeze/Dropdown";

const Example = () => {
  return (
    <Dropdown icon="vertical" position="right">
      <DropdownItem as="button" onClick={() => console.log("Action 1")}>
        Action 1
      </DropdownItem>
      <DropdownItem as="button" onClick={() => console.log("Action 2")}>
        Action 2
      </DropdownItem>
      <DropdownItem as="button" onClick={() => console.log("Action 3")}>
        Action 3
      </DropdownItem>
    </Dropdown>
  );
};
```

## Props

### `Dropdown`

| Prop      | Type                         | Required | Description                                      | Possible Values |
|-----------|------------------------------|----------|--------------------------------------------------|----------------|
| `icon`    | `"vertical" \| "horizontal"` | ❌ No    | Specifies the dropdown trigger icon.            | `"vertical"`, `"horizontal"` |
| `position` | `"left" \| "right"`         | ❌ No    | Determines the alignment of the dropdown.       | `"left"`, `"right"` |
| `children` | `ReactNode`                 | ✅ Yes   | The content inside the dropdown.                | Any valid React node (text, JSX, etc.) |

### `DropdownItem`

| Prop      | Type                         | Required | Description                                      | Possible Values |
|-----------|------------------------------|----------|--------------------------------------------------|----------------|
| `as`      | `"a" \| "button"`            | ❌ No    | Specifies whether the item is an `<a>` or `<button>`. | `"a"`, `"button"` |
| `className` | `string`                   | ❌ No    | Additional CSS classes for custom styling.      | Any valid CSS class names |
| `children` | `ReactNode`                 | ✅ Yes   | The content inside the dropdown item.           | Any valid React node (text, JSX, etc.) |

## Features

- **Customizable Trigger Icon**:
  - `"vertical"` (three vertical dots)
  - `"horizontal"` (three horizontal dots)
- **Positioning**:
  - `"right"` (default) aligns the dropdown to the right of the trigger.
  - `"left"` aligns the dropdown to the left.
- **Auto-Close on Click Outside**:
  - Uses `useEffect` to detect clicks outside and close the dropdown.
- **Fully Accessible**:
  - Uses `button` elements and focus styles to ensure usability.

## Example

```tsx
import { Dropdown, DropdownItem } from "@appility/breeze/Dropdown";

const Example = () => {
  return (
    <Dropdown icon="horizontal" position="left">
      <DropdownItem as="a" href="#">Profile</DropdownItem>
      <DropdownItem as="button" onClick={() => console.log("Settings Clicked")}>
        Settings
      </DropdownItem>
      <DropdownItem as="button" onClick={() => console.log("Logout Clicked")}>
        Logout
      </DropdownItem>
    </Dropdown>
  );
};
```

## Accessibility

- The dropdown closes when clicking outside the component.
- Uses `button` elements to ensure keyboard accessibility.
- Provides clear hover and focus states for better navigation.

