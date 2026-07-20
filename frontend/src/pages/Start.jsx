import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function Start() {
  const mobileImageUrl = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80'
  const desktopImageUrl = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1400&q=80'
  const [bgUrl, setBgUrl] = useState(desktopImageUrl)
  const heroRef = useRef(null)

  useEffect(() => {
    const update = () => {
      setBgUrl(window.innerWidth <= 768 ? mobileImageUrl : desktopImageUrl)
    }

    update()
    window.addEventListener('resize', update)

    const ctx = gsap.context(() => {
      gsap.from('.start-animate', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => {
      window.removeEventListener('resize', update)
      ctx.revert()
    }
  }, [])

  return (
    <div ref={heroRef} className="flex min-h-screen flex-col bg-[#fffaf1] text-slate-900">
      <section
        className="relative flex min-h-[70vh] items-end overflow-hidden bg-cover bg-center px-6 py-10 sm:px-8 lg:px-12"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(15,23,42,0.86), rgba(15,23,42,0.22)), url(${bgUrl})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.4),_transparent_35%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="start-animate inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-sm font-semibold text-white">
              <i className="ri-map-pin-2-fill text-base" />
              Smart rides, beautiful journeys
            </div>
            <h1 className="start-animate mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ride in style with a smoother Uber experience.
            </h1>
            <p className="start-animate mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Discover premium pickups, quick route planning, and polished travel features designed for everyday convenience.
            </p>
            <div className="start-animate mt-7 flex flex-wrap gap-3">
              <Link to="/login" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-slate-100">
                <i className="ri-arrow-right-line mr-2 text-lg" />
                Get Started
              </Link>
              <Link to="/captain-login" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-slate-950/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-900/70">
                <i className="ri-steering-fill mr-2 text-lg" />
                Become a Captain
              </Link>
            </div>
          </div>

          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <div className="start-animate rounded-[24px] border border-white/20 bg-white/15 p-4 text-white shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-100">
                <i className="ri-time-line text-lg" />
                Fast booking
              </div>
              <p className="mt-2 text-2xl font-bold">Under 2 mins</p>
            </div>
            <div className="start-animate rounded-[24px] border border-white/20 bg-white/15 p-4 text-white shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-100">
                <i className="ri-shield-check-fill text-lg" />
                Safe travel
              </div>
              <p className="mt-2 text-2xl font-bold">Trusted rides</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="start-animate rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Why riders love it</p>
          <div className="mt-4 flex items-center gap-3 text-xl font-bold text-slate-900">
            <i className="ri-heart-3-fill text-2xl text-rose-500" />
            Beautiful interface and effortless flow
          </div>
        </div>
        <div className="start-animate rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-lg shadow-slate-950/20">
          <div className="flex items-center gap-3 text-lg font-semibold">
            <i className="ri-rocket-2-fill text-2xl text-cyan-300" />
            Launch your next ride with one click
          </div>
        </div>
      </section>
    </div>
  )
}

export default Start
