import { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../../src/context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children
}) => {

    const [token, setToken] = useState(() => localStorage.getItem('token'))
    const navigate = useNavigate()
    const { setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)




    useEffect(() => {
        const syncToken = () => {
            setToken(localStorage.getItem('token'))
        }

        window.addEventListener('storage', syncToken)
        window.addEventListener('focus', syncToken)

        return () => {
            window.removeEventListener('storage', syncToken)
            window.removeEventListener('focus', syncToken)
        }
    }, [])

    useEffect(() => {
        if (!token) {
            navigate('/captain-login', { replace: true })
            return
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(() => {

                localStorage.removeItem('token')
                setToken(null)
                navigate('/captain-login', { replace: true })
            })
    }, [ token, navigate, setCaptain ])

    

    if (!token) {
        return null
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper
