import React, {useState,useEffect} from 'react'
import macbook from "../img/macbook.png"
import macbookreponsive from "../img/macbookreponsive.png"
const Fastes = () => {
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
        <div className='flex flex-col gap-10 items-center mb-20'>
      <div className='flex flex-col gap-10 items-center text-center'>
      <h1 className='text-black font-semibold text-4xl'>Fastes way to organize</h1>
        <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Debitis optio nisi, maxime quibusdam libero.</p>
        <button className='bg-blue-500 p-3 text-2xl rounded-xl text-white'>Essaye gratuitements</button>
      </div>
      <div>
    <img src={macbookreponsive} alt="" className='w-[300px] h-[200px]'/>
      </div>
    </div>
      ):
      (
      <div className='flex justify-between items-center mx-32 mr-44 mb-60'>
      <div className='flex flex-col gap-10 items-start'>
      <h1 className='text-black font-semibold text-4xl'>Fastes way to organize</h1>
        <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            Debitis optio nisi, maxime quibusdam libero.</p>
        <button className='bg-blue-500 p-3 text-2xl rounded-xl text-white'>Essaye gratuitements</button>
      </div>
      <div>
    <img src={macbook} alt="" />
      </div>
    </div>)}
    </div>
  )
}

export default Fastes
