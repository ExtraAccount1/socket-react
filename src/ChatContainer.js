// ChatContainer.js

import React from 'react';

export const ChatContainer = ({ selectedUser }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 relative">
      <h2 className="text-lg font-bold mb-4 underline">Chat</h2>
      {selectedUser ? (
        <div>
          <h3>Chatting with User {selectedUser}</h3>
          {/* Display chat messages here */}
        </div>
      ) : (
        // <p>Please select a user to start chatting</p>

        <h1 className="text-3xl font-bold underline">
          Hardik
        </h1>)}
      <div className="fixed bottom-4 left-8 right-8 bg-white p-4 rounded-lg shadow-md z-10"> {/* Add z-10 for higher stack order */}
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
        {/* You can add a send button or any other relevant elements */}
      </div>
    </div>
  );
};

