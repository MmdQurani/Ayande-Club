import React from 'react'

function Link_Menu_Item_Mobile({ svg, title, closeBtn = false }) {
  return (
    <div className='link_menu_item_mobile flex flex-row justify-between w-full items-center space-x-2 stroke-secondary-3'>
      <div className='flex flex-row justify-center items-center space-x-2'>

        <div className='size-10 bg-secondary-1 stroke-secondary-3 p-2 rounded-xl'>
          {svg}
        </div>
        <span className='text-[16px] text-secondary-3'>{title}</span>

      </div>


      {!closeBtn ?
        <svg xmlns="http://www.w3.org/2000/svg" className='stroke-secondary-3' width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        : null}
    </div>
  )
}

export default Link_Menu_Item_Mobile