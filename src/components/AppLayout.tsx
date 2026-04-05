import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useLocation } from 'react-router-dom';

export const AppLayout: React.FC = () => {
  const location = useLocation();
  
  const getTitle = (path: string) => {
    const parts = path.split('/');
    const last = parts[parts.length - 1];
    return last.charAt(0).toUpperCase() + last.slice(1).replace('-', ' ');
  };

  return (
    <div className="min-h-screen bg-bg flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header title={getTitle(location.pathname)} />
        <main className="p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
