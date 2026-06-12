import { Briefcase, Globe, MapPin, Users, TrendingUp, HelpCircle } from 'lucide-react';

const FilterIcon = ({ type }: { type: string }) => {
  const size = 16;
  const color = "#374151";
  const strokeWidth = 1.5;

  if (type === "Job Title") return <Briefcase size={size} color={color} strokeWidth={strokeWidth} />;
  if (type === "Company Website") return <Globe size={size} color={color} strokeWidth={strokeWidth} />;
  if (type === "Person Location" || type === "Company Location") return <MapPin size={size} color={color} strokeWidth={strokeWidth} />;
  if (type === "Company Headcount") return <Users size={size} color={color} strokeWidth={strokeWidth} />;
  if (type === "Management Level") return <TrendingUp size={size} color={color} strokeWidth={strokeWidth} />;
  return <HelpCircle size={size} color={color} strokeWidth={strokeWidth} />;
};

export default FilterIcon;
