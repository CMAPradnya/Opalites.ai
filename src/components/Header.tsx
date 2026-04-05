import React from 'react';
import { Bell, Search, User, Mic } from 'lucide-react';
import { Button } from './Button';
import { speakText } from '../services/ttsService';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const handleMicClick = () => {
    speakText(`You are currently on the ${title} page of Inventory Pro.`);
  };

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-8 sticky top-0 z-40">
      <h1 className="text-xl font-bold text-primary">{title}</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search items, reports..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 w-64"
          />
        </div>
        
        <Button variant="ghost" size="sm" className="p-2 rounded-full" onClick={handleMicClick} title="Listen to page summary">
          <Mic size={20} className="text-gray-500" />
        </Button>
        
        <Button variant="ghost" size="sm" className="p-2 rounded-full relative">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-primary">Pradnya C.</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
            PC
          </div>
        </div>
      </div>
    </header>
  );
};
