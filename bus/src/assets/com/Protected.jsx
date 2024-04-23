import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

export const Protected = (prop) => {
    const {login,setlogin,cookies,setadmin}=useContext(AppContext)
   const navigate=useNavigate()
    const {Componet}=prop

    let cookie=Cookies.get("login")
console.log(cookie)
    if(!cookie){
       navigate("login")
    }
    else{
    
    cookie=`${cookie.split(".")[0]}`
console.log(cookie)

    if(cookie=="AbCz"){
      setadmin(true)
    }
    
    setlogin(true)
    }
    
  return (
   <Componet></Componet>
  )
}
