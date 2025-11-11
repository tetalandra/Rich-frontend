import React, { useEffect, useState } from 'react';
import SupportInfo from './SupportInfo';
import SupportForm from './SupportForm';
import SupportSidebar from './SupportSidebar';
import ProfileImg from '../assets/big.png';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-900 w-full">
      <div className="flex items-center gap-3 font-poppins px-2 py-1">
        <span className="font-semibold text-xl md:text-2xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-white bg-clip-text text-transparent">
          Support Center
        </span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400 font-poppins">
        <img src={ProfileImg} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-yellow-600/50" />
        <div className="text-right">
          <div className="text-white text-base">Big McDonalds</div>
          <div className="text-xs md:text-sm text-gray-500">151210122027</div>
        </div>
      </div>
    </div>
  );
};

const SupportPage = () => {
  const [_, setTick] = useState(0);
  useEffect(() => {
    const onHash = () => setTick((t) => t + 1);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins flex w-full">
      <SupportSidebar />
      <div className="flex-1 min-h-screen flex flex-col w-full">
        <Topbar />
        <div className="flex-1 w-full px-0 py-3">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <div className="w-full h-full p-3 md:p-4">
              <SupportInfo />
            </div>
            <div className="w-full h-full p-2">
              <SupportForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;