# Container Component

## Overview

The `Container` component is a simple layout wrapper that ensures content is centered and maintains consistent padding across different screen sizes.

## Usage

```tsx
import Container from "@appility/breeze/Container";

const Example = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Welcome</h1>
      <p>This is a responsive container.</p>
    </Container>
  );
};
```

## Props

| Prop       | Type       | Required | Description                                    | Possible Values |
|------------|-----------|----------|------------------------------------------------|----------------|
| `children` | `ReactNode` | ✅ Yes   | The content to be wrapped inside the container. | Any valid React node (text, JSX, etc.) |

## Features

- **Responsive Width**:
  - Uses `max-w-7xl` to limit width to `1280px` on large screens.
  - Includes padding (`px-4 sm:px-6 lg:px-8`) for spacing across different breakpoints.
- **Auto-Centering**:
  - `mx-auto` ensures the container is centered horizontally.
- **Lightweight**:
  - Only a `div` wrapper with predefined styling.

## Example

```tsx
import Container from "@appility/breeze/Container";

const Example = () => {
  return (
    <Container>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Card Title</h2>
        <p>Content inside a responsive container.</p>
      </div>
    </Container>
  );
};
```

## Accessibility

- The `Container` component does not introduce any additional ARIA roles or attributes since it is a purely structural wrapper.

