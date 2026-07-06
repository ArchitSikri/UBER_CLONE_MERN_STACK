import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from '../assests/Pages/Start.jsx'
import UserLogin from '../assests/Pages/UserLogin.jsx'
import CaptainLogin from '../assests/Pages/CaptainLogin.jsx'
import CaptainSignup from '../assests/Pages/CaptainSignup.jsx'
import UserSignup from '../assests/Pages/UserSignup.jsx'
import UserContext from './context/UserContext.jsx'
import Home from '../assests/Pages/Home.jsx'
import UserProtectWrapper from '../assests/Pages/UserProtectWrapper.jsx'
import UserLogout from '../assests/Pages/UserLogout.jsx'
import CaptainLogout from '../assests/Pages/CaptainLogout.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={ <UserProtectWrapper> <Home /> </UserProtectWrapper> } />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path='user-logout' element = {<UserLogout />}/>
        <Route path='captain-logout' element = {<CaptainLogout/>}/>
      </Routes>
    </div>
  )
}

export default App
