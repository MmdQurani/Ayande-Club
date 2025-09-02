import React, { useEffect, useState } from 'react';
import useIsMobile from '../../Hooks/useIsMobile';

import not_record from '../../assets/images/not_record.png';
import { getOrderTransactions } from '../../APIs/orderApi';
import useFormatDate from '../../Hooks/useFormatDate';

function Points() {
  const isMobile = useIsMobile(767);

  const [orderTransactions, setOrderTransactions] = useState([]);
  // const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("همه");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const tabs = ["همه", "امتیازات دریافتی", "امتیازات خرج شده"];

  const filteredData =
    activeTab === "همه"
      ? orderTransactions
      : orderTransactions.filter(item =>
        activeTab === "امتیازات دریافتی"
          ? item.type === 1
          : item.type === 2
      );

  const rowsPerPage = 7;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const getStatusClasses = (status) => {
    switch (status) {
      case "در دسترس":
        return "bg-green-50 text-green-600";
      case "منقضی شده":
        return "bg-red-50 text-red-600";
      case "مشخص نشده":
        return "bg-yellow-50 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getTransactionType = (type) => {
    switch (type) {
      case 1:
        return "واریز";
      case 2:
        return "خرج شده";
      default:
        return "-";
    }
  };

  const getTransactionReason = (reason) => {
    switch (reason) {
      case 8:
        return "ورود";
      case 9:
        return "دعوت";
      default:
        return "-";
    }
  };



  const orderTransactionsList = async () => {
    const data = await getOrderTransactions();
    // setTotalCount(data.data.totalCount);
    setOrderTransactions(data.data.items);
    return data
  }
  // const getAllOrderTransactionsList = async () => {
  //   const data = await getOrderTransactions({ pageSize: totalCount, pageIndex: 1 });
  //   setTotalCount(data.data.totalCount);
  //   setOrderTransactions(data.data.items);
  //   console.log("Transactions:", data);
  //   return data
  // }

  useEffect(() => {
    const callOrderMethod = async () => {
      try {
        setLoading(true);
        await orderTransactionsList();
        // await getAllOrderTransactionsList();
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };
    callOrderMethod();
  }, []);

  if (loading) return <div className="text-center py-10">در حال بارگذاری...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;


  return (
    <div className="p-4 ">
      {/* Tabs */}
      <div className='w-full flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-4 mb-6'>
        <div className="w-full md:w-1/2 flex border-b-2 border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
              className={`px-4 py-2 text-xs md:text-sm font-medium transition cursor-pointer ${activeTab === tab
                ? "border-b-2 border-secondary-2 text-secondary-2 font-semibold"
                : "text-gray-500 hover:text-secondary-2"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='download_btn_table w-full flex flex-row md:w-max space-x-2.5'>

          <button className='border-1 border-secondary-5 text-secondary-5 rounded-md px-4 h-[36px] flex flex-row items-center justify-center space-x-2 text-sm cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 11V17L11 15" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 17L7 15" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>خروجی Excel</span>
          </button>

          <button className='border-1 border-secondary-5 text-secondary-5 rounded-md px-4 h-[36px] flex flex-row items-center justify-center space-x-2 text-sm cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 11V17L11 15" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 17L7 15" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>دانلود PDF</span>
          </button>

          <button className='border-1 border-secondary-5 text-secondary-5 rounded-md size-[36px] flex flex-row items-center justify-center space-x-2 text-sm cursor-pointer hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#473A33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.5701 18.5V14.6" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.5701 7.45V5.5" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.57 12.65C17.0059 12.65 18.17 11.4859 18.17 10.05C18.17 8.61401 17.0059 7.44995 15.57 7.44995C14.134 7.44995 12.97 8.61401 12.97 10.05C12.97 11.4859 14.134 12.65 15.57 12.65Z" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.42993 18.5V16.55" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.42993 9.4V5.5" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.43008 16.55C9.86602 16.55 11.0301 15.3859 11.0301 13.95C11.0301 12.514 9.86602 11.35 8.43008 11.35C6.99414 11.35 5.83008 12.514 5.83008 13.95C5.83008 15.3859 6.99414 16.55 8.43008 16.55Z" stroke="#473A33" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

        </div>
      </div>

      {!isMobile ? (

        <div className={`overflow-x-auto w-full ${orderTransactions.length > 0 ? '' : 'h-[650px]'}`}>
          <table className="w-full min-w-[1000px] border-collapse bg-white h-full rounded-xl overflow-hidden">

            <thead>
              <tr className="bg-table-1 text-gray-600 text-sm">
                <th className="h-[60px] py-3 px-4 text-center">ردیف</th>
                <th className="h-[60px] py-3 px-4 text-center">نوع تراکنش</th>
                <th className="h-[60px] py-3 px-4 text-center">علت تراکنش</th>
                <th className="h-[60px] py-3 px-4 text-center">مقدار امتیاز</th>
                <th className="h-[60px] py-3 px-4 text-center">تاریخ و زمان</th>
                <th className="h-[60px] py-3 px-4 text-center">کد یا آدرس</th>
                <th className="h-[60px] py-3 px-4 text-center">وضعیت</th>
              </tr>
            </thead>
            <tbody className='relative'>
              {orderTransactions.length > 0 ? currentRows.map((row, index) => (
                <tr
                  key={(currentPage - 1) * rowsPerPage + (index + 1)}
                  className={`text-center text-gray-700 text-sm ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                >
                  <td className="h-[80px] py-3 px-4">{(currentPage - 1) * rowsPerPage + (index + 1)}</td>
                  <td className="h-[80px] py-3 px-4">{row.type ? getTransactionType(row.type) : '-'}</td>
                  <td className="h-[80px] py-3 px-4">{row.reason ? getTransactionReason(row.reason) : '-'}</td>
                  <td className="h-[80px] py-3 px-4 font-semibold">{row.score ? row.score : '-'}</td>
                  <td className="h-[80px] py-3 px-4" > {row.createDate ? useFormatDate(row.createDate) : '-'} ساعت</td>
                  <td className="h-[80px] py-3 px-4">{row.code ? row.code : '-'}</td>
                  <td className="h-[80px] py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
                :
                <img src={not_record} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain' alt="" />
              }
            </tbody>

          </table>
        </div>

      ) : (

        <div className={`grid grid-cols-1 gap-2.5 ${orderTransactions.length > 0 ? '' : 'h-[450px] bg-white'}`}>
          {orderTransactions.length > 0 ? currentRows.map((row, index) => (
            <div key={(currentPage - 1) * rowsPerPage + (index + 1)} className="bg-white text-sm rounded-xl shadow-md p-4 space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">ردیف:</span>
                <span>{(currentPage - 1) * rowsPerPage + (index + 1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">نوع تراکنش:</span>
                <span>{row.type ? getTransactionType(row.type) : "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">علت:</span>
                <span>{row.reason ? getTransactionReason(row.reason) : "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">امتیاز:</span>
                <span className="font-semibold">{row.score ? row.score : "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">تاریخ:</span>
                <span>{row.createDate ? useFormatDate(row.createDate) : "-"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">کد:</span>
                <span>{row.code ? row.code : "-"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-600">وضعیت:</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))
            :
            <img src={not_record} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain' alt="" />
          }
        </div>

      )}

      {/* Pagination */}
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
  );
}

export default Points;
