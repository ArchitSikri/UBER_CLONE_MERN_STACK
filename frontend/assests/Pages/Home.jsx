import { useState } from 'react'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="min-h-screen bg-[#f4f2ee] text-zinc-950">
      <header className="fixed left-0 right-0 top-0 z-20 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-2xl font-black tracking-tight">Uber</div>
          <button
            type="button"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            More info
          </button>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-5 px-4 pb-5 pt-20 sm:px-6 lg:grid-cols-[390px_1fr] lg:px-8">
        <aside className="order-2 flex flex-col gap-4 lg:order-1">
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-5 shadow-xl shadow-zinc-900/10 ring-1 ring-black/5 sm:p-6"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-zinc-500">Plan your ride</p>
              <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Where should we pick you up?
              </h1>
            </div>

            <div className="space-y-3">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-700">Pickup point</span>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition focus-within:border-zinc-950 focus-within:bg-white">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-500" />
                  <input
                    value={pickup}
                    onChange={(event) => setPickup(event.target.value)}
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full bg-transparent text-base font-medium text-zinc-950 outline-none placeholder:text-zinc-400"
                  />
                </div>
              </label>

              <div className="margin-left: 21px h-8 w-px bg-zinc-300" />

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-zinc-700">End of trip</span>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 transition focus-within:border-zinc-950 focus-within:bg-white">
                  <span className="h-3 w-3 shrink-0 rounded-sm bg-zinc-950" />
                  <input
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full bg-transparent text-base font-medium text-zinc-950 outline-none placeholder:text-zinc-400"
                  />
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-zinc-950 px-5 py-4 text-base font-bold text-white shadow-lg shadow-zinc-900/20 transition hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              Search ride
            </button>
          </form>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Trip type</p>
              <p className="mt-2 text-lg font-black">Standard</p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Have a </p>
              <p className="mt-2 text-lg font-black">Safe Ride</p>
            </div>
          </div>
        </aside>

        <section className="order-1 min-h-[52vh] overflow-hidden rounded-[30px] bg-white shadow-2xl shadow-zinc-900/10 ring-1 ring-black/5 lg:order-2 lg:min-h-[calc(100vh-100px)]">
          <div className="relative h-full min-h-[52vh] lg:min-h-[calc(100vh-100px)]">
            <div className="absolute inset-0 bg-[#dfe6dd]">
              <div className="absolute inset-0 opacity-80 .\[background-image\:linear-gradient\(90deg\,rgba\(63\,63\,70\,\.13\)_1px\,transparent_1px\)\,linear-gradient\(rgba\(63\,63\,70\,\.13\)_1px\,transparent_1px\)\] {
 background-image: linear-gradient(90deg,rgba(63,63,70,.13) 1px,transparent 1px),linear-gradient(rgba(63,63,70,.13) 1px,transparent 1px);
}" />
              <div className="absolute left-[-8%] top-[16%] h-20 w-[120%] rotate: 12deg bg-white/95 shadow-sm" />
              <div className="absolute left-[-12%] top-[50%] h-24 w-[130%] rotate: calc(18deg * -1) bg-white/95 shadow-sm" />
              <div className="absolute left-[38%] top-[-10%] h-[130%] w-24 rotate-[4deg] bg-white/95 shadow-sm" />
              <div className="absolute left-[8%] top-[8%] h-28 w-48 .rounded-\[32px\] {
 border-radius: 32px;
} bg-emerald-200/70" />
              <div className="absolute bottom-[10%] right-[9%] h-36 w-56 rounded-[36px] bg-sky-200/80" />
              <div className="absolute bottom-[30%] left-[12%] h-24 w-36 rounded-[28px] bg-lime-200/80" />
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 650" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M95 560 C170 430 260 455 315 330 C370 205 475 240 535 125 C585 30 690 45 805 80" stroke="#18181b" strokeWidth="16" strokeLinecap="round" strokeDasharray="1 32" />
              <path d="M95 560 C170 430 260 455 315 330 C370 205 475 240 535 125 C585 30 690 45 805 80" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            </svg>

            <div className="absolute left-[13%] top-[72%] flex -translate-y-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-bold shadow-xl ring-1 ring-black/10">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              Pickup
            </div>

            <div className="absolute right-[10%] top-[15%] flex -translate-y-1/2 items-center gap-2 rounded-full bg-zinc-950 px-3 py-2 text-sm font-bold text-white shadow-xl">
              <span className="h-3 w-3 rounded-sm bg-white" />
              Drop
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-950 text-sm font-black text-white shadow-2xl ring-8 ring-white/80">
              U
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/90 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur md:left-auto md:w-80">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Live route preview</p>
              <p className="mt-1 text-sm font-semibold text-zinc-800">
                Add pickup and destination to estimate your trip.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
