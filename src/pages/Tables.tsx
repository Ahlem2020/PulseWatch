import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Edit, Trash2, Eye } from 'lucide-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', date: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', date: '2024-01-14' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', date: '2024-01-13' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', date: '2024-01-12' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Pending', date: '2024-01-11' },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active', date: '2024-01-10' },
  { id: 7, name: 'Edward Norton', email: 'edward@example.com', role: 'User', status: 'Inactive', date: '2024-01-09' },
  { id: 8, name: 'Fiona Apple', email: 'fiona@example.com', role: 'User', status: 'Active', date: '2024-01-08' },
];

const products = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 299.99, stock: 150, sales: 1234 },
  { id: 2, name: 'Product B', category: 'Clothing', price: 59.99, stock: 500, sales: 856 },
  { id: 3, name: 'Product C', category: 'Electronics', price: 199.99, stock: 75, sales: 2341 },
  { id: 4, name: 'Product D', category: 'Home', price: 89.99, stock: 200, sales: 567 },
  { id: 5, name: 'Product E', category: 'Sports', price: 149.99, stock: 0, sales: 123 },
];

export function Tables() {
  const [sortField, setSortField] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const toggleRow = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedRows(prev => 
      prev.length === users.length ? [] : users.map(u => u.id)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tables</h1>
        <p className="text-muted-foreground mt-1">Data table components</p>
      </div>

      {/* Basic Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Basic Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Price</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Stock</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Sales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm text-foreground">{product.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{product.category}</td>
                  <td className="px-4 py-3 text-sm text-foreground">${product.price}</td>
                  <td className="px-4 py-3 text-sm">
                    {product.stock > 0 ? (
                      <span className="text-green-500">{product.stock}</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Advanced Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground">Advanced Table</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search users..."
                className="pl-9 pr-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent w-64"
              />
            </div>
            <button className="px-3 py-2 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors">
              Add User
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input 
                    type="checkbox" 
                    checked={selectedRows.length === users.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded"
                  />
                </th>
                {['Name', 'Email', 'Role', 'Status', 'Date'].map((header) => (
                  <th 
                    key={header}
                    className="px-4 py-3 text-left text-sm font-medium text-muted-foreground cursor-pointer hover:text-foreground"
                    onClick={() => handleSort(header.toLowerCase())}
                  >
                    <div className="flex items-center gap-1">
                      {header}
                      {sortField === header.toLowerCase() && (
                        sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </th>
                ))}
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className={`hover:bg-muted/30 transition-colors ${selectedRows.includes(user.id) ? 'bg-accent/5' : ''}`}>
                  <td className="px-4 py-3">
                    <input 
                      type="checkbox" 
                      checked={selectedRows.includes(user.id)}
                      onChange={() => toggleRow(user.id)}
                      className="w-4 h-4 rounded"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm text-foreground">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                      user.status === 'Inactive' ? 'bg-red-500/10 text-red-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{user.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 hover:bg-red-500/10 rounded-lg transition-colors text-muted-foreground hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1 to {users.length} of {users.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button 
              className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                  currentPage === page 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-muted text-muted-foreground'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Striped Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Striped Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 5).map((user, i) => (
                <tr key={user.id} className={i % 2 === 0 ? 'bg-muted/20' : ''}>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{user.id}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{user.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bordered Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Bordered Table</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground border border-border">Product</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground border border-border">Q1</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground border border-border">Q2</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground border border-border">Q3</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground border border-border">Q4</th>
              </tr>
            </thead>
            <tbody>
              {['Product A', 'Product B', 'Product C'].map((product) => (
                <tr key={product}>
                  <td className="px-4 py-3 text-sm text-foreground border border-border">{product}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground border border-border">${Math.floor(Math.random() * 10000)}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground border border-border">${Math.floor(Math.random() * 10000)}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground border border-border">${Math.floor(Math.random() * 10000)}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground border border-border">${Math.floor(Math.random() * 10000)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive Cards (Mobile-friendly alternative) */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Responsive Card View</h2>
        <p className="text-sm text-muted-foreground mb-4">Alternative to tables for mobile devices</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.slice(0, 3).map((user) => (
            <div key={user.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-foreground">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role:</span>
                  <span className="text-foreground">{user.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={user.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{user.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="text-foreground">{user.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
