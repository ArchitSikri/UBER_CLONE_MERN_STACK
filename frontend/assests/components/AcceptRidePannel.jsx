import React from 'react'

const AcceptRidePannel = ({ ride, setRidePopupPanel, setConfirmRidePanel }) => {
  return (
    <div className='px-5 py-6'>

      {/* Handle */} 
      <div
        className='w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-5 cursor-pointer'
        onClick={() => setRidePopupPanel(false)}
      ></div>

      <h3 className='text-2xl font-bold mb-4'>New Ride Available!</h3>

      {/* Rider info */}
      <div className='flex items-center justify-between bg-yellow-100 rounded-xl p-3 mb-4'>
        <div className='flex items-center gap-3'>
          <img
            className='h-12 w-12 rounded-full object-cover'
            src={ride?.user?.profilePhoto || 'https://i.pravatar.cc/150?img=5'}
            alt='rider'
          />
          <h4 className='text-base font-semibold'>
            {ride?.user?.fullname?.firstname} {ride?.user?.fullname?.lastname}
          </h4>
        </div>
        <h5 className='text-base font-bold'>{ride?.distance || '2.2 KM'}</h5>
      </div>

      {/* Pickup & Destination */}
      <div className='flex flex-col gap-3 mb-5'>

        <div className='flex items-start gap-3 border-b pb-3'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className='ri-map-pin-fill text-base text-black'></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Pickup</p>
            <p className='text-sm font-semibold truncate'>{ride?.pickup || 'Not set'}</p>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className='ri-map-pin-2-fill text-base text-black'></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Destination</p>
            <p className='text-sm font-semibold truncate'>{ride?.destination || 'Not set'}</p>
          </div>
        </div>

      </div>

      {/* Fare row */}
      <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl mb-5'>
        <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
          <i className='ri-currency-line text-base text-black'></i>
        </div>
        <div>
          <p className='text-xs text-gray-400 mb-0.5'>Estimated Fare</p>
          <p className='text-sm font-semibold'>₹{ride?.fare ?? '295.20'}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className='flex gap-3'>
        <button
          onClick={() => setRidePopupPanel(false)}
          className='flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform'
        >
          Ignore
        </button>
        <button
          onClick={() => {
            setConfirmRidePanel(true)
            setRidePopupPanel(false)
          }}
          className='flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold text-sm active:scale-95 transition-transform'
        >
          Accept · ₹{ride?.fare ?? '295.20'}
        </button>
      </div>

    </div>
  )
}

export default AcceptRidePannel
