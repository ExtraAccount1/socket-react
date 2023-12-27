import React from 'react';
import { Sidebar2 } from './Sidebar2';
import { Navbar2 } from './Navbar2';
import { MainContainer } from './MainContainer';

export const App2 = () => {
  return (
    <div>
      <Navbar2 />
      <div className="mt-16 flex">
        <Sidebar2 />
        <div className="md:flex-1">
          <MainContainer />
        </div>
      </div>
    </div>

  );
};

