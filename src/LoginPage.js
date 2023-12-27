import React, { useState } from 'react';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { username: 'Hardik', password: '123' },
    { username: 'Chirag', password: '123' },
    { username: 'Tilak', password: '123' },
    { username: 'Shailendra', password: '123' },
    { username: 'Deep', password: '123' }
  ];

  const handleLoginClick = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      handleLogin(username,users);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white rounded shadow p-8 w-1/3'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Login</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='border rounded p-2 mb-4 block w-full'
          placeholder='Enter your username...'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border rounded p-2 mb-4 block w-full'
          placeholder='Enter your password...'
        />
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <button
          onClick={handleLoginClick}
          className='bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
