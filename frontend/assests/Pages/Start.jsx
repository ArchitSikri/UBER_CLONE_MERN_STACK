import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Start() {
  const mobileImageUrl = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80'
  const desktopImageUrl = 'https://png.pngtree.com/background/20230512/original/pngtree-in-the-black-and-white-image-there-is-a-small-brown-picture-image_2504192.jpg'
  const [bgUrl, setBgUrl] = useState(desktopImageUrl)

  useEffect(() => {
    const update = () => {
      setBgUrl(window.innerWidth <= 768 ? mobileImageUrl : desktopImageUrl)
    } 
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <div
        className="logo text-4xl font-extrabold text-black h-125 bg-cover bg-center pt-6 pl-6"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        Uber
      </div>

      <div className="main bg-amber-50 h-auto flex flex-col items-center justify-center gap-4 p-6">
         <h1 className="text-black text-2xl md:text-4xl mb-4 text-center font-bold">Welcome to Uber</h1>
        <Link to="/login" className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded text-lg w-70">Get Started</Link>
      </div>

    </div>
  )
}

export default Start
