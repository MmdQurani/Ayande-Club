// src/Components/Modals/AgreementsModal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../../assets/images/logo/logo.png'
import info_circle from '../../../assets/icons/info-circle.png'

export default function AgreementsModal() {
  const navigate = useNavigate();

  // فهرست قراردادها (می‌توانید این آرایه را از props یا state جای دیگر بگیرید)
  const contracts = [
    { id: 1, name: "قرارداد اول" },
    { id: 2, name: "قرارداد دوم" },
    { id: 3, name: "قرارداد سوم" },
  ];

  // وضعیت هر چک‌باکس
  const [checkedMap, setCheckedMap] = useState(
    contracts.reduce((acc, c) => ({ ...acc, [c.id]: true }), {})
  );

  // بررسی اینکه همهٔ چک‌باکس‌ها تیک خورده باشند
  const allChecked = contracts.every(c => checkedMap[c.id]);

  const toggleCheck = id => {
    setCheckedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleConfirm = () => {
    if (!allChecked) return;
    // TODO: ارسال تأیید قراردادها به سرور
    // fetch("/api/accept-contracts", { method: "POST", body: JSON.stringify(contracts) });

    // هدایت به صفحه بعد یا داشبورد
    navigate("/signup/quiz", { replace: true });
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center" dir="rtl">
      {/* بک‌دراپ تار و نیمه‌شفاف */}
      <div
        className="absolute inset-0 bg-black/15 backdrop-blur-sm"
      />

      {/* پنجره مودال */}
      <div className="relative bg-white rounded-lg p-6 w-[498px] max-w-[90%] min-h-[480px] max-h-[90%] h-max pt-6 pb-12 shadow-lg flex flex-col justify-center items-center">

        <img src={logo} alt="logo" className="w-[90px] h-[36px] object-contain mt-6" />

        <span className="text-[16px] mt-6 mb-4 text-secondary-3">ثبت نام باشگاه مشتریان کارگزاری آینده</span>
        <span className="text-xs  mb-6 text-neutral-600">قراردادهایی که باید به تایید کاربر برسد</span>

        {/* لیست قراردادها */}
        <div className="space-y-4 w-full mb-6">
          {contracts.map(contract => (
            <div
              key={contract.id}
              className="flex items-center justify-between border-1 border-neutral-300 rounded-md p-4"
            >

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checkedMap[contract.id]}
                  onChange={() => toggleCheck(contract.id)}
                  className="w-4 h-4 text-blue-600 cursor-pointer"
                />
                <span className="text-sm">{contract.name}</span>
              </label>

              <button
                onClick={() => {
                  // می‌توانید لینک قرارداد را باز کنید
                  // window.open(`/contracts/${contract.id}.pdf`, "_blank")
                }}
                className="text-xs px-3 py-1.5 bg-green-100 text-green-600 rounded-md cursor-pointer transition"
              >
                مشاهده قرارداد
              </button>

            </div>
          ))}
        </div>

        {/* پیغام تأیید */}
        <div className="text-xs w-full bg-blue-100/50 text-blue-900 py-3.5 px-8 rounded-md mb-6 flex flex-row items-center justify-center gap-x-1">
          <img src={info_circle} alt="" />
          <p>
            تأیید قراردادها به منزلهٔ پذیرش تمامی مفاد آن می‌باشد.
          </p>
        </div>

        <button
          disabled={!allChecked}
          onClick={handleConfirm}
          className={`w-full py-2 rounded-lg cursor-pointer mt-6 transition ${!allChecked ? "bg-neutral-300 text-white" : "bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white"}`}>
          تایید و ادامه
        </button>
      </div>
    </div>
  );
}
