import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {

  // Hardcoded for now — replace with real data from context/props/API later
  const driver = {
    name: 'Rajesh Kumar',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: '4.8',
    carModel: 'Maruti Suzuki Swift',
    plate: 'DL 4C AB 2291',
  }

  const ride = {
    pickup: 'Connaught Place, New Delhi',
    destination: 'Indira Gandhi International Airport',
    fare: '₹193',
    vehicleName: 'UberGo',
    vehicleImg: 'https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg',
  }

  return (
    <div className='h-screen flex flex-col'>

      {/* Uber logo */}
      <img
        className='w-14 absolute left-5 top-5 z-20'
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      {/* Top half — map */}
      <div className='h-1/2 w-full'>
        <img
          className='h-full w-full object-cover'
          src="https://lh3.googleusercontent.com/zwH5VtNpwuiic-Er8ilFDKqI9fEDHxaMULUqcPsXsbbSwRI8oOXGIXkSDyx-Z8kRaH6-3mmEbQ1uGPe557BObJDYcbWCbdx9LD0=e365-pa-nu-s0"
          alt="map"
        />
      </div>

      {/* Bottom half — ride details */}
      <div className='h-1/2 bg-white px-4 pt-4 pb-4 overflow-y-auto flex flex-col gap-3'>

        {/* Driver row */}
        <div className='flex items-center gap-3 bg-gray-50 rounded-2xl p-3 border border-gray-100'>
          <div className='relative flex-shrink-0'>
            <img
              src={driver.photo}
              alt={driver.name}
              className='h-12 w-12 rounded-full object-cover border-2 border-white shadow'
            />
            <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white'></span>
          </div>
          <div className='flex-1 min-w-0'>
            <p className='font-bold text-sm truncate'>{driver.name}</p>
            <div className='flex items-center gap-1 mt-0.5'>
              <i className="ri-star-fill text-yellow-400 text-xs"></i>
              <span className='text-xs font-semibold text-gray-700'>{driver.rating}</span>
              <span className='text-gray-300 text-xs mx-1'>|</span>
              <span className='text-xs text-gray-500 font-mono'>{driver.plate}</span>
            </div>
            <p className='text-xs text-gray-400 truncate'>{driver.carModel}</p>
          </div>
          <img
            src={ride.vehicleImg}
            alt={ride.vehicleName}
            className='h-10 w-14 object-contain flex-shrink-0'
          />
        </div>

        {/* Route + fare */}
        <div className='flex flex-col gap-2'>

          {/* Pickup */}
          <div className='flex items-center gap-3 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl'>
            <span className='h-7 w-7 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0'>
              <i className="ri-map-pin-fill text-green-600 text-sm"></i>
            </span>
            <div className='min-w-0'>
              <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Pickup</p>
              <p className='text-sm font-semibold truncate'>{ride.pickup}</p>
            </div>
          </div>

          {/* Connector */}
          <div className='flex items-center pl-5 gap-0.5'>
            {[...Array(3)].map((_, i) => (
              <span key={i} className='h-1 w-1 rounded-full bg-gray-300'></span>
            ))}
          </div>

          {/* Destination */}
          <div className='flex items-center gap-3 px-3 py-2.5 bg-gray-50 border border-gray-100 rounded-xl'>
            <span className='h-7 w-7 flex items-center justify-center bg-red-100 rounded-full flex-shrink-0'>
              <i className="ri-map-pin-2-fill text-red-500 text-sm"></i>
            </span>
            <div className='min-w-0'>
              <p className='text-[10px] text-gray-400 leading-none mb-0.5'>Destination</p>
              <p className='text-sm font-semibold truncate'>{ride.destination}</p>
            </div>
          </div>

          {/* Fare + vehicle type */}
          <div className='flex items-center justify-between px-3 py-2.5 bg-black text-white rounded-xl'>
            <div className='flex items-center gap-2'>
              <i className="ri-car-fill text-base"></i>
              <span className='text-xs font-medium'>{ride.vehicleName}</span>
            </div>
            <div className='flex items-center gap-1'>
              <i className="ri-bank-card-fill text-sm text-gray-300"></i>
              <span className='text-base font-bold'>{ride.fare}</span>
            </div>
          </div>

        </div>

        {/* Make payment button */}
        <Link
          to='/home'
          className='w-full py-3 bg-green-500 text-white text-sm font-bold rounded-xl text-center active:scale-95 transition-transform duration-150'
        >
          Make Payment
        </Link>

      </div>
    </div>
  )
}

export default Riding
