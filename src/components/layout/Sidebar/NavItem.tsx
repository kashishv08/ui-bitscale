import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  suffix?: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, suffix, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[14px] transition-colors mb-0.5 ${
      active
        ? 'text-blue-600 font-medium bg-[#f4f5f8]'
        : 'text-[#4b5563] hover:bg-gray-50 font-normal'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    <span className={active ? 'text-blue-600' : 'text-[#6b7280]'}>{icon}</span>
    <span className="flex-1 text-left truncate">{label}</span>
    {suffix && (
      <span className={active ? 'text-blue-600' : 'text-[#9ca3af]'}>{suffix}</span>
    )}
  </button>
);

export default NavItem;
