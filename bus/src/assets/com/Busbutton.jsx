import React, { useContext, useState } from 'react'
import { Busb } from './Busb'
import { AppContext } from '../../Context/AppContext'
import { IoMdCall } from "react-icons/io";

export const Busbutton = ({data}) => {
const {setcli,setbd}=useContext(AppContext)


 const clickhendler=()=>{
    setcli(true)
    setbd(data)
 }

// if(cli){
   
    
// }

return (
  <div  onClick={clickhendler} id='me' className='h-[100px] w-[150px] p-1 mt-6 bg-slate-100 flex flex-col rounded-md justify-center items-center 
  cursor-pointer text-black  text-1xl gap-y-2 '>
    <div className=' flex flex-col  justify-center items-center'>
    <h1>Bus No.{data.Rno}</h1>
    <h1 >{data.Bno}</h1>
  
    </div>
  
    <div className=' flex items-center gap-x-4'>
    <button className=' bg-orange-400 text-white p-1 rounded-md h-7 text-xs shadow-md'>Details</button>
    <IoMdCall  className=' bg-green-500 p-1 rounded-md text-2xl shadow-md'/>
  
    </div>
  
   
    
  </div>
    )


//   return (
// <div onClick={clickhendler} id='hello' className='h-[100px] w-[100px] bg-pink-500 flex flex-col rounded-full justify-center items-center 
// cursor-pointer text-white text-1xl'>
//   <h1>{data.Rno}</h1>
//   <h1 >{data.Bno}</h1>
// </div>
//   )
}