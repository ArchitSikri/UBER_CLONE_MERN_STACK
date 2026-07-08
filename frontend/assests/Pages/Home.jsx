import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel';

const Home = () => {

   const [pickup , setPickup] = useState('');
   const [destination , setDestination] = useState('');
   const [panelOpen , setPanelOpen] = useState(false);
   const Panelref = useRef(null);
   const panelCloseRef = useRef(null);
   const panelrefarchit = useRef(null);

    const submithandler = (e) => {
        e.preventDefault()
    };

    useGSAP(function(){
      if(panelOpen){
        gsap.to(Panelref.current,{
          height:"70%",
          opacity : 1

        })
        gsap.to(panelCloseRef.current,{
          opacity : 1,
        })
        gsap.to(panelrefarchit.current,{
          marginTop : 0
        })
      }
      else{
        gsap.to(Panelref.current,{
          height:"0%",
          opacity : 0
        }
        )
        gsap.to(panelCloseRef.current,{
          opacity : 0,
        })
        gsap.to(panelrefarchit.current,{
          marginTop : 80,
        })
      }
    },[panelOpen])

  return (
      
  

    <div className='h-screen relative overflow-hidden '>

       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

       <div className="h-screen w-screen ">
        <img className='h-full w-full object-cover' src="https://lh3.googleusercontent.com/zwH5VtNpwuiic-Er8ilFDKqI9fEDHxaMULUqcPsXsbbSwRI8oOXGIXkSDyx-Z8kRaH6-3mmEbQ1uGPe557BObJDYcbWCbdx9LD0=e365-pa-nu-s0" alt="image" />
       </div>
    
        <div className='flex flex-col justify-end absolute top-0 w-full h-screen mt-80' ref={panelrefarchit} >


          <div className='h-[30%] p-5 bg-white relative '>
            <button className='absolute right-6 top-6 text-2xl bg-black text-white rounded-2xl h-9 w-20 flex items-center justify-center opacity-0' onClick={()=>{setPanelOpen(false)}} ref={panelCloseRef}> BACK </button>
            <h4 className='text-2xl font-semibold'>find a trip</h4>
            <form action="" onSubmit={(e)=>{
              submithandler(e)
            }}>
            
            <input
             onClick={() => {setPanelOpen(true)}}
             value = {pickup}
             onChange={(e)=>{setPickup(e.target.value)}}
             className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5 ' type="text" placeholder='add a pickup loction' />
            <input 
            onClick={() => {setPanelOpen(true)}}
            value = {destination}
            onChange={(e)=>{setDestination(e.target.value)}}
            className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Enter designation' />
            <button className='bg-black mt-3 w-85 h-10 text-white text-2xl rounded-md'>Find Trip</button>
            </form>
          </div>

          <div ref={Panelref} className='bg-white p-10 overflow-hidden'>
              <LocationSearchPannel/>
          </div>


        </div>

        <div className='fixed z-10 bottom-0 bg-white w-screen p-10'>
          <div>
            <h3 className='text-2xl font-semibold mb-5 '>Choose a Vehicle<i className="text-3xl text-gray-900 ri-arrow-down-wide-line ml-15"></i></h3>
          </div>
          <div className='flex border-2 mb-2 rounded-xl w-full p-3  items-center justify-between border-gray-300 hover:border-black transition-all duration-300 ease-in-out'>
            <img className='h-10' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div className='ml-2 w-1/2'>
               <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className='font-medium text-sm'>2 mins away </h5>
                  <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'> ₹500/- </h2>
          </div>
          <div className='flex border-2 mb-2 rounded-xl w-full p-3  items-center justify-between border-gray-300 hover:border-black transition-all duration-300 ease-in-out '>
                <img className='h-15 w-15' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9WGELEDKLezVwavpE5UbiOX9uJ3xD3Dxu9YYr5yMUqNAwWmD_i3k5xFi&s=10" alt="image" />
                <div className='-ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹400/- </h2>
          </div>
           <div className='flex border-2 mb-2 rounded-xl w-full p-3  items-center justify-between border-gray-300 hover:border-black transition-all duration-300 ease-in-out'>
                <img className='h-15 w-17' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=0/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9lZGJjMWQ5ZS01OGVjLTQyODAtYWJjNS0yNDA2M2JlMGRkMTUucG5n" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away </h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹450/-</h2>
          </div>

        </div>

    </div>
  )
}

export default Home
