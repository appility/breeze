# ToastMessage Component

## Overview

The `ToastMessage` component displays **temporary notifications** with different styles such as **success, error, and warning**. It supports automatic dismissal with a **fade-out effect** and manual close functionality.

## Usage

```tsx
import { useState } from "react";
import ToastMessage from "@appility/breeze/ToastMessage";

const Example = () => {
  const [toasts, setToasts] = useState([
    { id: 1, type: "success", message: "Operation completed successfully!", duration: 3000 },
    { id: 2, type: "error", message: "Something went wrong!", duration: 4000 },
  ]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-4 right-4 space-y-2">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} toast={{ ...toast, onRemove: removeToast }} />
      ))}
    </div>
  );
};
```

---

## 📌 **Props**

| Prop      | Type                                             | Required | Description |
|-----------|-------------------------------------------------|----------|-------------|
| `toast.id` | `number`                                       | ✅ Yes   | Unique identifier for the toast. |
| `toast.type` | `"success" | "error" | "warning"`            | ✅ Yes   | Determines the style of the toast. |
| `toast.message` | `ReactNode`                               | ✅ Yes   | The message displayed inside the toast. |
| `toast.duration` | `number` _(default: 3000ms)_            | ❌ No    | The time (in milliseconds) before auto-dismissal. |
| `toast.onRemove` | `(id: number) => void`                  | ✅ Yes   | Callback function to remove the toast from the list. |

---

## 🔹 **Features**
- **Automatic Dismissal**:
  - Toast fades out **before removal** (`duration + 500ms`).
- **Manual Close Button**:
  - Users can click `✖` to dismiss immediately.
- **Smooth Transitions**:
  - Uses **fade-out animation** (`opacity-0` transition).
- **Flexible Placement**:
  - Can be positioned anywhere (`top-right`, `bottom-left`, etc.).
- **Custom Duration**:
  - Control how long the toast stays visible.

---

## 🎨 **Toast Variants**
| Type     | Style (`bg` & `text`) |
|----------|------------------------------------------|
| `success` | Green (`bg-green-100 text-green-700`) |
| `error`   | Red (`bg-red-100 text-red-700`) |
| `warning` | Yellow (`bg-yellow-100 text-yellow-700`) |

---

## **Example with Different Durations**
```tsx
import { useState } from "react";
import ToastMessage from "@appility/breeze/ToastMessage";

const Example = () => {
  const [toasts, setToasts] = useState([
    { id: 1, type: "success", message: "Success!", duration: 2000 },
    { id: 2, type: "error", message: "Error occurred!", duration: 5000 },
    { id: 3, type: "warning", message: "Warning alert!", duration: 4000 },
  ]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} toast={{ ...toast, onRemove: removeToast }} />
      ))}
    </div>
  );
};
```

---

## ♿ **Accessibility**
- Uses **`aria-live="polite"`** for non-intrusive updates.
- **Hidden close button text** for screen readers.
- Keyboard users can navigate and dismiss using the `✖` button.

