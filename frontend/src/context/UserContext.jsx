import React from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({ children }) => {
  const [user, setUser] = React.useState({
    Email: '',
    fullname: {
      Firstname: '',
      Lastname: ''
    }
  })

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
