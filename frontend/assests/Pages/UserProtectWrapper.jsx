import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtectWrapper = ({
  children
}) => {
   
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const navigate = useNavigate();

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
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
