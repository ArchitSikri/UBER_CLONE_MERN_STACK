import React from 'react'

const ConfirmRidePannel = (props) => {
  const { pickup, destination, setConfirmridepannel, selectedVehicle, setLookingdriverpannel } = props

  return (
    <div>
      {/* Header */}
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-xl font-bold'>Confirm your Ride</h3>
        <button
          className='h-9 w-9 flex justify-center items-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200'
          onClick={() => setConfirmridepannel(false)}
        >
          <i className="ri-close-line text-lg"></i>
        </button>
      </div>

      {/* Selected vehicle */}
      {selectedVehicle && (
        <div className='flex flex-col items-center mb-5'>
          <img
            className='h-24 w-36 object-contain'
            src={selectedVehicle.img}
            alt={selectedVehicle.name}
          />
          <h4 className='text-base font-bold mt-1'>{selectedVehicle.name}</h4>
          <p className='text-xs text-gray-400'>{selectedVehicle.desc}</p>
        </div>
      )}

      {/* Ride details */}
      <div className='flex flex-col gap-3 mb-5'>

        {/* Pickup */}
        <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className="ri-map-pin-fill text-base text-black"></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Pickup</p>
            <p className='text-sm font-semibold truncate'>{pickup || 'Not set'}</p>
          </div>
        </div>

        {/* Destination */}
        <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className="ri-map-pin-2-fill text-base text-black"></i>
          </div>
          <div className='min-w-0'>
            <p className='text-xs text-gray-400 mb-0.5'>Destination</p>
            <p className='text-sm font-semibold truncate'>{destination || 'Not set'}</p>
          </div>
        </div>

        {/* Fare */}
        <div className='flex items-center gap-3 p-3 border border-gray-200 rounded-xl'>
          <div className='h-9 w-9 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0'>
            <i className="ri-currency-line text-base text-black"></i>
          </div>
          <div>
            <p className='text-xs text-gray-400 mb-0.5'>Estimated Fare</p>
            <p className='text-sm font-semibold'>{selectedVehicle?.price || '₹193'}</p>
          </div>
        </div>

      </div>

      {/* Book Ride button */}
      <button
        className='w-full py-3 bg-black text-white text-sm font-bold rounded-xl active:scale-95 transition-transform duration-150'
        onClick={() => {
          setLookingdriverpannel(true)
          setConfirmridepannel(false)
        }}
      >
        Book Ride
      </button>
    </div>
  )
}

export default ConfirmRidePannel
