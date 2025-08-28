import React, { useState } from 'react';

import letter from '../../assets/images/letter.png';
import not_record from '../../assets/images/not_record.png';

import useIsMobile from '../../Hooks/useIsMobile';

function Referrals() {
  const [referralLink] = useState('RF142UUU');

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert('لینک کپی شد!');
    });
  };

  const isMobile = useIsMobile(767);

  const data = [
    // { id: 1, per: "هر خرید بالای 500 هزار تومان", activity: "خرید محصول", points: 50, type: "نقدی" },
    // { id: 2, per: "هر معرفی موفق", activity: "دعوت از دوستان", points: 100, type: "سطح" },
    // { id: 3, per: "هر تکمیل پروفایل", activity: "تکمیل اطلاعات کاربری", points: 20, type: "نقدی" },
    // { id: 4, per: "هر خرید اشتراک", activity: "اشتراک ویژه", points: 200, type: "سطح" },
    // { id: 5, per: "هر فعالیت روزانه", activity: "ورود روزانه", points: 10, type: "نقدی" },
    // { id: 6, per: "هر نظر ثبت شده", activity: "ثبت نظر", points: 15, type: "سطح" },
    // { id: 7, per: "هر تکمیل فرم نظرسنجی", activity: "نظرسنجی", points: 30, type: "نقدی" },
    // { id: 8, per: "هر خرید بالای 500 هزار تومان", activity: "خرید محصول", points: 50, type: "متغیر" },
    // { id: 9, per: "هر معرفی موفق", activity: "دعوت از دوستان", points: 100, type: "سطح" },
    // { id: 10, per: "هر تکمیل پروفایل", activity: "تکمیل اطلاعات کاربری", points: 20, type: "نقدی" },
    // { id: 11, per: "هر خرید اشتراک", activity: "اشتراک ویژه", points: 200, type: "متغیر" },
    // { id: 12, per: "هر فعالیت روزانه", activity: "ورود روزانه", points: 10, type: "نقدی" },
    // { id: 13, per: "هر نظر ثبت شده", activity: "ثبت نظر", points: 15, type: "سطح" },
    // { id: 14, per: "هر تکمیل فرم نظرسنجی", activity: "نظرسنجی", points: 30, type: "متغیر" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("همه");
  const rowsPerPage = 5;

  const filteredData = filterType === "همه" ? data : data.filter(item => item.type === filterType);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="Referrals w-full h-max flex flex-col justify-start items-center">
      <div className="Referrals_header w-full h-full flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start gap-4">

        <div className="w-[446px] h-[428px] py-6 px-6 flex flex-col justify-start items-start gap-y-8 bg-secondary-13 border border-secondary-5 rounded-lg">
          <img className='object-contain w-[45px]' src={letter} alt="" />
          <span className="text-[16px] text-neutral-800">دعـوت از دوستان</span>
          <span className="text-sm text-neutral-500 leading-8">
            در ازای دعوت از دوستان خود در این سامانه شما میتوانید 1000 امتیاز برای خود کسب کنید.
          </span>

          <div className="w-full">
            <p className="text-xs text-neutral-500 mb-2">لینک معرف شما</p>
            <div className="relative w-full">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none"
              />

              <button
                onClick={handleCopy}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-green-100 text-green-600 cursor-pointer text-sm px-4 py-1 rounded-sm font-medium  hover:bg-green-200 transition-all duration-200"
              >
                کپی
              </button>
            </div>
          </div>
        </div>

        <div className="w-[446px] h-[428px] py-6 px-6 flex flex-col justify-start items-start bg-secondary-13 border border-secondary-5 rounded-lg">
          <span className="text-[16px] text-neutral-800">مراحـل دعـوت از دوستان</span>

          <div className="w-full h-full flex flex-col justify-around items-start mt-6 space-y-2">

            <div className="flex flex-row justify-start items-start gap-x-2">
              <span className="min-w-8 min-h-8 btn_gradient text-white rounded-lg flex justify-center items-center">1</span>
              <span className="flex flex-col justify-start items-start space-y-2">
                <p className="text-[16px] text-secondary-2">ارسـال کد دعـوت</p>
                <p className="text-sm text-neutral-500 leading-6">
                  کد دعوت را با دوستان خود از طریق لینک به اشتراک بگذارید.
                </p>
              </span>
            </div>

            <div className="flex flex-row justify-start items-start gap-x-2">
              <span className="min-w-8 min-h-8 btn_gradient text-white rounded-lg flex justify-center items-center">2</span>
              <span className="flex flex-col justify-start items-start space-y-2">
                <p className="text-[16px] text-secondary-2">فعـال‌سـازی کاربـر</p>
                <p className="text-sm text-neutral-500 leading-6">
                  از دوست خود بخواهید حساب سودآیند خود را فعال کند.
                </p>
              </span>
            </div>

            <div className="flex flex-row justify-start items-start gap-x-2">
              <span className="min-w-8 min-h-8 btn_gradient text-white rounded-lg flex justify-center items-center">3</span>
              <span className="flex flex-col justify-start items-start space-y-2">
                <p className="text-[16px] text-secondary-2">دریـافـت جـایـزه</p>
                <p className="text-sm text-neutral-500 leading-6">
                  پس از فعال سازی حساب توسط دوست شما؛ جایزه به عنوان دارایی صندوق به حساب شما اضافه خواهد شد.
                </p>
              </span>
            </div>
          </div>
        </div>

      </div>

      <div className='Referrals_body w-full h-full mt-6'>
        <div className='w-full h-[42px] flex flex-row justify-between items-center'>
          <span className='text-lg text-neutral-800'>سوابق دعوت ها</span>

          <span className='text-xs bg-secondary-13 px-4 h-full w-max flex flex-row items-center justify-start gap-x-2.5 rounded-md'> <p className='inline text-lg text-secondary-2'>563241</p> امتیاز شما تا این لحظه به پاس دعـوت از دوسـتان</span>
        </div>


        <div className="p-4">
          {!isMobile ? (
            <div className={`overflow-x-auto w-full ${filteredData.length > 0 ? "h-[255px]" : "h-[255px]"}`}>
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
            <div className={`relative grid grid-cols-1 gap-2.5 ${filteredData.length > 0 ? "" : "h-[450px] bg-white"}`}>
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
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2  object-contain"
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

    </div>
  );
}

export default Referrals;
