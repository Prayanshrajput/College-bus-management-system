// import React from 'react'
// import { useState } from 'react';

// function Addbus() {
//    // State variables to hold data for buses, shift 1, and shift 2
//    const [buses, setBuses] = useState([]);
//    const [shift1, setShift1] = useState([]);
//    const [shift2, setShift2] = useState([]);


//    const [busList, setBusList] = useState([]);
//    const [busId, setBusRoute] = useState('');
//    const [busNo, setBusNo] = useState('');
//    const [driverName, setDriverName] = useState('');
//    const [driverMobile, setDriverMobile] = useState('');
//    const [input,setinput]= useState(true);
 
//    const addBus = () => {
//      if (busId && busNo && driverName && driverMobile) {
//        setBusList([...busList, { id: busId, number: busNo, driver: driverName, mobile: driverMobile }]);
//        setBusRoute('');
//        setBusNo('');
//        setDriverName('');
//        setDriverMobile('');
//        setinput(false);
//      } else {
//        alert('Please fill all fields');
//      }
//    };
 
//    const deleteBus = (index) => {
//      const newList = [...busList];
//      newList.splice(index, 1);
//      setBusList(newList);
//      setinput(true);
//    };
 
//    const removeAllBuses = () => {
//      setBusList([]);
//    };
 
 
//    // Function to handle adding an item to the specified column
//    const addToColumn = (column, item) => {
//      switch (column) {
//        case 'buses':
//          setBuses([...buses, item]);
//          break;
//        case 'shift1':
//          setShift1([...shift1, item]);
//          break;
//        case 'shift2':
//          setShift2([...shift2, item]);
//          break;
//        default:
//          console.log('Invalid column');
//      }
//    };

//    // Function to handle deleting an item from the specified column
//   const deleteFromColumn = (column, index) => {
//     switch (column) {
//       case 'buses':
//         setBuses(buses.filter((_, i) => i !== index));
//         break;
//       case 'shift1':
//         setShift1(shift1.filter((_, i) => i !== index));
//         break;
//       case 'shift2':
//         setShift2(shift2.filter((_, i) => i !== index));
//         break;
//       default:
//         console.log('Invalid column');
//     }
//   };
 
//    // Function to handle form submission
//    const handleSubmit = (event, column) => {
//      event.preventDefault();
//      const formData = new FormData(event.target);
//      const item = formData.get('item');
//      addToColumn(column, item);
//      event.target.reset();  
//    };

//   return (
//     <div  className=' flex flex-col  justify-center items-center relative mt-10 gap-y-10 overflow-y-auto relative '>
//        <h1 className=' bg-blue-500 p-2 rounded-xl text-white text-4xl shadow-lg font-bold '>Create Bus</h1>
//        <div className=' flex justify-evenly items-center w-full'>
       
//         <button onClick={savehandler} className=' p-2 bg-pink-200 text-white rounded-md absolute right-20 top-8'>Save</button>

        
       

//         {/* <img src='repair.png' className=' h-80 w-200px mt-10'/> */}


//        <div id='mainb' className=' bg-[white]/60  flex flex-col  items-center gap-y-4 mt-8 p-5 w-[1600px] min-h-screen rounded-3xl shadow-2xl -mt-8 '>
//         <div>
//         <h1 className=' text-xl font-bold bg-emerald-400 text-white p-2 rounded-md '>Enter Bus Details</h1>

//         </div>

//         <div className=' flex justify-center items-center flex-col'>
//       <h2 className=' text-2xl'>Bus Information</h2>
//       <div className=' flex gap-x-2 text-base mt-4'>
       
//         { input &&
//           <input
//           type="text"
//           placeholder="Bus Route"
//           value={busId}
//           onChange={(e) => setBusRoute(e.target.value)}
//         />}
//        {  input &&
//        <input
//           type="text"
//           placeholder="Bus Number"
//           value={busNo}
//           onChange={(e) => setBusNo(e.target.value)}
//         />}
//         {
//           input &&
//           <input
//           type="text"
//           placeholder="Driver Name"
//           value={driverName}
//           onChange={(e) => setDriverName(e.target.value)}
//         />}
//        { 
//        input &&
//        <input
//           type="text"
//           placeholder="Driver's Mobile Number"
//           value={driverMobile}
//           onChange={(e) => setDriverMobile(e.target.value)}
//         />}
//        { input &&
//         <button className=' bg-yellow-300 p-2 text-black rounded-md' onClick={addBus}>Add Bus</button>}
        
//       </div>
//       <div>
//         {busList.map((bus, index) => (
//           <div key={index}>
//             <p>Bus ID: {bus.id}</p>
//             <p>Bus Number: {bus.number}</p>
//             <p>Driver Name: {bus.driver}</p>
//             <p>Driver's Mobile Number: {bus.mobile}</p>
//             <button onClick={() => deleteBus(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
      
//     </div>
       
//        <div className="App flex gap-x-1 mt-3 ">
    
//       <div className="columns flex gap-10">
//         {/* Column for Buses */}
//         <div className="column">

//         <div className=' flex flex-col justify-center items-center w-[400px]'>
//           <div>
//           <h2 className=' text-2xl'>Buses</h2>
//           </div>
       

//         <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>
//         <form onSubmit={(e) => handleSubmit(e, 'buses')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter bus number"  className=' text-base'/>
//             <button type="submit" className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul className=' text-base flex flex-col justify-center items-center gap-y-3'>
//             {buses.map((bus, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{bus}</div>
//                 <button onClick={() => deleteFromColumn('buses', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button>
              
//               </li>
//             ))}
//           </ul>

//         </div>
          
//         </div>

          
//         </div>
          
//         {/* Column for Shift 1 */}
//         <div className="column">

//           <div className=' flex flex-col justify-center items-center w-[400px]'>

//           <h2 className=' text-2xl'>Shift 1</h2>
//           <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>

//           <form onSubmit={(e) => handleSubmit(e, 'shift1')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter shift 1 details" className=' text-base' />
//             <button type="submit"  className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul className=' text-base flex flex-col justify-center items-center gap-y-3'>
//             {shift1.map((shift, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{shift}</div>
//                <button onClick={() => deleteFromColumn('shift1', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button></li>
              
              
//             ))}
//           </ul>


//           </div>
          
//         </div>

//           </div>
          
//         {/* Column for Shift 2 */}
//         <div className="column">

//           <div className=' flex flex-col justify-center items-center w-[400px]'>

//           <h2 className=' text-2xl'>Shift 2</h2>

//           <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>

//           <form onSubmit={(e) => handleSubmit(e, 'shift2')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter shift 2 details" className=' text-base' />
//             <button type="submit" className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul>
//             {shift2.map((shift, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{shift}</div>
//               <button onClick={() => deleteFromColumn('shift2', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button></li>
//             ))}
//           </ul>

//           </div>
          

//           </div>
         
//         </div>
//       </div>
//     </div>
  


//     </div>


//        </div>

//     </div>
//   )
// }

// export default Addbus


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




export const Addbus = () => {
  var data=[
    {
      "Rno": "",
      "Bno": "",
      "BUS_ROUTE": [
        " NA"
      ],
      "SHIFT_I": [
        " NA"
      ],
      "SHIFT_II": [
        "NA"
      ],
      "DRIVER_NAME": "",
      "DRIVER_PHONE_NO": ""
    }]
  
 
 const[postdata,setpostdata]=useState({}) 
let[arr,setarr]=useState(data[0].BUS_ROUTE)
let[arr1,setarr1]=useState(data[0].SHIFT_I)
let[arr2,setarr2]=useState(data[0].SHIFT_II)

const[Rno,setRno]=useState(data[0].Rno)
const[Bno,setBno]=useState(data[0].Bno)
const[DRIVER_NAME,setDRIVER_NAME]=useState(data.DRIVER_NAME)
const[DRIVER_PHONE_NO,setDRIVER_PHONE_NO]=useState(data[0].DRIVER_PHONE_NO)

const read=false
  let navigate = useNavigate();

   const inputHandler = (event, index) => {
    let newData = [...arr];
  console.log(index)
    newData[index] = event.target.value;
    setarr((prev)=>prev,arr=newData)
    console.log("hii prayansh")
    setarr(newData);
  };

  const inputHandler1 = (event, index) => {
    let newData = [...arr1];
  console.log(index)
    newData[index] = event.target.value;
    setarr1((prev)=>prev,arr1=newData)
    console.log("hii prayansh")
    setarr1(newData);
  };

  const inputHandler2 = (event, index) => {
    let newData = [...arr2];
  console.log(index)
    newData[index] = event.target.value;
    setarr2((prev)=>prev,arr2=newData)
    console.log("hii prayansh")
    setarr2(newData);
  };
  
  const submitbuttonHandler = (event) => {
data[0].BUS_ROUTE=[...arr]
data[0].SHIFT_I=[...arr1]
data[0].SHIFT_II=[...arr2]
data[0].Rno=Rno
data[0].Bno=Bno
data[0].DRIVER_NAME=DRIVER_NAME
data[0].DRIVER_PHONE_NO=DRIVER_PHONE_NO 
setpostdata(data)


senddata()
  };
 
  const inputHandlerTOADD =()=>{
    let temp=[...arr]
    let temp1=[...arr1]
    let temp2=[...arr2]
    temp.push("NA")
    temp1.push("NA")
    temp2.push("NA")
    setarr(temp)
    setarr1(temp1)
    setarr2(temp2)
  }

   const senddata = async ()=>{
    try{
      const ans=await fetch('http://localhost:8000/userbus',{
      method:'POST',
      body:JSON.stringify(postdata),
      headers:{
              "Content-Type":"application/json"
      }
}  )

const result=await ans.json();
if(result.success){
  toast.success('Successfully Bus added!')
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

   {/* <button  className=' -mt-8 -ml-40   bg-sky-700 p-2 text-white h-9 rounded-md shadow-xl flex gap-x-2 justify-center items-center text-lg'><IoArrowBackCircleOutline />Back</button>
  */}
    <div className=' flex justify-center flex-col  -mt-60 gap-y-20 '>

  {/* main div */}
    <div id='mainb' className='flex justify-center flex-col items-center bg-slate-100  w-[900px] mx-auto h-[800px] border-slate-500 rounded-2xl mt-14 mb-3 '>
    <div className=' flex flex-row w-full  justify-around items-center'>

   
    <button id='me' onClick={inputHandlerTOADD} className=' flex gap-1 items-center justify-center'>Add <MdMergeType /></button>

<div className=' flex flex-col justify-center items-center mt-2 gap-y-2'>
  {read?(<h1 className=' text-white bg-black p-1  w-10 rounded-full text-2xl mt-2 flex items-center justify-center font-bold' readOnly={read}>{data[0].Rno}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'><AiOutlineFieldNumber className=' text-white bg-black p-1 rounded-full text-2xl'/><input  className='bg-slate-100 text-xl' type="text" name="" onChange={(e)=>(setRno(e.target.value),postdata.Bno=e.target.value)}  value={Rno} placeholder='Enter Route  No' /></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2 ' readOnly={read}><FaBus className=' text-white p-1 rounded-xl bg-red-500 text-2xl' />{data[0].Bno}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'> <FaBus className=' text-white p-1 rounded-xl bg-red-500 text-2xl'/><input  className='bg-slate-100 text-xl' type="text" name="" id="" value={Bno}  onChange={(e)=>(setBno(e.target.value),postdata.Bno=Bno)} placeholder='Enter Bus No'/></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2' readOnly={read}><FcBusinessman />{data[0].DRIVER_NAME}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2 '><FcBusinessman /><input   className='bg-slate-100 text-xl' type="text" name="" id="" value={DRIVER_NAME} onChange={(e)=>(setDRIVER_NAME(e.target.value),postdata.DRIVER_NAME=DRIVER_NAME)} placeholder='Enter Driver Name' /></div>)}
  {read?(<h1 className='text-2xl text-blue-500 shadow-md flex justify-center items-center gap-x-2'><IoMdCall  className=' bg-green-500 p-1 rounded-md text-2xl text-white  shadow-md'/>{data[0].DRIVER_PHONE_NO}</h1>):(<div className='text-2xl text-blue-500  flex justify-center items-center gap-x-2'><IoMdCall  className=' bg-green-500 p-1 rounded-md text-2xl  text-white  shadow-md'/><input  className='bg-slate-100 text-xl' type="text" name="" id="" value={DRIVER_PHONE_NO} onChange={(e)=>(setDRIVER_PHONE_NO(e.target.value),postdata.DRIVER_PHONE_NO=DRIVER_PHONE_NO)} placeholder='Enter Driver No'/></div>)}
  {/* <h1>{data.DRIVER_NAME}</h1>
  
  <h1>{data.DRIVER_PHONE_NO}</h1> */}

{/* bg-pink-400  text-white border border-slate-500 p-1 rounded-xl  */}

    </div>
    { true &&
 <button id='me' onClick={submitbuttonHandler} className=' flex gap-1 items-center justify-center transition'>Save</button>}


    </div>
  
  {/* 1/2 div */}
  <div className='flex justify-center items-center mt-4 gap-x-4 bg-slate-200 w-[600px] h-[700px] rounded-2xl shadow-inner mb-2 relative'>
  {/* { true &&
    <button id='me' onClick={buttonHandler} className=' absolute right-8 top-2 h-10 flex w-20 items-center justify-center'>Add</button>} */}
  
   
  <div>
  <h2 className=' font-semibold shadow-xl mb-2'>BUS_ROUTE</h2>
{/* {data.BUS_ROUTE.map((data,index)=>{
  // return <li className=' shadow-md' readonly:read>{data}</li>
  return <input type="text" className=' shadow-md' readonly:read value={data}/>
})} */}

 
      {arr.map((item, index) => (
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
{arr1.map((item, index) => (
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
{arr2.map((item, index) => (
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




    </div>
    
     

    {/* <button onClick={buttonHandler}>{read ? "Edit" : "Save"}</button>
   */}

        
  </div>

  <ToastContainer />
  
  </>

     
)

}





















// import React from 'react'
// import { useState } from 'react';

// function Addbus() {
//    // State variables to hold data for buses, shift 1, and shift 2

//    let data= {
//     "_id": {
//       "$oid": "65f2c62949fecd8c3d554790"
//     },
//     "Rno": 0,
//     "Bno": "xyz",
//     "BUS_ROUTE": [
//     ],
//     "SHIFT_I": [
//     ],
//     "SHIFT_II": [
//     ],
//     "DRIVER_NAME": "",
//     "DRIVER_PHONE_NO": ""
// }

//    const [buses, setBuses] = useState([]);
//    const [shift1, setShift1] = useState([]);
//    const [shift2, setShift2] = useState([]);
 
//    // Function to handle adding an item to the specified column
//    const addToColumn = (column, item) => {
//      switch (column) {
//        case 'buses':
//          setBuses([...buses, item]);
//          break;
//        case 'shift1':
//          setShift1([...shift1, item]);
//          break;
//        case 'shift2':
//          setShift2([...shift2, item]);
//          break;
//        default:
//          console.log('Invalid column');
//      }
//    };

//    // Function to handle deleting an item from the specified column
//   const deleteFromColumn = (column, index) => {
//     switch (column) {
//       case 'buses':
//         setBuses(buses.filter((_, i) => i !== index));
//         break;
//       case 'shift1':
//         setShift1(shift1.filter((_, i) => i !== index));
//         break;
//       case 'shift2':
//         setShift2(shift2.filter((_, i) => i !== index));
//         break;
//       default:
//         console.log('Invalid column');
//     }
//   };
 
//    // Function to handle form submission
//    const handleSubmit = (event, column) => {
//      event.preventDefault();
//      const formData = new FormData(event.target);
//      const item = formData.get('item');
//      addToColumn(column, item);
//      event.target.reset();
//    };

//     const savehendler=()=>{
//       data.BUS_ROUTE=buses
//       data.SHIFT_I=shift1
//       data.SHIFT_II=shift2

//     }

//   return (
//     <div  className=' flex flex-col  justify-center items-center relative mt-10 gap-y-10 overflow-y-auto relative '>
//        <h1 className=' bg-blue-500 p-2 rounded-xl text-white text-4xl shadow-lg font-bold '>Create Bus</h1>
//        <div className=' flex justify-evenly items-center w-full'>
       
//         <button   onClick={savehendler}    className=' p-2 bg-pink-200 text-white rounded-md absolute right-20 top-8'>Save</button>

        
       

//         {/* <img src='repair.png' className=' h-80 w-200px mt-10'/> */}


//        <div id='mainb' className=' bg-[white]/60  flex flex-col  items-center gap-y-4 mt-8 p-5 w-[1600px] min-h-screen rounded-3xl shadow-2xl -mt-8 '>
//         <div>
//         <h1 className=' text-xl font-bold bg-emerald-400 text-white p-2 rounded-md '>Enter Bus Details</h1>

//         </div>
       
//        <div className="App flex gap-x-1 mt-3 ">
    
//       <div className="columns flex gap-10">
//         {/* Column for Buses */}
//         <div className="column">

//         <div className=' flex flex-col justify-center items-center w-[400px]'>
//           <div>
//           <h2 className=' text-2xl'>Buses</h2>
//           </div>
       

//         <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>
//         <form onSubmit={(e) => handleSubmit(e, 'buses')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter bus number"  className=' text-base'/>
//             <button type="submit" className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul className=' text-base flex flex-col justify-center items-center gap-y-3'>
//             {buses.map((bus, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{bus}</div>
//                 <button onClick={() => deleteFromColumn('buses', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button>
              
//               </li>
//             ))}
//           </ul>

//         </div>
          
//         </div>

          
//         </div>
          
//         {/* Column for Shift 1 */}
//         <div className="column">

//           <div className=' flex flex-col justify-center items-center w-[400px]'>

//           <h2 className=' text-2xl'>Shift 1</h2>
//           <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>

//           <form onSubmit={(e) => handleSubmit(e, 'shift1')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter shift 1 details" className=' text-base' />
//             <button type="submit"  className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul className=' text-base flex flex-col justify-center items-center gap-y-3'>
//             {shift1.map((shift, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{shift}</div>
//                <button onClick={() => deleteFromColumn('shift1', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button></li>
              
              
//             ))}
//           </ul>


//           </div>
          
//         </div>

//           </div>
          
//         {/* Column for Shift 2 */}
//         <div className="column">

//           <div className=' flex flex-col justify-center items-center w-[400px]'>

//           <h2 className=' text-2xl'>Shift 2</h2>

//           <div className=' flex  flex-col gap-y-1 mt-3 justify-center items-center'>

//           <form onSubmit={(e) => handleSubmit(e, 'shift2')} className=' flex gap-x-1'>
//             <input type="text" name="item" placeholder="Enter shift 2 details" className=' text-base' />
//             <button type="submit" className=' bg-yellow-50 p-2 text-black text-xl rounded-md'>Add</button>
//           </form>
//           <ul  className=' text-base flex flex-col justify-center items-center gap-y-3'>
//             {shift2.map((shift, index) => (
//               <li key={index} className=' flex gap-x-14 text-base justify-center items-center max-w-[400px] '><div className=' flex justify-center items-center gap-x-1'><div className=' h-1 w-1 bg-black rounded-full'></div>{shift}</div>
//               <button onClick={() => deleteFromColumn('shift2', index)} className=' bg-red-600 text-white p-2 rounded-lg'>Delete</button></li>
//             ))}
//           </ul>

//           </div>
          

//           </div>
         
//         </div>
//       </div>
//     </div>
  


//     </div>


//        </div>

//     </div>
//   )
// }

// export default Addbus

