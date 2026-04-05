import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Building2,
  Package,
  Calculator,
  Scale,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Starter',
    price: '₹2,499',
    desc: 'Perfect for small trading businesses and workshops.',
    features: [
      'Up to 1,000 items',
      'Single warehouse',
      'Basic inventory tracking',
      'Excel/CSV imports',
      'Standard valuation'
    ],
    icon: Package,
    color: 'bg-blue-500'
  },
  {
    name: 'Professional',
    price: '₹5,999',
    desc: 'Ideal for growing factories and multiple warehouses.',
    features: [
      'Up to 10,000 items',
      'Multi-warehouse support',
      'Physical verification module',
      'Tally & ERP integration',
      'FIFO & Weighted Average',
      'Priority support'
    ],
    icon: Zap,
    color: 'bg-accent',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Advanced features for large manufacturing units.',
    features: [
      'Unlimited items',
      'Unlimited warehouses',
      'Custom valuation methods',
      'API access & webhooks',
      'Dedicated account manager',
      'On-site training'
    ],
    icon: Building2,
    color: 'bg-primary'
  }
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business size and complexity. No hidden fees, no surprises.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn('text-sm font-bold', billingCycle === 'monthly' ? 'text-white' : 'text-gray-500')}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-white/10 rounded-full p-1 transition-all relative"
            >
              <div className={cn(
                'w-6 h-6 bg-accent rounded-full transition-all absolute top-1',
                billingCycle === 'monthly' ? 'left-1' : 'left-7'
              )}></div>
            </button>
            <span className={cn('text-sm font-bold', billingCycle === 'yearly' ? 'text-white' : 'text-gray-500')}>Yearly (Save 20%)</span>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 px-6 md:px-12 bg-bg -mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={cn(
              'bg-white rounded-3xl p-10 border-2 transition-all flex flex-col gap-8 relative',
              plan.popular ? 'border-accent shadow-2xl scale-105 z-10' : 'border-border shadow-sm hover:border-primary/30'
            )}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg', plan.color)}>
                  <plan.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{plan.desc}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-500 font-medium">/mo</span>}
              </div>
              <Button variant={plan.popular ? 'primary' : 'outline'} size="lg" className="w-full">
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">What's Included</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={18} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">Compare features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-6 text-sm font-bold text-gray-500 uppercase tracking-widest">Feature</th>
                  <th className="py-6 text-sm font-bold text-gray-500 uppercase tracking-widest text-center">Starter</th>
                  <th className="py-6 text-sm font-bold text-gray-500 uppercase tracking-widest text-center">Professional</th>
                  <th className="py-6 text-sm font-bold text-gray-500 uppercase tracking-widest text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: 'Inventory Items', starter: '1,000', pro: '10,000', ent: 'Unlimited' },
                  { name: 'Warehouses', starter: '1', pro: 'Unlimited', ent: 'Unlimited' },
                  { name: 'Valuation Methods', starter: 'Standard', pro: 'FIFO, WAC', ent: 'Custom' },
                  { name: 'Integrations', starter: 'Excel/CSV', pro: 'Tally, ERP', ent: 'Full API' },
                  { name: 'Support', starter: 'Email', pro: 'Priority', ent: 'Dedicated' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-6 text-sm font-bold text-primary">{row.name}</td>
                    <td className="py-6 text-sm text-gray-600 text-center">{row.starter}</td>
                    <td className="py-6 text-sm text-gray-600 text-center font-bold">{row.pro}</td>
                    <td className="py-6 text-sm text-gray-600 text-center">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
