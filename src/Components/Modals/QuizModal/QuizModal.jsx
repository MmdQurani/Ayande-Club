// src/Components/Modals/QuizModal/QuizModal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";

export default function QuizModal() {
  const navigate = useNavigate();

  // نمونه سوالات چهار گزینه‌ای
  const questions = [
    {
      id: 1,
      text: "در چه سالی بورس تهران راه‌اندازی شد؟",
      options: [
        { id: "a", label: "1341" },
        { id: "b", label: "1354" },
        { id: "c", label: "1366" },
        { id: "d", label: "1370" },
      ],
    },
    {
      id: 2,
      text: "نماد ‘فولاد’ مربوط به کدام صنعت است؟",
      options: [
        { id: "a", label: "فلزات اساسی" },
        { id: "b", label: "بانک" },
        { id: "c", label: "خودرو" },
        { id: "d", label: "پتروشیمی" },
      ],
    },
    {
      id: 3,
      text: "نماد ‘فولاد’ مربوط به کدام صنعت است؟",
      options: [
        { id: "a", label: "فلزات اساسی" },
        { id: "b", label: "بانک" },
        { id: "c", label: "خودرو" },
        { id: "d", label: "پتروشیمی" },
      ],
    },
    {
      id: 4,
      text: "در چه سالی بورس تهران راه‌اندازی شد؟",
      options: [
        { id: "a", label: "1" },
        { id: "b", label: "2" },
        { id: "c", label: "3" },
        { id: "d", label: "4" },
      ],
    },
    {
      id: 5,
      text: "نماد ‘فولاد’ مربوط به کدام صنعت است؟",
      options: [
        { id: "a", label: "فلزات 5" },
        { id: "b", label: "6" },
        { id: "c", label: "7" },
        { id: "d", label: "2" },
      ],
    },
    {
      id: 6,
      text: "نماد ‘فولاد’ مربوط به کدام صنعت است؟",
      options: [
        { id: "a", label: "فلزات 1" },
        { id: "b", label: "2" },
        { id: "c", label: "3" },
        { id: "d", label: "4" },
      ],
    },
  ];

  // تنظیمات پیجینیشن
  const pageSize = 3;
  const totalPages = Math.ceil(questions.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  // فقط سوالات صفحه جاری
  const start = (currentPage - 1) * pageSize;
  const currentQuestions = questions.slice(start, start + pageSize);

  // state ذخیره پاسخ‌ها به شکل { [questionId]: optionId }
  const [answers, setAnswers] = useState({});

  // وقتی کاربر یک چک‌باکس را انتخاب می‌کند
  const handleChange = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev, [questionId]: prev[questionId] === optionId ? null : optionId
    }));
  };

  // ارسال جواب‌ها و انتقال به مرحله بعدی
  const handleSubmit = e => {
    e.preventDefault();
    console.log("پاسخ‌ها:", answers);
    // اینجا می‌توانید اعتبارسنجی کنید یا به سرور بفرستید
    // بعد از ارسال، برای مثال:
    navigate("/signup/security");
  };

  const goTo = page => { // تغییر صفحه
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-lg p-6 w-[498px] max-w-[95%] h-[610px] max-h-[90%] overflow-y-auto shadow-lg flex flex-col"
        dir="rtl"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[36px] object-contain self-center mt-4"
        />

        <span className="text-[16px] mt-4 text-center text-secondary-3">ثبت نام باشگاه مشتریان کارگزاری آینده</span>
        <span className="text-xs mt-3 mb-4 text-center text-secondary-3">طبق قوانین سازمان باید در آزمون شرکت کرده و به سوالات پاسخ بدهید</span>

        <form onSubmit={handleSubmit} className="space-y-2 h-full mt-2">
          {currentQuestions.map(q => (
            <div key={q.id} className="space-y-2 bg-neutral-100 p-2.5 px-4 rounded-lg">
              <p className="text-xs 2xl:text-sm font-semibold">{q.text}</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {q.options.map(opt => (
                  <label
                    key={opt.id}
                    className="flex items-center gap-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={answers[q.id] === opt.id}
                      onChange={() => handleChange(q.id, opt.id)}
                      className="w-4 h-4 text-secondary-3 border-neutral-300 rounded focus:ring-secondary-3"
                    />
                    <span className="text-[10px] 2xl:text-xs text-neutral-500">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* ناوبری صفحات */}
          <div className="flex justify-between items-center">

            <button
              type="button"
              onClick={() => goTo(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="قبلی"
              className="w-10 h-10 bg-secondary-2 rounded-lg flex items-center justify-center disabled:bg-transparent disabled:border-1 disabled:border-gray-300 disabled:text-gray-300 text-white disabled:cursor-default cursor-pointer transition"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* شماره صفحات */}
            <div className="flex gap-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => goTo(num)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${num === currentPage
                    ? "bg-secondary-2 text-white"
                    : "bg-neutral-200 text-neutral-600"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>


            <button
              type="button"
              onClick={() => goTo(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="بعدی"
              className="w-10 h-10 bg-secondary-2 rounded-lg flex items-center justify-center disabled:bg-transparent disabled:border-1 disabled:border-gray-300 disabled:text-gray-300 text-white disabled:cursor-default cursor-pointer transition"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

          </div>


          <button type="submit" disabled={currentPage !== totalPages} className={` w-full py-3 mt-2 rounded-lg text-white transition ${currentPage === totalPages ? "bg-gradient-to-t from-secondary-2 to-secondary-2/45 hover:bg-secondary-2/75 cursor-pointer" : "bg-gray-300 cursor-not-allowed"}`} >
            ثبت پاسخ‌ها
          </button>

        </form >
      </div >
    </div >
  );
}
