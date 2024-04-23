import React, { useContext, useState } from 'react'

import { IoMdCall } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { MdMergeType } from "react-icons/md";
import { FaBus } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
 import { MdEdit } from "react-icons/md";
 import { FaSave } from "react-icons/fa";
 
 import { ToastContainer, toast } from 'react-toastify';
 import { AiOutlineFieldNumber } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import Change from './Change';



export const Busb = ({data}) => {
  
const{admin,setadmin}=useContext(AppContext)
 
 const[postdata,setpostdata]=useState(data) 
const[arr,setarr]=useState(data.BUS_ROUTE)
const[arr1,setarr1]=useState(data.SHIFT_I)
const[arr2,setarr2]=useState(data.SHIFT_II)                                                                    
const{read,setread}=useContext(AppContext)
const[Rno,setRno]=useState(data.Rno)
const[Bno,setBno]=useState(data.Bno)
const[DRIVER_NAME,setDRIVER_NAME]=useState(data.DRIVER_NAME)
const[DRIVER_PHONE_NO,setDRIVER_PHONE_NO]=useState(data.DRIVER_PHONE_NO)

  let navigate = useNavigate();

   const[ch,setch]=useState(false);
   const[merge,setmerge]=useState(false);
   
   function changehandler(){
    setch(true);
    setmerge(false)
   }

   function mergehandler(){
    setmerge(true);
    setch(false)
   }

   function backhandler(){

  navigate( "buses"-1);
   }

   const inputHandler = (event, index) => {
    const newData = [...postdata.BUS_ROUTE];
    newData[index] = event.target.value;
    setpostdata((prev)=>prev,postdata.BUS_ROUTE=newData)
    console.log("hii prayansh")
    setarr(newData);
  };

  const inputHandler1 = (event, index) => {
    const newData = [...postdata.SHIFT_I];
    newData[index] = event.target.value;
    console.log("hii prayansh")
    setpostdata((prev)=>prev,postdata.SHIFT_I=newData)
    setarr1(newData);
  };

  const inputHandler2 = (event, index) => {
    const newData = [...postdata.SHIFT_II];
    newData[index] = event.target.value;
    console.log("hii prayansh")
    setpostdata((prev)=>prev,postdata.SHIFT_II=newData)
    setarr2(newData);
  };
  
  const buttonHandler = (event) => {
    console.log("button is here")
    setread(!read);
    
    if(!read){
      senddata()

    }
    console.log("postdata-->",typeof(postdata),postdata)
    
  };
 
 

   const senddata = async ()=>{
    try{
      const ans=await fetch('http://localhost:8000/updatebus',{
      method:'POST',
      body:JSON.stringify(postdata),
      headers:{
              "Content-Type":"application/json"
      }
}  )

const result=await ans.json();
if(result.success){
  toast.success('Save Successfully ')
}
else{
  console.log(result)
  toast.error("some error")
}
console.log(result)
    }
    catch(error){
      console.log("Some Server Error")
    }
  }

return (
  
  <>
  <div className=' flex justify-center  h-full w-screen gap-40 mt-60'>

    <button onClick={backhandler} className=' -mt-8 -ml-40   bg-sky-700 p-2 text-white h-9 rounded-md shadow-xl flex gap-x-2 justify-center items-center text-lg'><IoArrowBackCircleOutline />Back</button>

    <div className=' flex justify-center flex-col  -mt-60 gap-y-20 '>

  {/* main div */}
    <div id='mainb' className='flex justify-center flex-col items-center bg-slate-100  w-[900px] mx-auto h-[800px] border-slate-500 rounded-2xl mt-14 mb-3 '>
    <div className=' flex flex-row w-full  justify-around items-center'>

   { admin &&
    <button id='me' onClick={backhandler} className=' flex gap-1 items-center justify-center'>Back <MdMergeType /></button>}

<div className=' flex flex-col justify-center items-center mt-2 gap-y-2'>
  {read?(<h1 className=' text-white bg-black p-1  w-10 rounded-full text-2xl mt-2 flex items-center justify-center font-bold' readOnly={read}>{data.Rno}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'><AiOutlineFieldNumber className=' text-white bg-black p-1 rounded-full text-2xl'/><input  className='bg-slate-100 text-xl' type="text" name="" onChange={(e)=>(setRno(e.target.value),postdata.Bno=e.target.value)}  value={Rno} placeholder='Enter Route  No' /></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2 ' readOnly={read}><FaBus className=' text-white p-1 rounded-xl bg-red-500 text-2xl' />{data.Bno}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'> <FaBus className=' text-white p-1 rounded-xl bg-red-500 text-2xl'/><input  className='bg-slate-100 text-xl' type="text" name="" id="" value={Bno}  onChange={(e)=>(setBno(e.target.value),postdata.Bno=Bno)} placeholder='Enter Bus No'/></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2' readOnly={read}><FcBusinessman />{data.DRIVER_NAME}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2 '><FcBusinessman /><input   className='bg-slate-100 text-xl' type="text" name="" id="" value={DRIVER_NAME} onChange={(e)=>(setDRIVER_NAME(e.target.value),postdata.DRIVER_NAME=DRIVER_NAME)} placeholder='Enter Driver Name' /></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2'><IoMdCall  className=' bg-green-500 p-1 rounded-md text-2xl text-white  shadow-md'/>{data.DRIVER_PHONE_NO}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'><IoMdCall  className=' bg-green-500 p-1 rounded-md text-2xl  text-white  shadow-md'/><input  className='bg-slate-100 text-xl' type="text" name="" id="" value={DRIVER_PHONE_NO} onChange={(e)=>(setDRIVER_PHONE_NO(e.target.value),postdata.DRIVER_PHONE_NO=DRIVER_PHONE_NO)} placeholder='Enter Driver No'/></div>)}
  {/* <h1>{data.DRIVER_NAME}</h1>
  
  <h1>{data.DRIVER_PHONE_NO}</h1> */}

{/* bg-pink-400  text-white border border-slate-500 p-1 rounded-xl  */}

    </div>
 

{ admin &&
 <button id='me' onClick={changehandler} className=' flex gap-1 items-center justify-center transition'>Change</button>}

    </div>
  
  {/* 1/2 div */}
  <div className='flex justify-center items-center mt-4 gap-x-4 bg-slate-200 w-[600px] h-[700px] rounded-2xl shadow-inner mb-2 relative'>
  { admin &&
    <button id='me' onClick={buttonHandler} className=' absolute right-8 top-2 h-10 flex w-20 items-center justify-center'>{read ? (<div className=' flex justify-center items-center gap-x-2'>Edit<MdEdit /></div>) : (<div className=' flex justify-center items-center gap-x-2'>Save<FaSave /></div>)} </button>}
  
   
  <div>
  <h2 className=' font-semibold shadow-xl mb-2'>BUS_ROUTE</h2>
{/* {data.BUS_ROUTE.map((data,index)=>{
  // return <li className=' shadow-md' readonly:read>{data}</li>
  return <input type="text" className=' shadow-md' readonly:read value={data}/>
})} */}

 
      {postdata.BUS_ROUTE.map((item, index) => (
       <ol>
        <li key={index}  >
          {read ? (

<div className=' flex items-center gap-x-1  shadow-md'>
<div className=' h-2 w-2 bg-black rounded-full  '></div>
            {item
}
            </div>
          ) : (
            <div className=' flex justify-center items-center gap-x-1 shadow-lg'>
              <div className=' h-2 w-2 bg-black rounded-full'></div>
            <input className=' bg-slate-200 w-60 '
              value={item}
              onChange={(event) => inputHandler(event, index)}
              readOnly={read}
            />
            </div>
          )}
        </li>
        </ol>
      
        
      ))}


   

</div>

<div>
<h2 className='font-semibold shadow-xl mb-2'>SHIFT_I</h2>
{postdata.SHIFT_I.map((item, index) => (
  <ol>
        <li key={index}>
          {read ? (
            <div className=' flex items-center gap-x-1 shadow-md'>
            <div className=' h-2 w-2 bg-black rounded-full shadow-xl'></div>
            {item}
            </div>
          ) : (
            <div className=' flex justify-center items-center gap-x-1'>
              <div className=' h-2 w-2 bg-black rounded-full'></div>
            <input className=' bg-slate-200 w-24 '
              value={item}
              onChange={(event) => inputHandler1(event, index)}
              readOnly={read}
            />
            </div>
          )}
        </li>
        </ol>
      ))}  
</div>


<div>
<h2 className='font-semibold shadow-xl mb-2'>SHIFT_II</h2>
{postdata.SHIFT_II.map((item, index) => (
  <ol>
        <li key={index}>
          {read ? (
             <div className=' flex items-center gap-x-1 shadow-md'>
             <div className=' h-2 w-2 bg-black rounded-full shadow-xl'></div>
            {item}
            </div>
          ) : (
            <div className=' flex justify-center items-center gap-x-1'>
              <div className=' h-2 w-2 bg-black rounded-full'></div>
            <input className=' bg-slate-200 w-24 '
              value={item}
              onChange={(event) => inputHandler2(event, index)}
              readOnly={read}
            />
            </div>
          )}
        </li>
        </ol>
      ))}
</div>




  </div>
  



  </div>


 { ch && 
 <div id='mainb' className=' w-full h-56 p-5 mb-12 rounded-xl'>
    <Change key={data.Rno} data={data}/>
  </div>
  }

    </div>
    
     

    {/* <button onClick={buttonHandler}>{read ? "Edit" : "Save"}</button>
   */}

        
  </div>

  <ToastContainer />
  
  </>

     
)

}


