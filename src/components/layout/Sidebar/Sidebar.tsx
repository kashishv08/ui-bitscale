import { ChevronsUpDown, ChevronUp, Rocket } from 'lucide-react';
import { useState } from 'react';
import {
  ChevronRightIcon,
  DashboardIcon,
  DocsIcon,
  IntegrationsIcon,
  PlaybooksIcon,
  SettingsIcon,
} from '../../../icons';
import type { SidebarProps } from '../../../types';
import NavItem from './NavItem';

const OverlappingAvatars = () => (
  <div className="flex items-center -space-x-3.5">
    <img
      src="https://i.pravatar.cc/150?img=47"
      alt="Avatar"
      className="w-8 h-8 rounded-full border border-[#e5e7eb] relative z-10"
      style={{ objectFit: 'cover' }}
    />
    <img
      src="https://i.pravatar.cc/150?img=11"
      alt="Avatar"
      className="w-8 h-8 rounded-full border border-[#e5e7eb] relative z-20"
      style={{ objectFit: 'cover' }}
    />
  </div>
);

const RocketPill = () => (
  <div className="flex items-center justify-center bg-[#fef3c7] text-[#b45309] rounded-full px-2.5 py-1">
    <Rocket size={12} strokeWidth={2.5} />
  </div>
);

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" 
          onClick={onClose} 
        />
      )}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 flex flex-col h-screen border-r border-gray-200 flex-shrink-0 bg-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        style={{ width: '232px' }}
        aria-label="Application sidebar"
      >
        <div className="px-5 pt-6 pb-2.5">
          <img src="/image.png" alt="bitscale" className="h-[22px]" />
        </div>

        <div className="border-t border-b border-gray-100">
          <button 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <OverlappingAvatars />
              <span className="text-[15px] font-semibold text-[#1f2937]">
                GTM Spaces
              </span>
            </div>
            <div className="text-gray-500">
              <ChevronsUpDown size={18} strokeWidth={2.5} color="#6b7280" />
            </div>
          </button>
        </div>

        {/* Navigation */}
        <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isNavExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="flex-1 overflow-y-auto px-3">
            <div className="pt-6 pb-2 px-3 text-[13px] font-medium text-[#6b7280]">
              Home
            </div>

            <NavItem
              icon={<DashboardIcon />}
              label="My Dashboard"
              active
              suffix={<ChevronRightIcon />}
            />

            <NavItem
              icon={<PlaybooksIcon />}
              label="Playbooks"
              suffix={<RocketPill />}
            />

            <NavItem icon={<IntegrationsIcon />} label="Integrations" />

            <div className="pt-6 pb-2 px-3 text-[13px] font-medium text-[#6b7280]">
              Other
            </div>

            <NavItem icon={<DocsIcon />} label="Documnetation" />
            <NavItem icon={<SettingsIcon />} label="Settings" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 mt-auto">
          <button className="w-full flex items-center justify-between bg-[#f4f5f8] hover:bg-[#e9ebf0] rounded-[8px] px-4 py-3.5 transition-colors">
            <div className="flex flex-col text-left">
              <div className="flex items-center">
                <img src="/image.png" alt="bitscale" className="h-3.5 opacity-90" style={{ filter: 'brightness(0.2)' }} />
              </div>
              <div className="text-[12px] text-[#4b5563] mt-1 font-medium">
                Get Support at Bitscale
              </div>
            </div>
            <div className="text-[#1f2937]">
              <ChevronUp size={16} strokeWidth={3} />
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
