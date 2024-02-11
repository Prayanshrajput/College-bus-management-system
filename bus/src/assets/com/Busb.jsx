import React from 'react'
import './Try.css'
export const Busb = (prop) => {

  function showinfo(e){
    console.log(e);
  }

  return (


    <div className='bbox'>
       <div className='w-20 h-20'>
        {prop.data}

    </div>


    </div>

       
  )
}
