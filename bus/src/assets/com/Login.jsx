import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/AppContext';

export const Login = () => {
  const {login,setlogin,setCookie,setadmin,setuser}=useContext(AppContext)
 
  let navigtee = useNavigate()
  const[data,setdata]=useState({})

  const postdata = async ()=>{
    if(!data.email||!data.password){
      toast.error("fill your entries")
    }
    else
    try{
      const ans=await fetch('http://localhost:8000/login',{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
              "Content-Type":"application/json"
      }
}  )
const result=await ans.json();
console.log(result)
if(result.success){
  setuser(result.find)
  if(result.find.role=="admin"){
    setCookie('admin', result, { path: '/' });
    // setadmin(true)
  }
  setCookie('login', result.token, { path: '/' });

  // setlogin(!login)
  navigtee("/home")


  
}else if(result.resp=="wrong"){
  toast.error("check your password")
}
else{
  toast.error("you are not valid user")
}


    }
    catch(error){
      
      console.log("some error")
    }

   
  }



  const inputHendler =  (event)=>{
    setdata({...data,
            [event.target.name]:event.target.value})

}

  function loginheandler(event){
    event.preventDefault();
      postdata() 
  }

  return (
    <>
    <form  className=' flex  justify-center mt-52 items-center relative' onSubmit={loginheandler}>

<div className='  flex justify-center items-center  -ml-56 mb-32  absolute '>
  <div id='box' className=' bg-red-600 h-28 w-28 rounded-full'>

  </div>
</div>

<div className='  flex justify-center items-center  -mr-56 -mb-80  absolute '>
  <div id='box2' className=' bg-green-600 h-28 w-28 rounded-full'>

  </div>
</div>

      <div className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>

      <label className='w-300px'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Address
            <sup className='text-pink-200'>*</sup></p>


            <input
            required
            type = "email"
            onChange={inputHendler}
            placeholder='Enter Email'
            name='email'
            className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <label className='w-300px'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>


            <input
            required
            
            
            type = "password"   /* {showpass?"text":"password"} */
            onChange={inputHendler}
            placeholder='Enter Password'
            name='password'
            className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <NavLink to="/forget">
    <p className='text-xs -mt-3 text-blue-500 max-w-max ml-auto '>
        Forgot Password
       </p>
    </NavLink>

    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-2'>
         Login
    </button>

    <div className='flex gap-1 '>
    i have't account ? <NavLink to="/Singup" className='text-blue-500'> Signup </NavLink>

    </div>
      </div>  
    </form>
    <ToastContainer />
    </>
  )
}
