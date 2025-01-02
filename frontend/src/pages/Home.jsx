import React, { useRef, useState } from 'react'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
const Home = () => {

  const [pickup, setpickup] = useState("")
  const [destination, setdestination] = useState("")
  const [panelOpen, setpanelOpen] = useState(false)
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false)

  const panelRef = useRef(null)
  const closeIcon = useRef(null)
  const vehiclePanelRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault();


  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:"70.2%",
        padding:24
      })
      gsap.to(closeIcon.current,{
        opacity:1,
        duration:0.2
      })
    }
    else{
      gsap.to(panelRef.current,{
        height:"0%",
        padding:24
      })
      gsap.to(closeIcon.current,{
        opacity:0,
        duration:0.2
      })
      
    }
    },[panelOpen,closeIcon])

  useGSAP(function(){
    if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current,{
      transform: "translateY(0)"
    })}
    else{
      gsap.to(vehiclePanelRef.current,{
        transform: "translateY(100%)"
      })}
  },[vehiclePanelOpen])

  return (
    <div onClick={()=>{
      
    }} className='h-screen relative overflow-hidden ' >
        <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
        <div className='h-screen w-screen' >
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className=' w-full h-screen flex flex-col justify-end  absolute top-0 ' >
          <div className='bg-white h-[30%] p-5 relative' >
            <h5 ref={closeIcon} onClick={()=>{
              setpanelOpen(false)
            }} className='text-xl opacity-0 text-black absolute right-5 top-2' ><i className="ri-arrow-down-wide-line"></i></h5>
          <h1 className='font-semibold text-2xl ' >Find a trip</h1>
          <div className="line h-14 w-1 bg-black absolute top-[43%] left-[13%] rounded-full "></div>
          <form className='' onSubmit={(e)=>{submitHandler(e)}} >
          <input onClick={(e)=>{ setpanelOpen(true)}} value={pickup} onChange={(e)=>{setpickup(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-4' type="email" placeholder='Add a pick-up location' />
          <input onClick={(e)=>{ setpanelOpen(true)}} value={destination} onChange={(e)=>{setdestination(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="password" placeholder='Enter your destination' />
          </form>
          </div>
          <div ref={panelRef} className='bg-white' >
            <LocationSearchPanel setvehiclePanelOpen={setvehiclePanelOpen} setpanelOpen={setpanelOpen} />
          </div>
         </div>

        <div ref={vehiclePanelRef} className='fixed z-10 w-full p-3 translate-y-full bottom-0 bg-white' >
          <VehiclePanel setvehiclePanelOpen={setvehiclePanelOpen} />
        </div>


        </div>
  )
}

export default Home