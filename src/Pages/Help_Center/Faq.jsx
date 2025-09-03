import React, { useEffect, useState } from 'react'
import { AccordionItem } from '../../Components/FAQ_Quantum_Landing/FAQ_Quantum_Landing'
import { getAllActive } from '../../APIs/apiServices';
import Loading from '../../Components/Loading/Loading';

function Faq() {

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getAllActive()
      .then(res => {
        setFaqs(res.data.items);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));

  }, []);

  if (loading) return <div className='w-full h-full flex justify-center items-center'><Loading /></div>

  return (
    <div className='faq w-full h-full bg-white rounded-lg p-8'>

      <div className='faq_title px-4'>
        <span className='text-[16px] text-neutral-800'>سوالات متداول</span>
      </div>

      <div className='w-full h-full space-y-6 mt-12'>

        {faqs.map(item =>
          <AccordionItem key={item.id} title={item.question} description={item.answer}>
            در حال حاضر امتیازهای باشگاه فقط برای استفاده خود فرد قابل مصرف هستند و انتقال امتیاز به دیگران ممکن نیست.
          </AccordionItem>
        )}

      </div>

    </div>
  )
}

export default Faq