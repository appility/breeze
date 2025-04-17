# ConfirmDialog Component

## Overview

The `ConfirmDialog` component is a modal dialog used to prompt users for confirmation before performing a potentially destructive action.

## Usage

```tsx
import { useState } from "react";
import ConfirmDialog from "@appility/breeze/ConfirmDialog";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Item</button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log("Confirmed!");
          setIsOpen(false);
        }}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </>
  );
};
```

## Props

| Prop      | Type          | Required | Description                                      | Possible Values |
|-----------|--------------|----------|--------------------------------------------------|----------------|
| `isOpen`  | `boolean`    | ✅ Yes   | Controls whether the dialog is visible.         | `true` (visible), `false` (hidden) |
| `onClose` | `() => void` | ✅ Yes   | Function to close the dialog.                   | Any function that updates state. |
| `onConfirm` | `() => void` | ✅ Yes | Function triggered when the confirm button is clicked. | Any function that executes an action. |
| `title`   | `string`     | ❌ No    | The title of the confirmation dialog. Defaults to `"Are you sure?"`. | Any string (e.g., `"Delete Item"`). |
| `message` | `string`     | ❌ No    | The message shown in the dialog. Defaults to `"This action cannot be undone."`. | Any string (e.g., `"Are you sure you want to delete this?"`). |

## Features

- **Modal Dialog**: Appears in the center of the screen with a backdrop blur effect.
- **Keyboard Accessibility**: Closes when the user presses the `Escape` key.
- **Click Outside to Close**: Clicking outside the modal dismisses it.
- **Two Buttons**:
  - **Cancel**: Closes the dialog.
  - **Confirm**: Triggers the `onConfirm` function.

## Example

```tsx
import { useState } from "react";
import ConfirmDialog from "@appility/breeze/ConfirmDialog";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Item</button>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log("Item deleted");
          setIsOpen(false);
        }}
        title="Delete Item"
        message="Are you sure you want to delete this item?"
      />
    </>
  );
};
```

## Accessibility

- Uses `onClick` to close the dialog when clicking the background.
- Listens for the `Escape` key to close the modal for better keyboard accessibility.
- Buttons have clear focus states for easy navigation.

