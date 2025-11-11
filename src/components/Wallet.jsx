import React from 'react';

const Wallet = () => {
  return (
    <div className="bg-black border border-gray-700 rounded-xl p-6 shadow-xl h-full flex flex-col text-white font-poppins">
      
      <h2 className="text-white text-xl font-semibold mb-6 font-poppins">WALLET</h2>

  
      <div className="mb-6">
        <div className="text-yellow-400 text-4xl font-bold font-poppins">15,087.21</div>
        <div className="text-gray-400 text-base font-poppins">USD</div>
      </div>

      
      <div className="mb-6">
        
        <div className="flex gap-3 mb-2">
      
          <div className="flex-1 h-10 bg-gray-800 border-2 border-yellow-400 rounded-lg"></div>
          
          <div className="flex-1 h-10 bg-gray-800 border-2 border-yellow-400 rounded-lg"></div>
        </div>

        
        <div className="flex justify-between text-gray-400 text-sm px-1 font-poppins">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

  
      <div className="mb-6">
        <div className="text-white text-2xl font-medium font-poppins">MBE ABC</div>
        <div className="text-yellow-400 text-3xl font-bold font-poppins">68,257.45</div>
      </div>

      
      <div className="mb-6">
        <div className="flex items-center justify-between text-gray-400 text-base mb-2 font-poppins">
          <span>Low</span>
          <span>Low</span>
        </div>

        
        <div className="relative h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full overflow-hidden">
          
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
        </div>
      </div>

      
      <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all mb-6 shadow-lg text-lg font-poppins">
        BUY BITCOIN
      </button>

      
      <div className="border-t border-gray-700 pt-4 space-y-4 text-base font-poppins">
        <div className="flex justify-between text-gray-400">
          <span>Date:</span>
          <span className="text-white font-poppins">Oct 28 2025 - 10:13 AM</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Status:</span>
          <span className="text-green-400 font-medium font-poppins">Confirmed</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Network:</span>
          <span className="text-white font-poppins">Bitcoin (BTC)</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>From:</span>
          <span className="text-white text-right font-mono text-sm font-poppins">bc1qxy2k...x2a3f7j6h</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>To:</span>
          <span className="text-white text-right font-mono text-sm font-poppins">1A1zP1eP...5c4d5db</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Pool:</span>
          <span className="text-white text-right font-mono text-sm font-poppins">BTC Growth – 1B4Y...</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Your share:</span>
          <span className="text-white font-poppins">25%</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Amount:</span>
          <span className="text-white font-poppins">0.5 USDC to BTC</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Fee:</span>
          <span className="text-white font-poppins">0.0001 BTC</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Value:</span>
          <span className="text-white font-poppins">$28.17</span>
        </div>
        <div className="flex justify-between items-center text-gray-400 pt-3 border-t border-gray-700">
          <span>TxID:</span>
          <span className="text-yellow-400 font-mono text-sm cursor-pointer hover:underline font-poppins">
            0x3a...a29a
          </span>
        </div>
      </div>
    </div>
  );
};

export default Wallet;