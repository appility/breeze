# ComboboxComponent

## Overview

The `ComboboxComponent` is a reusable autocomplete input. It allows users to search and select from a list of options with customizable rendering and accessible markup.

## Usage

```tsx
import ComboboxComponent from "@appility/breeze/Combobox";

const Example = () => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ComboboxComponent
      label="Select a user"
      items={users}
      labelKey="name"
      onChange={(user) => console.log("Selected user:", user)}
    />
  );
};
```

## Props

| Prop           | Type                                                                 | Required | Description                                                                 | Example |
|----------------|----------------------------------------------------------------------|----------|-----------------------------------------------------------------------------|---------|
| `label`        | `string`                                                             | ✅ Yes   | The label text displayed above the combobox.                                | `"Select user"` |
| `items`        | `T[]`                                                                | ✅ Yes   | The array of objects to select from.                                        | `[{ id: 1, name: 'Alice' }]` |
| `labelKey`     | `keyof T`                                                            | ✅ Yes   | The key in your item object to display as the label in the dropdown.        | `"name"` |
| `onChange`     | `(value: T \| null) => void`                                         | ✅ Yes   | Callback triggered when an item is selected.                                | `(value) => console.log(value)` |
| `placeholder`  | `string`                                                             | ❌ No    | Placeholder text for the input field.                                       | `"Search..."` |
| `errorMessage` | `string`                                                             | ❌ No    | Displays an error message below the input and applies error styles.         | `"Required field"` |
| `renderSelect` | `(props: React.InputHTMLAttributes<HTMLInputElement>) => JSX.Element` | ❌ No    | Allows you to customize the input element’s rendering.                      | `(props) => <input {...props} />` |

## Features

- **Searchable Dropdown**
  - Filter items based on user input.
- **Accessible**
  - Uses semantic markup and keyboard navigation via Headless UI.
- **Custom Rendering**
  - Provide your own input via `renderSelect`.
- **Error Handling**
  - Show an error message and red styles when `errorMessage` is set.

## Example with Custom Input

```tsx
<ComboboxComponent
  label="Search People"
  items={[{ id: 1, name: "Alice" }]}
  labelKey="name"
  onChange={(val) => console.log(val)}
  renderSelect={(props) => (
    <input
      {...props}
      name="person"
      id="person"
      placeholder="Start typing..."
    />
  )}
/>
```

## Styling

- **Error Styles**:
  - Red border on input (`border-red-600`)
  - Red focus ring (`focus:ring-red-500`)
- **Default Styles**:
  - `border-gray-300`, focus ring in green (`#00BA8D`)
- **Chevron Icon**:
  - Positioned absolutely inside the input for dropdown affordance.

## Accessibility

- Label is associated with the input via `label` tag.
- Keyboard support for navigating and selecting options.
- Custom `id` and `name` can be added via `renderSelect` props for better form integration and testing.
