import React, {useState,useEffect} from 'react'
import mail from "../img/mail.png"


const Subcript = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {
      windowWidth < 500 ?(
        <div className='flex flex-col-reverse w-full items-center gap-10 mb-20'>
        <div className='w-[100] h-[200] '>
      <img src={mail} alt="" className='w-[100] h-[200] '/>
        </div>
        <div className='flex flex-col items-center text-center gap-2'>
          <h5 className='font-black'>At your fingertips</h5>
          <h2 className='text-3xl mb-5'>Lightning fast <br />
           prototyping</h2>
  
           <div>
              <p className='font-black'>Subscribe toou Newsletter</p>
              <p>Available exclusivery on Figmaland</p>
           </div>
           <div className='flex flex-col items-center gap-10'>
              <input className='bg-gray-100 rounded-xl py-2 px-5 outline-none placeholder:text-black' type="text" placeholder='Your Email' />
              <button className='bg-blue-500 px-3 text-white  text-2xl rounded-xl'>Subscribe</button>
  
           </div>
        </div>
      </div>
      ):
      (
        <div className='flex justify-center items-center gap-72 mb-60'>
        <div>
      <img src={mail} alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='font-black'>At your fingertips</h5>
          <h2 className='text-3xl mb-5'>Lightning fast <br />
           prototyping</h2>
  
           <div>
              <p className='font-black'>Subscribe toou Newsletter</p>
              <p>Available exclusivery on Figmaland</p>
           </div>
           <div className='flex gap-10'>
              <input className='bg-gray-100 rounded-xl py-2 px-5 outline-none placeholder:text-black' type="text" placeholder='Your Email' />
              <button className='bg-blue-500 px-3 text-white  text-2xl rounded-xl'>Subscribe</button>
  
           </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Subcript
