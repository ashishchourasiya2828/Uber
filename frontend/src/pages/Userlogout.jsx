import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No token found');
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          console.log('Logout successful');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error during logout:', error);
        navigate('/login'); // Navigate even on error
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Userlogout;
  