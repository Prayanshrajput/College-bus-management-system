import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Conformp() {
  const Navi=useNavigate()
const [data,setdata]=useState({})
const inputhendler=(event)=>{
setdata({...data,[event.target.name]:event.target.value})
console.log(data)
}


 const postdata = async (event)=>{
  event.preventDefault();

  if(data.password!=data.conform_password){
      toast.error('cheak your both password')
  }
  else
  {try{
    const ans=await fetch('http://localhost:8000/forget',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
            "Content-Type":"application/json"
    }

}  )
const result=await ans.json();
if(result.success){
  Navi("/login");
 // toast.success("password changed")

}
  }
  catch(error){
    console.log("some error")
  }
}
}



  return (
   <>
    <form  className=' flex  justify-center mt-60 items-center relative' onSubmit={postdata}>

<div className='  flex justify-center items-center   absolute '>
  <div id='box5' className=' h-56 w-40 rounded-xl -mt-56'>

    <img src='lock.png'/>

  </div>
</div>



      <div className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>

      <label className='w-300px'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter Gmail
            <sup className='text-pink-200'>*</sup></p>


            <input
            
            required
            type = "email"
            
           onChange={inputhendler}
           
            
            placeholder='Enter Gmail'
            name='email'
            className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <label className='w-300px'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter New Password
            <sup className='text-pink-200'>*</sup></p>


            <input
            
            required
            type = "password"
            onChange={inputhendler}
           
           
            
            placeholder='Enter Gmail'
            name='password'
            className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

    <label className='w-300px'>
            <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Conform Password
            <sup className='text-pink-200'>*</sup></p>


            <input
            
            required
            type = "password"
            
           onChange={inputhendler}
           
            
            placeholder='Enter Conform Password'
            name='conform_password'
            className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
            />
           
    </label>

   

    <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-2'>
         Submit
    </button>

    

   


      </div>
      

    
    </form>

        <ToastContainer />
   </>
  )
}

export default Conformp