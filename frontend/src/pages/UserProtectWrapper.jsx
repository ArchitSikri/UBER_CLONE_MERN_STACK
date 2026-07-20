import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserProtectWrapper = ({
  children
}) => {
   
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const syncToken = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('storage', syncToken);
    window.addEventListener('focus', syncToken);

    return () => {
      window.removeEventListener('storage', syncToken);
      window.removeEventListener('focus', syncToken);
    };
  }, []);

  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setUser(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        localStorage.removeItem('token')
        setToken(null)
        navigate('/login', { replace: true })
      })
  }, [navigate, setUser, token]);

  if (!token) {
    return null;
  }

  if (isLoading) {
    return <div className='grid min-h-dvh place-items-center bg-slate-950 text-sm font-semibold text-white'>Loading your ride…</div>
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
