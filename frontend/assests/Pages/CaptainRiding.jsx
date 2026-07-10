import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const CaptainRiding = () => {
  const { state } = useLocation()
  const ride = state?.ride

  const [finishPanel, setFinishPanel] = useState(false)
  const finishPanelRef = useRef(null)

  useGSAP(() => {
    gsap.to(finishPanelRef.current, {
      transform: finishPanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: finishPanel ? 'power2.out' : 'power2.in',
    })
  }, [finishPanel])

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
          to='/captain-home'
          className='h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100'
        >
          <i className='text-lg ri-home-5-line'></i>
        </Link>
      </div>

      {/* ── Map ── */}
      <div className='h-4/5 w-full'>
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

      {/* ── Bottom strip — Complete Ride button ── */}
      <div
        className='h-1/5 bg-yellow-400 flex items-center justify-between px-6 cursor-pointer'
        onClick={() => setFinishPanel(true)}
      >
        <div>
          <h4 className='text-lg font-bold text-black'>
            {ride?.distance || '2.2 KM'} away
          </h4>
          <p className='text-sm text-gray-700'>Tap to complete ride</p>
        </div>
        <button className='bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform'>
          Complete Ride
        </button>
      </div>

      {/* ── Finish Ride Panel ── */}
      <div
        ref={finishPanelRef}
        className='fixed bottom-0 left-0 w-full z-50 translate-y-full bg-white rounded-t-3xl shadow-2xl px-5 py-6'
      >
        {/* Handle */}
        <div
          className='w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-5 cursor-pointer'
          onClick={() => setFinishPanel(false)}
        ></div>

        <h3 className='text-2xl font-bold mb-5'>Finish this Ride</h3>

        {/* Rider info */}
        <div className='flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-5'>
          <div className='flex items-center gap-3'>
            <img
              className='h-12 w-12 rounded-full object-cover border-2 border-yellow-300'
              src={ride?.user?.profilePhoto || 'https://i.pravatar.cc/150?img=5'}
              alt='rider'
            />
            <div>
              <h4 className='text-base font-bold'>
                {ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}
              </h4>
              <p className='text-xs text-gray-500'>Passenger</p>
            </div>
          </div>
          <div className='text-right'>
            <h5 className='text-lg font-bold'>₹{ride?.fare ?? '295.20'}</h5>
            <p className='text-xs text-gray-500'>{ride?.distance || '2.2 KM'}</p>
          </div>
        </div>

        {/* Ride info rows */}
        <div className='flex flex-col gap-3 mb-5'>

          <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
            <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
              <i className='ri-map-pin-fill text-base text-black'></i>
            </div>
            <div className='min-w-0'>
              <p className='text-xs text-gray-400 mb-0.5'>Pickup</p>
              <p className='text-sm font-semibold truncate'>{ride?.pickup || 'Not set'}</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
            <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
              <i className='ri-map-pin-2-fill text-base text-black'></i>
            </div>
            <div className='min-w-0'>
              <p className='text-xs text-gray-400 mb-0.5'>Destination</p>
              <p className='text-sm font-semibold truncate'>{ride?.destination || 'Not set'}</p>
            </div>
          </div>

          <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
            <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
              <i className='ri-currency-line text-base text-black'></i>
            </div>
            <div>
              <p className='text-xs text-gray-400 mb-0.5'>Earnings</p>
              <p className='text-sm font-semibold'>₹{ride?.fare ?? '295.20'}</p>
            </div>
          </div>

        </div>

        {/* Finish button */}
        <Link
          to='/captain-home'
          className='block w-full bg-green-500 text-white text-center py-3 rounded-xl font-bold text-sm active:scale-95 transition-transform'
        >
          Finish Ride · ₹{ride?.fare ?? '295.20'}
        </Link>

      </div>

    </div>
  )
}

export default CaptainRiding
