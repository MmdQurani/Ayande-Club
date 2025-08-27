import React, { useState } from "react";

const DropdownFilter = ({ filterOptions, filterType, setFilterType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* دکمه اصلی */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-40 px-4 py-2 text-sm border border-neutral-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none"
      >
        {filterType}
        <svg
          className={`w-4 h-4 ml-2 transform transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* لیست آیتم‌ها */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border border-neutral-200 rounded-lg z-10">
          {filterOptions.map(option => (
            <li key={option}>
              <button
                onClick={() => {
                  setFilterType(option);
                  setIsOpen(false);
                }}
                className={[
                  "block w-full text-right px-4 py-2 text-sm transition cursor-pointer",
                  option === filterType
                    ? "bg-secondary-12 text-secondary-2 font-bold"
                    : "text-neutral-600 hover:bg-gray-100"
                ].join(" ")}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownFilter;
