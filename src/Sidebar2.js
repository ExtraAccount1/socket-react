// Sidebar2.js

import React from 'react';

export const Sidebar2 = () => {
    return (
        <div className="bg-gray-800 text-white h-screen w-1/5 fixed top-0 left-0 overflow-y-auto z-40 ">
           
                <div className="p-4 mt-9">
                    {/* Sidebar links */}
                    <ul>
                        <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
                            <a href="#" className="block text-white hover:text-black font-bold">Home</a>
                        </li>
                        <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
                            <a href="#" className="block text-white hover:text-black font-bold">Shorts</a>
                        </li>
                        <li className="py-2 p-4 cursor-pointer hover:bg-gray-300 rounded-full">
                            <a href="#" className="block text-white hover:text-black font-bold">Your Channels</a>
                        </li>
                        {/* Add more links here */}
                    </ul>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Sidebar2;
