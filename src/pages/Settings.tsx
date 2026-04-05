import React from 'react';
import { Button } from '../components/Button';
import { 
  User, 
  Building2, 
  Bell, 
  Shield, 
  Database, 
  Globe, 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Save
} from 'lucide-react';
import { cn } from '../lib/utils';

export const Settings: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Settings Navigation */}
      <div className="lg:w-64 flex flex-col gap-2">
        {[
          { name: 'Profile', icon: User, active: true },
          { name: 'Organization', icon: Building2 },
          { name: 'Notifications', icon: Bell },
          { name: 'Security', icon: Shield },
          { name: 'Integrations', icon: Database },
          { name: 'Preferences', icon: Globe },
        ].map((item, i) => (
          <button
            key={i}
            className={cn(
              'flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all',
              item.active 
                ? 'bg-primary text-white shadow-md' 
                : 'text-gray-600 hover:bg-white hover:text-primary'
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} />
              {item.name}
            </div>
            <ChevronRight size={16} className={item.active ? 'text-white' : 'text-gray-400'} />
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="flex-1 bg-white rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="p-8 border-b border-border flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-primary">Profile Settings</h3>
            <p className="text-sm text-gray-500">Manage your personal information and preferences.</p>
          </div>
          <Button className="gap-2">
            <Save size={18} />
            Save Changes
          </Button>
        </div>

        <div className="p-8 flex flex-col gap-10">
          {/* Avatar Section */}
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-2xl border-4 border-white shadow-lg">
              PC
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-primary">Your Avatar</h4>
              <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Upload New</Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:bg-red-50">Remove</Button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  defaultValue="Pradnya Chandorkar" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/10 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  defaultValue="chandorkar.pradnya@gmail.com" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/10 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="tel" 
                  defaultValue="+91 98765 43210" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/10 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-primary">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  defaultValue="Pune, Maharashtra, India" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/10 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-border">
            <h4 className="font-bold text-primary">Language & Region</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Language</label>
                <select className="w-full p-2.5 bg-gray-50 border border-border rounded-md text-sm outline-none">
                  <option>English (India)</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-primary">Time Zone</label>
                <select className="w-full p-2.5 bg-gray-50 border border-border rounded-md text-sm outline-none">
                  <option>(GMT+05:30) India Standard Time</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
