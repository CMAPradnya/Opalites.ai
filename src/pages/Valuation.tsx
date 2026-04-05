import React, { useState } from 'react';
import { mockValuationMethods } from '../mockData';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  Info, 
  Download, 
  ArrowRight,
  ChevronRight,
  Settings2
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Valuation: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState(mockValuationMethods[0].name);

  return (
    <div className="flex flex-col gap-8">
      {/* Valuation Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-xl border border-border shadow-sm flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Calculator size={24} />
              Valuation Engine
            </h3>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings2 size={16} />
              Configure Methods
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockValuationMethods.map((method, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedMethod(method.name)}
                className={cn(
                  'p-6 rounded-xl border-2 transition-all cursor-pointer flex flex-col gap-4',
                  selectedMethod === method.name 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-white hover:border-primary/30'
                )}
              >
                <div className="flex items-center justify-between">
                  <Badge variant={selectedMethod === method.name ? 'info' : 'default'}>
                    {method.name.split(' ')[0]}
                  </Badge>
                  {selectedMethod === method.name && <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{method.name}</p>
                  <p className="text-2xl font-extrabold text-primary">₹{(method.value / 100000).toFixed(2)}L</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-border flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Info size={18} />
              Method Details: {selectedMethod}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {mockValuationMethods.find(m => m.name === selectedMethod)?.description} This method is widely used for financial reporting and tax compliance in India. It ensures that the cost of goods sold reflects the actual flow of inventory.
            </p>
            <div className="flex gap-4 mt-2">
              <Button size="sm" className="gap-2">
                Apply as Default
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} />
                Download Report
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white p-8 rounded-xl shadow-xl flex flex-col gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <h3 className="text-lg font-bold">Valuation Comparison</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 font-medium">Current Method (FIFO)</span>
              <span className="text-lg font-bold">₹44,65,000</span>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 font-medium">Weighted Average</span>
              <div className="text-right">
                <p className="text-lg font-bold">₹43,80,000</p>
                <p className="text-xs text-red-400 flex items-center justify-end gap-1">
                  <TrendingDown size={12} />
                  -1.9%
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 font-medium">Standard Cost</span>
              <div className="text-right">
                <p className="text-lg font-bold">₹42,50,000</p>
                <p className="text-xs text-red-400 flex items-center justify-end gap-1">
                  <TrendingDown size={12} />
                  -4.8%
                </p>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-8">
            <div className="p-4 bg-white/10 rounded-lg border border-white/10 flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">Audit Insight</p>
              <p className="text-sm leading-relaxed text-gray-300">
                Switching to Weighted Average could reduce tax liability by approximately ₹12,500 based on current stock levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Valuation History */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-primary">Valuation History</h3>
          <Button variant="ghost" size="sm" className="gap-2">
            View All
            <ChevronRight size={16} />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Total Value (₹)</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Change</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { date: '2026-04-01', method: 'FIFO', value: 4465000, change: 2.1, status: 'Audited' },
                { date: '2026-03-01', method: 'FIFO', value: 4372000, change: 1.5, status: 'Audited' },
                { date: '2026-02-01', method: 'FIFO', value: 4305000, change: -0.8, status: 'Audited' },
                { date: '2026-01-01', method: 'FIFO', value: 4340000, change: 3.2, status: 'Audited' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.method}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary text-right">{row.value.toLocaleString()}</td>
                  <td className={cn(
                    'px-6 py-4 text-sm font-bold text-right',
                    row.change > 0 ? 'text-green-600' : 'text-red-600'
                  )}>
                    {row.change > 0 ? '+' : ''}{row.change}%
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant="success">{row.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <Button variant="ghost" size="sm" className="p-1.5">
                      <Download size={16} className="text-gray-400" />
                    </Button>
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
