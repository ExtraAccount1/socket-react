// Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = ({ username , users }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const socket = io('http://localhost:3000');
    console.log("login user",username)
    console.log("all user",users)

    useEffect(() => {
        socket.emit('login', username);

        socket.on('receive_message', (data) => {
            console.log("receive_message",data)
            setMessages(prevMessages => [...prevMessages, data]);
        });

        socket.on('update_users', (onlineUsersData, allUsersData) => {
            setOnlineUsers(onlineUsersData.filter(user => user !== username));
            console.log("allUsersData update_users",allUsersData)
            setAllUsers(users.map(user => user.username)); // Extract usernames
        });

        return () => {
            socket.disconnect();
        };
    }, [socket, username]);

    const handleUserSelection = (user) => {
        setSelectedUser(user);
        setMessages([]);
    };

    const sendMessage = () => {
        if (message.trim() !== '' && selectedUser !== '') {
            console.log("send_message",message,"selectedUser",selectedUser)
            socket.emit('send_message', { message, to: selectedUser });
            setMessages(prevMessages => [...prevMessages, { message, username }]);
            setMessage('');
        }
    };

    const isUserOnline = (user) => {
        return onlineUsers.includes(user);
    };

    return (
        <div className='flex h-screen'>
            <div className='w-1/4 bg-gray-200 p-4'>
                <h2 className='text-lg font-semibold mb-4'>Online Users</h2>
                {console.log("allUsers",allUsers)}
                {console.log("onlineUsers",onlineUsers)}
                {allUsers.map((user) => (
                    <div
                        key={user}
                        onClick={() => handleUserSelection(user)}
                        className={`p-2 cursor-pointer ${user === selectedUser ? 'bg-gray-300' : isUserOnline(user) ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                        {user}
                    </div>
                ))}
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='bg-gray-200 p-4'>
                    Logged in as: {username}
                </div>
                <div className='flex-1 overflow-y-auto bg-gray-100 p-4'>
                    {messages.map((msg, index) => (
                        <div key={index} className='mb-2'>
                            <div className={`p-2 rounded-lg ${msg.from === username ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}>
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center p-4'>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='flex-1 border rounded p-2 mr-2'
                        placeholder='Type your message...'
                    />
                    <button
                        onClick={sendMessage}
                        className='bg-blue-500 text-white px-4 py-2 rounded'
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
