import React, { useState, useRef, useEffect } from 'react';

function FAQ_Quantum_Landing() {
  return (
    <>
      <div className="FAQ_Quantum_Landing container flex flex-col items-center mx-auto mt-26">

        <div className="FAQ_Title text-center flex flex-col gap-5">
          <span className="text-3xl text-secondary-3">
            سوالات پرتکرار درباره باشگاه کوآنتوم
          </span>
          <p className="p-0 m-0 text-[16px] text-neutral-500">
            همه چیزهایی که باید درباره باشگاه مشتریان کوانتوم بدانید ، سوالات پرتکرار را اینجا پاسخ داده‌ایم تا مسیر برای شما شفاف‌تر باشد.
          </p>
        </div>

        <div className="FAQ_Content mt-8 w-2/3 p-6 rounded-lg flex flex-col gap-6">

          <AccordionItem title="آیا امکان انتقال امتیاز به دیگران وجود دارد؟" description={'در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.'}>
            در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.
          </AccordionItem>
          <AccordionItem title="آیا امکان انتقال امتیاز به دیگران وجود دارد؟" description={'در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.'}>
            در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.
          </AccordionItem>
          <AccordionItem title="آیا امکان انتقال امتیاز به دیگران وجود دارد؟" description={'در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.'}>
            در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.
          </AccordionItem>

        </div>

      </div>
    </>
  )
}

function AccordionItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isOpen
          ? `${contentRef.current.scrollHeight}px`
          : '0px'
      );
    }
  }, [isOpen]);

  return (
    <div className="rounded-lg overflow-hidden bg-gray-50">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-4 py-6 focus:outline-none cursor-pointer"
      >
        <span className="text-gray-700">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="transition-max-height duration-300 ease-in-out overflow-hidden px-4"
      >
        <div className="py-6 text-gray-700">
          <span className='text-sm text-gray-400'>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default FAQ_Quantum_Landing