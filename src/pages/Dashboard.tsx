import React from 'react';
import { KPICard } from '../components/KPICard';
import { mockKPIs, mockInventory } from '../mockData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { ArrowRight, Download, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryData = [
  { name: 'Raw Material', value: 45 },
  { name: 'Finished Goods', value: 35 },
  { name: 'Spares', value: 20 },
];

const COLORS = ['#0B1F3A', '#C8A96A', '#2CA58D', '#FF8042'];

const ageingData = [
  { range: '0-30 Days', value: 65 },
  { range: '31-60 Days', value: 20 },
  { range: '61-90 Days', value: 10 },
  { range: '90+ Days', value: 5 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {mockKPIs.map((kpi, i) => (
          <KPICard key={i} kpi={kpi} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-primary">Inventory Ageing</h3>
            <Button variant="ghost" size="sm" className="text-xs">View Report</Button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#0B1F3A" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-primary">Category Split</h3>
            <Button variant="ghost" size="sm" className="text-xs">View Details</Button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2 ml-4">
              {categoryData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-xs text-gray-600 font-medium">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Inventory Table */}
      <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-primary">Inventory Overview</h3>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download size={16} />
              Export
            </Button>
            <Link to="/app/inventory">
              <Button size="sm" className="gap-2">
                View All
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Code</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Rate (₹)</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Value (₹)</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Warehouse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockInventory.slice(0, 5).map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono font-medium text-primary">{item.code}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant={item.category === 'Finished Goods' ? 'success' : item.category === 'Raw Material' ? 'info' : 'default'}>
                      {item.category}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.quantity.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.rate.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">{item.value.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.warehouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
