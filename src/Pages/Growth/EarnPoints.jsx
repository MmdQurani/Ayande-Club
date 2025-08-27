import React, { useState } from 'react'
import GrowthTabs from '../../Components/GrowthTabs/GrowthTabs'
import useIsMobile from '../../Hooks/useIsMobile';
import not_record from "../../assets/images/not_record.png";
import DropdownFilter from '../../Components/DropdownFilter/DropdownFilter';
import MobileModal from '../../Components/Modals/MobileModal';

function EarnPoints() {
  const isMobile = useIsMobile(767);

  const data = [
    { id: 1, per: "هر خرید بالای 500 هزار تومان", activity: "خرید محصول", points: 50, type: "نقدی" },
    { id: 2, per: "هر معرفی موفق", activity: "دعوت از دوستان", points: 100, type: "سطح" },
    { id: 3, per: "هر تکمیل پروفایل", activity: "تکمیل اطلاعات کاربری", points: 20, type: "نقدی" },
    { id: 4, per: "هر خرید اشتراک", activity: "اشتراک ویژه", points: 200, type: "سطح" },
    { id: 5, per: "هر فعالیت روزانه", activity: "ورود روزانه", points: 10, type: "نقدی" },
    { id: 6, per: "هر نظر ثبت شده", activity: "ثبت نظر", points: 15, type: "سطح" },
    { id: 7, per: "هر تکمیل فرم نظرسنجی", activity: "نظرسنجی", points: 30, type: "نقدی" },
    { id: 8, per: "هر خرید بالای 500 هزار تومان", activity: "خرید محصول", points: 50, type: "متغیر" },
    { id: 9, per: "هر معرفی موفق", activity: "دعوت از دوستان", points: 100, type: "سطح" },
    { id: 10, per: "هر تکمیل پروفایل", activity: "تکمیل اطلاعات کاربری", points: 20, type: "نقدی" },
    { id: 11, per: "هر خرید اشتراک", activity: "اشتراک ویژه", points: 200, type: "متغیر" },
    { id: 12, per: "هر فعالیت روزانه", activity: "ورود روزانه", points: 10, type: "نقدی" },
    { id: 13, per: "هر نظر ثبت شده", activity: "ثبت نظر", points: 15, type: "سطح" },
    { id: 14, per: "هر تکمیل فرم نظرسنجی", activity: "نظرسنجی", points: 30, type: "متغیر" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("همه");
  const rowsPerPage = 10;

  const filteredData = filterType === "همه" ? data : data.filter(item => item.type === filterType);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const filterOptions = ["همه", "نقدی", "سطح", "متغیر"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <GrowthTabs>
      <div className='EarnPoints'>

        {/* هدر بالای جدول */}
        <div className='w-full h-auto flex flex-row justify-between items-center px-4 mb-4 space-x-2.5'>
          <span className="text-sm md:text-lg font-semibold text-secondary-2">شــرح امتیازات فعالیت ها</span>

          {!isMobile ?
            <DropdownFilter filterOptions={filterOptions} filterType={filterType} setFilterType={setFilterType} />
            :
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-30 px-4 py-2 text-sm border border-neutral-200 rounded-lg bg-white hover:bg-gray-50 focus:outline-none"
            >
              {/* {filterType} */}
              همه
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
          }

          {isMobile && (
            <MobileModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div className="flex flex-col gap-1.5 w-full">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFilterType(option);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 w-full cursor-pointer rounded-lg ${option === filterType
                        ? "bg-secondary-12 text-secondary-2 font-bold"
                        : "text-neutral-600 hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </MobileModal>
          )}


        </div>

        {/* جدول */}
        <div className="p-4">
          {!isMobile ? (
            <div className={`overflow-x-auto w-full ${filteredData.length > 0 ? "" : "h-[500px]"}`}>
              <table className="w-full h-full min-w-[900px] border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm">
                    <th className="h-[60px] py-3 px-4 text-center">ردیف</th>
                    <th className="h-[60px] py-3 px-4 text-center">در ازای هر</th>
                    <th className="h-[60px] py-3 px-4 text-center">نوع فعالیت</th>
                    <th className="h-[60px] py-3 px-4 text-center">کسب امتیاز</th>
                    <th className="h-[60px] py-3 px-4 text-center">نوع امتیاز</th>
                  </tr>
                </thead>
                <tbody className="relative">
                  {filteredData.length > 0 ? (
                    currentRows.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`text-center text-gray-700 text-sm ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } hover:bg-gray-100 transition`}
                      >
                        <td className="h-[60px] py-3 px-4">{row.id}</td>
                        <td className="h-[60px] py-3 px-4">{row.per}</td>
                        <td className="h-[60px] py-3 px-4">{row.activity}</td>
                        <td className="h-[60px] py-3 px-4 font-semibold">{row.points}</td>
                        <td className="h-[60px] py-3 px-4">{row.type}</td>
                      </tr>
                    ))
                  ) : (
                    <img
                      src={not_record}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                      alt="no record"
                    />
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={`grid grid-cols-1 gap-2.5 ${filteredData.length > 0 ? "" : "h-[450px] bg-white"}`}>
              {filteredData.length > 0 ? (
                currentRows.map((row) => (
                  <div key={row.id} className="bg-white text-sm rounded-xl shadow-md p-4 space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600">ردیف:</span>
                      <span>{row.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600">در ازای هر:</span>
                      <span>{row.per}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600">نوع فعالیت:</span>
                      <span>{row.activity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600">کسب امتیاز:</span>
                      <span className="font-semibold">{row.points}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600">نوع امتیاز:</span>
                      <span>{row.type}</span>
                    </div>
                  </div>
                ))
              ) : (
                <img
                  src={not_record}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                  alt="no record"
                />
              )}
            </div>
          )}

          {/* صفحه بندی */}
          <div className="flex justify-center items-center mt-6 space-x-3 text-sm">
            <button
              className="cursor-pointer disabled:cursor-default px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              قبلی
            </button>
            <span>
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              className="cursor-pointer disabled:cursor-default px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              بعدی
            </button>
          </div>
        </div>
      </div>
    </GrowthTabs>
  )
}

export default EarnPoints;
