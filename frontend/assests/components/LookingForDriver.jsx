import React from 'react'

const LookingForDriver = ({ pickup, destination, selectedVehicle, setLookingdriverpannel }) => {
  return (
    <div className='flex flex-col'>

      {/* ── Header ── */}
      <div className='flex items-center gap-3 mb-6'>
        <button
          className='h-9 w-9 flex justify-center items-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0'
          onClick={() => setLookingdriverpannel(false)}
          aria-label="Go back"
        >
          <i className="ri-arrow-left-line text-lg"></i>
        </button>
        <div>
          <h3 className='text-xl font-bold leading-tight'>Looking for a Driver</h3>
          <p className='text-xs text-gray-400 mt-0.5'>Please wait, matching you with a driver…</p>
        </div>
      </div>

      {/* ── Animated searching indicator ── */}
      <div className='flex flex-col items-center justify-center py-6 mb-4'>
        {/* Pulsing rings */}
        <div className='relative flex items-center justify-center mb-4'>
          <span className='absolute h-24 w-24 rounded-full bg-black opacity-10 animate-ping'></span>
          <span className='absolute h-16 w-16 rounded-full bg-black opacity-15 animate-ping' style={{ animationDelay: '0.3s' }}></span>
          <div className='relative h-12 w-12 rounded-full bg-black flex items-center justify-center z-10 shadow-lg'>
            <i className="ri-car-fill text-white text-xl"></i>
          </div>
        </div>
        <p className='text-sm font-semibold text-gray-700 animate-pulse'>Searching nearby drivers…</p>
      </div>

      {/* ── Ride summary card ── */}
      <div className='bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden mb-4'>

        {/* Vehicle image + type + fare — top banner */}
        <div className='flex items-center justify-between px-4 py-3 bg-black text-white'>
          <div className='flex items-center gap-3'>
            {selectedVehicle?.img && (
              <img
                src={selectedVehicle.img}
                alt={selectedVehicle?.name}
                className='h-9 w-14 object-contain'
              />
            )}
            <div>
              <p className='text-sm font-bold'>{selectedVehicle?.name || 'UberGo'}</p>
              <p className='text-[11px] text-gray-300'>{selectedVehicle?.desc || 'Affordable ride'}</p>
            </div>
          </div>
          <div className='text-right'>
            <p className='text-[10px] text-gray-400'>Est. Fare</p>
            <p className='text-lg font-black'>{selectedVehicle?.price || '₹193'}</p>
          </div>
        </div>

        {/* Route — pickup & destination */}
        <div className='px-4 py-3 flex flex-col gap-0'>

          {/* Pickup row */}
          <div className='flex items-center gap-3 py-2.5'>
            <div className='flex flex-col items-center flex-shrink-0'>
              <span className='h-2.5 w-2.5 rounded-full bg-green-500'></span>
            </div>
            <div className='min-w-0'>
              <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Pickup</p>
              <p className='text-sm font-semibold truncate'>{pickup || 'Not set'}</p>
            </div>
          </div>

          {/* Dashed vertical line connector */}
          <div className='flex items-center gap-3'>
            <div className='flex flex-col items-center w-2.5 flex-shrink-0'>
              <div className='w-0.5 h-5 border-l-2 border-dashed border-gray-300 ml-[4px]'></div>
            </div>
          </div>

          {/* Destination row */}
          <div className='flex items-center gap-3 py-2.5'>
            <div className='flex flex-col items-center flex-shrink-0'>
              <span className='h-2.5 w-2.5 rounded-sm bg-black'></span>
            </div>
            <div className='min-w-0'>
              <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Destination</p>
              <p className='text-sm font-semibold truncate'>{destination || 'Not set'}</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Payment method ── */}
      <div className='flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl'>
        <div className='flex items-center gap-2'>
          <i className="ri-bank-card-fill text-gray-600 text-base"></i>
          <span className='text-sm font-medium text-gray-700'>Cash Payment</span>
        </div>
        <span className='text-xs text-gray-400'>Pay on arrival</span>
      </div>

    </div>
  )
}

export default LookingForDriver
