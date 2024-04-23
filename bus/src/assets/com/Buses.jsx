import React, { useEffect, useState,useContext } from 'react'

import { Busb } from './Busb';
import { Busbutton } from './Busbutton';
import { AppContext } from '../../Context/AppContext';


export const Buses = () => {

  const {data,cli,setcli,bd,setbd}=useContext(AppContext)

if(cli){
   return <Busb data={bd} admin={true}></Busb>
 
}

  return (

<div className='conten grid grid-cols-4 place-items-center mb-4 max-w-full min-w-44'>

{
     data.map((data)=>{
       return   <Busbutton key={data.Rno} setbd={setbd} setcli={setcli} data={data} ></Busbutton>
     })
   } 
   </div>
  )
}
