import React, { useState } from "react";

import marker_pin_01 from '../../assets/icons/ContactUs/marker-pin-01.png'
import email_01 from '../../assets/icons/ContactUs/email-01.png'
import help_center_01 from '../../assets/icons/ContactUs/help-center-01.png'
import post_code_01 from '../../assets/icons/ContactUs/post-code-01.png'
import faks_01 from '../../assets/icons/ContactUs/faks-01.png'
import not_record from '../../assets/images/not_record.png'

import useIsMobile from "../../Hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const tabs = [
    { id: 1, title: "ارتباط با ما" },
    { id: 2, title: "تیکت" },
  ];

  const [activeTab, setActiveTab] = useState(1);

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

  const navigate = useNavigate();

  const renderContent = () => {
    if (activeTab === 1) {
      return (
        <div className="w-full h-full flex flex-col gap-y-6">
          <div className="p-6 py-10 md:p-6 h-auto md:h-[275px] flex flex-col justify-between text-sm bg-white border border-neutral-200 rounded-lg text-gray-700">
            <span className="text-[16px] text-neutral-800">دفتر مرکزی کارگزاری بانک آینده</span>
            <div className="mt-8 md:mt-4 w-full space-y-6">
              <p className="text-sm md:text-[16px] leading-7 text-neutral-500 flex flex-row justify-start items-center gap-x-3">
                <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                  <img className="object-contain" src={marker_pin_01} alt="" />
                </div>
                <span>تهران، خیابان ولنجک،بین خیابان بیستم و بیست و دوم ،پلاک 54</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <span className="text-sm md:text-[16px] text-neutral-500 flex flex-row justify-start items-center gap-x-3">
                  <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                    <img className="object-contain" src={email_01} alt="" />
                  </div>
                  <span>koantom@babc.ir</span>
                </span>
                <span className="text-sm md:text-[16px] text-neutral-500 flex flex-row justify-start items-center gap-x-3">
                  <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                    <img className="object-contain" src={help_center_01} alt="" />
                  </div>
                  <span>مرکز خدمات: ‌02142764000</span>
                </span>
                <span className="text-sm md:text-[16px] text-neutral-500 flex flex-row justify-start items-center gap-x-3">
                  <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                    <img className="object-contain" src={post_code_01} alt="" />
                  </div>
                  <span>کد پستی: 1985746353</span>
                </span>
                <span className="text-sm md:text-[16px] text-neutral-500 flex flex-row justify-start items-center gap-x-3">
                  <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                    <img className="object-contain" src={faks_01} alt="" />
                  </div>
                  <span>فکس: 02122180514</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 h-auto md:h-[415px] flex flex-col justify-around text-sm bg-white border border-neutral-200 rounded-lg text-gray-700">

            <span className="text-[16px] text-neutral-800 flex flex-row justify-start items-center gap-x-3">
              <div className="w-10 h-10 bg-secondary-14 flex justify-center items-center rounded-lg">
                <img className="object-contain" src={email_01} alt="" />
              </div>
              <span>ارسال ایمیل</span>
            </span>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div className="md:max-w-[382px] w-full md:col-span-1 col-span-2 flex flex-col gap-y-2.5">
                <span className="text-sm text-neutral-800">نام و نام خانوادگی</span>
                <input className="block p-2.5 w-full h-[48px] border-1 border-neutral-300 rounded-lg focus:outline-0" type="text" />
              </div>
              <div className="md:max-w-[382px] w-full md:col-span-1 col-span-2 flex flex-col gap-y-2.5">
                <span className="text-sm text-neutral-800">آدرس ایمیل</span>
                <input className="block p-2.5 w-full h-[48px] border-1 border-neutral-300 rounded-lg focus:outline-0" type="text" />
              </div>
              <div className="w-full flex flex-col gap-y-2.5 col-span-2 ">
                <span className="text-sm text-neutral-800">متن پیغام</span>
                <textarea
                  className="block p-2.5 w-full h-[120px] border border-neutral-300 rounded-lg focus:outline-0 p-2 resize-none"
                />
              </div>
            </div>

          </div>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div className="p-4 md:p-8 text-gray-700 bg-white border border-neutral-200 rounded-lg">
          <p className="text-sm md:text-[16px] leading-9">
            ممکن است پاسخگویی به برخی تیکت‌ها تا 24 ساعت طول بکشد.البته در صورت نیاز به بررسی‌های بیشتر، ممکن است این زمان کمی بیشتر شود. اطمینان می‌دهیم که کارشناسان ما در سریع‌ترین زمان ممکن به تیکت شما رسیدگی خواهند کرد و هرگونه سوال یا مشکلی که دارید با حداکثر دقت بررسی خواهد شد.
          </p>


          <div className="p-0 md:p-4 mt-8">

            <div className="w-full flex flex-row justify-between items-center mb-6">
              <span className="text-[16px] text-secondary-2">فهرست تیکت ها</span>

              <button onClick={() => navigate("/help-center/new-ticket")} className="btn_gradient h-[36px] px-6 rounded-lg flex flex-row items-center justify-center gap-x-2 cursor-pointer text-sm md:text-[16px] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path d="M6.5 0.75V11.25M1.25 6H11.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                تیکت جدید
              </button>
            </div>

            {!isMobile ? (
              <div className={`overflow-x-auto w-full ${filteredData.length > 0 ? "h-[255px]" : "h-[255px]"}`}>
                <table className="w-full h-full min-w-[900px] border-collapse bg-white rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 text-sm">
                      <th className="h-[60px] py-3 px-4 text-center">جزئیات</th>
                      <th className="h-[60px] py-3 px-4 text-center">شناسه</th>
                      <th className="h-[60px] py-3 px-4 text-center">وضعیت</th>
                      <th className="h-[60px] py-3 px-4 text-center">تاریخ ثبت</th>
                      <th className="h-[60px] py-3 px-4 text-center">موضوع تیکت</th>
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
            {totalPages > 1 ?
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
              : null}
          </div>

        </div>
      );
    }
  };

  return (
    <div className="w-full h-max p-4">
      <div className="w-full flex flex-col justify-start items-center space-y-4 mb-6">
        {/* Tabs */}
        <div className="w-full flex border-b-2 border-gray-200">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition cursor-pointer ${isActive
                  ? "border-b-2 border-secondary-2 text-secondary-2 font-semibold"
                  : "text-gray-500 hover:text-secondary-2"
                  }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="PointsGuide_body w-full h-full">{renderContent()}</div>
      </div>
    </div>
  );
}

export default ContactUs;
