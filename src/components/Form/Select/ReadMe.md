# SelectField Component

## Overview

The `SelectField` component provides a customizable and accessible select dropdown while handling labels and error messages.

## Usage

```tsx
import Select from "@appility/breeze/Select";

const Example = () => {
  return (
    <SelectField
      id="my-select"
      name="my-select"
      label="Country"
      errorMessage="Please select a country"
      options={[
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "fr", label: "France" },
      ]}
      renderSelect={(props) => (
                        <select
                            {...props}
                            value={selectedScheme}
                            onChange={(e) => alert(Number((e.target as HTMLSelectElement).value))}
                        >
                            <option value="unselected">Make a seelction</option>
                            {options.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                  {opt.label}
                              </option>
                            ))}
                        </select>
      )}
    />
  );
};
```

## Props

| Prop         | Type                                                        | Required | Description                                             | Possible Values |
|-------------|-------------------------------------------------------------|----------|---------------------------------------------------------|----------------|
| `label`      | `string`                                                    | ✅ Yes   | The text label for the select field.                    | Any string (e.g., `"Country"`) |
| `errorMessage` | `string` (optional)                                       | ❌ No    | Error message displayed below the select dropdown.      | Any string (e.g., `"Please select an option"`) |
| `options`    | `{ value: string \| number; label: string }[]`              | ✅ Yes   | Array of options for the dropdown.                      | Array of `{ value, label }` objects |
| `renderSelect` | `(props: React.SelectHTMLAttributes<HTMLSelectElement>) => JSX.Element` | ✅ Yes | A function that renders the `<select>` element with props. | Function that returns a `<select>` element |

## Features

- **Customizable Dropdown**:
  - Uses `renderSelect` to allow full control over the `<select>` element.
- **Error Handling**:
  - Displays an error message when provided.
  - Adds a left border (`border-l-4 border-red-600`) and red outline on errors.
- **Accessible & Responsive**:
  - Uses `label` for accessibility.
  - Focus ring adapts to error state.

## Example

```tsx
import SelectField from "@appility/breeze/SelectField";

const Example = () => {
  return (
    <SelectField
      label="Role"
      options={[
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
      ]}
      renderSelect={(props) => (
        <select {...props}>
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      )}
    />
  );
};
```

## Styling

- **Error Styles**:
  - Adds a red left border (`border-l-4 border-red-600`).
  - Changes focus ring to red (`focus:ring-red-500`).
- **Default Styles**:
  - Uses `border-gray-300` for a neutral look.
  - Focus color is `#00BA8D` (green theme).
