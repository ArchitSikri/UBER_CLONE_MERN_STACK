import React from 'react'

const locations = [
  "Connaught Place",
  "India Gate",
  "Rajiv Chowk Metro Station",
  "New Delhi Railway Station",
  "Kashmere Gate ISBT",
  "Karol Bagh",
  "Lajpat Nagar",
  "Saket",
  "Hauz Khas",
  "Green Park",
  "AIIMS Delhi",
  "South Extension",
  "Nehru Place",
  "Okhla Phase 1",
  "Jasola",
  "Dwarka Sector 21",
  "Janakpuri",
  "Rohini Sector 18",
  "Pitampura",
  "Chandni Chowk",
  "Red Fort",
  "Jama Masjid",
  "Civil Lines",
  "Punjabi Bagh",
  "Vasant Kunj",
  "Aerocity",
  "IGI Airport Terminal 3",
  "Noida Sector 18",
  "Cyber City Gurgaon",
  "DLF Phase 3"
]

const LocationSearchPannel = ({
  pickup,
  destination,
  setPickup,
  setDestination,
  activeField,
  setPanelOpen,
  setActiveField
}) => {

  // Filter based on currently active field's typed value
  const query = activeField === 'pickup' ? pickup : destination
  const filtered = query.trim().length > 0
    ? locations.filter(loc => loc.toLowerCase().includes(query.toLowerCase()))
    : locations

  const handleSelect = (location) => {
    if (activeField === 'pickup') {
      setPickup(location)
      setActiveField('destination')
    } else if (activeField === 'destination') {
      setDestination(location)
      setActiveField(null)
      // panel open rehta hai — user Find Trip button se aage jayega
    }
  }

  return (
    <div className='pb-4'>
      {filtered.length === 0 && (
        <p className='text-gray-400 text-sm text-center py-6'>No locations found</p>
      )}
      {filtered.map((loc, idx) => (
        <div
          key={idx}
          onClick={() => handleSelect(loc)}
          className='flex gap-3 items-center px-2 py-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors duration-150'
        >
          <span className='h-9 w-9 flex-shrink-0 bg-[#eee] rounded-full flex items-center justify-center text-gray-600'>
            <i className="ri-map-pin-fill text-sm"></i>
          </span>
          <div>
            <p className='text-sm font-medium text-gray-900'>{loc}</p>
            <p className='text-xs text-gray-400'>Delhi NCR</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPannel
