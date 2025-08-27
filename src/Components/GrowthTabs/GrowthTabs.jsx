import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GrowthTabs({children}) {
  const tabs = [
    { id: 1, title: "راهنمای امتیازات", href: "/growth/points-guide" },
    { id: 2, title: "شرح کسب امتیاز", href: "/growth/earn-points" },
    { id: 3, title: "قوانین باشگاه", href: "/growth/club-rules" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="PointsGuide w-full h-max p-4 pb-12 mb-12 md:mt-0 bg-white border-1 border-neutral-200 rounded-lg">
      <div className="w-full flex flex-col justify-start items-center space-y-4 mb-6">
        <div className="PointsGuide_header w-full flex border-b-2 border-gray-200">
          {tabs.map(tab => {
            const isActive = location.pathname === tab.href;
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.href)}
                className={`px-4 py-2 text-xs md:text-sm font-medium transition cursor-pointer ${isActive
                    ? "border-b-2 border-secondary-2 text-secondary-2 font-semibold"
                    : "text-gray-500 hover:text-secondary-2"
                  }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        <div className='PointsGuide_body w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default GrowthTabs;
