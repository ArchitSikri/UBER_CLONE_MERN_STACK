import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      if (!token) {
        localStorage.removeItem('token')
        navigate('/login')
        return
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          validateStatus: (status) => status < 500
        })

        localStorage.removeItem('token')
        navigate('/login')

        if (response.status === 200) {
          return
        }
      } catch (error) {
        localStorage.removeItem('token')
        navigate('/login')
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

export default UserLogout
