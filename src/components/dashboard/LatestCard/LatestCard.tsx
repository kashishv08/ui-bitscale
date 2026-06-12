import { useEffect, useState } from 'react';

const CAROUSEL_DATA = [
  {
    theme: { bg: '#f2f7fb', accent: '#417e9f', dotInactive: '#a4bed0' },
    title: 'How to Integrate 2 Way HubSpot',
    description: 'Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple aad our API key through the integrations pa...'
  },
  {
    theme: { bg: '#fdf4f6', accent: '#c44a78', dotInactive: '#dfa6ba' },
    title: 'How to find LinkedIn Post using Bitscale',
    description: 'This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...'
  },
  {
    theme: { bg: '#f4f8f4', accent: '#468364', dotInactive: '#97bca9' },
    title: 'How to set Custom API in waterfall',
    description: 'This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...'
  },
  {
    theme: { bg: '#f7f5f9', accent: '#876ea4', dotInactive: '#c0b0cf' },
    title: 'Introducing Grid Scheduling',
    description: 'This walkthrough covers how you can find the top performing posts on LinkedIn based on a keyword and all information of the people who posted...'
  }
];

import { Play } from 'lucide-react';

const PlayIconCircle = () => (
  <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center shadow-md relative z-10 transition-transform hover:scale-110 cursor-pointer pl-0.5">
    <Play size={12} fill="black" strokeWidth={0} />
  </div>
);

const LatestCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const currentData = CAROUSEL_DATA[activeIndex];

  return (
    <div 
      className="rounded-[16px] overflow-hidden transition-colors duration-500 ease-in-out  pb-0 p-5 shadow-sm"
      style={{ backgroundColor: currentData.theme.bg }}
    >
      <div className="flex items-center justify-between mb-4">
        <span 
          className="text-[15px] font-medium transition-colors duration-500"
          style={{ color: currentData.theme.accent }}
        >
          Latest from Bitscale
        </span>

        <div className="flex items-center gap-1.5">
          {CAROUSEL_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-500 cursor-pointer hover:opacity-80 ${
                i === activeIndex ? 'w-[18px] h-[6px]' : 'w-[6px] h-[6px]'
              }`}
              style={{
                backgroundColor: i === activeIndex ? currentData.theme.accent : currentData.theme.dotInactive
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-5">
        <div className="flex-shrink-0 w-full sm:w-[150px] h-[140px] sm:h-[110px] bg-white rounded-[8px] relative flex items-center justify-center overflow-hidden border border-black/5 shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
          <div className="absolute top-3 left-3 right-3 flex flex-col gap-2">
            <div className="h-[3px] bg-gray-300 rounded-full opacity-60 w-full"></div>
            <div className="h-[3px] bg-gray-300 rounded-full opacity-60 w-3/4"></div>
            <div className="h-[3px] bg-gray-300 rounded-full opacity-60 w-5/6"></div>
            <div className="h-[3px] bg-gray-300 rounded-full opacity-60 w-2/3"></div>
          </div>
          <PlayIconCircle />
          <div className="absolute bottom-2 right-2 w-5 h-5 bg-gray-400 rounded-full opacity-40"></div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <p className="text-[15px] font-medium text-[#1e293b] leading-snug transition-colors duration-500 line-clamp-2">
            {currentData.title}
          </p>
          <p className="text-[13px] text-[#64748b] mt-1.5 leading-[1.45] line-clamp-3 transition-colors duration-500">
            {currentData.description}
          </p>
          <p className="text-[12px] text-[#94a3b8] mt-2">Posted today</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
