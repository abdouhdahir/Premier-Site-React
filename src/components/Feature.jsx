import React, {useState , useEffect} from 'react'
import { IoMdSquare } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import video from "../img/videoreponsive.png"


const Feature = () => {
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
        windowWidth < 500 ? (
            <div className='flex flex-col justify-center  items-center gap-20 mb-20'>
                
       <div className='flex flex-col items-center gap-5'>
        <h2 className='font-bold text-3xl'>Features</h2>
        <div className='flex flex-col justify-center items-center'>
        <p>Most calendars are designed for teams.</p>
        <p>Slate is designed for freelancers</p>
        </div>
        <div className='flex justify-center items-center ' style={{ backgroundImage: `url(${video})`,width:"350px", height:"250px"}}>
            <FaCirclePlay className='text-blue-500 cursor-pointer  bg-white text-4  xl rounded-full ' />
        </div>
       </div>
       <div className='flex gap-7 justify-center items-center flex-col '>
        <div className='flex flex-col items-center text-center gap-5'>
            <IoMdSquare className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
                <div className='flex flex-col items-center text-center gap-5'>
                <FaPenFancy className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
                <div className='flex flex-col items-center text-center gap-5'>
                <FaPen className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
       </div>
    </div>
        ):
        (<div className='flex flex-col justify-center  items-center gap-20 mb-60'>
       <div className='flex flex-col items-center gap-5'>
        <h2 className='font-bold text-3xl'>Features</h2>
        <div className='flex flex-col justify-center items-center'>
        <p>Most calendars are designed for teams.</p>
        <p>Slate is designed for freelancers</p>
        </div>
       </div>
       <div className='flex gap-7 justify-center items-center px-10'>
        <div className='flex flex-col items-center text-center gap-5'>
            <IoMdSquare className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
                <div className='flex flex-col items-center text-center gap-5'>
                <FaPenFancy className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
                <div className='flex flex-col items-center text-center gap-5'>
                <FaPen className='text-4xl text-blue-500'/>
            <h3 className='text-black font-black '>OpenType featutures Variable fonts</h3>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sit praesentium fuga asperiores incidunt, nam rerum quasi nobis placeat 
                corrupti ea optio dolore.
            </p>
        </div>
       </div>
    </div>)}
    </div>
  )
}

export default Feature
