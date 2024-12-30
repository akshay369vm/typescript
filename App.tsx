import React, { useState } from 'react';

interface User {
  username: string;
  password: string;
}

interface Organization {
  name: string;
  icon: string;
}

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [organizationIcon, setOrganizationIcon] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleExecuteTool = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (organizationName.trim() === '') return;
    console.log('Tool executed');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome, {username}</h1>
          <form onSubmit={handleExecuteTool} className="flex flex-col mb-4">
            <label className="text-sm text-gray-700 mb-2">Organization Name:</label>
            <input
              type="text"
              value={organizationName}
              onChange={e => setOrganizationName(e.target.value)}
              className="p-2 pl-10 text-sm text-gray-700 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Execute Tool
            </button>
          </form>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="flex flex-col mb-4">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
          <label className="text-sm text-gray-700 mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="p-2 pl-10 text-sm text-gray-700 mb-4"
          />
          <label className="text-sm text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 pl-10 text-sm text-gray-700 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;