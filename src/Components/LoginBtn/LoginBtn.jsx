import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginBtn() {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className='Login_Btns'>
        <button onClick={handleLoginClick} className='text-sm border-1 border-gray-300 cursor-pointer bg-white hover:bg-gray-50 px-4 py-2 rounded-md'>
          ورود به حساب کاربری
        </button>
      </div>
    </>
  )
}

export default LoginBtn