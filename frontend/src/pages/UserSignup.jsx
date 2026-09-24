import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import axios from 'axios'
import Layout from '../components/Layout'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Firstname, setFirstname] = useState('')
  const [Lastname, setLastname] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const { setUser } = React.useContext(UserDataContext)
  const panelRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.auth-animate', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, panelRef)

    return () => ctx.revert()
  }, [])

  const submithandler = async (e) => {
    e.preventDefault()
    const NewUser = {
      fullname: {
        firstname: Firstname,
        lastname: Lastname,
      },
      email: Email,
      password: Password,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, NewUser)
      if (response.status === 201) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        setSubmitted(true)
        navigate('/home')
      }
    } catch (error) {
      console.error(error)
      const errorMsg = error.response?.data?.message || error.response?.data?.errors?.[0]?.msg || 'Signup failed'
      alert(errorMsg)
    }

    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
    <Layout>
      <div ref={panelRef} className="flex min-h-[calc(100vh-140px)] items-center justify-center px-2 py-4 sm:px-4 lg:px-6">
        <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),_transparent_35%)] blur-3xl" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
            <section className="auth-animate rounded-[28px] bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/20 sm:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Uber</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Create your rider account</h1>
                <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                  Sign up in seconds and start booking rides with a smooth, secure experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/20 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <i className="ri-time-line text-lg text-cyan-300" />
                    Fast onboarding
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">3 steps</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/20 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <i className="ri-shield-check-fill text-lg text-emerald-300" />
                    Protected account
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">Encrypted</p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-slate-300">Quick access</p>
                <p className="mt-2 text-lg font-semibold text-white">Join as a rider and ride smarter every day.</p>
              </div>
            </section>

            <section className="auth-animate rounded-[28px] bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 lg:p-10">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Sign up</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">New rider registration</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your details below to create your account.
                </p>
              </div>

              <form className="space-y-4" onSubmit={submithandler}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">First name</span>
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                      <i className="ri-user-line text-lg text-slate-500" />
                      <input
                        required
                        name="firstname"
                        value={Firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        minLength={3}
                        type="text"
                        placeholder="Ali"
                        className="w-full bg-transparent text-slate-900 outline-none"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Last name</span>
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                      <i className="ri-user-line text-lg text-slate-500" />
                      <input
                        name="lastname"
                        value={Lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        minLength={3}
                        type="text"
                        placeholder="Khan"
                        className="w-full bg-transparent text-slate-900 outline-none"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email address</span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                    <i className="ri-mail-line text-lg text-slate-500" />
                    <input
                      required
                      name="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      minLength={5}
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full bg-transparent text-slate-900 outline-none"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Password</span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                    <i className="ri-lock-2-line text-lg text-slate-500" />
                    <input
                      required
                      name="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={6}
                      type="password"
                      placeholder="Create a strong password"
                      className="w-full bg-transparent text-slate-900 outline-none"
                    />
                  </div>
                </label>

                <div className="flex items-center justify-between text-sm text-slate-500">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
                    Keep me updated
                  </label>
                  <span className="font-medium text-slate-600">Secure signup</span>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <i className="ri-user-add-line" />
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

export default UserSignup
