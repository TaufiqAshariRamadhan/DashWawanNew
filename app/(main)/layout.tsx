'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-mainlayout">
      <div className={`h-full ${collapsed ? 'w-20' : 'w-64'} transition-width duration-300`}>
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-col flex-grow overflow-auto">
        <Navbar />
        <div className={`p-5 w-full transition-margin duration-300`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
