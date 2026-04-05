import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  Package, 
  Scale, 
  Calculator, 
  FileText, 
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
  { name: 'Upload Data', path: '/app/upload', icon: Upload },
  { name: 'Inventory', path: '/app/inventory', icon: Package },
  { name: 'Physical Verification', path: '/app/verification', icon: Scale },
  { name: 'Valuation', path: '/app/valuation', icon: Calculator },
  { name: 'Reports', path: '/app/reports', icon: FileText },
  { name: 'Settings', path: '/app/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-primary text-white flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-primary font-bold">
          IP
        </div>
        <span className="text-xl font-bold tracking-tight">InventoryPro</span>
      </div>

      <nav className="flex-1 px-4 mt-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
              isActive 
                ? 'bg-white/10 text-accent' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            )}
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};
