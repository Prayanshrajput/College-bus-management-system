import React from 'react'
import { NavLink,Link } from 'react-router-dom' 
export const Nav = () => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>


       
        <NavLink to="/home" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl  ">
      Home
    </NavLink>
        

        <NavLink to="/Buses" className=" text-white py-[8px] px-[12px] rounded-[8px] shadow-2xl ">
      Buses
    </NavLink>
       

        <NavLink to="/notification" className=" text-white py-[8px] px-[12px] rounded-[8px] ">
      Notification
    </NavLink>
       
        <NavLink to="/complain" className=" text-white py-[8px] px-[12px] rounded-[8px]  ">
      Complain
    </NavLink>
        
        <NavLink to="/logout" className=" text-white py-[8px] px-[12px] rounded-[8px]  ">
      Logout
    </NavLink>
        

    </div>
   
   
    
   
    
  )
}
