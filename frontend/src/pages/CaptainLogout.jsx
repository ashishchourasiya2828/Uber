import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
const CaptainLogout = () => {

    const [isloading, setisloading] = useState(true)

    const token = localStorage.getItem('token')
    console.log(token);
    const navigate = useNavigate()
    
    useEffect(() => {
    
       async function logoutcaptain(){
        if(!token){
            navigate('/captain-login')
            console.log("No token found");
            return;
        }
        try{
            await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response=>{
                console.log(response);
                localStorage.removeItem('token')
                navigate('/captain-login')
    
            })
        }
      catch(err){
            console.log("error during logout:",err);
            navigate("/captain-login");
        }   }
        
        logoutcaptain()
    }, [navigate])
    
    
  return (
    <div>
        <h1>logging out</h1>
    </div>
  )
}

export default CaptainLogout