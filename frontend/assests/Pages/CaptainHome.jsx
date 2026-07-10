import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import CaptainDetail from '../components/CaptainDetail.jsx'
import AcceptRidePannel from '../components/AcceptRidePannel.jsx'
import ConfirmRidePopupCaptainPannel from '../components/ConfirmRidePopupCaptainPannel.jsx'

// Dummy incoming ride — replace with real socket/API data later
const DUMMY_RIDE = {
  user: {
    fullname: { firstname: 'Harsh', lastname: 'Patel' },
    profilePhoto: 'https://i.pravatar.cc/150?img=5',
  },
  pickup: 'Union Square, San Francisco',
  destination: 'InterContinental San Francisco',
  fare: 295.20,
  distance: '2.2 KM',
}

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel]     = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)

  const ridePopupPanelRef   = useRef(null)
  const confirmRidePanelRef = useRef(null)

  // ── GSAP: ride popup ──────────────────────────────────────────────
  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      transform: ridePopupPanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: ridePopupPanel ? 'power2.out' : 'power2.in',
    })
  }, [ridePopupPanel])

  // ── GSAP: confirm ride panel ──────────────────────────────────────
  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: confirmRidePanel ? 'power2.out' : 'power2.in',
    })
  }, [confirmRidePanel])

  return (
    <div className='h-screen relative overflow-hidden bg-white'>

      {/* ── Top bar ── */}
      <div className='fixed top-0 left-0 w-full z-30 px-5 pt-4 flex items-center justify-between'>
        <img
          className='w-16'
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
          alt='Uber'
        />
        <Link
          to='/captain-logout'
          className='h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100'
        >
          <i className='text-lg ri-logout-box-r-line'></i>
        </Link>
      </div>

      {/* ── Map ── */}
      <div className='h-3/5 w-full'>
        <img
          className='h-full w-full object-cover'
          src='https://lh3.googleusercontent.com/zwH5VtNpwuiic-Er8ilFDKqI9fEDHxaMULUqcPsXsbbSwRI8oOXGIXkSDyx-Z8kRaH6-3mmEbQ1uGPe557BObJDYcbWCbdx9LD0=e365-pa-nu-s0'
          alt='map'
          onError={(e) => {
            e.currentTarget.src =
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Simple_map.svg/800px-Simple_map.svg.png'
          }}
        />
      </div>

      {/* ── Captain details panel ── */}
      <div className='h-2/5 flex flex-col'>
        <CaptainDetail setRidePopupPanel={setRidePopupPanel} />

        {/* Demo trigger — remove once real socket sends ride requests */}
        <button
          onClick={() => setRidePopupPanel(true)}
          className='mx-5 mt-3 bg-black text-white py-3 rounded-xl font-semibold text-sm tracking-wide'
        >
          View Incoming Ride
        </button>
      </div>

      {/* ── Ride Popup Panel (z-40) ── */}
      <div
        ref={ridePopupPanelRef}
        className='fixed bottom-0 left-0 w-full z-40 translate-y-full bg-white rounded-t-3xl shadow-2xl'
      >
        <AcceptRidePannel
          ride={DUMMY_RIDE}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      {/* ── Confirm Ride Panel (z-50, slides over ride popup) ── */}
      <div
        ref={confirmRidePanelRef}
        className='fixed bottom-0 left-0 w-full z-50 translate-y-full bg-white rounded-t-3xl shadow-2xl'
      >
        <ConfirmRidePopupCaptainPannel
          ride={DUMMY_RIDE}
          setConfirmRidePanel={setConfirmRidePanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>

    </div>
  )
}

export default CaptainHome
