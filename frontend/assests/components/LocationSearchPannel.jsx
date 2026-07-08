import React from 'react'

const LocationSearchPannel = () => {
  
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
];

   return (
        <div className='overflow-y-auto max-h-full'>
            {
                locations.map((elem, idx) => ( 
                    <div key={idx} className='flex gap-4 border-2 p-3 border-gray-500 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPannel
