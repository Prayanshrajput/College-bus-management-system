import React, { useContext, useEffect, useState } from 'react'
import { LuMailQuestion } from "react-icons/lu";
import { AppContext } from '../../Context/AppContext';
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
export const Notification = () => {
const [data,setdata]=useState([])
const {admin}=useContext(AppContext)

const usergetdata= async(req,res)=>{
  try{

    const res= await fetch("http://localhost:8000/usernotification")
    const result=await res.json();

 if(!result){
  setdata([])
 }
else{
  let temp=result.data
  temp=temp.reverse()
  setdata(temp)
  
}


  }
  catch{
    console.log("error at fetching data in db")
 
  }
  
}



const admingetdata= async ()=>{
     
  try{

    const res= await fetch("http://localhost:8000/admingetnotification")
    const result=await res.json();

 if(!result){
  setdata([])
 }
else{
  console.log(result)
  let temp=result.data
  temp=temp.reverse()
  setdata(temp)

}

  }
  catch{
    console.log("error at fetching data in db")
 
  }
  
}




useEffect(()=>{
 admin?(admingetdata()):(usergetdata())
},[])


  return (
    admin?(data.length>=1?(
      <div className=' flex justify-center  w-full mt-8 gap-y-5  flex-col'> 
       { data.map((data)=>{
           const date = new Date(data.createdAt);

           const year = date.getFullYear();
           const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
           const day = date.getDate().toString().padStart(2, '0');
           const hours = date.getHours().toString().padStart(2, '0');
           const minutes = date.getMinutes().toString().padStart(2, '0');
           const seconds = date.getSeconds().toString().padStart(2, '0');
           
           const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
           console.log(formattedDate);
           return  <div className=' ml-4 flex justify-center gap-y-2 flex-col border  shadow-xl rounded-2xl p-3 '> 
        
        <div className=' flex gap-x-2 '><div className=' font-bold text-red-400 text-lg'>Date</div> <div>: {formattedDate}</div></div>
           <div  className=' flex gap-x-2 '><div className=' font-bold text-red-400 text-lg'>Roll Number</div><div>: {data.rollnumber}</div></div>
           <div  className=' flex gap-x-2 '><div className=' font-bold text-red-400 text-lg'>Problem</div><div>: {data.input}</div></div>
           <div  className=' flex gap-x-2 '><div className=' font-bold text-red-400 text-lg'>FILE</div> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url?("Open"):("Not attech")}</a></div>
           <div  className=' flex gap-x-2 '><div className=' font-bold text-red-400 text-lg'>Contact</div><div>: {data.email}</div></div>
      
           </div>     
       })}
     </div>
      
      
     ):(<div className=' flex  justify-center items-center mt-56 flex-col gap-x-2 h-full w-full'>


     <div className='flex justify-center items-center flex-col gap-x-2 h-full w-full'>
     <LuMailQuestion  className=' text-2xl '/>
           <div className=' font-bold'>Notification Not Found</div>
     
     </div>
     
          
         </div>)
):(
  data.length?(<div className=' flex  justify-center   w-full mt-4 flex-col gap-y-3 '>
{
  data.map((data)=>{
    const date = new Date(data.createdAt);

           const year = date.getFullYear();
           const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
           const day = date.getDate().toString().padStart(2, '0');
           const hours = date.getHours().toString().padStart(2, '0');
           const minutes = date.getMinutes().toString().padStart(2, '0');
           const seconds = date.getSeconds().toString().padStart(2, '0');
           
           const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
           console.log(formattedDate);
    return <div className=' flex gap-x-1 ml-2  items-center gap-x-5  border p-3 shadow-xl  rounded-xl'>
      <div className=' text-4xl  text-blue-100'><IoMdContact /></div>
      <div>
      <div>{data.email}</div>
     <div>{data.message}</div>
    <div>{formattedDate}</div>
    </div>
   </div>
  })
}
</div>):(<div className=' flex  justify-center items-center mt-56 flex-col gap-x-2 h-full w-full'>

<div className='flex justify-center items-center flex-col gap-x-2 h-full w-full'>
<LuMailQuestion  className=' text-2xl '/>
      <div className=' font-bold'>Notification Not Found</div>

</div>

     
    </div>)
)


  )
}
