import { Lock, Menu, Search, X } from "lucide-react";
import type { ResultsPanelProps } from "../../../types";
import { TABLE_COLUMNS } from "./constants";

const EmptyIllustration = () => (
  <div className="flex items-center justify-center mb-0 mt-4">
    <img src="/resultSectionImage.png" alt="resultSectionImage" className="max-w-[120px] md:max-w-[160px] h-auto object-contain" />
  </div>
);

const ResultsPanel = ({ onClose, onMobileFiltersOpen }: ResultsPanelProps) => (
  <div className="flex-1 flex flex-col overflow-hidden">
    <div className="relative px-4 md:pl-0 md:pr-6 shrink-0 flex flex-col justify-end min-h-[71px] pb-3">
      <button
        className="md:hidden absolute top-4 left-3 p-1 text-gray-600 hover:text-gray-900"
        onClick={onMobileFiltersOpen}
        aria-label="Open filters"
      >
        <Menu size={18} />
      </button>

      <div>
        <button
          onClick={onClose}
          className="p-0 absolute top-2 right-2 md:top-1 md:right-2 w-[12px] h-[12px] md:w-[15px] md:h-[15px] bg-[#f1f5f9] rounded-full flex items-center justify-center text-[#475569] hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-[10px] h-[10px] md:w-[11px] md:h-[11px]" strokeWidth={2} />
        </button>
      </div>

      <div className="flex md:flex-row md:items-end justify-between gap-3 pt-10 md:pt-5 md:gap-2">
        <span className="text-[10px] md:text-[11px] text-[#334155] leading-snug self-end">
          Found 0 companies. <br className="md:hidden" /> Click preview to view results
        </span>

        <div className="flex flex-col-reverse md:flex-col md:items-end justify-between md:justify-start w-[50%] md:w-auto gap-2  items-end">
          <div className="flex items-center gap-1.5 px-2 md:px-3.5 py-1 text-[10px] md:text-[11px] text-[#d97706] bg-[#fffbeb] rounded-full order-2 md:order-1">
            <Search className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] text-[#d97706]" strokeWidth={2.5} />
            8000/50000
          </div>

          <button className="flex items-center gap-1 md:gap-1.5 bg-transparent border-none cursor-pointer p-0 text-left order-1 md:order-2">
            <Lock className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] text-[#d97706] shrink-0" strokeWidth={2.5} />
            <span className="text-[10px] md:text-[11px] text-[#d97706] font-semibold leading-tight">
              Unlock 100,000 leads <br className="md:hidden" /> with Enterprise Plan*
            </span>
          </button>
        </div>
      </div>
    </div>
    {/* Main Content Box */}
    <div className="flex-1 overflow-hidden px-4 md:pl-0 md:pr-6 pb-4 md:pb-[96px] flex flex-col">
      <div className="no-scrollbar flex-1 flex flex-col border border-[#e2e8f0] rounded-xl bg-white shadow-sm overflow-y-auto overflow-x-auto">
        <div className="min-w-[700px] flex-1 flex flex-col">
          {/* Table Header */}
          <div className="flex bg-[#f8fafc] border-b border-[#e2e8f0] px-4 py-3.5 flex-shrink-0 sticky top-0 z-10">
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
          <div className="flex-1 min-h-[400px] flex flex-col items-center justify-center p-4 md:p-8 bg-white">
            <EmptyIllustration />
            
            <p className="text-center text-[10px] md:text-[10px] text-[#94a3b8] leading-relaxed">
              Start your Company search , preview, and import companies<br className="hidden md:block" />
              for enrichment by applying any filter in the left panel.<br />
              <span className="font-semibold text-[#64748b] my-1 inline-block">OR</span><br />
              Import companies from saved Search.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsPanel;
