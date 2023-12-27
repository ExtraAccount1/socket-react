// Sidebar.js

import React from 'react';
import { users } from './usersData'; // Assuming you have user data

export const Sidebar = ({ handleUserSelect }) => {
  return (
    <div className="w-1/5 bg-gray-200">
      <h2 className="text-lg font-bold p-4">Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserSelect(user.id)} className="pcursor-pointer hover:bg-gray-300-4 ">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

