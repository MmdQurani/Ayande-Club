import React, { useEffect } from 'react';
import Landing_title from '../../Components/Landing_title/Landing_title';
import Customer_Club_Introduction from '../../Components/Customer_Club_Introduction/Customer_Club_Introduction';
import Quantum_Card_Box from '../../Components/Quantum_Card_Box/Quantum_Card_Box';
import Route_Guide_Quantum from '../../Components/Route_Guide_Quantum/Route_Guide_Quantum';
import Quantum_Levels from '../../Components/Quantum_Levels/Quantum_Levels';
import FAQ_Quantum_Landing from '../../Components/FAQ_Quantum_Landing/FAQ_Quantum_Landing';
import MainModal from '../../Components/Modals/MainModal';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  } , []);

  return (
    <div className='LandingPage flex flex-col justify-start items-center' dir='rtl'>
      <div className='w-full h-auto'>
        <Landing_title />
        <Customer_Club_Introduction />
        <Quantum_Card_Box />
        <Route_Guide_Quantum />
        <Quantum_Levels />
        <FAQ_Quantum_Landing />

        {/* اینجا مودال */}
        <MainModal />
      </div>
    </div>
  );
}

export default LandingPage;
