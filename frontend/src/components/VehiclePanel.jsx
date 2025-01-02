import React from 'react'

const VehiclePanel = ({setvehiclePanelOpen}) => {
  return (
    <div>
        <h5 onClick={()=>{setvehiclePanelOpen(false)}} className='text-center text-gray-300 ' ><i className="ri-arrow-down-wide-fill text-3xl"></i></h5>
          <h2 className='text-2xl font-semibold mb-5' >Choose a ride</h2>
          <div className=' mb-3 w-full border-2 active:border-black rounded-lg p-3 flex items-center justify-between' >

          <img className='h-14' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='w-1/2  font-medium' >
              <h4 className='text-lg font-medium' >UberGo <span className='text-base' ><i className="ri-user-3-fill"></i> 4</span></h4>
              <h5>2 mins away </h5>
              <p className='text-gray-600 text-xs' >Affordable,compact</p>
          </div>
          <h2 className='font-medium text-lg' >₹193.20</h2>
          </div>
           <div className=' mb-3 w-full border-2 active:border-black rounded-lg p-3 flex items-center justify-between' >

          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2  font-medium' >
              <h4 className='text-lg font-medium' >Moto <span className='text-base' ><i className="ri-user-3-fill"></i> 2</span></h4>
              <h5>3 mins away </h5>
              <p className='text-gray-600 text-xs' >Affordable motorcycle rides</p>
          </div>
          <h2 className='font-medium text-lg' >₹65.17</h2>
          </div>
            <div className=' mb-3 w-full border-2 active:border-black rounded-lg p-3 flex items-center justify-between' >

          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2  font-medium' >
              <h4 className='text-lg font-medium' >UberAuto <span className='text-base' ><i className="ri-user-3-fill"></i> 2</span></h4>
              <h5>2 mins away </h5>
              <p className='text-gray-600 text-xs' >Affordable Auto rides</p>
          </div>
          <h2 className='font-medium text-lg' >₹118.21</h2>
          </div>
    </div>
  )
}

export default VehiclePanel