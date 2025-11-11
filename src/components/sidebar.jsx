import React from 'react';
import { NavLink } from 'react-router-dom';
import Rich from '../assets/Rich.png';
import walletIcon from '../assets/Wallet.png';
import dashboardIcon from '../assets/Dashboard.png';
import tradersIcon from '../assets/Traders.png';
import marketsIcon from '../assets/Markets.png';
import settingsIcon from '../assets/Settings.png';
import supportIcon from '../assets/Support.png';
import PoolsIcon from '../assets/Pools.png';

const menuItems = [
  { label: 'Wallet & Fiet', icon: walletIcon, to: '/wallet' },
  { label: 'Dashboard', icon: dashboardIcon, to: '/' },
  { label: 'Traders', icon: tradersIcon, to: '/traders' },
  { label: 'Markets', icon: marketsIcon, to: '/markets' },
  { label: 'Settings', icon: settingsIcon, to: '/settings' },
  { label: 'Support', icon: supportIcon, to: '/support' },
  { label: 'Pools', icon: PoolsIcon, to: '/Pools' },
];

const Sidebar = () => (
  <div className="h-screen w-20 md:w-64 bg-black flex flex-col py-6 px-2 md:px-4 border-r border-gray-800 font-poppins transition-all duration-300">
    <div className="px-1 md:px-2 mb-10 flex flex-col items-center">
      <img src={Rich} alt="Rich Logo" className="h-10 md:h-14 w-auto" />
    </div>
    <nav className="flex-1 space-y-2">
      {menuItems.map((item) => (
        <NavLink
          key={item.label}
          exact={item.to === '/'}
          to={item.to}
          className={({ isActive }) =>
            `w-full flex items-center gap-3 px-2 md:px-4 py-4 rounded-lg text-left font-medium transition-all duration-200 group font-poppins justify-center md:justify-start ` +
            (isActive && item.to !== '/logout'
              ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 border border-yellow-600/50 shadow-lg shadow-yellow-500/10'
              : 'text-gray-400 hover:text-white hover:bg-gray-900')
          }
        >
          <img
            src={item.icon}
            alt={item.label}
            className={`w-6 h-6 transition-all`}
          />
          <span className="text-base font-medium font-poppins hidden md:inline">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);

export default Sidebar;