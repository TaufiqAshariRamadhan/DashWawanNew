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
  User,
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
      <div className='bg-custom-color text-white py-2 px-5 flex justify-between'>
        <Link href='/'>
          <Image src={logo} alt='TraversyPress' width={40} />
        </Link>
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
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4'}`}>
                <Building2 className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white'>Perusahaan</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4'}`}>
                <User className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/users' className='ml-2 text-white'>Mahasiswa</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4'}`}>
                <Briefcase className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white'>Lowongan</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4'}`}>
                <Handshake className='h-4 w-4 text-white' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white'>Assign Interview</Link>} {/* Ensure the font color is white */}
              </CommandItem>
              <CommandItem className={`flex items-center hover:bg-custom-color2 ${collapsed ? 'justify-center' : 'justify-start pr-4'}`}>
                <MessageCircle className='h-4 w-4 text-white ' /> {/* Ensure the icon color is white */}
                {!collapsed && <Link href='/posts' className='ml-2 text-white'>Hasil Interview</Link>} {/* Ensure the font color is white */}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;
