import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from '../../Context/AppContext';
import { Loder } from './Loder';
export const Signup = () => {
        const {login,setlogin,setloder,loder}=useContext(AppContext)
       
        const[sign,setsign]=useState({})
        const navigate = useNavigate();
        const inputHendler =  (event)=>{
                setsign({...sign,
                        [event.target.name]:event.target.value})
                        console.log(sign)
        }

        const validateEmail = (email) => {
                return email.match(
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
              };
              
        const formHandler = async (event)=>{
                console.log("ram ram")
             event.preventDefault();
             if(!validateEmail(sign.email)){
                toast.error("please enter valid email")
                return
             }
             if((sign.password==sign.conform_password)&&sign.password.length>=8)
           { 
                setloder(true) 

                try{
                let res=await fetch('http://localhost:8000/singup',{
                        method:'POST',
                        body:JSON.stringify(sign),
                        headers:{
                                "Content-Type":"application/json"
                        }
        
                        })
                       
                let result= await res.json();
        
                if(result.success){
                        toast.success(result.message)
                        setloder(false) 
                       navigate("/otp");
                }
                else{
                        toast.error(result.message)
                }
            }
            catch(error){
                toast.error('server error')
            }
}
else{
       
        toast.error('cheak your password')
}
        }

  return (
        <> 
    <form  className='flex flex-col justify-center items-center gap-y-4 mt-52' onSubmit={formHandler}>
{
loder?(<Loder></Loder>):(<><div className='  flex justify-center items-center  -ml-56 mb-32  absolute '>
<div id='box' className=' bg-red-600 h-28 w-28 rounded-full'>

</div>
</div>

<div className='  flex justify-center items-center  -mr-56 -mb-80  absolute '>
<div id='box2' className=' bg-green-600 h-28 w-28 rounded-full'>

</div>
</div>


      <div  className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>

      <label className='w-300px'>
        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enrollment Number
        <sup className='text-pink-200'>*</sup></p>


        <input
        
        required
        type = "text"
        
        onChange={inputHendler}
        
        placeholder='Enter Enrollment Number'
        name='rollnumber'
        className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
        />
       
</label>

        <label className='w-300px'>
        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Email Addresse
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
        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
        />
       
</label>

<label className='w-300px'>
        <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Conform Password<sup className='text-pink-200'>*</sup></p>


        <input
        required
        
        
        type = "password"   /* {showpass?"text":"password"} */
        
        onChange={inputHendler}
        placeholder='Enter Conform Password'
        name='conform_password'
        className='bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
        />
       
</label>

<NavLink to="/login">
<p className='text-xs -mt-3 text-blue-100 max-w-max ml-auto '>
    login
   </p>
</NavLink>

<button onClick={formHandler} className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'>
     Signup
</button>      
</div>
  

<ToastContainer /></>)

}
  </form>

  </>
)
}




  

   
