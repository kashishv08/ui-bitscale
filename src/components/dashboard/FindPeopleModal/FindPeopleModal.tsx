import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ResultsPanel from "./ResultsPanel";
import type { FindPeopleModalProps } from "../../../types";

const FindPeopleModal = ({ onClose }: FindPeopleModalProps) => {
  const [keyword, setKeyword] = useState("");
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({});
  const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = (label: string) =>
    setOpenFilters(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      role="dialog"
      aria-label="Find People"
    >
      <div className="w-[95vw] md:w-[1050px] h-[85vh] md:h-[600px] max-h-[90vh] bg-white rounded-xl shadow-2xl flex overflow-hidden relative">

        {isMobileFiltersOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-40 z-0 md:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
        )}

        <div
          className={`absolute md:relative z-10 bg-white flex flex-col flex-shrink-0 border-r border-gray-200 overflow-y-auto h-full transition-transform transform
            ${isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
          style={{ width: 280 }}
        >
          <FilterSidebar
            keyword={keyword}
            onKeywordChange={setKeyword}
            openFilters={openFilters}
            onToggleFilter={toggleFilter}
            onMobileClose={() => setMobileFiltersOpen(false)}
          />
        </div>

        <ResultsPanel
          onClose={onClose}
          onMobileFiltersOpen={() => setMobileFiltersOpen(true)}
        />
      </div>
    </div>
  );
};

export default FindPeopleModal;
