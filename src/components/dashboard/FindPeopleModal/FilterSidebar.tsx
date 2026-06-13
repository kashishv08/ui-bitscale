import { ChevronDown, Eye, FileSearchCorner, Search, UserSearch, X } from "lucide-react";
import type { FilterSidebarProps } from "../../../types";
import FilterIcon from "./FilterIcon";
import { FILTERS } from "./constants";

const FilterSidebar = ({
  keyword,
  onKeywordChange,
  openFilters,
  onToggleFilter,
  onMobileClose,
}: FilterSidebarProps) => (
  <div className="flex flex-col h-full z-1000">
    <div
      style={{
        padding: "24px 20px 24px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        gap: 20
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>Find People</span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 10,
            color: "#334155",
            background: "#f1f5f9",
            border: "none",
            borderRadius: 6,
            padding: "2px 5px",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          <ChevronDown size={14} strokeWidth={2.5} />
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

    <div className="no-scrollbar" style={{ flex: 1, overflowY: "auto", padding: "2px 0" }}>
      <div style={{ padding: "2px 20px 10px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
          <UserSearch size={18} color="#0f172a" strokeWidth={2} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>People Keyword</span>
        </div>
        <div style={{ position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
          <input
            type="text"
            placeholder="Enter single keyword here..."
            value={keyword}
            onChange={e => onKeywordChange(e.target.value)}
            style={{
              width: "100%",
              paddingLeft: 24,
              paddingRight: 8,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: 14,
              border: "none",
              borderBottom: "2px solid #e2e8f0",
              borderRadius: 0,
              color: "#334155",
              outline: "none",
              boxSizing: "border-box",
              background: "transparent",
            }}
          />
        </div>
      </div>

      <div style={{ height: 1, background: "#e2e8f0", margin: "0 20px 8px 20px" }} />

      {FILTERS.map((filter) => (
        <div key={filter.label}>
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
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FilterIcon type={filter.label} style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#0f172a" }}>{filter.label}</span>
              </div>
              <span style={{ fontSize: 10, color: "#64748b" }}>{filter.placeholder}</span>
            </div>
            <ChevronDown
              size={14}
              style={{
                color: "#6b7280",
                transform: openFilters[filter.label] ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                flexShrink: 0,
                fontSize: 12, 
                fontWeight: 600
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
                  padding: "9px 12px",
                  fontSize: 13,
                  border: "1px solid #e5e7eb",
                  borderRadius: 6,
                  color: "#334155",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}
          <div style={{ margin: "0 20px", height: 1, backgroundColor: "#e2e8f0" }} />
        </div>
      ))}
    </div>

    <div
      style={{
        padding: "30px 20px",
        display: "flex",
        gap: 14,
        flexShrink: 0,
      }}
    >
      <button
        style={{
          height: "26px",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "9px 9px",
          fontSize: 10,
          fontWeight: 500,
          color: "#1e293b",
          background: "#e2e8f0",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        <FileSearchCorner size={12} />
        Save Search
      </button>
      <button
        style={{
          flex: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "5px 9px",
          fontSize: 10,
          fontWeight: 400,
          color: "#fff",
          background: "#1e293b",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        <Eye size={12} strokeWidth={2.5} />
        Preview Result
      </button>
    </div>
  </div>
);

export default FilterSidebar;
