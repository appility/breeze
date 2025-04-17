# Button Component

## Overview

The `Button` component is a reusable button with two style variants: **primary** and **outline**. It extends the native HTML `<button>` element, allowing all standard button attributes while using **CSS variables** for full customizability.

## Usage

```tsx
import Button from "@appility/breeze/Button";

const Example = () => {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="primary" size="small">Primary Button</Button>
      <Button variant="outline" size="medium">Outline Button</Button>
      <Button variant="primary" size="large">Primary Button</Button>
      <Button variant="outline" size="medium">Outline Button</Button>
    </>
  );
};
```

---

## Props

| Prop       | Type                                                      | Required | Description                                          | Possible Values |
|------------|-----------------------------------------------------------|----------|------------------------------------------------------|----------------|
| `variant`  | `"primary" \| "outline"`                                  | ❌ No    | Defines the button's styling. Defaults to `"primary"`. | `"primary"`, `"outline"` |
| `size`  | `"small" \| "medium" \| "large"`                             | ❌ No    | Defines the button's styling. Defaults to `"medium"`. | `"small" \| "medium" \| "large"` |
| `children` | `ReactNode`                                               | ✅ Yes   | The content inside the button.                      | Any valid React node (text, icon, etc.) |
| `className` | `string`                                                 | ❌ No    | Additional CSS classes for custom styling.          | Any valid CSS class names |
| `...props` | `React.ButtonHTMLAttributes<HTMLButtonElement>`           | ❌ No    | Supports all native button attributes.              | Any valid button attributes |

---

## Features

**Customizable Design** – Uses CSS variables for full styling flexibility.  
**Two Variants**:
- **Primary**: Default button with a solid background.
- **Outline**: Border-only button that changes on hover.
**Accessibility**:
- `focus:outline-none focus:ring focus:ring-offset-2` for better keyboard navigation.  
**Overrideable Styles**: Easily override button colors in the host application.

---

## Example with Click Event

```tsx
import Button from "@appility/breeze/Button";

const Example = () => {
  return (
    <Button variant="primary" onClick={() => alert("Clicked!")}>
      Click Me
    </Button>
  );
};
```

---

## Styling (CSS Variables)

The button component **uses CSS variables** so that it can be easily themed in the host application. The default styles are defined in **`button.css`** inside the UI Library.

```css
/* Default styles (button.css) */
:root {
  /* Primary Button */
  --button-primary-bg-color: #00BA8D;
  --button-primary-border-color: #00BA8D;
  --button-primary-text-color: white;
  --button-primary-hover-bg-color: white;
  --button-primary-hover-text-color: #00BA8D;

  /* Outline Button */
  --button-outline-bg-color: white;
  --button-outline-border-color: #00BA8D;
  --button-outline-text-color: #00BA8D;
  --button-outline-hover-bg-color: #00BA8D;
  --button-outline-hover-text-color: white;

  /* Shared Properties */
  --button-border-radius: 0.375rem; /* Matches Tailwind's `md` (6px) */
  --button-padding: 0.5rem 1rem; /* Equivalent to py-2 px-4 */
  --button-transition: background-color 0.2s ease, color 0.2s ease;
}

.button {
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  transition: var(--button-transition);
  border: 1px solid var(--button-primary-border-color);
}

.button-primary {
  background-color: var(--button-primary-bg-color);
  color: var(--button-primary-text-color);
}

.button-primary:hover {
  background-color: var(--button-primary-hover-bg-color);
  color: var(--button-primary-hover-text-color);
}

.button-outline {
  background-color: var(--button-outline-bg-color);
  border: 1px solid var(--button-outline-border-color);
  color: var(--button-outline-text-color);
}

.button-outline:hover {
  background-color: var(--button-outline-hover-bg-color);
  color: var(--button-outline-hover-text-color);
}
```

### **Overriding in the Host Application**
To override these styles in your **own application**, redefine the CSS variables in a global stylesheet:

```css
:root {
  --button-primary-bg-color: #007BFF;
  --button-primary-border-color: #007BFF;
  --button-primary-text-color: white;
  --button-primary-hover-bg-color: white;
  --button-primary-hover-text-color: #007BFF;

  --button-outline-bg-color: white;
  --button-outline-border-color: #007BFF;
  --button-outline-text-color: #007BFF;
  --button-outline-hover-bg-color: #007BFF;
  --button-outline-hover-text-color: white;
}
```

Now, when using `<Button variant="primary" />`, it will adopt the overridden colors.

---
