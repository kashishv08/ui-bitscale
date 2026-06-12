import { ArrowUpIcon } from 'lucide-react';
import React, { useState } from 'react';
import { GRIDS_DATA } from '../../../data/grids';
import { ListIcon, SearchIcon } from '../../../icons';
import type { GridTab } from '../../../types';
import GridRow from './GridRow';

export const TABLE_COLS = '36px 42px 48px 1fr 220px 150px 60px';

const GridsTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GridTab>('grids');
  const [searchQuery, setSearchQuery] = useState('');
  const [starredIds, setStarredIds] = useState<Set<number>>(
    new Set(GRIDS_DATA.filter(r => r.isStarred).map(r => r.id))
  );
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleStar = (id: number) =>
    setStarredIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const toggleExpand = (id: number) =>
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const visibleRows = GRIDS_DATA
    .filter(row => row.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(row => activeTab === 'starred' ? starredIds.has(row.id) : true);

  return (
    <div className="px-4 md:px-6 pb-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-3">
        <div className="flex items-center gap-0">
          {(['grids', 'starred'] as GridTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium pb-2.5 px-1 mr-6 transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600'
              }`}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab === 'grids' ? 'My Grids' : 'Starred'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-2 rounded-[8px] px-3 py-2 bg-[#f4f5f8] transition-colors"
            style={{ minWidth: 260 }}
          >
            <SearchIcon />
            <input
              type="text"
              placeholder="Search grids and workbooks..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="text-[13px] text-gray-700 placeholder-gray-500 bg-transparent outline-none flex-1"
              aria-label="Search grids"
            />
          </div>
          <button
            className="w-9 h-9 rounded-full bg-[#f4f5f8] hover:bg-gray-200 transition-colors text-gray-600 flex items-center justify-center flex-shrink-0"
            aria-label="Toggle view"
          >
            <ListIcon />
          </button>
        </div>
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <div style={{ minWidth: 680 }}>
            <div
              className="grid items-center border-b border-gray-100"
              style={{ gridTemplateColumns: TABLE_COLS }}
            >
              <div />
              <div />
              <div className="py-3 flex items-center gap-1.5 text-[13px] font-medium text-gray-800">
                Name <ArrowUpIcon />
              </div>
              <div />
              <div className="px-3 py-3 text-[13px] font-medium text-gray-800">Edited by</div>
              <div className="px-3 py-3 text-[13px] font-medium text-gray-800">Last edited</div>
              <div className="px-3 py-3 text-[13px] font-medium text-gray-800">Actions</div>
            </div>

            {visibleRows.length > 0 ? (
              visibleRows.map(row => (
                <GridRow
                  key={row.id}
                  row={row}
                  isStarred={starredIds.has(row.id)}
                  isExpanded={expandedIds.has(row.id)}
                  onToggleStar={() => toggleStar(row.id)}
                  onToggleExpand={() => toggleExpand(row.id)}
                />
              ))
            ) : (
              <div className="py-14 text-center text-sm text-gray-400">
                {activeTab === 'starred'
                  ? 'No starred grids yet. Click the ★ on any row to star it.'
                  : `No results found for "${searchQuery}"`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridsTable;
