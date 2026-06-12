import {
  AppWindow,
  ArrowDown,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsUpDown,
  Circle,
  FileText,
  Home,
  LayoutGrid,
  List,
  Lock,
  MapPin,
  Menu,
  PlayCircle,
  Plus,
  Search,
  Settings,
  Share2,
  Star,
  User,
  Compass,
  FileDown,
  Users
} from 'lucide-react';

export const HomeIcon = () => <Home size={16} strokeWidth={2} />;

export const DashboardIcon = () => <LayoutGrid size={16} strokeWidth={2} />;

export const PlaybooksIcon = () => <BookOpen size={16} strokeWidth={2} />;

export const IntegrationsIcon = () => <Share2 size={16} strokeWidth={2} />;

export const DocsIcon = () => <FileText size={16} strokeWidth={2} />;

export const SettingsIcon = () => <Settings size={16} strokeWidth={2} />;

export const ChevronRightIcon = () => <ChevronRight size={14} strokeWidth={2.5} />;

export const ChevronUpIcon = () => <ChevronUp size={14} strokeWidth={2} />;

export const ChevronsUpDownIcon = () => <ChevronsUpDown size={14} strokeWidth={2} />;

export const LockIcon = () => <Lock size={12} strokeWidth={2} />;

export const MenuIcon = () => <Menu size={24} strokeWidth={2} />;

export const BuildingIcon = () => <Building2 size={18} strokeWidth={2.2} />;

export const PeopleIcon = () => <User size={18} strokeWidth={2.2} />;

export const PlusIcon = () => <Plus size={14} strokeWidth={2.5} />;

export const SearchIcon = () => <Search size={14} strokeWidth={2} />;

export const ListIcon = () => <List size={16} strokeWidth={2} />;

export const SortIcon = () => <ArrowDown size={12} strokeWidth={2.5} />;

export const CollapseIcon = () => <ChevronLeft size={14} strokeWidth={2} color="#6b7280" />;

export const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <Star
    size={14}
    strokeWidth={2}
    color={filled ? '#f59e0b' : '#9ca3af'}
    fill={filled ? '#f59e0b' : 'none'}
  />
);


export const CheckCircleIcon = ({ checked }: { checked: boolean }) =>
  checked ? (
    <CheckCircle2 size={16} fill="#2563eb" color="white" strokeWidth={2.2} />
  ) : (
    <Circle size={16} color="#d1d5db" strokeWidth={2} />
  );

export const PlayIcon = () => (
  <PlayCircle size={28} fill="rgba(0,0,0,0.55)" color="white" strokeWidth={1} />
);

export const DemoIcon = () => (
  <AppWindow size={32} color="#6b7280" strokeWidth={1.8} />
);

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[26px] h-[26px] rounded-[8px] bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0">
    {children}
  </div>
);

export const LinkedInIcon = () => (
  <IconWrapper>
    <div className="w-[14px] h-[14px] rounded-[3px] bg-[#0a66c2] flex items-center justify-center">
      <span className="text-white text-[8px] font-bold leading-none">in</span>
    </div>
  </IconWrapper>
);

export const SalesNavIcon = () => (
  <IconWrapper>
    <Compass size={14} color="#0077b5" strokeWidth={2} />
  </IconWrapper>
);

export const CompanyIcon = () => (
  <IconWrapper>
    <Building2 size={14} color="#16a34a" strokeWidth={2} />
  </IconWrapper>
);

export const CSVIcon = () => (
  <IconWrapper>
    <FileDown size={14} color="#92400e" strokeWidth={2} />
  </IconWrapper>
);

export const FindPeopleIcon = () => (
  <IconWrapper>
    <Users size={14} color="#7c3aed" strokeWidth={2} />
  </IconWrapper>
);

export const GoogleMapsIcon = () => (
  <IconWrapper>
    <MapPin size={14} color="#ea4335" strokeWidth={2} />
  </IconWrapper>
);

export const GoogleSearchIcon = () => (
  <IconWrapper>
    <div className="flex items-center justify-center text-[13px] font-bold">
      <span style={{
        backgroundImage: 'linear-gradient(45deg, #4285f4 25%, #ea4335 25% 50%, #fbbc05 50% 75%, #34a853 75%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        G
      </span>
    </div>
  </IconWrapper>
);

export const FactorsIcon = () => (
  <IconWrapper>
    <span className="text-[#ef4444] text-[13px] font-extrabold italic font-serif leading-none mt-0.5">F</span>
  </IconWrapper>
);

export const HubspotIcon = () => (
  <IconWrapper>
    <Share2 size={14} color="#ff7a59" strokeWidth={2.5} />
  </IconWrapper>
);

export const WorkbookIcon = () => (
  <IconWrapper>
    <FileText size={14} color="#4b5563" strokeWidth={2} />
  </IconWrapper>
);
