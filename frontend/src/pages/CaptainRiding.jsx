import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride



    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])


    return (
        <div className='relative flex min-h-dvh flex-col overflow-hidden bg-slate-950'>

            <div className='fixed inset-x-0 top-0 z-10 flex items-center justify-between p-4 sm:p-6'>
                <img className='w-16 rounded-xl bg-white/95 p-2 shadow-lg' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
                <Link to='/captain-home' className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100' aria-label='Back to captain home'>
                    <i className="text-lg font-medium ri-arrow-left-line"></i>
                </Link>
            </div>

            <div className='absolute inset-0 z-0'>
                <LiveTracking />
            </div>

            <main className='relative z-[5] mt-auto w-full pointer-events-none'>
                <section className='pointer-events-auto mx-auto w-full max-w-2xl rounded-t-3xl bg-white p-4 shadow-[0_-12px_35px_rgba(15,23,42,0.22)] sm:p-6'>
                    <div className='mb-3 flex justify-center'>
                        <span className='h-1.5 w-12 rounded-full bg-slate-200' />
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='min-w-0'>
                            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Trip in progress</p>
                            <h1 className='mt-1 truncate text-xl font-bold text-slate-950'>{rideData?.destination || 'Heading to destination'}</h1>
                            <p className='mt-1 text-sm text-slate-500'>Drive safely and finish once the rider arrives.</p>
                        </div>
                        <button type='button' onClick={() => setFinishRidePanel(true)} disabled={!rideData} className='shrink-0 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-6'>
                            Finish ride
                        </button>
                    </div>
                </section>
            </main>

            <div ref={finishRidePanelRef} className='fixed inset-x-0 bottom-0 z-20 mx-auto max-h-[85dvh] w-full max-w-2xl translate-y-full overflow-y-auto rounded-t-3xl bg-white px-4 py-10 shadow-2xl sm:px-6'>
                <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding
