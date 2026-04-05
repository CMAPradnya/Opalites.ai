import React from 'react';
import { Button } from '../components/Button';
import { 
  UploadCloud, 
  Settings2, 
  CheckCircle2, 
  Package, 
  Scale, 
  ArrowRight,
  ChevronRight,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    title: 'Upload File',
    desc: 'Drag and drop your Excel, CSV, or Tally export file into our secure uploader.',
    icon: UploadCloud,
    color: 'bg-blue-500'
  },
  {
    title: 'Map Columns',
    desc: 'Our intelligent engine auto-detects columns. Simply confirm the mapping for item name, code, and quantity.',
    icon: Settings2,
    color: 'bg-purple-500'
  },
  {
    title: 'Validate Data',
    desc: 'We check for errors, missing values, and duplicates to ensure your data is audit-ready.',
    icon: CheckCircle2,
    color: 'bg-green-500'
  },
  {
    title: 'View Inventory',
    desc: 'Instantly see your stock levels, categories, and warehouses in a clean, structured dashboard.',
    icon: Package,
    color: 'bg-orange-500'
  },
  {
    title: 'Perform Verification',
    desc: 'Conduct physical audits and enter quantities directly. We calculate variances and update valuation in real-time.',
    icon: Scale,
    color: 'bg-red-500'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-bg text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">Simple steps to valuation clarity</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've simplified the complex process of inventory management into a seamless, step-by-step workflow.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 md:gap-16 items-start">
                <div className="flex flex-col items-center gap-4">
                  <div className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0',
                    step.color
                  )}>
                    <step.icon size={32} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-1 h-32 bg-gray-100 rounded-full"></div>
                  )}
                </div>
                <div className="flex flex-col gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-accent uppercase tracking-widest">Step {i + 1}</span>
                    <div className="h-px w-12 bg-accent/30"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-gray-400">Experience the simplest way to manage your inventory.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-12">Try it Now</Button>
            <Button variant="outline" size="lg" className="px-12 border-white/20 text-white hover:bg-white/10">Book a Demo</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

import { cn } from '../lib/utils';
