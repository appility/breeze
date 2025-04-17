# InputField Component

## Overview

The `InputField` component provides a reusable input wrapper that allows custom input rendering while handling labels and error messages.

## Usage

```tsx
import Input from "@appility/breeze/Input";

const Example = () => {
  return (
    <Input
      id="my-field"
      name="my-field"
      label="Email Address"
      errorMessage="Invalid email format"
      renderInput={(props) => <input type="email" {...props} />}
    />
  );
};
```

## Props

| Prop         | Type                                           | Required | Description                                             | Possible Values |
|-------------|----------------------------------------------|----------|---------------------------------------------------------|----------------|
| `label`      | `string`                                     | ✅ Yes   | The text label for the input field.                     | Any string (e.g., `"Email Address"`) |
| `errorMessage` | `string` (optional)                        | ❌ No    | Error message displayed below the input.                | Any string (e.g., `"Invalid email"`) |
| `renderInput` | `(props: React.InputHTMLAttributes<HTMLInputElement>) => JSX.Element` | ✅ Yes   | A function that renders the input field with props.     | Function that returns an `<input>` element |

## Features

- **Customizable Input**:
  - Uses the `renderInput` function to allow different types of input fields (`text`, `email`, `password`, etc.).
- **Error Handling**:
  - Displays an error message when provided.
  - Adds a left border (`border-l-4 border-red-600`) and red outline on errors.
- **Accessible & Responsive**:
  - Uses `label` for accessibility.
  - Focus ring adapts to error state.

## Example

```tsx
import InputField from "@appility/breeze/InputField";

const Example = () => {
  return (
    <InputField
      label="Password"
      renderInput={(props) => <input type="password" {...props} />}
    />
  );
};
```

## Styling

- **Error Styles**:
  - Adds a red left border (`border-l-4 border-red-600`).
  - Changes focus ring to red (`focus:ring-red-500`).
- **Default Styles**:
  - Uses `border-gray-300`.
  - Focus color is `#00BA8D` (green theme).

