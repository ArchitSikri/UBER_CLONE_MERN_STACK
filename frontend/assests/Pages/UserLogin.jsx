import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../src/components/Layout'
import axios from 'axios'
import { UserDataContext } from '../../src/context/UserContext'

const UserLogin = () => {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userData = {
          email: email,
          password: password
        }

        try {
          const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

          if (response.status === 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
          }
        } catch (error) {
          console.error(error);
          alert(error.response?.data?.message || 'Login failed');
        }

        setEmail('');
        setPassword('');
      }

  return (
    <Layout>
      <div className="min-h-[calc(100vh-140px)] flex items-center justify-center">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
          <div className="absolute inset-0 .bg-gradient-to-r {
                                                            --tw-gradient-position: to right in oklab;
                                                            background-image: linear-gradient(var(--tw-gradient-stops));
                                                        } from-cyan-500 via-sky-500 to-emerald-500 opacity-20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] p-8 lg:p-10">
            <section className="rounded-3xl bg-slate-950/95 p-8 text-white shadow-xl shadow-slate-900/10 backdrop-blur-xl md:p-10">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Uber</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Welcome back</h1>
                <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                  Fast, clean, and secure rider login. Get back on the road with a single tap.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/30 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15">
                  <p className="text-sm text-slate-200">Quick access</p>
                  <p className="mt-2 text-xl font-semibold text-white">Smart fetch</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4 shadow-lg shadow-slate-900/30 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/15">
                  <p className="text-sm text-slate-200">Secure login</p>
                  <p className="mt-2 text-xl font-semibold text-white">Encrypted</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-900/10 md:p-10">
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
                  <input
                    required
                    value={email}
                    onChange={(e) => 
                      setEmail(e.target.value)
                    }
                    type="email"
                    placeholder="hello@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Password</span>
                  <input
                    required  
                    value={password}
                    onChange={(e) => 
                      setPassword(e.target.value)
                    }
                    type="password"
                    placeholder="Enter your password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
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
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
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
