import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black flex items-center justify-end px-6 py-4 space-x-4">
      
      <button
        className={`
          px-6 py-2 rounded-full font-medium text-white
          border border-gray-700 bg-transparent
          hover:bg-gray-900 hover:border-gray-600
          transition-all duration-200
        `}
      >
        Sign In
      </button>

    
      <button
        className={`
          px-6 py-2 rounded-full font-medium text-black
          bg-gradient-to-r from-yellow-400 to-yellow-500
          hover:from-yellow-500 hover:to-yellow-600
          shadow-md hover:shadow-lg
          transition-all duration-200
        `}
      >
        Sign Up
      </button>
    </header>
  );
};

export default Navbar;