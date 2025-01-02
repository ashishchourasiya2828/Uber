import React, { createContext, useState } from 'react'

export const userContext = createContext();
const UserContext = (props) => {

    const [user, setuser] = useState({
        fullname:{
            firstname:"",
            lastname:""
        },
        email:"",
        password:"",
        
    })

  return (
    <userContext.Provider value={{user,setuser}}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserContext