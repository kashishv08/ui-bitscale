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
