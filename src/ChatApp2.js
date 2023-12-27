// ChatApp2.js

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ProductList } from './ProductList';

export const ChatApp2 = () => {
  const [selectedUser, setSelectedUser] = useState(null); // To keep track of the selected user

  // Function to handle user selection
  const handleUserSelect = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <>
      <ProductList />
      {/* // <div className="flex h-screen">
    //   <Sidebar handleUserSelect={handleUserSelect} />
    //   <ChatContainer selectedUser={selectedUser} />
    // </div> */}
    </>
  );
};