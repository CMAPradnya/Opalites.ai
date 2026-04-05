import React, { useState } from 'react';
import { mockInventory } from '../mockData';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  MoreVertical, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Raw Material', 'Finished Goods', 'Spares'];

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-border shadow-sm">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by code or name..." 
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border',
                  selectedCategory === cat 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-500 border-border hover:border-primary/30'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <Download size={16} />
            Export
          </Button>
          <Button size="sm" className="gap-2">
            <Plus size={16} />
            Add Item
          </Button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                    Item Code
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
                    Item Name
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Quantity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Rate (₹)</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Value (₹)</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Warehouse</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-primary">{item.code}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant={item.category === 'Finished Goods' ? 'success' : item.category === 'Raw Material' ? 'info' : 'default'}>
                      {item.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 text-right">{item.quantity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-right">{item.rate.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary text-right">{item.value.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.warehouse}</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="sm" className="p-1.5">
                        <FileText size={16} className="text-gray-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1.5">
                        <MoreVertical size={16} className="text-gray-400" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-border bg-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">{filteredInventory.length}</span> of <span className="font-medium text-primary">{filteredInventory.length}</span> results
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="p-1.5" disabled>
              <ChevronLeft size={18} />
            </Button>
            <div className="flex items-center gap-1">
              <Button size="sm" className="w-8 h-8 p-0">1</Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">2</Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0">3</Button>
            </div>
            <Button variant="outline" size="sm" className="p-1.5">
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
