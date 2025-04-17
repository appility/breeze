# Header Component

## Overview

The `Header` component provides a fixed-top navigation bar with a logo, title, customizable navigation items, and an optional user profile dropdown for authenticated users.

## Usage

```tsx
import Header from "@appility/breeze/Header";

const Example = () => {
  return (
    <Header
      title="My App"
      navItems={[
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
      ]}
      renderNavItem={(item) => (
        <a key={item.path} href={item.path} className="text-white hover:underline">
          {item.label}
        </a>
      )}
      user={{ username: "johndoe", email: "johndoe@example.com" }}
    />
  );
};
```

## Props

| Prop          | Type                                                    | Required | Description                                        | Possible Values |
|--------------|--------------------------------------------------------|----------|--------------------------------------------------|----------------|
| `title`      | `string`                                               | ❌ No    | The title displayed in the header. Defaults to `""`. | Any string (e.g., `"My App"`) |
| `navItems`   | `{ label: string; path: string }[]`                     | ❌ No    | An array of navigation items.                    | Array of `{ label, path }` objects |
| `renderNavItem` | `(item: NavItem) => ReactNode`                       | ❌ No    | Custom render function for navigation links.     | Function returning a React node |
| `user`       | `{ username: string; email: string } \| null`          | ❌ No    | The authenticated user’s details (if available). | `{ username: "johndoe", email: "johndoe@example.com" }` or `null` |
| `onLogout`   | `() => void`                                           | ❌ No    | Function triggered when the user logs out.       | Any function that logs the user out |

## Features

- **Profile Dropdown (if user is authenticated)**:
  - Displays a profile icon (`ProfileWidget`) when `user` is provided.
  - Shows the username and provides **Account Settings**.
  - **Sign Out button only appears if `onLogout` is provided.**

## Example

```tsx
<Header
  title="Dashboard"
  user={{ username: "johndoe", email: "johndoe@example.com" }}
  onLogout={() => console.log("Logged out")}
/>
```
