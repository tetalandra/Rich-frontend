import React from 'react';
import Logo from '../assets/Rich.png';
import Wallet from '../assets/Wallet.png';
import Dashboard from '../assets/Dashboard.png';
import Traders from '../assets/Traders.png';
import Markets from '../assets/Markets.png';
import Settings from '../assets/Settings.png';
import Support from '../assets/Support.png';
import Pools from '../assets/Pools.png';

const IconButton = ({ src, alt, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-14 h-14 flex items-center justify-center rounded-xl transition-colors ${
        active
          ? 'bg-gradient-to-r from-white/20 to-yellow-500/20 ring-1 ring-yellow-400'
          : 'hover:bg-white/5'
      }`}
    >
      <img src={src} alt={alt} className="w-7 h-7 object-contain" />
    </button>
  );
};

const SupportSidebar = () => {
  return (
    <aside className="w-36 bg-black border-r border-gray-900 flex flex-col items-center py-6 gap-6 h-screen">
      <img src={Logo} alt="Rich" className="w-24 h-auto" />
      <div className="w-px h-1 bg-gray-800" />
      <div className="flex flex-col items-center gap-6 flex-grow-0">
        <IconButton src={Wallet} alt="Wallet" onClick={() => (window.location.hash = '')} />
        <IconButton src={Dashboard} alt="Dashboard" onClick={() => (window.location.hash = '')} />
        <IconButton src={Traders} alt="Traders" />
        <IconButton src={Markets} alt="Markets" />
        <IconButton src={Settings} alt="Settings" />
        <IconButton src={Support} alt="Support" active onClick={() => (window.location.hash = '#/support')} />
        <IconButton src={Pools} alt="Pools"/>
      </div>
      {/* This empty div creates space at the bottom */}
      <div className="flex-grow" />
    </aside>
  );
};

export default SupportSidebar;