# Breadcrumbs Component

## Overview

`Breadcrumbs` is a navigational component that displays the current page's location within a hierarchical structure. It helps users understand their position in the web application.

## Usage

```tsx
import Breadcrumbs from "@appility/breeze/Breadcrumbs";

const Example = () => {
  return (
    <Breadcrumbs
      pages={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Settings", href: "/settings", current: true },
      ]}
    />
  );
};
```

## Props

| Prop     | Type                                               | Required | Description                                      | Possible Values |
|----------|----------------------------------------------------|----------|--------------------------------------------------|----------------|
| `pages`  | `{ label: string; href: string; current?: boolean; }[]` | ✅ Yes   | An array of breadcrumb pages.                    | Array of objects with `label`, `href`, and optional `current` flag. |
| `label`  | `string`                                          | ✅ Yes   | The text to display for the breadcrumb item.     | Any string (e.g., `"Dashboard"`, `"Settings"`). |
| `href`   | `string`                                          | ✅ Yes   | The URL path of the breadcrumb item.             | Any valid URL string. |
| `current`| `boolean` (optional)                             | ❌ No    | Marks the current page in the breadcrumb trail. | `true` (if current page) or `false` (default). |

## Features

- **Home link**: Includes a home icon that always links to `/`.
- **Hierarchical navigation**: Displays a breadcrumb trail of pages.
- **Keyboard and screen-reader accessible**: Uses `aria-label="Breadcrumb"` and `aria-current="page"` for better accessibility.
- **Responsive and styled**: Tailored with Tailwind CSS.

## Example

```tsx
import Breadcrumbs from "@appility/breeze/Breadcrumbs";

const Example = () => {
  return (
    <Breadcrumbs
      pages={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Article", href: "/blog/article", current: true },
      ]}
    />
  );
};
```

## Accessibility

- Uses `aria-label="Breadcrumb"` to identify the navigation region.
- The `aria-current="page"` attribute is set for the current page, improving screen-reader experience.
- Icons (`HomeIcon` and `ChevronRightIcon`) have `aria-hidden="true"` to be ignored by screen readers.
