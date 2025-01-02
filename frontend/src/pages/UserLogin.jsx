import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'
import axios from 'axios';



const UserLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password,setPassword ] = useState("")


    const {user,setuser} = useContext(userContext)

    const userLoginHandler = async (e)=>{
        e.preventDefault();

        const userdata= {
            email,
            password
        }

        const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userdata)

        // console.log(response);
        

        if(response.status == 200){
            const data = response.data
            setuser(data.user)
            // console.log(data);
            localStorage.setItem("token",data.token);
            navigate("/home")
        }
        
        
        setEmail('')
        setPassword('')
    }

  return (
    <div>
        <div className='p-7 flex flex-col justify-between h-screen  ' >
        <div>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

<form onSubmit={(e)=>{userLoginHandler(e)}} className='mt-10' >
    <h3 className='text-xl font-semibold mb-3' >What's your email</h3>
    <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='px-4 py-3 w-full border bg-[#eee] rounded mb-6 placeholder:text-base ' type="email" placeholder='email@example.com' name="" id="" />
    <h3 className='text-xl font-semibold mb-3' >Enter Password</h3>
    <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='px-4 py-3 w-full border bg-[#eee] rounded mb-7' type="password" placeholder='password' />
    <button   className='w-full bg-black rounded text-white  px-4 py-2 font-semibold text-lg' >Login</button>
</form>

<div>
    <p className='text-center mt-2 font-medium' >New here? <Link className='text-blue-500' to='/signup' >Create Account</Link> </p>
</div>
        </div>
        <div className='mb-6' >
            <Link to="/captain-login" className='w-full bg-green-500 text-white py-2 flex  items-center font-medium rounded justify-center' >Sign in as Captain</Link>
        </div>
        </div>
    </div>
  )
}

export default UserLogin