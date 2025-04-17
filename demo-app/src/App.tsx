import React, { useState } from 'react';
import {
  Banner,
  Button,
  Breadcrumbs,
  Checkbox,
  Combobox,
  Page,
  Alert,
  ConfirmDialog,
  Popover,
  Switch,
  ToastProvider,
  useToast,
  Select,
  TableRoot,
  TableCell,
  SortableHeader,
  Tabs,
  StatusIcon,
  InfoIcon
} from '@appility/breeze';

import "./App.css";
import "@appility/breeze/index.css";

/* Override CSS Variables ( optional ) */
import "./variables.css";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <Page>
        <MainContent />
      </Page>
    </ToastProvider>
  );
};

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const { addToast } = useToast();

  // Table Data & Sorting Logic
  type User = { id: number; name: string; age: number };
  const [users] = useState<User[]>([
    { id: 1, name: "Alice", age: 28 },
    { id: 2, name: "Bob", age: 34 },
    { id: 3, name: "Charlie", age: 22 },
  ]);

  const [sortBy, setSortBy] = useState<keyof User | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortBy || !sortDirection) return 0;
    return sortDirection === "asc"
      ? (a[sortBy] as number | string) > (b[sortBy] as number | string) ? 1 : -1
      : (a[sortBy] as number | string) < (b[sortBy] as number | string) ? 1 : -1;
  });

  const tabs = [
    {
      name: 'Overview',
      content: <div className="p-4 bg-gray-50 rounded-md">This is the overview tab content.</div>,
    },
    {
      name: 'Settings',
      content: <div className="p-4 bg-gray-50 rounded-md">Here are your settings.</div>,
    },
    {
      name: 'Members',
      content: <div className="p-4 bg-gray-50 rounded-md">Manage your team members here.</div>,
    },
  ];

  return (
    <>
      <div className="p-4 flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Library Demo</h1>
      </div>

      {/* Alert Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Alert</h2>
        <Alert alert={{ id: 1, type: "success", message: "Good job..." }} />
        <Alert alert={{ id: 2, type: "danger", message: "Oops..." }} />
      </div>

      {/* Banner Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Banner</h2>
        <Banner><p>Here is my message.</p></Banner>
      </div>

      {/* Breadcrumbs Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Breadcrumbs</h2>
        <Breadcrumbs pages={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Article", href: "/blog/article", current: true },
        ]} />
      </div>

      {/* Button Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Buttons</h2>
        <div className="flex space-x-4 mb-2">
          <Button variant="primary" size="small">Primary Button</Button>
          <Button variant="outline" size="small">Outline Button</Button>
          <Button variant="neutral" size="small">Neutral Button</Button>
        </div>
        <div className="flex space-x-4 mb-2">
          <Button variant="primary">Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="neutral">Outline Button</Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="primary" size="large">Primary Button</Button>
          <Button variant="outline" size="large">Outline Button</Button>
          <Button variant="neutral" size="large">Outline Button</Button>
        </div>
      </div>

      {/* Select */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Select</h2>
        <Select
          id="provider"
          name="provider"
          label="Choose a provider"
          options={[
            { value: "", label: "Select..." },
            { value: "aig", label: "AIG" },
            { value: "aviva", label: "Aviva" },
          ]}
          renderSelect={(props) => (
            <select {...props} defaultValue="">
              <option value="">Select a provider</option>
              <option value="aig">AIG</option>
              <option value="aviva">Aviva</option>
            </select>
          )}
        />
      </div>

      {/* Combobox Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">ComboBox</h2>

          <Combobox
            id="users"
            name="users"
            label="Select a Person"
            items={users}
            labelKey="name"
            onChange={(value: unknown) => console.log("Selected:", value)}
          />
      </div>

      {/* ToggleSwitch Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Toggle Switch</h2>
        <Switch checked={isToggled} onChange={setIsToggled} label="Enable Feature" />
      </div>

      {/* Checkbox Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Checkbox</h2>
        <Checkbox
          label="Accept terms"
          size="lg"
          checked={isChecked}
          onChange={(checked: boolean) => setIsChecked(checked)}
        />
      </div>

      {/* Checkbox Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Tabs</h2>
        <Tabs tabs={tabs} fullWidth />
      </div>

      {/* Confirm Dialog Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Confirm Dialog</h2>
        <button onClick={() => setIsOpen(true)} className="text-red-600">Delete Item</button>

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
      </div>

      <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Icons</h2>
      <div className="flex space-x-4">
        {/* Normal Status Icon */}
        <StatusIcon status="success" />

        {/* Status Icon with Embedded Info Icon */}
        <StatusIcon status="success" className="w-6 h-6" >
          <InfoIcon className="text-white" />
        </StatusIcon>
      </div>
    </div>

      {/* Popover Component */}
      <div className="p-8">
      <h2 className="text-lg font-bold mb-4">Popover Example</h2>

      {/* Popover triggered by a button */}
      <Popover trigger="click" position="bottom">
        <Popover.Trigger>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Click me</button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="text-sm text-gray-800">Popover opened on click.</div>
        </Popover.Content>
      </Popover>

      <br />

      {/* Tooltip triggered by an icon (hover) */}
      <Popover trigger="hover" position="top">
        <Popover.Trigger>
            <div className="flex items-center space-x-2">
            <span>
              <StatusIcon status="success" className="w-6 h-6" >
                <InfoIcon className="text-white" />
              </StatusIcon>
            </span>
            <div className="text-gray-700">
              Hover Me
            </div>
          </div></Popover.Trigger>
        <Popover.Content>
          <div className="text-sm text-gray-800">Popover opened on hover.</div>
        </Popover.Content>
      </Popover>
    </div>

      {/* Table Component */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Table</h2>
        <TableRoot
          data={sortedUsers}
          renderHeader={() => (
            <>
              <SortableHeader
                label="ID"
                field="id"
                sortBy={sortBy}
                sortDirection={sortDirection}
                setSort={(field) => {
                  setSortBy(field);
                  setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
                }}
              />
              <SortableHeader
                label="Name"
                field="name"
                sortBy={sortBy}
                sortDirection={sortDirection}
                setSort={(field) => {
                  setSortBy(field);
                  setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
                }}
              />
              <SortableHeader
                label="Age"
                field="age"
                sortBy={sortBy}
                sortDirection={sortDirection}
                setSort={(field) => {
                  setSortBy(field);
                  setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
                }}
              />
            </>
          )}
          renderRow={(user) => (
            <>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
              <Popover trigger="hover" position="top">
                <Popover.Trigger>
                    <div className="flex items-center space-x-2">
                    <span>
                      <StatusIcon status="success" className="w-6 h-6" >
                        <InfoIcon className="text-white" />
                      </StatusIcon>
                    </span>
                    <div className="text-gray-700">
                      Hover Me
                    </div>
                  </div></Popover.Trigger>
                <Popover.Content>
                  <div className="text-sm text-gray-800">
                    <p>Popover opened on hover.</p>
                    <p>More content.</p>
                    </div>
                </Popover.Content>
              </Popover>
              </TableCell>
            </>
          )}
        />
      </div>

      {/* Toast Notifications */}
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Toast Notifications</h2>
        <button
          className="px-4 py-2 rounded"
          onClick={() => addToast("This is a success message!", "success", 3000)}
        >
          Show Toast
        </button>
      </div>
    </>
  );
};

export default App;
