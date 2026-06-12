import React from 'react';
import { Briefcase, Globe, MapPin, Users, TrendingUp, HelpCircle } from 'lucide-react';

const FilterIcon = ({ type, style }: { type: string; style?: React.CSSProperties }) => {
  const size = style?.fontSize ? Number(style.fontSize) : 16;
  const color = style?.color || "#374151";
  const fw = Number(style?.fontWeight) || 400;
  const strokeWidth = fw >= 600 ? 2 : 1.5;

  if (type === "Job Title") return <Briefcase size={size} color={color} style={style} strokeWidth={strokeWidth} />;
  if (type === "Company Website") return <Globe size={size} color={color} style={style} strokeWidth={strokeWidth} />;
  if (type === "Person Location" || type === "Company Location") return <MapPin size={size} color={color} style={style} strokeWidth={strokeWidth} />;
  if (type === "Company Headcount") return <Users size={size} color={color} style={style} strokeWidth={strokeWidth} />;
  if (type === "Management Level") return <TrendingUp size={size} color={color} style={style} strokeWidth={strokeWidth} />;
  return <HelpCircle size={size} color={color} style={style} strokeWidth={strokeWidth} />;
};

export default FilterIcon;
