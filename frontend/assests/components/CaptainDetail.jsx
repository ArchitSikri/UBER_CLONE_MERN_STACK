import React, { useContext } from 'react'
import { CaptainDataContext } from '../../src/context/CaptainContext.jsx'

const CaptainDetail = ({ setRidePopupPanel }) => {
  const { captain } = useContext(CaptainDataContext)

  const captainName = captain?.fullname
    ? `${captain.fullname.firstname} ${captain.fullname.lastname}`
    : 'Captain'

  const captainPhoto = captain?.profilePhoto || 'https://i.pravatar.cc/150?img=3'

  return (
    <div className='bg-yellow-400 flex flex-col gap-4 px-5 py-5'>

      {/* Captain info + earnings */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img
            className='h-12 w-12 rounded-full object-cover border-2 border-white shadow'
            src={captainPhoto}
            alt='captain'
          />
          <h4 className='text-base font-semibold text-black'>{captainName}</h4>
        </div>

        <div className='text-right'>
          <h4 className='text-xl font-bold text-black'>₹295.20</h4>
          <p className='text-sm text-gray-700 font-medium'>Earned</p>
        </div>
      </div>

      {/* Stats */}
      <div className='flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow-sm'>

        <div className='flex flex-col items-center gap-0.5 flex-1'>
          <i className='ri-timer-2-line text-2xl text-black'></i>
          <h5 className='text-lg font-bold text-black leading-none'>10.2</h5>
          <p className='text-xs text-gray-500'>Hours Online</p>
        </div>

        <div className='w-px h-10 bg-gray-200'></div>

        <div className='flex flex-col items-center gap-0.5 flex-1'>
          <i className='ri-speed-up-line text-2xl text-black'></i>
          <h5 className='text-lg font-bold text-black leading-none'>10.2</h5>
          <p className='text-xs text-gray-500'>Hours Online</p>
        </div>

        <div className='w-px h-10 bg-gray-200'></div>

        <div className='flex flex-col items-center gap-0.5 flex-1'>
          <i className='ri-booklet-line text-2xl text-black'></i>
          <h5 className='text-lg font-bold text-black leading-none'>10.2</h5>
          <p className='text-xs text-gray-500'>Hours Online</p>
        </div>

      </div>

    </div>
  )
}

export default CaptainDetail
