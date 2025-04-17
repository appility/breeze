# Popover Component

## Overview

The `Popover` component is a fully accessible popover that supports **click and hover** triggers.  
It leverages [Headless UI](https://headlessui.com/) for **ARIA compliance** and ensures **correct focus management**.

## Features

**Accessible**
- Uses `aria-expanded` and `aria-hidden` for screen readers.
- `aria-controls` links the trigger and the content panel.
- Focus is managed correctly when opened/closed.

**Flexible Triggering**
- `click` (default)
- `hover`

**Customizable Positioning**
- `top`, `bottom`, `left`, or `right`

**Any Element as a Trigger**
- Buttons, icons, text, or custom components.

**Transitions**
- Uses Tailwind CSS transitions.

✅ **Portal Support**
- The popover content can be rendered **outside the DOM hierarchy** via `portal` prop, ensuring it is **not clipped** by parent containers.

---

## Installation

```sh
npm install @appility/breeze
```

or

```sh
yarn add @appility/breeze
```

---

## Usage

### **Basic Popover**
```tsx
import { Popover } from "@appility/breeze";

const Example = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Open Popover
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <p className="text-gray-700">Hello! This is a popover.</p>
      </Popover.Content>
    </Popover>
  );
};
```

---

### **Hover Popover**
```tsx
<Popover trigger="hover" portal>
  <Popover.Trigger>
    <span className="text-blue-500 underline cursor-pointer">Hover me</span>
  </Popover.Trigger>
  <Popover.Content>
    <p>This popover appears on hover!</p>
  </Popover.Content>
</Popover>
```

---

### **Popover with Custom Position**
```tsx
<Popover position="right">
  <Popover.Trigger>
    <button className="px-4 py-2 bg-green-500 text-white rounded">
      Right Positioned
    </button>
  </Popover.Trigger>
  <Popover.Content>
    <p>This popover appears to the right!</p>
  </Popover.Content>
</Popover>
```

---

## Accessibility

- The `aria-expanded` attribute is correctly **updated on focus and click**.
- Uses `aria-controls` to **associate trigger with content**.
- **Focus trapping** ensures that keyboard users can navigate inside the popover.

---

## Props

### **`<Popover>`**
| Prop       | Type               | Default | Description                           |
|------------|--------------------|---------|---------------------------------------|
| `trigger`  | `"click" \| "hover"` | `"click"` | How the popover opens. |
| `position` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Where the popover appears. |

---

### **`<Popover.Trigger>`**
| Prop       | Type         | Default | Description |
|------------|-------------|---------|-------------|
| `children` | `ReactNode` | ✅ Required | The trigger element (button, text, etc.). |

---

### **`<Popover.Content>`**
| Prop       | Type         | Default | Description |
|------------|-------------|---------|-------------|
| `children` | `ReactNode` | ✅ Required | The popover content. |

---

## Example with Focus Handling

```tsx
<Popover>
  <Popover.Trigger>
    <button className="px-4 py-2 bg-indigo-500 text-white rounded">
      Focus Me
    </button>
  </Popover.Trigger>
  <Popover.Content>
    <p>Pressing Tab will focus inside the popover.</p>
  </Popover.Content>
</Popover>
```

**Expected behavior**:
- When the button is **clicked or focused**, `aria-expanded="true"`.
- When the popover **closes**, `aria-expanded="false"`.
- **Tab key navigation** moves focus inside the popover when opened.
