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
import CaptainHome from '../assests/Pages/CaptainHome.jsx'
import CaptainProtectWrapper from '../assests/Pages/CaptainProtectWrapper.jsx'
import Riding from '../assests/Pages/Riding.jsx'
import CaptainRiding from '../assests/Pages/CaptainRiding.jsx'

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
        <Route path='/user-logout' element = {<UserProtectWrapper><UserLogout />
        </UserProtectWrapper>}/>
        <Route path='/captain-logout' element = {<CaptainLogout />}/>
        <Route path='/captain-home' element= {<CaptainProtectWrapper>   <CaptainHome/>  </CaptainProtectWrapper>}/>
        <Route path='/user-Riding' element={ <Riding/> }/>
        <Route path='/captain-Riding' element={ <CaptainRiding/> }/>
      </Routes>
    </div>
  )
}

export default App
