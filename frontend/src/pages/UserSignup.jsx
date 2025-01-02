import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../context/UserContext';

const UserSignup = () => {

    const navigate = useNavigate();

    const {user,setuser} = useContext(userContext)
    
    
    const [email, setEmail] = useState("")
    const [password,setPassword ] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")


    const userLoginHandler = async (e)=>{
        e.preventDefault();

        
        const newUser = {
            fullname:{
                firstname,
                lastname
            },
            email,
            password
        }

        const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

        if(response.status === 201){
            const data = response.data 
            setuser(data.user)
            localStorage.setItem('token',data.token);
            navigate("/home")

        }

        setEmail('')
        setfirstname('')
        setlastname('')
        setPassword('')
    }

  return (
    <div>
        <div className='p-7 pb-5 flex flex-col justify-between h-screen  ' >
        <div>
        <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

<form onSubmit={(e)=>{userLoginHandler(e)}} className='mt-10' >
    <h3 className='text-base font-semibold mb-2' >What's your name</h3>
    <div className='flex gap-2 mb-6' >
    <input required value={firstname}  onChange={(e)=>{setfirstname(e.target.value)}}
     className='px-4 py-2 w-1/2 border bg-[#eee] rounded  placeholder:text-base ' type="text" placeholder='Firstname' name="" id="" />
    <input required value={lastname} onChange={(e)=>{setlastname(e.target.value)}}
     className='px-4 py-2 w-1/2 border bg-[#eee] rounded  placeholder:text-base ' type="text" placeholder='Lastname' name="" id="" />

    </div>
    <h3 className='text-base font-semibold mb-2' >What's your email</h3>
    <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} className='px-4 py-2 w-full border bg-[#eee] rounded mb-6 placeholder:text-base ' type="email" placeholder='email@example.com' name="" id="" />
    <h3 className='text-base font-semibold mb-2' >Enter Password</h3>
    <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} className='px-4 py-2 w-full border bg-[#eee] rounded mb-6' type="password" placeholder='password' />
    <button   className='w-full bg-black rounded text-white  px-4 py-2 font-semibold text-lg' >Create account </button>
</form>

<div>
    <p className='text-center mt-2 font-medium' >Already have an account? <Link className='text-blue-500' to='/login' >Click here</Link> </p>
</div>
        </div>
        <div className='' >
        <p className='leading-tight text-xs'>This site is protected by reCAPTCHA and the <span className='underline' >Google privacy Policy</span> and <span className='underline' >Terms and Service apply</span></p>
        </div>
        </div>
    </div>
  )
}

export default UserSignup