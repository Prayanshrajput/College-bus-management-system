import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {BrowserRouter, RouterProvider,createBrowserRouter} from 'react-router-dom'
import AppContextProvider, { AppContext } from './Context/AppContext.jsx'
import { Layout } from './assets/Layout.jsx'
import { Home } from './assets/com/Home.jsx'
import { Buses } from './assets/com/Buses.jsx'
import { Compalain } from './assets/com/Compalain.jsx'
import { Login } from './assets/com/Login.jsx'
import { Signup } from './assets/com/Signup.jsx'
import { Otp } from './assets/com/Otp.jsx'
import { Protected } from './assets/com/Protected.jsx'
import { Notification } from './assets/com/Notification.jsx'
import Forgotp from './assets/com/Forgotp.jsx'
import Conformp from './assets/com/Conformp.jsx'
import { Forgetotp } from './assets/com/forgetotp.jsx'
import { Loder } from './assets/com/Loder.jsx'
import { Addbus } from './assets/com/Addbus.jsx'

//import { Addbus } from './assets/com/Addbus.jsx'





const router=createBrowserRouter([
  
    {
      path: "/*",
      element : <Login/>
    }
    ,
    {
      path: "Addbus",
      element:<Addbus />,
    },
    {
      path: "Singup",
      element:<Signup />,
    },
    {
      path: "loder",
      element:<Loder />,
    },
    {
      path: "forget",
      element:<Forgotp />,
    },
    {
      path: "conformp",
      element:<Conformp />,
    },
    {
      path: "otp",
      element:<Otp/>,
    },
    {
      path: "forgetotp",
      element:<Forgetotp/>,
    },
   
   {
    path: '/',
    element: < Protected Componet={Layout}/>,
    
    children :[
      {
        path : "Buses",
        element: <Buses/>
      },
      {
        path: "home",
        element:< Protected Componet={Home}  />,
      
      },
      
      {
        path: "notification",
        element : < Protected Componet={Notification}   />
      }
      ,
      {
        path: "complain",
        element : < Protected Componet={Compalain}  />
      },
      


    ]
   }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <AppContextProvider>
    {/* <BrowserRouter>
    <App />
  </BrowserRouter>, */}
  <RouterProvider router={router}/>
  </AppContextProvider>
   
)
