// Navbar2.js

import React, { useState } from 'react';

export const Navbar2 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (<>

    <div className="bg-gray-200 p-4 flex items-center justify-between z-50 fixed w-full top-0">
      <button
        onClick={toggleCollapse}
        className="lg:hidden block text-gray-600 focus:outline-none"
      >
        {isCollapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>


      <h2 className="text-2xl font-extrabold text-black-200">Hardik</h2>
      <div className={`lg:flex w-full lg:w-auto ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white focus:outline-none py-2 pl-4 pr-12 rounded-lg text-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 20l-4-4m4 0l-4 4m0-16a8 8 0 110 16 8 8 0 010-16z"
            />
          </svg>
        </div>

      </div>

      {/* Right side: Avatar */}
      <img
        src="user-avatar.jpg"
        alt="User Avatar"
        className="w-10 h-10 rounded-full order-1"
      />
    </div>
  </>
  );
};

export default Navbar2;
