import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'
import VehiclePannel from '../components/VehiclePannel'
import ConfirmRidePannel from '../components/ConfirmRidePannel'
import WaitingForDriverPannel from '../components/WaitingForDriverPannel'
import LookingForDriver from '../components/LookingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [activeField, setActiveField] = useState(null)
  const [confirmridepannel , setConfirmridepannel] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [waitingpannel , setWaitingpannel] = useState(false)
  const [lookingdriverpannel , setLookingdriverpannel] = useState(false)

  const panelRef = useRef(null)
  const closeIconRef = useRef(null)
  const findTripBtnRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmridepannelref = useRef(null)
  const waitingpannelref = useRef(null)
  const lookingdriverref = useRef(null)


  
  const submitHandler = (e) => {
    e.preventDefault()
  }

  // Location search suggestions panel animation
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '60vh',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(closeIconRef.current, {
        opacity: 1,
        duration: 0.3
      })
      gsap.to(findTripBtnRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0vh',
        opacity: 0,
        duration: 0.35,
        ease: 'power2.in'
      })
      gsap.to(closeIconRef.current, {
        opacity: 0,
        duration: 0.2
      })
      gsap.to(findTripBtnRef.current, {
        opacity: 0,
        duration: 0.2
      })
    }
  }, [panelOpen])

  // Vehicle panel slide up/down animation
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.35,
        ease: 'power2.in'
      })
    }
  }, [vehiclePanel])
  
  useGSAP(() => {
    if (confirmridepannel) {
      gsap.to(confirmridepannelref.current, {
        transform: 'translateY(0)',
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(confirmridepannelref.current, {
        transform: 'translateY(100%)',
        duration: 0.35,
        ease: 'power2.in'
      })
    }
  }, [confirmridepannel])

  useGSAP(() => {
    if (!waitingpannelref.current) return
    if (waitingpannel) {
      gsap.to(waitingpannelref.current, {
        transform: 'translateY(0)',
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(waitingpannelref.current, {
        transform: 'translateY(100%)',
        duration: 0.35,
        ease: 'power2.in'
      })
    }
  }, [waitingpannel])

  useGSAP(() => {
    if (lookingdriverpannel) {
      gsap.to(lookingdriverref.current, {
        transform: 'translateY(0)',
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(lookingdriverref.current, {
        transform: 'translateY(100%)',
        duration: 0.35,
        ease: 'power2.in'
      })
    }
  }, [lookingdriverpannel])




   

  return (
    <div className='h-screen relative overflow-hidden bg-gray-100'>

      {/* Uber Logo */}
      <img
        className='w-16 absolute left-5 top-5 z-20'
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      {/* Background Map */}
      <div className='h-screen w-screen'>
        <img
          className='h-full w-full object-cover'
          src="https://lh3.googleusercontent.com/zwH5VtNpwuiic-Er8ilFDKqI9fEDHxaMULUqcPsXsbbSwRI8oOXGIXkSDyx-Z8kRaH6-3mmEbQ1uGPe557BObJDYcbWCbdx9LD0=e365-pa-nu-s0"
          alt="map"
        />
      </div>

      {/* Bottom panel — always anchored to bottom */}
      <div className='absolute bottom-0 w-full z-10'>

        {/* Form Card */}
        <div className='relative bg-white px-5 pt-6 pb-4 rounded-t-2xl shadow-2xl'>

          {/* Close / Back icon */}
          <button
            ref={closeIconRef}
            className='absolute right-5 top-5 bg-gray-100 text-gray-700 rounded-full h-10 w-10 flex items-center justify-center opacity-0 hover:bg-gray-200 transition-colors duration-200'
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-s-line text-xl font-semibold"></i>
          </button>

          <h4 className='text-2xl font-semibold mb-4'>Find a trip</h4>

          <form onSubmit={submitHandler}>
            {/* Vertical line connector between inputs */}
            <div className='flex flex-col gap-3'>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-black'></span>
                <input
                  required
                  onClick={() => { setPanelOpen(true); setActiveField('pickup') }}
                  value={pickup}
                  onChange={(e) => { setPickup(e.target.value); setPanelOpen(true); setActiveField('pickup') }}
                  className='bg-[#eee] pl-8 pr-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-black transition-all'
                  type="text"
                  placeholder='Add a pickup location'
                />
              </div>

              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-sm bg-black'></span>
                <input
                  required
                  onClick={() => { setPanelOpen(true); setActiveField('destination') }}
                  value={destination}
                  onChange={(e) => { setDestination(e.target.value); setPanelOpen(true); setActiveField('destination') }}
                  className='bg-[#eee] pl-8 pr-4 py-3 text-sm rounded-lg w-full outline-none focus:ring-2 focus:ring-black transition-all'
                  type="text"
                  placeholder='Enter destination'
                />
              </div>
            </div>

            {/* Find Trip button */}
            <button
              ref={findTripBtnRef}
              type='button'
              className='mt-4 w-full py-3 bg-black text-white text-sm font-bold rounded-xl flex items-center justify-between px-5 opacity-0 active:scale-95 transition-transform duration-150'
              onClick={() => {
                if (pickup && destination) {
                  setVehiclePanel(true)
                  setPanelOpen(false)
                }
              }}
            >
              <div className='flex items-center gap-2'>
                <span className='bg-white text-black rounded-full h-7 w-7 flex items-center justify-center'>
                  <i className="ri-map-pin-2-fill text-xs"></i>
                </span>
                <span>Find Trip</span>
              </div>
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </form>
        </div>

        {/* Suggestions panel — expands below form card */}
        <div
          ref={panelRef}
          className='bg-white px-5 overflow-y-auto'
          style={{ height: 0, opacity: 0 }}
        >
          <div className='w-full border-t border-gray-100 mb-2'></div>
          <LocationSearchPannel
            pickup={pickup}
            destination={destination}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            setPanelOpen={setPanelOpen}
            setActiveField={setActiveField}
          />
        </div>

      </div>

      {/* Vehicle selection panel — slides up from below screen */}
      <div
        ref={vehiclePanelRef}
        className='fixed z-20 bottom-0 w-full bg-white px-4 pt-6 pb-8 rounded-t-2xl shadow-2xl'
        style={{ transform: 'translateY(100%)' }}
      >
        <VehiclePannel
          setVehiclePanel={setVehiclePanel}
          pickup={pickup}
          destination={destination}
          setConfirmridepannel={setConfirmridepannel}
          setSelectedVehicle={setSelectedVehicle}
        />
      </div>

      <div
        ref={confirmridepannelref}
        className='fixed z-30 bottom-0 w-full bg-white px-4 pt-6 pb-8 rounded-t-2xl shadow-2xl'
        style={{ transform: 'translateY(100%)' }}
      >
        <ConfirmRidePannel
          pickup={pickup}
          destination={destination}
          setConfirmridepannel={setConfirmridepannel}
          setVehiclePanel={setVehiclePanel}
          selectedVehicle={selectedVehicle}
          setLookingdriverpannel={setLookingdriverpannel}
        />
      </div>

      <div
        ref={lookingdriverref}
        className='fixed z-40 bottom-0 w-full bg-white px-4 pt-6 pb-8 rounded-t-2xl shadow-2xl'
        style={{ transform: 'translateY(100%)' }}
      >
        <LookingForDriver
          pickup={pickup}
          destination={destination}
          selectedVehicle={selectedVehicle}
          setLookingdriverpannel={setLookingdriverpannel}
        />
      </div>

      <div
        ref={waitingpannelref}
        className='fixed z-50 bottom-0 w-full bg-white px-4 pt-6 pb-8 rounded-t-2xl shadow-2xl'
        style={{ transform: 'translateY(100%)' }}
      >
        <WaitingForDriverPannel
          pickup={pickup}
          destination={destination}
          selectedVehicle={selectedVehicle}
          setWaitingpannel={setWaitingpannel}
        />
      </div>

    </div>
  )
}

export default Home
