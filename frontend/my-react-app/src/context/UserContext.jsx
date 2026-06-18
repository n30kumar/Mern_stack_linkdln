import React, { createContext, useState } from 'react'
export const userDataContext = createContext()

function UserContext({children}) {
  let [userData, setUserData] = useState(null)
  let value = { userData, setUserData }
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext