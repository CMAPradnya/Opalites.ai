import React from 'react';
import { Button } from '../components/Button';
import { 
  Package, 
  Calculator, 
  Scale, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Database,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const modules = [
  {
    title: 'Inventory Tracking',
    desc: 'Real-time visibility across multiple warehouses, categories, and stock levels. Never lose track of your materials again.',
    icon: Package,
    features: ['Multi-warehouse support', 'Batch & Serial tracking', 'Low stock alerts', 'Stock movement history']
  },
  {
    title: 'Valuation Engine',
    desc: 'Automated valuation using FIFO, Weighted Average, or Standard Cost methods. Stay compliant with financial standards.',
    icon: Calculator,
    features: ['FIFO valuation', 'Weighted Average cost', 'Standard costing', 'Tax-ready reports']
  },
  {
    title: 'Physical Verification',
    desc: 'Streamlined audit workflows to match system stock with physical inventory. Identify and resolve variances instantly.',
    icon: Scale,
    features: ['Mobile-friendly entry', 'Variance calculation', 'Audit logs', 'Adjustment approvals']
  },
  {
    title: 'Advanced Reports',
    desc: 'Comprehensive reporting suite for deep insights into your inventory performance and financial health.',
    icon: FileText,
    features: ['Inventory ageing', 'Stock summary', 'Variance analysis', 'Custom report builder']
  }
];

export const Product: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Powerful modules for complete control</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            InventoryPro is built to handle the complexities of modern manufacturing and trading businesses with simplicity and precision.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {modules.map((module, i) => (
            <div key={i} className={cn(
              'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center',
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            )}>
              <div className={cn('flex flex-col gap-8', i % 2 === 1 ? 'lg:order-2' : '')}>
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                  <module.icon size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{module.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{module.desc}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={18} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(
                'bg-bg rounded-3xl p-8 border border-border shadow-inner',
                i % 2 === 1 ? 'lg:order-1' : ''
              )}>
                <img 
                  src={`https://picsum.photos/seed/module-${i}/1200/800`} 
                  alt={module.title} 
                  className="rounded-xl shadow-2xl w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6 md:px-12 bg-bg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">Seamlessly connects with your ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'ERP Integration', desc: 'Directly sync with SAP, Oracle, or Microsoft Dynamics.', icon: Database },
              { title: 'Tally Connector', desc: 'One-click import from Tally ERP 9 and Tally Prime.', icon: Zap },
              { title: 'Excel/CSV Support', desc: 'Flexible mapping for any custom spreadsheet format.', icon: FileText },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-border shadow-sm flex flex-col gap-6 items-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to see it in action?</h2>
          <p className="text-lg text-gray-600">Experience the power of premium inventory management today.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="px-12">Get Started</Button>
            <Button variant="outline" size="lg" className="px-12">Book a Demo</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

import { cn } from '../lib/utils';
