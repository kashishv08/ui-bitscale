import { BuildingIcon, PeopleIcon, PlusIcon } from '../../../icons';
import type { WelcomeHeaderProps } from '../../../types';

const WelcomeHeader = ({
  userName = 'Tim',
  onFindPeopleClick,
  onFindCompaniesClick,
  onNewGridClick,
}: WelcomeHeaderProps) => (
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 pt-5 pb-4 gap-4">
    {}
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-gray-900" style={{ lineHeight: '1.2' }}>
        Welcome back, {userName}!
      </h1>
      <p className="text-sm text-gray-400 mt-0.5">Here's your daily scoop on Bitscale!</p>
    </div>

    {}
    <div className="flex flex-wrap items-center gap-2 mt-1 w-full md:w-auto">
      <button
        onClick={onFindCompaniesClick}
        className="flex-1 md:flex-none justify-center flex items-center gap-2 text-[15px] font-medium text-[#1e293b] border border-[#e2e8f0] rounded-[10px] px-4 py-2 hover:bg-gray-50 transition-colors whitespace-nowrap bg-white shadow-sm"
      >
        <span className="text-[#458564]"><BuildingIcon /></span>
        Find Companies
      </button>

      <button
        onClick={onFindPeopleClick}
        className="flex-1 md:flex-none justify-center flex items-center gap-2 text-[15px] font-medium text-[#1e293b] border border-[#e2e8f0] rounded-[10px] px-4 py-2 hover:bg-gray-50 transition-colors whitespace-nowrap bg-white shadow-sm"
      >
        <span className="text-[#8b5cf6]"><PeopleIcon /></span>
        Find People
      </button>

      <button
        onClick={onNewGridClick}
        className="flex-1 md:flex-none justify-center flex items-center gap-1.5 text-sm font-semibold text-white rounded-lg px-3 py-1.5 hover:opacity-90 transition-opacity whitespace-nowrap"
        style={{ background: '#111827' }}
      >
        <PlusIcon />
        New Grid
      </button>
    </div>
  </div>
);

export default WelcomeHeader;
