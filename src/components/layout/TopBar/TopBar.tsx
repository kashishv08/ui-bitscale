import { Coins } from 'lucide-react';
import { MenuIcon } from '../../../icons';
import type { TopBarProps } from '../../../types';
import Avatar from '../../ui/Avatar/Avatar';

const TopBar = ({ onMenuClick }: TopBarProps) => (
  <header
    className="flex items-center justify-between md:justify-end px-4 md:px-6 py-2 border-b border-gray-100 flex-shrink-0"
    style={{ backgroundColor: '#ffffff' }}
    aria-label="Top bar"
  >
    <div className="flex items-center md:hidden">
      <button 
        onClick={onMenuClick} 
        className="p-1 -ml-1 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Open sidebar"
      >
        <MenuIcon />
      </button>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center bg-[#eff5f1] rounded-xl pl-3 pr-1 py-1 border border-[#e5eee8]">
        <div className="flex items-center gap-2 text-[#458564] ml-1 mr-3">
          <Coins size={22} strokeWidth={1.5} />
          <span className="text-[14px] font-medium tracking-wide">450000/5500000</span>
        </div>
        <button className="text-[13px] font-medium text-white bg-[#458564] rounded-xl px-4 py-1.5 transition-colors hover:bg-[#387053]">
          Booster Plan
        </button>
      </div>

      <div className="w-[36px] h-[36px] rounded-full overflow-hidden cursor-pointer flex-shrink-0 relative">
        <img 
          src="https://picsum.photos/seed/avatar3/100/100" 
          alt="User Avatar" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 -z-10 flex items-center justify-center bg-orange-100">
           <Avatar initials="TIM" color="#f59e0b" size="sm" />
        </div>
      </div>
    </div>
  </header>
);

export default TopBar;
