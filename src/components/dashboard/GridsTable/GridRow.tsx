import { TABLE_COLS } from './GridsTable';
import { AVATAR_FALLBACK_COLOR } from '../../../constants/avatarColors';
import type { GridRowData, GridRowProps } from '../../../types';
import { Star, ChevronDown, MoreHorizontal, Users, Share2, Building2 } from 'lucide-react';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <Star
    size={15}
    fill={filled ? '#f59e0b' : 'none'}
    color={filled ? '#f59e0b' : '#9ca3af'}
    strokeWidth={1.8}
  />
);

const ChevronDownIcon = ({ rotated }: { rotated: boolean }) => (
  <ChevronDown
    size={14}
    color="#6b7280"
    strokeWidth={2}
    style={{ transform: rotated ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s' }}
  />
);

const DotsIcon = () => (
  <MoreHorizontal size={16} color="#6b7280" />
);

const WorkbookIconStack = () => (
  <div className="flex items-center" style={{ marginLeft: -4 }}>
    <div className="w-[20px] h-[20px] rounded-[8px] bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 z-10 relative">
      <Users size={14} color="#7c3aed" strokeWidth={2} />
    </div>
    <div className="w-[20px] h-[20px] rounded-[8px] bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 z-20 relative" style={{ marginLeft: -10 }}>
      <Share2 size={14} color="#ff7a59" strokeWidth={2.5} />
    </div>
    <div className="w-[20px] h-[20px] rounded-[8px] bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 z-30 relative" style={{ marginLeft: -10 }}>
      <Building2 size={14} color="#16a34a" strokeWidth={2} />
    </div>
  </div>
);

const AvatarCircle = ({ initials, color, imageUrl }: { initials: string; color: string; imageUrl?: string }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-semibold overflow-hidden"
    style={{ background: imageUrl ? '#f3f4f6' : color }}
    aria-label={`Avatar for ${initials}`}
  >
    {imageUrl ? (
      <img src={imageUrl} alt={initials} className="w-full h-full object-cover" />
    ) : (
      initials
    )}
  </div>
);

const GridRow = ({ row, isStarred, isExpanded, onToggleStar, onToggleExpand }: GridRowProps) => (
  <>
    <div
      className="grid items-center bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
      style={{ gridTemplateColumns: TABLE_COLS }}
    >
      <div className="flex items-center justify-center pl-2">
        {row.isParent ? (
          <button
            onClick={onToggleExpand}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <ChevronDownIcon rotated={isExpanded} />
          </button>
        ) : (
          <span className="w-[14px]" />
        )}
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={onToggleStar}
          className="transition-transform hover:scale-110"
          aria-label={isStarred ? 'Unstar' : 'Star'}
        >
          <StarIcon filled={isStarred} />
        </button>
      </div>

      <div className="flex items-center rounded-2xl">
        {row.isParent ? <WorkbookIconStack /> : (
          <span className="flex items-center justify-center w-[28px] h-[28px]">
            {row.icon}
          </span>
        )}
      </div>

      <div className="px-3 py-3.5">
        <span className={`text-sm text-gray-800 break-words block ${row.isParent ? 'font-medium' : 'font-normal'}`}>
          {row.name}
        </span>
      </div>

      <div className="px-3 py-3.5 flex items-center gap-2">
        <AvatarCircle
          initials={row.editorInitials}
          color={row.editorColor ?? AVATAR_FALLBACK_COLOR}
          imageUrl={row.editorImage}
        />
        <span className="text-sm text-gray-700 truncate">{row.editor}</span>
      </div>

      <div className="px-3 py-3.5">
        <span className="text-sm text-gray-500">{row.date}</span>
      </div>

      <div className="px-3 py-3.5 flex items-center justify-center">
        <button
          className="text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Row actions"
        >
          <DotsIcon />
        </button>
      </div>
    </div>

    {row.isParent && isExpanded && (
      <div className="border-b border-gray-100 bg-gray-50 px-8 py-3.5">
        <p className="text-xs text-gray-400 italic">No child grids yet.</p>
      </div>
    )}
  </>
);

export default GridRow;
