import React from 'react';
import pendingIcon from '../assets/Pending.png';
import completedIcon from '../assets/Completed.png';
import cancelledIcon from '../assets/Cancelled.png';
import statusPending from '../assets/Pending.png';
import statusCompleted from '../assets/Completed.png';
import statusCancelled from '../assets/Cancelled.png';

const Recent = () => {
  const tabs = [
    { label: 'Pending', icon: pendingIcon, active: false, count: 951 },
    { label: 'Completed', icon: completedIcon, active: true, count: 509 },
    { label: 'Cancelled', icon: cancelledIcon, active: false, count: 0 },
  ];

  const trades = [
    { type: 'Buy', pair: 'BTC/USD', amount: '0.0034', price: '$68,350.00', total: '$232.79', date: 'Oct 28, 2025 14:23', status: 'Completed', statusIcon: statusCompleted },
    { type: 'Buy', pair: 'BTC/USD', amount: '0.0152', price: '$68,310.50', total: '$1,038.32', date: 'Oct 28, 2025 13:58', status: 'Completed', statusIcon: statusCompleted },
    { type: 'Sell', pair: 'BTC/USD', amount: '0.0018', price: '$68,400.20', total: '$123.12', date: 'Oct 28, 2025 13:41', status: 'Pending', statusIcon: statusPending },
    { type: 'Buy', pair: 'BTC/USD', amount: '0.0041', price: '$68,280.00', total: '$279.95', date: 'Oct 28, 2025 12:48', status: 'Completed', statusIcon: statusCompleted },
    { type: 'Sell', pair: 'BTC/USD', amount: '0.0105', price: '$68,320.00', total: '$717.36', date: 'Oct 28, 2025 12:10', status: 'Cancelled', statusIcon: statusCancelled },
    { type: 'Buy', pair: 'BTC/USD', amount: '0.0029', price: '$68,360.00', total: '$198.24', date: 'Oct 28, 2025 11:42', status: 'Completed', statusIcon: statusCompleted },
    { type: 'Buy', pair: 'BTC/USD', amount: '0.0200', price: '$68,100.00', total: '$1,362.00', date: 'Oct 28, 2025 09:47', status: 'Completed', statusIcon: statusCompleted },
  ];

  return (
    <div className="bg-black border border-gray-700 rounded-xl p-6 shadow-xl h-full flex flex-col font-poppins">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold font-poppins bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent">RECENT TRADES</h2>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-base font-bold px-4 py-2 rounded-full font-poppins">
          951 + 509
        </div>
      </div>
      <div className="flex gap-4 mb-8 border-b border-gray-800 font-poppins">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 pb-3 px-1 transition-all font-poppins ${
              tab.active
                ? 'border-b-2 border-yellow-400 text-yellow-400'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <img src={tab.icon} alt={tab.label} className="w-5 h-5" />
            <span className="text-base font-medium font-poppins">{tab.label}</span>
            {tab.count > 0 && (
              <span className={`text-sm font-poppins ${tab.active ? 'text-yellow-300' : 'text-gray-400'}`}>
                ({tab.count})
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Hide scrollbar on table scroll */}
      <div className="flex-1 font-poppins overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="hide-scrollbar">
          <table className="w-full text-sm font-poppins">
            <thead>
              <tr className="text-gray-500 border-b border-gray-800 font-poppins">
                <th className="text-left pb-4 text-base font-semibold font-poppins">Active Trades</th>
                <th className="text-left pb-4 text-base font-semibold font-poppins">BTC Amount</th>
                <th className="text-left pb-4 text-base font-semibold font-poppins">Price(USD)</th>
                <th className="text-left pb-4 text-base font-semibold font-poppins">Total Value</th>
                <th className="text-left pb-4 text-base font-semibold font-poppins">Date/Time</th>
                <th className="text-left pb-4 text-base font-semibold font-poppins">Status</th>
              </tr>
            </thead>
            <tbody className="font-poppins">
              {trades.map((trade, i) => (
                <tr key={i} className="border-b border-gray-800 hover:bg-gray-900/50 transition font-poppins">
                  <td className="py-4 font-poppins">
                    <span className={`text-base font-medium font-poppins ${trade.type === 'Buy' ? 'text-yellow-400' : 'text-white'}`}>
                      {trade.type} {trade.pair}
                    </span>
                  </td>
                  <td className="py-4 text-gray-300 text-base font-poppins">{trade.amount}</td>
                  <td className="py-4 text-gray-300 text-base font-poppins">{trade.price}</td>
                  <td className="py-4 text-gray-300 text-base font-poppins">{trade.total}</td>
                  <td className="py-4 text-gray-400 text-base font-poppins">{trade.date}</td>
                  <td className="py-4 font-poppins">
                    <img
                      src={trade.statusIcon}
                      alt={trade.status}
                      className="w-5 h-5"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recent;