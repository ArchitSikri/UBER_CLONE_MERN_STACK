import { useContext, useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRides';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [ vehiclePanel, setVehiclePanel ] = useState(false)
    const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)
    const [ rideError, setRideError ] = useState('')

    const navigate = useNavigate()

    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(() => {
        if (!socket || !user?._id) return undefined

        const handleRideConfirmed = confirmedRide => {
            setVehiclePanel(false)
            setConfirmRidePanel(false)
            setVehicleFound(false)
            setWaitingForDriver(true)
            setRide(confirmedRide)
        }
        const handleRideStarted = startedRide => {
            setWaitingForDriver(false)
            navigate('/riding', { state: { ride: startedRide } })
        }

        socket.emit('join', { userType: 'user', userId: user._id })
        socket.on('ride-confirmed', handleRideConfirmed)
        socket.on('ride-started', handleRideStarted)

        return () => {
            socket.off('ride-confirmed', handleRideConfirmed)
            socket.off('ride-started', handleRideStarted)
        }
    }, [ navigate, socket, user?._id ])


    const handlePickupChange = async (e) => {
        const input = e.target.value
        setPickup(input)

        if (input.trim().length < 3) {
            setPickupSuggestions([])
            return
        }

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        const input = e.target.value
        setDestination(input)

        if (input.trim().length < 3) {
            setDestinationSuggestions([])
            return
        }

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])


    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])


    async function findTrip() {
        if (pickup.trim().length < 3 || destination.trim().length < 3) return

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
                params: { pickup, destination },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            setFare(response.data)
            setVehicleType(null)
            setRideError('')
            setPanelOpen(false)
            setVehiclePanel(true)
        } catch (error) {
            console.error('Unable to get ride fares:', error)
        }
    }

    function selectVehicle(type) {
        setVehicleType(type)
        setVehiclePanel(false)
        setConfirmRidePanel(true)
    }

    async function createRide() {
        setRideError('')

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
                pickup,
                destination,
                vehicleType
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            return response.status === 201
        } catch (error) {
            setRideError(error.response?.data?.message || 'Unable to create the ride. Please try again.')
            return false
        }

    }

    return (
        <div className='relative h-dvh overflow-hidden bg-slate-100'>
            <img className='absolute left-4 top-4 z-10 w-16 rounded-xl bg-white/90 p-2 shadow-sm sm:left-6 sm:top-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
            <div className='h-dvh w-full'>
                {/* image for temporary use  */}
                <LiveTracking />
            </div>
            <div className='absolute inset-x-0 bottom-0 flex w-full flex-col justify-end sm:mx-auto sm:max-w-2xl'>
                <div className='relative bg-white p-4 shadow-[0_-12px_35px_rgba(15,23,42,0.16)] sm:rounded-t-3xl sm:p-6'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold text-slate-900'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                setActiveField('pickup')
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            className='w-full rounded-xl bg-slate-100 px-12 py-3 text-base outline-none ring-1 ring-slate-200 transition focus:ring-2 focus:ring-slate-900 sm:text-lg'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                                setActiveField('destination')
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            className='mt-3 w-full rounded-xl bg-slate-100 px-12 py-3 text-base outline-none ring-1 ring-slate-200 transition focus:ring-2 focus:ring-slate-900 sm:text-lg'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                    <button
                        onClick={findTrip}
                        disabled={pickup.trim().length < 3 || destination.trim().length < 3}
                        className='mt-3 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300'>
                        Find Trip
                    </button>
                </div>
                <div ref={panelRef} className='h-0 overflow-y-auto bg-white'>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} className='fixed inset-x-0 bottom-0 z-20 mx-auto max-h-[85dvh] w-full max-w-2xl translate-y-full overflow-y-auto rounded-t-3xl bg-white px-4 py-10 shadow-2xl sm:px-6'>
                <VehiclePanel
                    onSelectVehicle={selectVehicle}
                    fare={fare} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className='fixed inset-x-0 bottom-0 z-30 mx-auto max-h-[85dvh] w-full max-w-2xl translate-y-full overflow-y-auto rounded-t-3xl bg-white px-4 py-10 shadow-2xl sm:px-6'>
                <ConfirmRide
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    rideError={rideError}

                    setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className='fixed inset-x-0 bottom-0 z-40 mx-auto max-h-[85dvh] w-full max-w-2xl translate-y-full overflow-y-auto rounded-t-3xl bg-white px-4 py-10 shadow-2xl sm:px-6'>
                <LookingForDriver
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setVehicleFound={setVehicleFound} />
            </div>
            <div ref={waitingForDriverRef} className='fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[85dvh] w-full max-w-2xl translate-y-full overflow-y-auto rounded-t-3xl bg-white px-4 py-10 shadow-2xl sm:px-6'>
                <WaitingForDriver
                    ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
            </div>
        </div>
    )
}

export default Home
