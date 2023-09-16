import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Retrieve user information from localStorage
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  // Logout function to clear session and user data
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the authentication token
    localStorage.removeItem('userData'); // Remove user data
    navigate('/signin'); // Redirect to the homepage or another appropriate route after logout
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
        
        {/* Display user information */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Name: {userData.name}</p>
          <p className="text-lg font-semibold">Email: {userData.email}</p>
        </div>
        
        {/* Logout link */}
        <a
          id="logout-link"
          href="#"
          onClick={handleLogout}
          className="text-red-500 hover:underline"
        >
          Logout
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
