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
        ? 'bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30 ring-1 ring-white/20 transform scale-[1.03]'
        : 'text-gray-600 hover:text-gray-900 hover:scale-105 hover:bg-white hover:shadow-md'
    }`

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight">Uber</div>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={getLinkClass('/')}>Home</NavLink>
            <NavLink to="/captain-login" className={getLinkClass('/captain-login')}>Captain Login</NavLink>
            <NavLink to="/captain-signup" className={getLinkClass('/captain-signup')}>Captain Sign up</NavLink>
            <NavLink to="/signup" className={getLinkClass('/signup')}>Create Account</NavLink>
            <NavLink to="/login" className={getLinkClass('/login')}>User Login</NavLink>
          </nav>
          <div className="md:hidden">{/* mobile menu placeholder */}</div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 w-full">
        {children}
      </main>

      <footer className="w-full bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Uber Clone</div>
      </footer>
    </div>
  )
}

export default Layout
