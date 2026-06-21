import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { userDataContext } from './context/UserContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
const App = () => {
   let {userData}=useContext(userDataContext)
  return (
    <Routes>
     <Route path='/' element={userData?<Home/>:<Navigate to="/Login"/>}/>
   <Route path='/signup' element={userData?<Navigate to="/"/>:<Signup/>}/>
    <Route path='/login' element={userData?<Navigate to="/"/>:<Login/>}/>
    <Home/>
    </Routes>
  )
}

export default App

