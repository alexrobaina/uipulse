'use client';
import Table, { TableColumn } from '@/app/ui/molecules/Table';
import Preview from '@/app/components/Preview';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  featured: boolean;
}

export default function TableDemo() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const userData: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-01-15',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      role: 'Editor',
      status: 'active',
      lastLogin: '2024-01-14',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b27c?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Viewer',
      status: 'pending',
      lastLogin: '2024-01-10',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Emma Davis',
      email: 'emma@example.com',
      role: 'Editor',
      status: 'inactive',
      lastLogin: '2024-01-05',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      email: 'alex@example.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2024-01-16',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    },
  ];

  const productData: Product[] = [
    {
      id: 1,
      name: 'Premium Headphones',
      category: 'Electronics',
      price: 299,
      stock: 45,
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      category: 'Accessories',
      price: 79,
      stock: 120,
      rating: 4.5,
      featured: false,
    },
    {
      id: 3,
      name: 'Gaming Keyboard',
      category: 'Electronics',
      price: 199,
      stock: 32,
      rating: 4.9,
      featured: true,
    },
    {
      id: 4,
      name: 'USB-C Hub',
      category: 'Accessories',
      price: 89,
      stock: 78,
      rating: 4.3,
      featured: false,
    },
    {
      id: 5,
      name: '4K Monitor',
      category: 'Electronics',
      price: 599,
      stock: 15,
      rating: 4.7,
      featured: true,
    },
  ];

  const userColumns: TableColumn<User>[] = [
    {
      key: 'name',
      title: 'User',
      sortable: true,
      render: (_, row) => (
        <div className='flex items-center space-x-3'>
          <img
            src={row.avatar}
            alt={row.name}
            className='w-8 h-8 rounded-full object-cover'
          />
          <div>
            <div className='font-medium text-neutral-900 dark:text-neutral-100'>
              {row.name}
            </div>
            <div className='text-xs text-neutral-500 dark:text-neutral-400'>
              {row.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Role',
      sortable: true,
      render: value => (
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${
            value === 'Admin'
              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
              : value === 'Editor'
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
                : 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      sortable: true,
      render: value => (
        <div className='flex items-center space-x-2'>
          <div
            className={`w-2 h-2 rounded-full ${
              value === 'active'
                ? 'bg-green-500'
                : value === 'inactive'
                  ? 'bg-red-500'
                  : 'bg-yellow-500'
            }`}
          />
          <span className='capitalize text-sm'>{value}</span>
        </div>
      ),
    },
    {
      key: 'lastLogin',
      title: 'Last Login',
      sortable: true,
      render: value => new Date(value as string).toLocaleDateString(),
    },
    {
      key: 'actions',
      title: 'Actions',
      align: 'right',
      render: (_, row) => (
        <div className='flex items-center space-x-2'>
          <button className='p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
          </button>
          <button className='p-1 text-neutral-400 hover:text-red-600'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const productColumns: TableColumn<Product>[] = [
    {
      key: 'name',
      title: 'Product',
      sortable: true,
      render: (value, row) => (
        <div className='flex items-center space-x-2'>
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
              row.category === 'Electronics' ? 'bg-blue-500' : 'bg-green-500'
            }`}
          >
            {value.charAt(0)}
          </div>
          <span className='font-medium'>{value}</span>
          {row.featured && (
            <span className='px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 rounded'>
              Featured
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'category',
      title: 'Category',
      sortable: true,
    },
    {
      key: 'price',
      title: 'Price',
      sortable: true,
      align: 'right',
      render: value => `$${value}`,
    },
    {
      key: 'stock',
      title: 'Stock',
      sortable: true,
      align: 'center',
      render: value => (
        <span
          className={`font-medium ${
            value < 20
              ? 'text-red-600 dark:text-red-400'
              : value < 50
                ? 'text-yellow-600 dark:text-yellow-400'
                : 'text-green-600 dark:text-green-400'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'rating',
      title: 'Rating',
      sortable: true,
      align: 'center',
      render: value => (
        <div className='flex items-center space-x-1'>
          <span>{value}</span>
          <svg
            className='w-4 h-4 text-yellow-500'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
          </svg>
        </div>
      ),
    },
  ];

  const handleLoadData = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    setLoading(false);
  };

  return (
    <Preview>
      <div className='space-y-8 w-full'>
        {/* Basic Table */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Basic Table
          </h3>
          <Table
            columns={userColumns.slice(0, 4)} // Exclude actions for basic example
            data={userData.slice(0, 3)}
            variant='modern'
          />
        </div>

        {/* Table with Selection */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Table with Selection
          </h3>
          <Table
            columns={userColumns}
            data={userData}
            variant='modern'
            selectable
            selectedRows={selectedUsers}
            onSelectionChange={setSelectedUsers}
            onRowClick={row => console.log('Clicked row:', row)}
          />
          {selectedUsers.length > 0 && (
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Selected {selectedUsers.length} user
              {selectedUsers.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Different Variants */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Different Variants
          </h3>
          <div className='space-y-6'>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Default
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='default'
                size='sm'
              />
            </div>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Modern
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='modern'
                size='sm'
              />
            </div>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Minimal
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='minimal'
                size='sm'
              />
            </div>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Striped
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 4)}
                variant='striped'
                size='sm'
              />
            </div>
          </div>
        </div>

        {/* Product Table with All Features */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Product Table - All Features
          </h3>
          <Table
            columns={productColumns}
            data={productData}
            variant='modern'
            selectable
            defaultSort={{ key: 'name', direction: 'asc' }}
          />
        </div>

        {/* Loading States */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Loading States
          </h3>
          <div className='flex gap-4 mb-4'>
            <button
              onClick={handleLoadData}
              className='px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
            >
              Load Data
            </button>
          </div>
          <Table
            columns={productColumns}
            data={loading ? [] : productData}
            variant='modern'
            loading={loading}
            showLoadingOverlay={false}
          />
        </div>

        {/* Empty State */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Empty State
          </h3>
          <Table
            columns={userColumns}
            data={[]}
            variant='modern'
            emptyMessage={
              <div>
                <div className='font-medium text-neutral-900 dark:text-neutral-100'>
                  No users found
                </div>
                <div className='text-neutral-500 dark:text-neutral-400 mt-1'>
                  Get started by adding your first user
                </div>
                <button className='mt-3 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
                  Add User
                </button>
              </div>
            }
          />
        </div>

        {/* Different Sizes */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Different Sizes
          </h3>
          <div className='space-y-6'>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Small
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='modern'
                size='sm'
              />
            </div>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Medium (Default)
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='modern'
                size='md'
              />
            </div>
            <div>
              <h4 className='text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2'>
                Large
              </h4>
              <Table
                columns={productColumns.slice(0, 4)}
                data={productData.slice(0, 3)}
                variant='modern'
                size='lg'
              />
            </div>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Scrollable Table (Max Height)
          </h3>
          <Table
            columns={userColumns}
            data={[...userData, ...userData, ...userData]} // Triple the data
            variant='modern'
            maxHeight={300}
            stickyHeader
          />
        </div>

        {/* Single Selection */}
        <div className='space-y-3'>
          <h3 className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
            Single Selection Mode
          </h3>
          <Table
            columns={productColumns}
            data={productData.slice(0, 4)}
            variant='modern'
            selectable
            selectionMode='single'
          />
        </div>
      </div>
    </Preview>
  );
}
