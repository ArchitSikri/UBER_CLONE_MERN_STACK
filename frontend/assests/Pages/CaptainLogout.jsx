import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      if (!token) {
        localStorage.removeItem('token')
        navigate('/captain-login')
        return
      }

      try {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          validateStatus: (status) => status < 500
        })

        localStorage.removeItem('token')
        navigate('/captain-login')
      } catch (error) {
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
    }

    logout()
  }, [navigate, token])

  return (
    <div>
      Logging out...
    </div>
  )
}

export default CaptainLogout
