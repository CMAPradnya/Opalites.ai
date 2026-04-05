import React, { useState } from 'react';
import { mockVerification } from '../mockData';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Warehouse,
  History,
  Save,
  Printer
} from 'lucide-react';
import { cn } from '../lib/utils';
import { VerificationItem } from '../types';

export const PhysicalVerification: React.FC = () => {
  const [items, setItems] = useState<VerificationItem[]>(mockVerification);
  const [selectedWarehouse, setSelectedWarehouse] = useState('Warehouse A');

  const handleQuantityChange = (id: string, value: string) => {
    const qty = parseFloat(value);
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const physicalQty = isNaN(qty) ? null : qty;
        const variance = physicalQty !== null ? physicalQty - item.quantity : null;
        let status: VerificationItem['status'] = 'Pending';
        if (variance === 0) status = 'Matched';
        else if (variance !== null && variance < 0) status = 'Shortage';
        else if (variance !== null && variance > 0) status = 'Excess';
        
        return { ...item, physicalQuantity: physicalQty, variance, status };
      }
      return item;
    }));
  };

  const filteredItems = items.filter(item => item.warehouse === selectedWarehouse);

  const stats = {
    total: filteredItems.length,
    matched: filteredItems.filter(i => i.status === 'Matched').length,
    shortage: filteredItems.filter(i => i.status === 'Shortage').length,
    excess: filteredItems.filter(i => i.status === 'Excess').length,
    pending: filteredItems.filter(i => i.status === 'Pending').length,
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 bg-white p-6 rounded-lg border border-border shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-primary flex items-center gap-2">
            <Warehouse size={18} />
            Select Warehouse
          </h3>
          <div className="flex flex-col gap-2">
            {['Warehouse A', 'Warehouse B', 'Warehouse C'].map(w => (
              <button
                key={w}
                onClick={() => setSelectedWarehouse(w)}
                className={cn(
                  'px-4 py-2.5 rounded-md text-sm font-medium text-left transition-all border',
                  selectedWarehouse === w 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-600 border-border hover:border-primary/30'
                )}
              >
                {w}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-4">
            <Button variant="outline" size="sm" className="gap-2 justify-start">
              <History size={16} />
              Verification History
            </Button>
            <Button variant="outline" size="sm" className="gap-2 justify-start">
              <Printer size={16} />
              Print Audit Sheet
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Matched', value: stats.matched, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Shortage', value: stats.shortage, color: 'text-red-600', bg: 'bg-red-50' },
            { label: 'Excess', value: stats.excess, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Pending', value: stats.pending, color: 'text-gray-600', bg: 'bg-gray-50' },
          ].map((stat, i) => (
            <div key={i} className={cn('p-6 rounded-lg border border-border shadow-sm flex flex-col gap-1', stat.bg)}>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
              <span className={cn('text-3xl font-extrabold', stat.color)}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Table */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-primary">Physical Stock Entry</h3>
            <Badge variant="info">{selectedWarehouse}</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Save size={16} />
              Save Draft
            </Button>
            <Button size="sm" className="gap-2">
              <CheckCircle2 size={16} />
              Submit Verification
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Code</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">System Qty</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center w-40">Physical Qty</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Variance</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-primary">{item.code}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 text-right">{item.quantity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <input 
                      type="number" 
                      className="w-24 px-3 py-1.5 bg-white border border-border rounded-md text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/10 font-bold"
                      placeholder="0"
                      value={item.physicalQuantity || ''}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </td>
                  <td className={cn(
                    'px-6 py-4 text-sm font-bold text-right',
                    item.variance === 0 ? 'text-green-600' : 
                    item.variance !== null && item.variance < 0 ? 'text-red-600' : 
                    item.variance !== null && item.variance > 0 ? 'text-blue-600' : 'text-gray-400'
                  )}>
                    {item.variance !== null ? (item.variance > 0 ? `+${item.variance}` : item.variance) : '-'}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant={
                      item.status === 'Matched' ? 'success' : 
                      item.status === 'Shortage' ? 'error' : 
                      item.status === 'Excess' ? 'info' : 'default'
                    }>
                      {item.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
