import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';

function Forgotp() {
const{setlogin,login}=useContext(AppContext)
const [input,setinput]=useState({})
    let navigate = useNavigate();


const submithandle=async (event)=>{
    event.preventDefault()
    try{
        const ans=await fetch('http://localhost:8000/forgetpassword',{
            method:'POST',
            body:JSON.stringify(input),
            headers:{
                    "Content-Type":"application/json"
            }
      }  )
      const result=await ans.json();

      if(result.success){
        navigate("/forgetotp")
      }
    }
    catch(error){
        console.log("error finding in forget")
    }
}

    const inputhendler=(event)=>{
setinput({...input,[event.target.name]:event.target.value})
console.log(input)
    }
    
  return (
    <form  className=' flex  justify-center mt-52 items-center relative' onSubmit={submithandle}>

    <div className='  flex justify-center items-center   absolute '>
      <div id='box4' className=' h-56 w-40 rounded-xl -mt-6'>

        <img src='forgot.png'/>
    
      </div>
    </div>
    
    
    
          <div className=' bg-[white]/60  flex flex-col justify-center items-center gap-y-4 mt-28 p-5 w-72 rounded-3xl shadow-2xl absolute'>
    
          <label className='w-300px'>
                <p className='text-[0.875rem] text-black mb-1 leading-[1.375rem]'>Enter Gmail
                <sup className='text-pink-200'>*</sup></p>
    
    
                <input
                
                required
                type = "gmail"
                
               
               onChange={inputhendler}
                
                placeholder='Enter Gmail'
                name='email'
                className=' bg-white rounded-[0.5rem] text-black w-full p-[12px] border-[1px] border-gray-500'
                />
               
        </label>
    
       
    
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-2'>
             Submit
        </button>
    
        
    
       
    
    
          </div>
          
    
        
        </form>
  )
}

export default Forgotp