# Logo Component

## Overview

The `Logo` component renders a **logo** that can be resized and styled via the optional `className` or `style` props.

## Usage

```tsx
import Logo from "@appility/breeze/Logo";

const Example = () => {
  return (
    <div className="flex items-center space-x-4">
      <Logo className="w-20 h-10" />
      <Logo className="w-40 h-20 text-gray-500" />
      <Logo style={{ width: "50px", height: "25px", fill: "blue" }} />
    </div>
  );
};
```

## Props

| Prop        | Type                  | Required | Description                                      | Possible Values |
|------------|----------------------|----------|--------------------------------------------------|----------------|
| `className` | `string`              | ❌ No   | CSS classes for customizing size & styling. Defaults to none. | Any Tailwind/utility CSS class (e.g., `"w-20 h-10 text-gray-500"`) |
| `style`     | `React.CSSProperties` | ❌ No   | Inline styles for precise control over size & color. | Any valid CSS object (e.g., `{ width: "50px", fill: "blue" }`) |

## Features

- **Scalable SVG**:
  - Uses `width="100%"` and `height="100%"` for **responsive resizing**.
- **Customizable Styles**:
  - Supports `className` for **dynamic width, height, colors, etc.**
  - Supports `style` for **inline customizations**.
  - Defaults to no additional styling if both are omitted.
- **Lightweight & Performance-Friendly**:
  - Pure SVG (no external assets).
  - Renders instantly with no network requests.

## Example

```tsx
<Logo className="w-24 h-12 fill-current text-blue-500" />
<Logo style={{ width: "60px", fill: "red" }} />
<Logo /> {/* Renders with default styling */}
```

## Accessibility

- Uses **semantic SVG markup** for proper rendering.
- Can be wrapped in a `<a>` or `<button>` for navigation.
- To improve accessibility, you may add an `aria-label` on the parent:

```tsx
<a href="/" aria-label="Company Logo">
  <Logo className="w-32 h-16" />
</a>
```

