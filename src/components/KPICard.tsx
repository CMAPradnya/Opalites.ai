import React from 'react';
import * as LucideIcons from 'lucide-react';
import { KPI } from '../types';
import { cn } from '../lib/utils';

interface KPICardProps {
  kpi: KPI;
  className?: string;
}

export const KPICard: React.FC<KPICardProps> = ({ kpi, className }) => {
  const Icon = (LucideIcons as any)[kpi.icon] || LucideIcons.Package;

  return (
    <div className={cn(
      'bg-white p-6 rounded-lg border border-border shadow-sm flex flex-col gap-2',
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="p-2 bg-primary/5 rounded-md text-primary">
          <Icon size={20} />
        </div>
        {kpi.change !== undefined && (
          <span className={cn(
            'text-xs font-medium px-2 py-1 rounded-full',
            kpi.change > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          )}>
            {kpi.change > 0 ? '+' : ''}{kpi.change}%
          </span>
        )}
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500 font-medium">{kpi.label}</p>
        <h3 className="text-2xl font-bold mt-1 text-primary">
          {kpi.prefix}{kpi.value}
        </h3>
      </div>
    </div>
  );
};
