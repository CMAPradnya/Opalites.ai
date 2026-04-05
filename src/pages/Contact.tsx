import React from 'react';
import { Button } from '../components/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Globe,
  Send,
  Calendar
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Get in touch with our experts</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you have a question about features, pricing, or need a custom demo, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-12 bg-bg -mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-8">
              <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-sm font-bold text-primary">sales@inventorypro.in</p>
                    <p className="text-sm text-gray-500">support@inventorypro.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-sm font-bold text-primary">+91 20 6789 0123</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Our Office</p>
                    <p className="text-sm font-bold text-primary">Baner Road, Pune</p>
                    <p className="text-sm text-gray-500">Maharashtra, India 411045</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-8 border-t border-border">
                <h4 className="font-bold text-primary mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <Globe size={20} />
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <MessageSquare size={20} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-accent text-primary p-8 rounded-3xl shadow-lg flex flex-col gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold">Book a Live Demo</h3>
              <p className="text-sm leading-relaxed font-medium opacity-80">
                See how InventoryPro can solve your specific inventory challenges in a 15-minute personalized walkthrough.
              </p>
              <Button variant="primary" className="mt-4 w-full">Schedule Demo</Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-10 md:p-16 rounded-3xl border border-border shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-8">Send us a message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Company Name</label>
                <input 
                  type="text" 
                  placeholder="Acme Manufacturing" 
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-primary">How can we help?</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Sales & Pricing</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-primary">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your inventory needs..." 
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-xl text-sm focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button size="lg" className="w-full md:w-auto px-12 gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
