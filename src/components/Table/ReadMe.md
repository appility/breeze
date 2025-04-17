# Table Components

## Overview

The **Table components** provide a flexible and reusable way to render structured data in a table format. It supports **custom headers, dynamic rows, sorting, and accessibility features**.

## Components:
- **`TableRoot`** – The main table component that renders headers and rows.
- **`TableRow`** – A wrapper for a table row.
- **`TableHeader`** – A styled table header cell with improved **uppercase and tracking for readability**.
- **`TableCell`** – A styled table data cell.
- **`SortableHeader`** – A header cell that allows sorting.

---

## **Usage Example**

```tsx
import { TableRoot, TableRow, TableHeader, TableCell, SortableHeader } from "@appility/breeze/Table";
import { useState } from "react";

type User = { id: number; name: string; age: number };

const users: User[] = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 34 },
  { id: 3, name: "Charlie", age: 22 },
];

export default function ExampleTable() {
  const [sortBy, setSortBy] = useState<keyof User | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortBy || !sortDirection) return 0;
    return sortDirection === "asc"
      ? (a[sortBy] as number | string) > (b[sortBy] as number | string) ? 1 : -1
      : (a[sortBy] as number | string) < (b[sortBy] as number | string) ? 1 : -1;
  });

  return (
    <TableRoot
      data={sortedUsers}
      renderHeader={() => (
        <>
          <SortableHeader label="ID" field="id" sortBy={sortBy} sortDirection={sortDirection} setSort={setSortBy} />
          <SortableHeader label="Name" field="name" sortBy={sortBy} sortDirection={sortDirection} setSort={setSortBy} />
          <SortableHeader label="Age" field="age" sortBy={sortBy} sortDirection={sortDirection} setSort={setSortBy} />
        </>
      )}
      renderRow={(user) => (
        <>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.age}</TableCell>
        </>
      )}
    />
  );
}
```

---

## 📌 **Component Details**

### `TableRoot<T>`

| Prop          | Type                                  | Required | Description |
|--------------|--------------------------------------|----------|-------------|
| `data`       | `T[]`                                | ✅ Yes   | Array of data to render in the table. |
| `renderHeader` | `() => React.ReactNode`             | ✅ Yes   | Function that renders the table headers. |
| `renderRow`  | `(item: T, index: number) => React.ReactNode` | ✅ Yes   | Function that renders each table row. |

---

### `TableRow`

| Prop      | Type              | Required | Description |
|----------|------------------|----------|-------------|
| `children` | `React.ReactNode` | ✅ Yes   | Content inside the row. |

---

### `TableHeader`

| Prop      | Type              | Required | Description |
|----------|------------------|----------|-------------|
| `align`   | `"left" | "center" | "right"` | ❌ No    | Aligns text inside the header cell. Default is `"left"`. |
| `className` | `string`       | ❌ No    | Additional CSS classes. |
| `children` | `React.ReactNode` | ✅ Yes   | Content inside the header. |

---

### `TableCell`

| Prop      | Type              | Required | Description |
|----------|------------------|----------|-------------|
| `className` | `string`       | ❌ No    | Additional CSS classes for styling. |
| `children` | `React.ReactNode` | ✅ Yes   | Content inside the cell. |

---

### `SortableHeader<T>`

| Prop          | Type                                  | Required | Description |
|--------------|--------------------------------------|----------|-------------|
| `label`      | `string`                             | ✅ Yes   | Text for the header label. |
| `field`      | `keyof T`                            | ✅ Yes   | The field used for sorting. |
| `sortBy`     | `keyof T | null`                     | ✅ Yes   | Currently sorted column. |
| `sortDirection` | `"asc" | "desc" | null`           | ✅ Yes   | Current sort direction. |
| `setSort`    | `(field: keyof T | null, direction: "asc" | "desc" | null) => void` | ✅ Yes | Function to update sorting state. |

---

## 🔹 **Features**
- **Improved Header Styles**:
  - `TableHeader` now includes **uppercase text (`uppercase tracking-wider`)** for better readability.
- **Supports Sorting** (`SortableHeader`)
- **Responsive & Accessible**
  - Uses `aria-sort` attributes for screen readers.
  - Keyboard navigable.
- **Works with any data type** (`TableRoot<T>` is generic).
- **Custom Header & Row Rendering**:
  - Flexible `renderHeader` and `renderRow` props.

---

## ♿ **Accessibility**
- Uses **semantic HTML** (`<table>`, `<th>`, `<td>`).
- Sorting headers use **clickable interactions**.
- Screen readers recognize column sorting.
- Hover styles (`hover:bg-gray-100`) improve usability.

