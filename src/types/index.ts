import React from 'react';

export interface NavItemConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  suffix?: React.ReactNode;
  section?: 'main' | 'other';
}

export interface GridRowData {
  id: number;
  name: string;
  icon: React.ReactNode;
  editor: string;
  editorInitials: string;
  editorColor?: string;
  editorImage?: string;
  date: string;
  isParent?: boolean;
  isStarred?: boolean;
}

export interface DemoChecklistItem {
  label: string;
  done: boolean;
}

export interface FilterItem {
  label: string;
  placeholder: string;
}

export type GridTab = 'grids' | 'starred';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  initials: string;
  color: string;
  size?: AvatarSize;
}

export interface TopBarProps {
  onMenuClick?: () => void;
}

export interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  suffix?: React.ReactNode;
  onClick?: () => void;
}

export interface WelcomeHeaderProps {
  userName?: string;
  onFindPeopleClick?: () => void;
  onFindCompaniesClick?: () => void;
  onNewGridClick?: () => void;
}

export interface ResultsPanelProps {
  onClose: () => void;
  onMobileFiltersOpen: () => void;
}

export interface FilterSidebarProps {
  keyword: string;
  onKeywordChange: (v: string) => void;
  openFilters: Record<string, boolean>;
  onToggleFilter: (label: string) => void;
  onMobileClose: () => void;
}

export interface GridRowProps {
  row: GridRowData;
  isStarred: boolean;
  isExpanded: boolean;
  onToggleStar: () => void;
  onToggleExpand: () => void;
}

export interface FindPeopleModalProps {
  onClose: () => void;
}
