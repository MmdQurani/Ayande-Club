import React from 'react'

function InfoCard({ title, data , style , children }) {
  return (
    <div className={`w-full ${style ? style : 'h-[385px]'} flex flex-col justify-start gap-2 items-start bg-white border border-neutral-200 rounded-lg`}>
      {/* عنوان کارت */}
      <div className="w-full flex flex-row h-max pb-4 border-b border-neutral-200 border-dashed p-4">
        <span className="font-medium text-neutral-700">{title}</span>
      </div>

      {/* محتوا */}
      <div className="flex flex-col w-full justify-around h-full text-sm text-neutral-500 gap-4 p-4">
        {data.map((item, index) => (
          <div key={index} className="w-full flex flex-row items-center justify-between gap-x-6">
            <span>{item.label}</span>
            <span className='text-end'>{item.value}</span>
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}


export default InfoCard