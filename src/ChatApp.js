import React from 'react';

export const ChatApp = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    // Add more users as needed
  ];

  const messages = [
    { id: 1, userId: 1, text: 'Hey there!' },
    { id: 2, userId: 2, text: 'Hi! How can I help you?' },
    // Add more messages as needed
  ];

  return (
    <div className="flex h-screen">
      {/* User List */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-2">Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} className="mb-2">{user.name}</li>
          ))}
        </ul>
      </div>

      {/* Chat Section */}
      <div className="w-3/4 bg-white p-4">
        <div className="h-4/5 border mb-4 overflow-y-scroll">
          {messages.map(message => (
            <div key={message.id} className="mb-2">
              <span className="font-semibold">{users.find(user => user.id === message.userId)?.name}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex">
          <input type="text" className="flex-1 border rounded p-2 mr-2" placeholder="Type a message..." />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </div>
      </div>
    </div>
  );
};

//  default ChatApp;
