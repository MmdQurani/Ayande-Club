import React, { useState, useRef, useEffect } from 'react';
import { getAllActive } from '../../APIs/apiServices';

function FAQ_Quantum_Landing() {

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getAllActive()
      .then(res => {
        setFaqs(res.data.items);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));

  }, []);
  if (loading) return <div className='w-full container mx-auto flex justify-center mt-26'>
    <span className='text-neutral-400 hover:text-neutral-700 cursor-pointer'>در حال بارگذاری...</span>
  </div>;


  return (
    <>
      <div className="FAQ_Quantum_Landing container flex flex-col items-center mx-auto mt-26">

        <div className="FAQ_Title text-center flex flex-col gap-5">
          <span className="text-3xl text-secondary-3">
            سوالات پرتکرار درباره باشگاه کوآنتوم
          </span>
          <p className="p-0 m-0 text-[16px] text-neutral-500 leading-8">
            همه چیزهایی که باید درباره باشگاه مشتریان کوانتوم بدانید ، سوالات پرتکرار را اینجا پاسخ داده‌ایم تا مسیر برای شما شفاف‌تر باشد.
          </p>
        </div>

        <div className="FAQ_Content mt-8 xl:w-2/3 w-full p-6 rounded-lg flex flex-col gap-6">

          {faqs.map(item =>
            <AccordionItem key={item.id} title={item.question} description={item.answer}>
              در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.
            </AccordionItem>
          )}

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
    <div className="rounded-lg overflow-hidden bg-gray-50 w-full">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-4 py-6 focus:outline-none cursor-pointer"
      >
        <span className="text-gray-700 leading-8 max-w-[90%] text-start">{title}</span>
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
          <span className='text-sm text-gray-400 leading-8'>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default FAQ_Quantum_Landing