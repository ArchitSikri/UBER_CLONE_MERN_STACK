import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import Layout from '../components/Layout'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { setUser } = useContext(UserDataContext)
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (error) {
      console.error(error)
      alert(error.response?.data?.message || 'Login failed')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <Layout>
      <div ref={panelRef} className="flex min-h-[calc(100vh-140px)] items-center justify-center">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-black/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.26),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.24),_transparent_35%)] blur-3xl" />
          <div className="relative grid gap-8 p-6 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
            <section className="auth-animate rounded-[28px] bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/20 md:p-8">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Uber</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Welcome back</h1>
                <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                  Fast, clean, and secure rider login. Get back on the road with a single tap.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/30 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <i className="ri-flashlight-fill text-lg text-cyan-300" />
                    Quick access
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">Smart fetch</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/30 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <i className="ri-shield-check-fill text-lg text-emerald-300" />
                    Secure login
                  </div>
                  <p className="mt-2 text-xl font-semibold text-white">Encrypted</p>
                </div>
              </div>
            </section>

            <section className="auth-animate rounded-[28px] bg-white p-7 shadow-xl shadow-slate-900/10 md:p-8">
              <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Sign in</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Rider access</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Enter your credentials to continue to the Uber Clone dashboard.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email address</span>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200">
                    <i className="ri-mail-line text-lg text-slate-500" />
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-slate-900 outline-none"
                    />
                  </div>
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500" />
                    Remember me
                  </label>
                  <button className="text-sm font-semibold text-slate-600 hover:text-slate-900">Forgot password?</button>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <i className="ri-login-box-line" />
                  Login to your account
                </button>
              </form>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <span className="h-px flex-1 bg-slate-200" />
                <span>Or continue with</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">G</span>
                  Google
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">A</span>
                  Apple
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Link to="/signup" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  User Signup
                </Link>
                <Link to="/captain-signup" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Captain Signup
                </Link>
                <Link to="/captain-login" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Captain Login
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserLogin
