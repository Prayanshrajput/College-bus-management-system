import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Change({data}) {
const[inputt,setinput]=useState({})
  const inputhandler=(event)=>{
      setinput({...inputt,[event.target.name]:event.target.value,["oldbus"]:data.Rno})
      console.log(inputt)
  }

const buttonhandler=()=>{
 postdata()
}

async function postdata(){
  try{
    const ans=await fetch('http://localhost:8000/change',{
    method:'POST',
    body:JSON.stringify(inputt),
    headers:{
            "Content-Type":"application/json"
    }
}  )

const result=await ans.json();
console.log(result)
if(result.success){
toast.success(' successfully changed bus')
}
else{
toast.error("some error")
}
console.log(result)
  }
  catch(error){
    setinput({})
  }
}

  return (
    <>
    <div className=' flex flex-col justify-center items-center gap-y-10'>
        <h1 className=' font-bold bg-cyan-500 text-white p-2 rounded-md  shadow-2xl'>Change Section</h1>
        <p className=' flex gap-1 '>Bus No <span className=' font-bold'>{data.Rno}</span> Change With <span><input id='inp'onChange={inputhandler} name="newbus" className=' w-6 flex  justify-center items-center font-bold border border-b-stone-900'   type="tel" /></span></p>
        <button onClick={buttonhandler} className=' bg-yellow-50 p-2 font-medium shadow-lg rounded-lg flex gap-1  justify-center items-center '>Send <IoIosSend /></button>
    </div>
    <ToastContainer />
    </>
  )
}

export default Change