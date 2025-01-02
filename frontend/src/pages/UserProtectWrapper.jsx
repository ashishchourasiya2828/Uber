import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../context/UserContext'; // Assuming you have a UserContext

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const {  setuser } = useContext(userContext); // Assuming you have a user context

  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`, // Adjust the endpoint as necessary
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setuser(response.data.user); 
        setIsLoading(false);// Assuming the response structure
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/login');
      } 
    };

    verifyUser();
  }, [navigate, token, setuser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;