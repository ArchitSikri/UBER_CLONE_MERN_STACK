import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation()

  const isActiveLink = (path) => {
    if (path === '/home') {
      return location.pathname === '/' || location.pathname === '/home'
    }

    return location.pathname === path
  }

  const getLinkClass = (path) =>
    `relative rounded-full px-4 py-2 text-sm font-semibold tracking-wide shadow-sm transition-all duration-300 ease-out ${
      isActiveLink(path)
        ? 'bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30 ring-1 ring-white/20 scale-[1.03]'
        : 'text-gray-600 hover:text-gray-900 hover:scale-105 hover:bg-white hover:shadow-md'
    }`

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      <header className="w-full border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
            <i className="ri-map-2-fill text-2xl text-emerald-500" />
            Uber
          </div>
          <nav className="hidden items-center space-x-2 md:flex">
            <NavLink to="/" className={getLinkClass('/')}>
              <span className="mr-2 inline-flex items-center"><i className="ri-home-4-line" /></span>
              Home
            </NavLink>
            <NavLink to="/captain-login" className={getLinkClass('/captain-login')}>
              <span className="mr-2 inline-flex items-center"><i className="ri-steering-fill" /></span>
              Captain Login
            </NavLink>
            <NavLink to="/captain-signup" className={getLinkClass('/captain-signup')}>
              <span className="mr-2 inline-flex items-center"><i className="ri-user-add-line" /></span>
              Captain Sign up
            </NavLink>
            <NavLink to="/signup" className={getLinkClass('/signup')}>
              <span className="mr-2 inline-flex items-center"><i className="ri-account-circle-line" /></span>
              Create Account
            </NavLink>
            <NavLink to="/login" className={getLinkClass('/login')}>
              <span className="mr-2 inline-flex items-center"><i className="ri-login-box-line" /></span>
              User Login
            </NavLink>
          </nav>
          <div className="md:hidden">{/* mobile menu placeholder */}</div>
        </div>
      </header>

      <main className="container mx-auto flex-1 w-full px-4 py-8">
        {children}
      </main>

      <footer className="w-full border-t border-slate-200/70 bg-white">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Uber Clone • Crafted with icons and motion
        </div>
      </footer>
    </div>
  )
}

export default Layout
