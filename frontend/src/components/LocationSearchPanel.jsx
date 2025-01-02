import React from 'react'

const LocationSearchPanel = ({setvehiclePanelOpen,setpanelOpen}) => {

    const location= [
        "24B,Near shivani schol,Shiv nagar,Bhopal",
        "23B,Near shivani schoo0l,Shiv nagar,Bhopal",
        "27B,Near shivani school,Shiv nagar,Bhopal",
        "20B,Near shivani schol,Shiv nagar,Bhopal",

    ]

  return (
    <div>
        {location.map((elem,idx)=>{
            return  <div key={idx} onClick={()=>{
                setvehiclePanelOpen(true)
                setpanelOpen(false)
                }} className='flex border-gray-50 active:border-black border-2 items-center items-center mb-3 py-3 px-4 rounded-lg justify-start gap-4' >
            <h2 className='text-xl px-4 py-3 bg-[#eee] rounded-full' ><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium text-md' >{elem}</h4>
        </div>
        })}
       
    </div>
  )
}

export default LocationSearchPanel