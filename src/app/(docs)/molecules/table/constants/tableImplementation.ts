export const tableImplementation = `import Table, { TableColumn } from "@/app/ui/molecules/Table";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
}

export default function TableExample() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const userData: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Editor",
      status: "active",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Viewer",
      status: "pending",
      lastLogin: "2024-01-10",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma@example.com",
      role: "Editor",
      status: "inactive",
      lastLogin: "2024-01-05",
    },
  ];

  const columns: TableColumn<User>[] = [
    {
      key: "name",
      title: "User",
      sortable: true,
      render: (value, row) => (
        <div>
          <div className="font-medium text-neutral-900 dark:text-neutral-100">
            {row.name}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {row.email}
          </div>
        </div>
      ),
    },
    {
      key: "role",
      title: "Role",
      sortable: true,
      render: (value) => (
        <span className={\`px-2 py-1 text-xs rounded-full font-medium \${
          value === "Admin"
            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
            : value === "Editor"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            : "bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300"
        }\`}>
          {value}
        </span>
      ),
    },
    {
      key: "status",
      title: "Status",
      sortable: true,
      render: (value) => (
        <div className="flex items-center space-x-2">
          <div className={\`w-2 h-2 rounded-full \${
            value === "active"
              ? "bg-green-500"
              : value === "inactive"
              ? "bg-red-500"
              : "bg-yellow-500"
          }\`} />
          <span className="capitalize text-sm">{value}</span>
        </div>
      ),
    },
    {
      key: "lastLogin",
      title: "Last Login",
      sortable: true,
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      key: "actions",
      title: "Actions",
      align: "right",
      render: (_, row) => (
        <div className="flex items-center space-x-2">
          <button className="p-1 text-neutral-400 hover:text-neutral-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button className="p-1 text-neutral-400 hover:text-red-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const handleSelectionChange = (selected: User[]) => {
    setSelectedUsers(selected);
    console.log("Selected users:", selected);
  };

  const handleRowClick = (user: User) => {
    console.log("Clicked user:", user);
  };

  const handleLoadData = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Basic Table */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Basic Table</h3>
        <Table
          columns={columns.slice(0, 4)} // Exclude actions column
          data={userData}
          variant="modern"
        />
      </div>

      {/* Table with Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Table with Selection</h3>
        <Table
          columns={columns}
          data={userData}
          variant="modern"
          selectable
          selectedRows={selectedUsers}
          onSelectionChange={handleSelectionChange}
          onRowClick={handleRowClick}
        />
        {selectedUsers.length > 0 && (
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Selected {selectedUsers.length} user{selectedUsers.length !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      {/* Different Variants */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Variants</h3>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 mb-2">Default</h4>
          <Table
            columns={columns.slice(0, 3)}
            data={userData.slice(0, 2)}
            variant="default"
            size="sm"
          />
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 mb-2">Modern</h4>
          <Table
            columns={columns.slice(0, 3)}
            data={userData.slice(0, 2)}
            variant="modern"
            size="sm"
          />
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 mb-2">Striped</h4>
          <Table
            columns={columns.slice(0, 3)}
            data={userData.slice(0, 3)}
            variant="striped"
            size="sm"
          />
        </div>
      </div>

      {/* Loading State */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Loading State</h3>
        <button 
          onClick={handleLoadData}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Load Data
        </button>
        <Table
          columns={columns}
          data={loading ? [] : userData}
          variant="modern"
          loading={loading}
        />
      </div>

      {/* Empty State */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Empty State</h3>
        <Table
          columns={columns}
          data={[]}
          variant="modern"
          emptyMessage={
            <div>
              <div className="font-medium">No users found</div>
              <div className="text-neutral-500 mt-1">Get started by adding your first user</div>
            </div>
          }
        />
      </div>

      {/* Scrollable Table */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Scrollable Table with Sticky Header</h3>
        <Table
          columns={columns}
          data={[...userData, ...userData, ...userData]} // Triple the data
          variant="modern"
          maxHeight={300}
          stickyHeader
        />
      </div>

      {/* Single Selection */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Single Selection Mode</h3>
        <Table
          columns={columns.slice(0, 4)}
          data={userData}
          variant="modern"
          selectable
          selectionMode="single"
        />
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 mb-2">Small</h4>
          <Table
            columns={columns.slice(0, 3)}
            data={userData.slice(0, 2)}
            variant="modern"
            size="sm"
          />
        </div>
        
        <div>
          <h4 className="text-xs font-medium text-neutral-500 mb-2">Large</h4>
          <Table
            columns={columns.slice(0, 3)}
            data={userData.slice(0, 2)}
            variant="modern"
            size="lg"
          />
        </div>
      </div>

      {/* Custom Sorting */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Custom Sort Handling</h3>
        <Table
          columns={columns}
          data={userData}
          variant="modern"
          defaultSort={{ key: "name", direction: "asc" }}
          onSortChange={(key, direction) => {
            console.log("Sort changed:", key, direction);
          }}
        />
      </div>
    </div>
  );
}`;
