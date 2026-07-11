import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopupCaptainPannel = ({ ride, setConfirmRidePanel, setRidePopupPanel }) => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')

  const handleConfirmRide = () => {
    if (otp.trim().length === 0) {
      setOtpError('Please enter OTP')
      return
    }
    setOtpError('')
    setConfirmRidePanel(false)
    setRidePopupPanel(false)
    navigate('/captain-Riding', { state: { ride } })
  }

  return (
    <div className='px-5 py-6'>

      {/* Handle */}
      <div
        className='w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-5 cursor-pointer'
        onClick={() => setConfirmRidePanel(false)}
      ></div>

      {/* Header */}
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-2xl font-bold'>Confirm this Ride</h3>
        <button
          className='h-9 w-9 flex justify-center items-center bg-gray-100 text-gray-600 rounded-full'
          onClick={() => setConfirmRidePanel(false)}
        >
          <i className='ri-close-line text-lg'></i>
        </button>
      </div>

      {/* Rider info */}
      <div className='flex items-center justify-between bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-5'>
        <div className='flex items-center gap-3'>
          <img
            className='h-14 w-14 rounded-full object-cover border-2 border-yellow-300 shadow'
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
          <h5 className='text-lg font-bold text-black'>₹{ride?.fare ?? '295.20'}</h5>
          <p className='text-xs text-gray-500'>{ride?.distance || '2.2 KM'}</p>
        </div>
      </div>

      {/* Ride details */}
      <div className='flex flex-col gap-3 mb-5'>

        {/* Pickup */}
        <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className='ri-map-pin-fill text-base text-black'></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Pickup</p>
            <p className='text-sm font-semibold truncate'>{ride?.pickup || 'Not set'}</p>
          </div>
        </div>

        {/* Destination */}
        <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className='ri-map-pin-2-fill text-base text-black'></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Destination</p>
            <p className='text-sm font-semibold truncate'>{ride?.destination || 'Not set'}</p>
          </div>
        </div>

        {/* Fare */}
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

      {/* OTP Form */}
      <div className='mb-5'>
        <h4 className='text-sm font-semibold text-gray-700 mb-2'>
          <i className='ri-shield-keyhole-line mr-1 text-yellow-500'></i>
          Enter OTP from Passenger
        </h4>
        <div className='flex gap-2'>
          <input
            type='number'
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value)
              setOtpError('')
            }}
            placeholder='Enter 6-digit OTP'
            maxLength={6}
            className={`flex-1 border-2 ${otpError ? 'border-red-400' : 'border-gray-300'} rounded-xl px-4 py-3 text-lg font-bold tracking-widest text-center focus:outline-none focus:border-yellow-400 transition-colors`}
          />
        </div>
        {otpError && (
          <p className='text-red-500 text-xs mt-1.5 flex items-center gap-1'>
            <i className='ri-error-warning-line'></i>
            {otpError}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className='flex gap-3'>
        <button
          onClick={() => {
            setConfirmRidePanel(false)
            setRidePopupPanel(false)
          }}
          className='flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform'
        >
          Go Back
        </button>
        <button
          onClick={handleConfirmRide}
          className='flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform'
        >
          Confirm Ride
        </button>
      </div>

    </div>
  )
}

export default ConfirmRidePopupCaptainPannel
