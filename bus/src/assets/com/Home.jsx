import React, { useContext, useEffect, useState } from 'react'
import { IoIosPaperPlane } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { LiaSearchSolid } from "react-icons/lia";

import { RiExchangeLine } from "react-icons/ri";
import { AppContext } from '../../Context/AppContext';
import { Busb } from './Busb';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { Busbutton } from './Busbutton';

export const Home = () => {
  const {setcli,cli,bd,setbd,data,fetchdata,setlogin,login,loder}=useContext(AppContext)
  const[find,setfind]=useState(false)
  // fetchdata()

const[input,setinput]=useState("")

if(cli){
  return <Busb data={bd} admin={true}></Busb>
}

const inputhandler=(event)=>{
  event.preventDefault()
  setcli(false)
  let temp=event.target.value
  temp=temp.toUpperCase()
  temp=temp.trim()
  setinput(temp)
  console.log(input)
}
let val;
  let mbus=[];

const buttonhendler = (event) => {
  event.preventDefault()
  
  data.forEach((tempdata) => {
    val=tempdata.BUS_ROUTE.filter((route) => route === input); // Modify the filter function
  
    if(val.length!=0){
      mbus.push(tempdata)
       setbd(mbus)
      
    }
    
  })

  if(bd.length==0){
    toast.error("Bus is not found")
   }
   else{
    console.log(mbus)
    setfind(true)
   }
  
  }



if(find){
  return bd.map((data)=>{
    return  <Busbutton key={data.Rno} setbd={setbd} setcli={setcli} data={data} ></Busbutton>
  })
}




  return (
    <div className=' flex flex-col gap-x-4 justify-center items-center mt-1 overflow-x-hidden'>

      <img src='nature.png' className=' absolute -z-0  h-64 w-full  -mt-96'/>
      <img id='bus' className=' absolute  h-80 -mt-48 overflow-x-hidden' src='bus.png'/>
      <img id='msg'  className=' absolute h-28' src='msg.png'/>
        
        <div className=' flex h-60 w-full  justify-center items-center  gap-4 z-0'>

          <div className=' flex justify-center items-center border border-white  rounded-2xl p-1 '>
           {/* two search div */}
          <div className=' h-8 w-80 flex gap-1  items-center'>
          <IoIosPaperPlane className=' text-3xl'/>
            <input className=' h-8  w-80 border  border-red-200 rounded-md bg-[white]/60' type="text" placeholder='From'
            
            onChange={inputhandler} />

            </div>
            <RiExchangeLine  className=' text-4xl  cursor-pointer'/>
      

            <div className='  h-11 w-80 flex gap-1 items-center'>
            <MdLocationPin className=' text-3xl' />
            <input className=' h-8 w-80 rounded-md border  border-red-200 bg-[white]/60' type="text" placeholder='CDGI' readOnly/>


            </div>

          </div>

            
           {/* search button */}
            <button className=' flex justify-center items-center gap-2 p-2 bg-red-500 rounded-xl text-white'
            onClick={buttonhendler}
            >Search
            <LiaSearchSolid />
            </button>
            
           
        </div>


        {/* more */}

        <div className=' mt-10 flex  w-full justify-around items-center  '>
            <div id='text' className=' text-3xl -mt-6 border  p-4 shadow-2xl'>
                <p> <span className=' text-red-600'>Note : </span> Staff Members and Students have to be present at the bus stop at least 05 min. before the
Scheduled Time. Changed Bus Route effective from 01/10/2013
Registrar</p>

            </div>

            <img id='girl' className=' h-96 w-60 object-contain mt-2 ' src='girl.png'/>
        </div>
    
    
        <ToastContainer />
    </div>
  )
}
