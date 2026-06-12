import { Search, ChevronDown, Bookmark, Eye, X, UserSearch } from "lucide-react";
import FilterIcon from "./FilterIcon";
import { FILTERS } from "./constants";

interface FilterSidebarProps {
  keyword: string;
  onKeywordChange: (v: string) => void;
  openFilters: Record<string, boolean>;
  onToggleFilter: (label: string) => void;
  onMobileClose: () => void;
}

const FilterSidebar = ({
  keyword,
  onKeywordChange,
  openFilters,
  onToggleFilter,
  onMobileClose,
}: FilterSidebarProps) => (
  <div className="flex flex-col h-full">
    <div
      style={{
        padding: "16px 20px 12px 20px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: 16, fontWeight: 700, color: "#111827" }}>Find People</span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            color: "#374151",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 6,
            padding: "4px 10px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          <ChevronDown size={12} />
          Saved Search
        </button>
        <button
          className="md:hidden"
          onClick={onMobileClose}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#6b7280" }}
          aria-label="Close filters"
        >
          <X size={18} />
        </button>
      </div>
    </div>

    <div style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
      <div style={{ padding: "0 20px 12px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <UserSearch size={15} color="#6b7280" strokeWidth={1.5} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>People Keyword</span>
        </div>
        <div style={{ position: "relative" }}>
          <Search size={13} style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
          <input
            type="text"
            placeholder="Enter single keyword here..."
            value={keyword}
            onChange={e => onKeywordChange(e.target.value)}
            style={{
              width: "100%",
              paddingLeft: 28,
              paddingRight: 8,
              paddingTop: 7,
              paddingBottom: 7,
              fontSize: 12,
              border: "1px solid #e5e7eb",
              borderRadius: 6,
              color: "#374151",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <div style={{ height: 1, background: "#f3f4f6", margin: "0 0 4px 0" }} />

      {FILTERS.map((filter) => (
        <div key={filter.label} style={{ borderBottom: "1px solid #f3f4f6" }}>
          <button
            onClick={() => onToggleFilter(filter.label)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FilterIcon type={filter.label} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#111827" }}>{filter.label}</span>
              </div>
              <span style={{ fontSize: 11, color: "#9ca3af", paddingLeft: 22 }}>{filter.placeholder}</span>
            </div>
            <ChevronDown
              size={14}
              style={{
                color: "#6b7280",
                transform: openFilters[filter.label] ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                flexShrink: 0,
              }}
            />
          </button>
          {openFilters[filter.label] && (
            <div style={{ padding: "0 20px 10px 20px" }}>
              <input
                type="text"
                placeholder={filter.placeholder}
                style={{
                  width: "100%",
                  padding: "7px 10px",
                  fontSize: 12,
                  border: "1px solid #e5e7eb",
                  borderRadius: 6,
                  color: "#374151",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>

    <div
      style={{
        padding: "12px 16px",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        gap: 8,
        flexShrink: 0,
      }}
    >
      <button
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "9px 0",
          fontSize: 13,
          fontWeight: 500,
          color: "#374151",
          background: "#fff",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        <Bookmark size={14} />
        Save Search
      </button>
      <button
        style={{
          flex: 1.4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "9px 0",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          background: "#111827",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        <Eye size={14} />
        Preview Result
      </button>
    </div>
  </div>
);

export default FilterSidebar;
