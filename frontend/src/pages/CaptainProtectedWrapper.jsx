import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { captainDataContext } from '../context/CaptainContext';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [isloading, setisloading] = useState(true);
  const { captain, setcaptain } = useContext(captainDataContext);

  useEffect(() => {
    const verifyCaptain = async () => {
      if (!token) {
        navigate('/captain-login');
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setcaptain(response.data.captain);
        setisloading(false)
      } catch (error) {
        console.error(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      } 
    };

    verifyCaptain();
  }, [navigate, token, setcaptain]);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
