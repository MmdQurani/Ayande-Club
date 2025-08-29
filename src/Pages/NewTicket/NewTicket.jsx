import React, { useState } from "react";

function NewTicket() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="p-6 md:p-10 text-gray-700 bg-white border border-neutral-200 rounded-2xl shadow-sm">
      <span className="text-secondary-2 text-[16px] font-semibold">
        کاربر گرامی
      </span>
      <p className="text-neutral-500 text-sm md:text-[16px] mt-4 leading-7">
        لطفاً برای ارسال تیکت، موضوع و پیام خود را به‌طور واضح و دقیق بنویسید.
        این کار به کارشناسان ما کمک می‌کند تا بهتر و سریع‌تر به درخواست شما
        پاسخ دهند و در حل مشکل شما موثرتر عمل کنند.
      </p>

      <div className="h-full w-full mt-8 flex flex-col gap-y-8">
        {/* موضوع */}
        <div className="w-full sm:w-[420px] flex flex-col gap-y-2">
          <p className="text-sm font-medium">موضوع</p>
          <input
            type="text"
            placeholder="موضوع خود را وارد کنید..."
            className="border border-neutral-300 rounded-xl w-full h-[48px] px-3 focus:ring-2 focus:ring-secondary-2 focus:border-secondary-2 outline-none transition"
          />
        </div>

        {/* پیام */}
        <div className="w-full sm:w-[420px] flex flex-col gap-y-2">
          <p className="text-sm font-medium">پیام</p>
          <textarea
            placeholder="پیام خود را وارد کنید..."
            className="border border-neutral-300 rounded-xl w-full h-[120px] p-3 resize-none focus:ring-2 focus:ring-secondary-2 focus:border-secondary-2 outline-none transition"
          />
        </div>

        {/* بارگذاری تصویر */}
        <div className="w-full sm:w-[420px] flex flex-col gap-y-2">
          <p className="text-sm font-medium">بارگذاری تصویر</p>
          <div className="flex items-center gap-4">
            {!image ? (
              <label
                htmlFor="upload"
                className="flex flex-col items-center justify-center w-full h-[140px] border-2 border-dashed border-neutral-300 rounded-xl cursor-pointer hover:bg-neutral-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21"
                    stroke="#A3822F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-neutral-500 text-sm mt-3">
                  بارگذاری تصویر
                </span>
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            ) : (
              <div className="relative w-[140px] h-[140px] rounded-xl overflow-hidden shadow">
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={removeImage}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 rounded-full p-1 shadow transition"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="w-full flex flex-row justify-end gap-x-4 mt-4">
          <button className="btn_gradient cursor-pointer rounded-lg w-[180px] h-[40px] text-white text-sm font-medium shadow hover:opacity-90 transition">
            ارسال تیکت
          </button>
          <button className="border border-secondary-2 text-secondary-2 rounded-lg w-[180px] h-[40px] text-sm font-medium hover:bg-secondary-2/10 transition">
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTicket;
