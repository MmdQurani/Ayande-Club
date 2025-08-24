// src/Components/Modals/UserInfoModal.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../../assets/images/logo/logo.png'

export default function UserInfoModal() {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const userData = state?.userData;

  // console.log("UserInfoModal rendered", useLocation());

  // اگر بدون داده باشید، هیچ‌چیزی نمایش نده
  // if (!userData) return null;

  const handleSubmit = () => {
    // TODO: ارسال اطلاعات فرم به API
    // پس از موفقیت مستقیم navigate("/")
    // پس از موفقیت به مرحلهٔ تأیید کد برو
    navigate("/signup/agreements");
  };

  return (
    <>

      <ul className="space-y-5 my-4 w-full flex flex-col items-start text-sm text-neutral-600">
        <li className="w-full flex justify-between">
          <span>نام:</span>
          <span>محمد حسین</span>
        </li>
        <li className="w-full flex justify-between">
          <span>نام خانوادگی:</span>
          <span>میرابوالقاسمی</span>
        </li>
        <li className="w-full flex justify-between">
          <span>کد ملی:</span>
          <span>۰۰۶۴۳۲۴۲۸</span>
        </li>
        <li className="w-full flex justify-between">
          <span>نام پدر:</span>
          <span>میلاد</span>
        </li>
        <li className="w-full flex justify-between">
          <span>شماره شناسنامه:</span>
          <span>۰۰۲۵۶۷۲۸</span>
        </li>
        <li className="w-full flex justify-between">
          <span>تاریخ تولد:</span>
          <span>1373/11/28</span>
        </li>
        <li className="w-full flex justify-between">
          <span>کد بورسی:</span>
          <span>۲۵۴۱ م ج</span>
        </li>
        <li className="w-full flex justify-between">
          <span>شماره تماس:</span>
          <span>09368865114</span>
        </li>
        {/* <li>نام: {userData.firstName}</li>
          <li>نام خانوادگی: {userData.lastName}</li>
          <li>کد ملی: {userData.nationalId}</li>
          <li>نام پدر: {userData.fatherName}</li>
          <li>تاریخ تولد: {userData.birthDate}</li>
          <li>شماره تماس: {userData.phone}</li> */}
      </ul>

      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer mt-6 transition">
        تایید و ادامه
      </button>
    </>
  );
}
