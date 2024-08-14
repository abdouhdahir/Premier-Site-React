import React, {useState, useEffect} from 'react'
import video from "../img/videositeract.png"
import { FaCirclePlay } from "react-icons/fa6";


const Video = () => {
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
        <div className='rounded-3xl hidden justify-center items-center mb-20  shadow-xl' style={{ backgroundImage: `url(${video})`, width: '300px',height:"00px"}}>
            <FaCirclePlay className='text-blue-500 cursor-pointer  bg-white text-xl rounded-full ' />
        </div>
      ):
      (
      <div className='rounded-3xl flex justify-center items-center mb-60 ml-96 shadow-xl' style={{ backgroundImage: `url(${video})`, width: '1177.34px', 
    height: '658.3px', backgroundPositionY : '-60px' }}>
        <FaCirclePlay className='text-blue-500 cursor-pointer  bg-white text-9xl rounded-full ' />
    </div>
    )}
    </div>
  )
}

export default Video
