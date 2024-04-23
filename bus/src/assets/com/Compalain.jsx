import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../Context/AppContext';
import Cookies from 'js-cookie';
export const Compalain = () => {
  const[input,setInput]=useState({})
  let d=Cookies.get('login')
  let emaill=Cookies.get('login')
   emaill=`${emaill.split("&")[1]}`
  d= `${d.split("#")[0]}`
 
  emaill=`${emaill.split("&")[0]}`
  

 
   function reporthandler(e){
   e.preventDefault()
    if(!input){
      toast.error("Plese Enter your problem")
    }
    else{   
     
    senddata()
    }
  }

//   function inputhandler(event){
//     event.preventDefault()
// setinput({...input,[event.target.name]:event.target.value,["rollnumber"]:d})
// console.log(input)
//   }

//   const senddata = async ()=>{
//     console.log(input)
//     try{
//       const ans=await fetch('http://localhost:8000/compalain',{
//       method:'POST',
//       body:JSON.stringify(input),
//       headers:{
//               "Content-Type":"application/json"
//       }
// }  )

// const result=await ans.json();
// if(result.success){
//   toast.success('complain successfully send')
// }
// else{
//   console.log("it has some problem")
//   toast.error("some error")
// }
// console.log(result)
//     }
//     catch(error){
//       console.log("Some Server Error")
//     }
//   }



const inputhandler = (event) => {
  const { name, value, files } = event.target;
  if (files) {
    setInput({ ...input, [name]: files[0] });
  } else {
    setInput({ ...input, [name]: value });
  }
};

const senddata = async () => {
  try {
    const formData = new FormData();
    formData.append('input', input.input);
    formData.append('file', input.file);
    formData.append('rollnumber', d);
    formData.append('email',emaill)
console.log(formData)
    const response = await fetch('http://localhost:8000/compalain', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result)
    if (result.success) {
      toast.success('Complaint successfully sent');
    } else {
      console.log(result);
      toast.error('Some error occurred');
    }
  } catch (error) {
    console.log('Some server error:', error);
  }
};

  return (
    <form enctype="multipart/form-data" method="post">
    <div className='flex   justify-center items-center mt-24  ' >
      {/* <h2
      className='text-[1.5rem] text-richblack-5 mb-1 leading-[1.375rem]'>
        Report Sectionogout
      </h2> */}
      <img id='man1' src='man.png'/>
      


      <div id='box3' className=' h-96 w-96  bg-[white]/30 flex flex-col gap-6  items-center mt-8 pt-4 pb-4 pl-2 pr-2 rounded-3xl relative '>
      <img id='report' src='report.png' className=' mt-28 '/>

      <div className=' flex justify-center items-center flex-col h-full w-full  -mt-6 gap-3 pr-1 pl-1 absolute'>

        
      <textarea
      onChange={inputhandler}
      name='input'
      className=' bg-[white]/50 mt-10 rounded-[0.5rem] text-black w-full h-52 p-[12px] border-[1px] border-gray-500 '

placeholder='Write Report Here'
/>

<input
type="file"
name='file'
onChange={inputhandler}
 className=' p-2  bg-red-500 cursor-pointer -mb-2 rounded-md flex items-center justify-center text-white -mr-2 w-56'/>

<button
className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3 '
onClick={reporthandler}
> Report

</button>

      </div>
      </div>
      <img id='man2' src='man.png'/>

    </div>
     <ToastContainer />
     </form>
  )
}



// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Cookies from 'js-cookie';

// export const Compalain  = () => {
//   const [input, setInput] = useState({});
//   const d = Cookies.get('login');

//   const reporthandler = async (e) => {
//     e.preventDefault();
//     if (!input.input) {
//       toast.error('Please enter your problem');
//     } else {
//       senddata();
//     }
//   };

//   const inputHandler = (event) => {
//     const { name, value, files } = event.target;
//     if (files) {
//       setInput({ ...input, [name]: files[0] });
//     } else {
//       setInput({ ...input, [name]: value });
//     }
//   };

//   const senddata = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('input', input.input);
//       formData.append('file', input.file);
//       formData.append('rollnumber', d);
// console.log(formData)
//       const response = await fetch('http://localhost:8000/compalain', {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();
//       if (result.success) {
//         toast.success('Complaint successfully sent');
//       } else {
//         console.log('It has some problem');
//         toast.error('Some error occurred');
//       }
//     } catch (error) {
//       console.log('Some server error:', error);
//     }
//   };

//   return (
//     <form encType="multipart/form-data" onSubmit={reporthandler}>
//       <div className='flex justify-center items-center mt-24'>
//         <div id='box3' className='h-96 w-96 bg-[white]/30 flex flex-col gap-6 items-center mt-8 pt-4 pb-4 pl-2 pr-2 rounded-3xl relative'>
//           <div className='flex justify-center items-center flex-col h-full w-full -mt-6 gap-3 pr-1 pl-1 absolute'>
//             <textarea
//               name='input'
//               className='bg-[white]/50 mt-10 rounded-[0.5rem] text-black w-full h-52 p-[12px] border-[1px] border-gray-500'
//               placeholder='Write Report Here'
//               onChange={inputHandler}
//             />

//             <input
//               type="file"
//               name='file'
//               onChange={inputHandler}
//               className='p-2 bg-red-500 cursor-pointer -mb-2 rounded-md flex items-center justify-center text-white -mr-2 w-56'
//             />

//             <button
//               type="submit"
//               className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'
//             >
//               Report
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </form>
//   );
// };



