import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { 
  BarChart3, 
  ShieldCheck, 
  UploadCloud, 
  Zap, 
  ArrowRight,
  Factory,
  Warehouse,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
              <Zap size={14} />
              <span>New: Tally Integration v2.0</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary leading-tight tracking-tight">
              Inventory intelligence with valuation clarity
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Upload ERP, Tally, or Excel data. Track stock. Verify physically. Know true inventory value with audit-ready accuracy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/app/upload">
                <Button size="lg" className="gap-2">
                  <UploadCloud size={20} />
                  Upload File
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  Book Demo
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">500+</span>
                <span className="text-sm text-gray-500">Indian Factories</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">₹10B+</span>
                <span className="text-sm text-gray-500">Inventory Tracked</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-border p-4 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="InventoryPro Dashboard Preview" 
                className="rounded-lg w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-sm font-bold uppercase tracking-wider">Audit Ready</p>
              <p className="text-2xl font-extrabold">100% Accuracy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive control over your stock</h2>
            <p className="text-lg text-gray-600">Everything you need to manage, value, and audit your inventory in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Data Import', desc: 'Seamlessly import from ERP, Tally, or Excel with auto-mapping.', icon: UploadCloud },
              { title: 'Stock Tracking', desc: 'Real-time visibility across multiple warehouses and categories.', icon: BarChart3 },
              { title: 'Physical Verification', desc: 'Audit-friendly verification workflow with variance reports.', icon: ShieldCheck },
              { title: 'Valuation Engine', desc: 'FIFO, Weighted Average, and Standard Cost valuation methods.', icon: TrendingUp },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl border border-border hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 md:px-12 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Built for the unique needs of Indian businesses</h2>
              <div className="space-y-8">
                {[
                  { title: 'Factories & Manufacturing', desc: 'Track raw materials, WIP, and finished goods across production stages.', icon: Factory },
                  { title: 'Warehouses & Logistics', desc: 'Manage high-volume stock movements and storage locations efficiently.', icon: Warehouse },
                  { title: 'Trading & Distribution', desc: 'Maintain optimal stock levels and calculate precise profit margins.', icon: TrendingUp },
                ].map((useCase, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-accent border border-border">
                      <useCase.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">{useCase.title}</h4>
                      <p className="text-gray-600">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10 flex flex-col gap-8">
                <blockquote className="text-2xl font-medium leading-relaxed italic">
                  "InventoryPro transformed how we handle our year-end audits. What used to take weeks now takes days, with zero errors in valuation."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                    RK
                  </div>
                  <div>
                    <p className="font-bold text-lg">Rajesh Kumar</p>
                    <p className="text-gray-400 text-sm">Director, Kumar Engineering Works</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col gap-8 items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to gain valuation clarity?</h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Join hundreds of Indian businesses that trust InventoryPro for their audit-ready inventory management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link to="/app/upload">
                <Button size="lg" variant="secondary" className="px-12 py-4 text-lg">
                  Get Started for Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-12 py-4 text-lg border-white/20 text-white hover:bg-white/10">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
