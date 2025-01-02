import React from 'react'
import {Route, Routes} from "react-router-dom"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import Userlogout from './pages/Userlogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />  {/* User is authenticated, render Home component */}
          </UserProtectWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectWrapper>
            <Userlogout/>  {/* User logs out, redirect to Start component */}
          </UserProtectWrapper>
        } />

        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>  {/* User logs out, redirect to Start component */}
          </CaptainProtectedWrapper>
        } />
      </Routes>

    </div>
  )
}

export default App