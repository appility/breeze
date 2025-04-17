# LoadingWrapper Component

## Overview

The `LoadingWrapper` component is a wrapper that displays a **loading spinner** when content is in a loading state. It dims and disables interactions with the content while loading. You can also customize the accessible **loading text**.

## Usage

```tsx
import LoadingWrapper from "@appility/breeze/LoadingWrapper";

const Example = () => {
  return (
    <LoadingWrapper isLoading={true} loadingText="Fetching data...">
      <p>This content is loading...</p>
    </LoadingWrapper>
  );
};
```

## Props

| Prop         | Type            | Required | Description                                        | Possible Values |
|-------------|----------------|----------|--------------------------------------------------|----------------|
| `isLoading`  | `boolean`       | ✅ Yes   | Determines whether the loading state is active.  | `true` (show loading spinner), `false` (show content) |
| `children`   | `ReactNode`     | ✅ Yes   | The content to be wrapped inside the loading container. | Any valid React node |
| `loadingText` | `string`       | ❌ No    | Custom screen-reader text describing the loading state. Defaults to `"Loading..."`. | Any descriptive string (e.g., `"Fetching data..."`) |

## Features

- **Dimmable Content**:
  - When `isLoading` is `true`, content **fades** (`opacity-20`) and becomes **non-interactive** (`pointer-events-none`).
- **Built-in Loading Spinner**:
  - Displays a centered **animated spinner** over the content.
- **Customizable Loading Text**:
  - The `loadingText` prop allows overriding the default `"Loading..."` text.
- **Accessibility**:
  - Uses **`role="status"`** to indicate the loading state.
  - Includes an **`sr-only` text** for screen readers.

## Example

```tsx
import LoadingWrapper from "@appility/breeze/LoadingWrapper";

const Example = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <LoadingWrapper isLoading={loading} loadingText="Loading user data...">
      <p>User profile loaded!</p>
    </LoadingWrapper>
  );
};
```

## Accessibility

- The **spinner has a hidden text label** (`sr-only: "Loading..."` by default).
- Developers can provide a more **descriptive `loadingText`** for screen readers.
- Uses **`role="status"`** to indicate live updates.

