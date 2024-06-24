'use client';
import React from 'react';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Handshake,
  Briefcase,
  User as UserIcon,
  MessageCircle,
  Building2,
} from 'lucide-react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import logo from '../img/logo2.png'; // Importing a menu icon for the toggle button

type SidebarProps = {
  collapsed: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`flex ${collapsed ? 'w-20' : 'w-64'} transition-width duration-300 bg-custom-color h-full`}>
      <div className="flex flex-col">
        <div className='bg-custom-color text-white py-2 px-5 flex items-center'>
          <Link href='/'>
            <Image src={logo} alt='TraversyPress' width={40} />
          </Link>
          {!collapsed && (
            <span className='ml-2 text-white font-bold text-2xl' style={{ fontFamily: 'Inter, sans-serif' }}>TellWawan</span>
          )}
        </div>
        <button 
          onClick={toggleSidebar} 
          className={`p-2 m-2 text-white rounded-lg hover:bg-custom-color2 flex items-center ${collapsed ? 'justify-center' : 'justify-start'}`}
        >
          <Menu className="h-6 w-6 text-white" /> {/* Ensure the icon color is white */}
        </button>

        <Command className={`bg-custom-color text-white flex-grow ${collapsed ? 'rounded-none w-20' : 'rounded-none w-64'} transition-width duration-300`}>
          <CommandList>
            <CommandGroup>
              <h3 className={`text-sm font-semibold ${collapsed ? 'hidden' : 'ml-4 mb-2 text-white'}`}>User</h3>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4 pl-6'}`}>
                <Building2 className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white font-light'>Perusahaan</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4 pl-6'}`}>
                <UserIcon className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/users' className='ml-2 text-white font-light'>Mahasiswa</Link>} {/* Ensure the font color is white */}
              </CommandItem>
            </CommandGroup>

            <CommandGroup>
              <h3 className={`text-sm font-semibold ${collapsed ? 'hidden' : 'ml-4 mb-2 text-white'}`}>Interview</h3>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4 pl-6'}`}>
                <Handshake className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white font-light'>Assign Interview</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4 pl-6'}`}>
                <MessageCircle className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white font-light'>Hasil Interview</Link>} {/* Ensure the font color is white */}
              </CommandItem>
            </CommandGroup>

            <CommandGroup>
              <h3 className={`text-sm font-semibold ${collapsed ? 'hidden' : 'ml-4 mb-2 text-white'}`}>Lowongan</h3>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4 pl-6'}`}>
                <Briefcase className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white font-light'>Lowongan</Link>} {/* Ensure the font color is white */}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;
