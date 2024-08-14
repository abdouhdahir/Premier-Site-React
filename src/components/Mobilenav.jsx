import React from 'react'
import logos from "../img/logos.png"

const Mobilenav = () => {
  return (
    <div className='bg-black h-screen top-0 fixed  w-[80%]'>
        <img src={logos} alt='' className="h-10 md:h-14 lg:h-16"/>
    </div>
  )
}

export default Mobilenav
