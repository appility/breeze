# Banner Component

## Overview

`Banner` is a simple full-width banner component designed to display important messages or announcements.

## Usage

```tsx
import Banner from "@appility/breeze/Banner";

const Example = () => {
  return (
    <Banner>
      <strong>Notice:</strong> Our services will be under maintenance from 2 AM - 4 AM UTC.
    </Banner>
  );
};
```

## Props

| Prop      | Type               | Required | Description                                    | Possible Values                       |
| --------- | ------------------ | -------- | ---------------------------------------------- | ------------------------------------- |
| `children` | `ReactNode`       | ✅ Yes   | The content of the banner.                    | Any valid React node (text, JSX, etc.) |

## Features

- **Full-width display**: The banner spans the entire width of the screen.
- **Themed Styling**: Uses a warm amber color scheme (`bg-amber-100 text-amber-700`).
- **Role-based accessibility**: Uses `role="alert"` to signal importance.

## Example

```tsx
import Banner from "@appility/breeze/Banner";

const Example = () => {
  return (
    <Banner>
      🚀 Welcome to our new platform! Enjoy the experience.
    </Banner>
  );
};
```
