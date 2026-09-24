import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignup = () => {
  const [Email , setEmail] = useState('');
  const [Password , setPassword] = useState('');
  const [Firstname , setFirstname] = useState('');
  const [Lastname , setLastname] = useState('');
  const [VehicleColor, setVehicleColor] = useState('');
  const [VehiclePlate, setVehiclePlate] = useState('');
  const [VehicleCapacity, setVehicleCapacity] = useState('');
  const [VehicleType, setVehicleType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { setCaptain } = React.useContext(CaptainDataContext)

  const submithandler = async (e) => {
    e.preventDefault();


    const NewCaptaindata = { 
      email : Email, 
      password : Password, 
      fullname :{ firstname : Firstname, lastname : Lastname },
      vehicle: {
        color: VehicleColor,
        plate: VehiclePlate,
        capacity: VehicleCapacity,
        vehicleType: VehicleType
      }
    }
    setSubmitted(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, NewCaptaindata);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        setSubmitted(true);
        navigate('/captain-home');
      }
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.message || error.response?.data?.errors?.[0]?.msg || 'Signup failed';
      alert(errorMsg);
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setSubmitted(false)
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');


  }
 

  return (
    <Layout>
      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center px-2 py-4 sm:px-4 lg:px-6">
        <div className="relative w-full max-w-6xl overflow-hidden border-radius: 2rem  bg-white shadow-2xl ring-1 ring-slate-200/70">
          <div className="absolute inset-0 --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops)); from-cyan-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
            <section className="rounded-[1.75rem] bg-orange-950 p-8 text-white shadow-xl shadow-slate-900/20 sm:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Uber</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Create your rider account</h1>
                <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                  Sign up in seconds and start booking rides with a smooth, secure experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl p-4 ring-1 ring-white/10 shadow-lg shadow-slate-900/20 bg-black">
                  <p className="text-sm text-slate-200">Fast onboarding</p>
                  <p className="mt-2 text-xl font-semibold text-white">3 steps</p>
                </div>
                <div className="rounded-3xl bg-black p-4 ring-1 ring-white/10 shadow-lg shadow-slate-900/20">
                  <p className="text-sm text-slate-200">Protected account</p>
                  <p className="mt-2 text-xl font-semibold text-white">Encrypted</p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black p-5 backdrop-blur">
                <p className="text-sm text-slate-300">Quick access</p>
                <p className="mt-2 text-lg font-semibold text-white">Join as a captain and ride smarter every day.</p>
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 lg:p-10">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-950">Sign up</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-orange-950">New captain registration</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your details below to create your account.
                </p>
              </div>

              <form className="space-y-4" onSubmit={submithandler}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">First name</span>
                    <input
                      required
                      name="firstname"
                      value={Firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      minLength={3}
                      type="text"
                      placeholder="Ali"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Last name</span>
                    <input
                      name="lastname"
                      value={Lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      minLength={3}
                      type="text"
                      placeholder="Khan"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email address</span>
                  <input
                    required
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    minLength={5}
                    type="email"
                    placeholder="hello@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Password</span>
                  <input
                    required
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-700">Vehicle details</h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Vehicle color</span>
                      <input
                        required
                        name="vehicleColor"
                        value={VehicleColor}
                        onChange={(e) => setVehicleColor(e.target.value)}
                        type="text"
                        placeholder="Black"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Plate number</span>
                      <input
                        required
                        name="vehiclePlate"
                        value={VehiclePlate}
                        onChange={(e) => setVehiclePlate(e.target.value)}
                        type="text"
                        placeholder="ABC-123"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Capacity</span>
                      <input
                        required
                        name="vehicleCapacity"
                        value={VehicleCapacity}
                        onChange={(e) => setVehicleCapacity(e.target.value)}
                        min="1"
                        type="number"
                        placeholder="4"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-700">Vehicle type</span>
                      <select
                        required
                        name="vehicleType"
                        value={VehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                      >
                        <option value="">Select type</option>
                        <option value="car">Car</option>
                        <option value="motorcycle">Motorcycle</option>
                        <option value="auto">Auto</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
                    Keep me updated
                  </label>
                  <span className="font-medium text-slate-600">Secure signup</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Create account
                </button>
              </form>

              {submitted && (
                <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Account details ready. You can now connect this form to your backend API.
                </div>
              )}

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Link to="/login" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  User Login
                </Link>
                <Link to="/captain-login" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Captain Login
                </Link>
                <Link to="/captain-signup" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Captain Signup
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CaptainSignup
