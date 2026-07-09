import React from 'react'

const WaitingForDriverPannel = ({ pickup, destination, selectedVehicle, setWaitingpannel }) => {

  const driver = {
    name: 'Rajesh Kumar',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: '4.8',
    carModel: 'Maruti Suzuki Swift',
    carPhoto: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Flarge%2Fmaruti-suzuki%2Fswift%2Fmaruti-suzuki-swift.jpg%3Fv%3D83&w=1920&q=80',
    plate: 'DL 4C AB 2291',
  }

  return (
    <div className='flex flex-col'>

      {/* ── Header ── */}
      <div className='flex items-center gap-3 mb-5'>
        <button
          className='h-9 w-9 flex justify-center items-center bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0'
          onClick={() => setWaitingpannel(false)}
          aria-label="Go back"
        >
          <i className="ri-arrow-left-line text-lg"></i>
        </button>
        <h3 className='text-xl font-bold leading-tight'>Driver on the way</h3>
      </div>

      {/* ── Driver card ── */}
      <div className='bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100'>

        {/* Top — driver photo + name + rating + ride vehicle thumbnail */}
        <div className='flex items-center gap-3'>
          <div className='relative flex-shrink-0'>
            <img
              src={driver.photo}
              alt={driver.name}
              className='h-14 w-14 rounded-full object-cover border-2 border-white shadow-md'
            />
            <span className='absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white'></span>
          </div>

          <div className='flex-1 min-w-0'>
            <p className='font-bold text-base truncate'>{driver.name}</p>
            <div className='flex items-center gap-1 mt-0.5'>
              <i className="ri-star-fill text-yellow-400 text-xs"></i>
              <span className='text-xs font-semibold text-gray-700'>{driver.rating}</span>
              <span className='text-gray-300 text-xs mx-1'>|</span>
              <span className='text-xs text-gray-500'>{selectedVehicle?.name || 'UberGo'}</span>
            </div>
          </div>

          {selectedVehicle?.img && (
            <img
              src={selectedVehicle.img}
              alt={selectedVehicle.name}
              className='h-10 w-14 object-contain flex-shrink-0'
            />
          )}
        </div>

        {/* Divider */}
        <div className='border-t border-gray-200 my-3'></div>

        {/* Bottom — driver's actual car photo + model + plate */}
        <div className='flex items-center gap-3'>
          <img
            src={driver.carPhoto}
            alt={driver.carModel}
            className='h-16 w-28 object-cover rounded-xl border border-gray-200 flex-shrink-0'
          />
          <div className='flex-1 min-w-0'>
            <p className='text-[10px] text-gray-400 uppercase tracking-wide mb-0.5'>Driver's Vehicle</p>
            <p className='text-sm font-bold text-gray-900 truncate'>{driver.carModel}</p>
            <div className='inline-flex items-center mt-1.5 bg-white border-2 border-gray-800 rounded-md overflow-hidden'>
              <span className='text-[9px] font-black text-blue-700 bg-blue-50 px-1.5 py-0.5 border-r-2 border-gray-800 leading-none'>IND</span>
              <span className='text-sm font-black tracking-widest text-gray-900 font-mono px-2 py-0.5 leading-none'>{driver.plate}</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Call / Message buttons ── */}
      <div className='grid grid-cols-2 gap-3 mb-4'>
        <a
          href='tel:+919999999999'
          className='flex items-center justify-center gap-2 py-3 bg-black text-white rounded-xl text-sm font-semibold active:scale-95 transition-transform duration-150'
        >
          <i className="ri-phone-fill text-base"></i>
          Call Driver
        </a>
        <a
          href='sms:+919999999999'
          className='flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-900 rounded-xl text-sm font-semibold active:scale-95 transition-transform duration-150'
        >
          <i className="ri-message-2-fill text-base"></i>
          Message
        </a>
      </div>

      {/* ── Route + Fare ── */}
      <div className='flex flex-col gap-2'>

        <div className='flex items-center gap-3 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl'>
          <span className='h-7 w-7 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0'>
            <i className="ri-map-pin-fill text-green-600 text-sm"></i>
          </span>
          <div className='min-w-0'>
            <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Pickup</p>
            <p className='text-sm font-semibold truncate'>{pickup || 'Not set'}</p>
          </div>
        </div>

        <div className='flex items-center pl-5 gap-0.5'>
          {[...Array(3)].map((_, i) => (
            <span key={i} className='h-1 w-1 rounded-full bg-gray-300'></span>
          ))}
        </div>

        <div className='flex items-center gap-3 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl'>
          <span className='h-7 w-7 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0'>
            <i className="ri-map-pin-2-fill text-red-500 text-sm"></i>
          </span>
          <div className='min-w-0'>
            <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Destination</p>
            <p className='text-sm font-semibold truncate'>{destination || 'Not set'}</p>
          </div>
        </div>

        <div className='flex items-center justify-between px-3 py-2.5 bg-black text-white rounded-xl mt-1'>
          <div className='flex items-center gap-2'>
            <i className="ri-car-fill text-base"></i>
            <span className='text-xs font-medium'>{selectedVehicle?.name || 'Ride'}</span>
          </div>
          <div className='flex items-center gap-1'>
            <i className="ri-bank-card-fill text-sm text-gray-300"></i>
            <span className='text-base font-bold'>{selectedVehicle?.price || '₹193'}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WaitingForDriverPannel
