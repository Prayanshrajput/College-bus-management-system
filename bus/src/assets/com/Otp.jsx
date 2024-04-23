import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/AppContext';
import { Loder } from './Loder';

export const Otp=()=>{
     const{login,setlogin,loder,setloder}=useContext(AppContext)
     const[timer,settimer]=useState(0)
     
   let navigate =  useNavigate();

useEffect(()=>{
  setInterval(()=>{
    settimer(timer+1);
  },100);
},[])
   const[otp,setopt]=useState({})
const inputhendler=(event)=>{
    
setopt({...otp,
        [event.target.name]:event.target.value})
console.log(otp)
}

  const clickhendler=async (evnet)=>{
    event.preventDefault()
    setloder(true)
    try{
      
      let res=await fetch('http://localhost:8000/verifyOtp',{
              method:'POST',
              body:JSON.stringify(otp),
              headers:{
                      "Content-Type":"application/json"
              }

              })

      let result= await res.json();

      console.log(result.success)
      if(result.success){
      navigate("/")
              toast.success(result.message)
          
      }
      else{
        navigate("/Singup")

              toast.error(result.message)
              
      }
  }
  catch(error){
    navigate("/Singup")
      toast.error('server error')
    
  }

  setloder(false)


  }


  return (
    
    <form  className=' flex  justify-center mt-52 items-center relative' onSubmit={clickhendler}>
     {
      loder?(<Loder></Loder>):(<><div className='  flex justify-center items-center  -ml-56 mb-32  absolute '>
      <div id='box' className=' bg-red-600 h-28 w-28 rounded-full'>
    
      </div>
    </div>
    
    <div className='  flex justify-center items-center  -mr-56 -mb-80  absolute '>
      <div id='box2' className=' bg-green-600 h-28 w-28 rounded-full'>
    
      </div>
    </div>
    
          <div className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>
    
          <label className='w-300px'>
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter OTP
                <sup className='text-pink-200'>*</sup></p>
    
    
                <input
                
                required
                type = "text"
    
                onChange={inputhendler}
                placeholder='Enter OTP'
                name='otp'
                className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
                />
               
        </label>
        <p>Otp is valid on {'->'} {timer}</p>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-2'>
             Submit
        </button>

          </div></>)
     }
    

        </form>
  )
}








// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// export const Otp = () => {
// const navigate=useNavigate()
  
//   const[otp,setopt]=useState({})
// const inputhendler=(event)=>{
    
// setopt({...otp,
//         [event.target.name]:event.target.value})
// console.log(otp)
// }

//   const clickhendler=async (evnet)=>{
//     event.preventDefault()
//     try{
//       let res=await fetch('http://localhost:8000/verifyOtp',{
//               method:'POST',
//               body:JSON.stringify(otp),
//               headers:{
//                       "Content-Type":"application/json"
//               }

//               })

//       let result= await res.json();

//       console.log(result.success)
//       if(result.success){
//       navigate("/")
//               toast.success(result.message)
          
//       }
//       else{
//         navigate("/Singup")

//               toast.error(result.message)
              
//       }
//   }
//   catch(error){
//     navigate("/Singup")
//       toast.error('server error')
    
//   }


//   }

//   return (
//     <>
// <form >
// <label className='w-300px'>
//             <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>OTP
//             <sup className='text-pink-200'>*</sup></p>
//             <input         
//             required
//             type = "text"
//             placeholder='Enter Otp'
//             onChange={inputhendler}
//             name='otp'
//             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-[1px] border-gray-500'
//             />    
//     </label>
//     <button onClick={clickhendler}>
//         Submit
//     </button>
// </form>
//   <ToastContainer /></>

//   )
// }
