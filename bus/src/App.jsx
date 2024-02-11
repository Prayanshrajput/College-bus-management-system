// import { useState } from 'react'
// import reactLogo from 'react.svg'
// import viteLogo from'vite.svg'
import './App.css'
import { Nav } from './assets/com/Nav'
import { Route,Routes } from 'react-router-dom'
import { Buses } from './assets/com/Buses'
import { Compalain } from './assets/com/Compalain'
import { Login } from './assets/com/Login'
import { Notification } from './assets/com/Notification'
import { Signup } from './assets/com/Signup'

function App() {
  

  return (
    <div id='Ap' className=' bg-richblack-800 w-screen h-screen  flex flex-col'>

<>
     <Nav></Nav>

  

     <Routes>
       
        <Route path='/home' element={<h1>home</h1>} ></Route>
        <Route path="/Buses" element={<Buses></Buses>} ></Route>
        <Route path="/notification" element={<Notification></Notification>} ></Route>
        <Route path="/complain" element={<Compalain></Compalain>} ></Route>
        <Route path="/logout" element={<Login></Login>} ></Route>
        <Route path="*" element={<Signup></Signup>}></Route>
  
      </Routes>
    </>


    </div>
    
  )
}

export default App
