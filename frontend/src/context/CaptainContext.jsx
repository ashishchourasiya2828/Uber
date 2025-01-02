import React, { createContext, useState } from 'react'


export const captainDataContext = createContext()



const CaptainContext = ({children}) => {

    const [captain, setcaptain] = useState(null)
    const [isloadind, setisloadind] = useState(false)
    const [error, seterror] = useState(null)

    const updateCaptain = (captainData)=>{
        setcaptain(captainData);

    }

    const value={
        captain,
        updateCaptain,
        isloadind,
        error,
        seterror,
        setcaptain,
        setisloadind,
    }

  return (
    <captainDataContext.Provider value={value} >{children}</captainDataContext.Provider>
  )
}

export default CaptainContext