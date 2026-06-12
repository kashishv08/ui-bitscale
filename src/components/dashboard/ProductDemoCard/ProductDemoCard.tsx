import { useState } from 'react';
import type { DemoChecklistItem } from '../../../types';

const INITIAL_CHECKLIST: DemoChecklistItem[] = [
  { label: 'Create your data list',        done: true  },
  { label: 'Learn about BitAgent',         done: true  },
  { label: 'Connect an integration',       done: true  },
  { label: 'Customise waterfall providers',done: false },
];

import { Check, FileCheck } from 'lucide-react';

const DemoIconSvgExact = () => (
  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 bg-[#4b5563]">
    <FileCheck size={22} color="white" strokeWidth={2} />
  </div>
);

const CustomCheckCircleIcon = ({ checked }: { checked: boolean }) => (
  checked ? (
    <div className="w-5 h-5 rounded-full bg-[#347FA9] flex items-center justify-center flex-shrink-0">
      <Check size={12} color="white" strokeWidth={3.5} />
    </div>
  ) : (
    <div className="w-5 h-5 rounded-full border-[1.5px] border-[#cbd5e1] flex-shrink-0 bg-white"></div>
  )
);

const ProductDemoCard = () => {
  const [checklist, setChecklist] = useState<DemoChecklistItem[]>(INITIAL_CHECKLIST);

  const toggleItem = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index].done = !newChecklist[index].done;
    setChecklist(newChecklist);
  };

  const completedCount = checklist.filter(item => item.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div className="border border-[#f1f5f9] rounded-[16px] p-6 shadow-sm bg-[#fafbfc]">
      <div className="flex items-center gap-3.5 mb-5">
        <DemoIconSvgExact />
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-[#1e293b] leading-tight mb-1">
            Complete product demo
          </p>
          <p className="text-[13px] text-[#475569]">
            92% of users nailed BitScale after this walkthrough
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%`, background: '#458564' }}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <span className="text-[13px] font-medium flex-shrink-0" style={{ color: '#458564' }}>
          {progressPercent}%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {checklist.map((item, index) => (
          <button 
            key={item.label} 
            onClick={() => toggleItem(index)}
            className="flex items-center gap-2.5 text-left group"
          >
            <CustomCheckCircleIcon checked={item.done} />
            <span className={`text-[14px] transition-colors ${item.done ? 'text-[#334155]' : 'text-[#475569] group-hover:text-[#1e293b]'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductDemoCard;
