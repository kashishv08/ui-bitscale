import { Search, Lock, X, Menu } from "lucide-react";
import { TABLE_COLUMNS } from "./constants";
import type { ResultsPanelProps } from "../../../types";

const EmptyIllustration = () => (
  <div className="w-24 h-24 rounded-full bg-[#EEF4FF] flex items-center justify-center mb-2">
    <Search size={48} color="#a5b4fc" strokeWidth={1.5} />
  </div>
);

const ResultsPanel = ({ onClose, onMobileFiltersOpen }: ResultsPanelProps) => (
  <div className="flex-1 flex flex-col overflow-hidden">
    <div className="relative px-4 md:px-6 pt-5 pb-4 shrink-0">
      <button
        className="md:hidden absolute top-4 left-4 p-1 text-gray-600 hover:text-gray-900"
        onClick={onMobileFiltersOpen}
        aria-label="Open filters"
      >
        <Menu size={18} />
      </button>

      <button
        onClick={onClose}
        className="absolute top-3 right-3 w-[26px] h-[26px] bg-[#f1f5f9] rounded-full flex items-center justify-center text-[#475569] hover:bg-slate-200 transition-colors m-[-7px]"
        aria-label="Close modal"
      >
        <X size={14} strokeWidth={2} />
      </button>

      <div className="flex justify-end mt-4 mb-3">
        <div className="flex items-center gap-1.5 px-3 py-1 text-[13px] font-medium text-[#d97706] bg-[#fffbeb] rounded-full">
          <Search size={14} className="text-[#d97706]" strokeWidth={2} />
          8000/50000
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <span className="text-[13px] md:text-sm font-semibold text-[#475569]">
          Found 0 companies. Click preview to view results
        </span>

        <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 text-left">
          <Lock size={14} className="text-[#d97706] shrink-0" strokeWidth={2} />
          <span className="text-[13px] md:text-sm text-[#d97706] font-semibold leading-tight">
            Unlock 100,000 leads with Enterprise Plan*
          </span>
        </button>
      </div>
    </div>

    {/* Main Content Box */}
    <div className="flex-1 overflow-hidden px-6 pb-6 flex flex-col pt-2">
      <div className="flex-1 flex flex-col border border-[#e2e8f0] rounded-xl overflow-hidden bg-white shadow-sm">
        {/* Table Header */}
        <div className="flex bg-[#f8fafc] border-b border-[#e2e8f0] px-4 py-3.5 flex-shrink-0">
          {TABLE_COLUMNS.map((col) => (
            <div
              key={col}
              className="flex-1 px-2 text-[11px] font-bold text-[#64748b] uppercase tracking-wider whitespace-nowrap overflow-hidden text-overflow-ellipsis"
            >
              {col}
            </div>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
          <EmptyIllustration />
          <p className="text-center text-[13px] text-[#94a3b8] leading-relaxed font-medium">
            Start your Company search , preview, and import companies<br />
            for enrichment by applying any filter in the left panel.<br />
            <span className="font-semibold text-[#64748b] my-1 inline-block">OR</span><br />
            Import companies from saved Search.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsPanel;
