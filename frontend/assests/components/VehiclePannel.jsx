import React, { useState } from 'react'

const vehicles = [
  {
    id: 'ubergo',
    name: 'UberGo',
    seats: 4,
    eta: '2 mins away',
    desc: 'Affordable, compact rides',
    price: '₹193',
    img: 'https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg'
  },
  {
    id: 'moto',
    name: 'Moto',
    seats: 1,
    eta: '3 mins away',
    desc: 'Affordable motorcycle rides',
    price: '₹65',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9WGELEDKLezVwavpE5UbiOX9uJ3xD3Dxu9YYr5yMUqNAwWmD_i3k5xFi&s=10'
  },
  {
    id: 'auto',
    name: 'UberAuto',
    seats: 3,
    eta: '3 mins away',
    desc: 'Affordable auto rides',
    price: '₹118',
    img: 'https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=0/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lZGJjMWQ5ZS01OGVjLTQyODAtYWJjNS0yNDA2M2JlMGRkMTUucG5n'
  }
]

const VehiclePannel = (props) => {
  const { pickup, destination } = props
  const [selected, setSelected] = useState(null)

  return (
    <div>
      {/* Header */}
      <div className='flex items-center justify-between mb-5'>
        <div>
          <h3 className='text-xl font-bold'>Choose a Vehicle</h3>
          {pickup && destination && (
            <p className='text-xs text-gray-400 mt-0.5 truncate max-w-[240px]'>
              {pickup} → {destination}
            </p>
          )}
        </div>
        <button
          className='h-9 w-9 flex justify-center items-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200'
          onClick={() => props.setVehiclePanel(false)}
        >
          <i className="ri-close-line text-lg"></i>
        </button>
      </div>

      {/* Vehicle list */}
      <div className='flex flex-col gap-3'>
        {vehicles.map((v) => (
          <div
            key={v.id}
            onClick={() => setSelected(v.id)}
            className={`flex items-center gap-3 border-2 rounded-xl p-3 cursor-pointer transition-all duration-200 ${
              selected === v.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img
              className='h-12 w-16 object-contain flex-shrink-0'
              src={v.img}
              alt={v.name}
            />
            <div className='flex-1 min-w-0'>
              <div className='flex items-center gap-1.5'>
                <h4 className='font-semibold text-sm'>{v.name}</h4>
                <span className='flex items-center gap-0.5 text-xs text-gray-500'>
                  <i className="ri-user-3-fill text-xs"></i>
                  {v.seats}
                </span>
              </div>
              <p className='text-xs text-gray-500'>{v.eta}</p>
              <p className='text-xs text-gray-400'>{v.desc}</p>
            </div>
            <div className='text-right flex-shrink-0'>
              <p className='font-bold text-base'>{v.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Confirm button */}
      <button
        onClick={() => {
          props.setSelectedVehicle(vehicles.find(v => v.id === selected))
          props.setConfirmridepannel(true)
          props.setVehiclePanel(false)
        }}
        disabled={!selected}
        className={`mt-5 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
          selected
            ? 'bg-black text-white active:scale-95'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {selected
          ? `Confirm ${vehicles.find(v => v.id === selected)?.name}`
          : 'Select a vehicle'}
      </button>
    </div>
  )
}

export default VehiclePannel
