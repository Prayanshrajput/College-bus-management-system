import React, { useContext } from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { NavLink,Link, useNavigate } from 'react-router-dom' 
import { AppContext } from '../../Context/AppContext';

export const Nav = (props) => {

  const{login,setlogin,removeCookie,admin}=useContext(AppContext)
 

let use = useNavigate()



  
  return (
    <div id='navv' className='flex justify-around h-16 items-center w-full max-w-full py-4 mx-auto bg-white rounded-full '>

      


       { (admin||login) &&

         <NavLink to="/home" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex justify-center items-center gap-1  ">
         Home
         <MdHome />
       </NavLink>

       }
       
        

      { (admin|| login) &&
      
      <NavLink to="/Buses" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex items-center gap-1 justify-center ">
      Buses
      <FaBus />

    </NavLink>}
       

        {
          (admin||login)&&
        
          <NavLink to="/notification" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px] hover:shadow-2xl flex items-center gap-1 justify-center">
      Notification
      <MdOutlineNotificationsActive />
    </NavLink>}
       
       { !(admin && login) &&
        <NavLink to="/complain" className=" text-black text-[1.1rem] py-[8px] hover:shadow-2xl px-[12px] rounded-[8px] flex items-center gap-1 justify-center ">
      Complain
      <TbMessageReport />
    </NavLink>}
        
        {(admin || login) &&
          <NavLink  to="/*" refresh="true" className=" text-black text-[1.1rem] py-[8px] px-[12px] rounded-[8px]  ">
          
            <button onClick={(event)=>{
                       event.preventDefault();
                       setlogin(!login);
                       removeCookie('login');
                       removeCookie('admin');
                       use("/login");
                       window.location.reload();
                        

            }} className=' bg-violet-700 p-2 rounded-xl flex items-center gap-1 justify-center text-white hover:shadow-2xl'>
             Logout
             <RiLogoutCircleLine />
            </button>
            
            
            
     
    </NavLink>}

   



        

    </div>
   
   
    
   
    
  )
}
