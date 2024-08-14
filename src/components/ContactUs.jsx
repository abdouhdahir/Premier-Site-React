import React, {useState , useEffect} from 'react'
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import contactmap from "../img/contactmap.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactUs = () => {
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
        <div className='flex flex-col gap-20 justify-center items-center mb-60 px-4'>
    <div className='flex flex-col items-center gap-10 text-center'>
        <h2 className='font-bold text-3xl'>Contact Us</h2>
        <div className='flex flex-col items-center'>
            <p className='text-lg md:text-2xl'>Lorem ipsum dolor, sit amet consectetur.</p>
            <p className='text-lg md:text-2xl'>Ratione voluptatum illo ducimus</p>
        </div>
    </div>
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-52'>
        <div className='flex flex-col items-center p-8 md:p-14 border border-gray-300 shadow-xl w-full lg:w-1/2'>
            <h3 className='font-black pb-10 text-xl'>Contact Us</h3>
            <form className='flex flex-col gap-4 w-full'>
                <input type="text" placeholder='Your Name' className='bg-gray-100 p-2 rounded-lg outline-none'/>
                <input type="text" placeholder='Your Email' className='bg-gray-100 p-2 rounded-lg outline-none'/>
                <textarea placeholder='Your Message' className='bg-gray-100 p-2 rounded-lg outline-none'/>
            </form>
            <button className='mt-6 bg-blue-500 text-white p-2 text-xl rounded-xl w-full hover:bg-white hover:text-blue-500 transition-all duration-300'>
                Send Message
            </button>
        </div>
        <div className='flex flex-col gap-10 w-full lg:w-1/2 items-center'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-4 items-center'>
                    <RiMapPinLine className='text-blue-500 text-2xl'/>
                    <p>6386 Spring St, Anchorage, Georgia 12473</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <MdOutlinePhoneAndroid className='text-blue-500 text-2xl'/>
                    <p>(843) 555-0130</p>
                </div>
                <div className='flex gap-4 items-center'>
                    <CiMail className='text-blue-500 text-2xl'/>
                    <p>willie.jennings@example.com</p>
                </div>
            </div>
            <div className='w-full'>
                <img src={contactmap} alt="Map" className='w-full h-auto'/>
            </div>
            <div className='flex items-center gap-4 text-blue-500 text-2xl'>
                <FaTwitter />
                <FaFacebookSquare />
                <FaLinkedin />
            </div>
        </div>
    </div>
</div>
      ):
      (
        <div className='flex flex-col gap-20 justify-center items-center mb-60 '>
        <div className='flex flex-col items-center gap-10'><h2 className='font-bold text-3xl'>Contact Us</h2>
        <div className='flex flex-col items-center'>
            <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur.</p>
            <p className='text-3xl'> Ratione voluptatum illo ducimus</p>
        </div></div>
           <div className='flex gap-52'>
           <div className='flex flex-col items-center p-14 ml-40 border-1 border-gray-300 shadow-xl'>
            <h3 className='font-black pb-10'>Contact Us</h3>
            <form className='flex flex-col gap-10 w-full mx-5 h-full'>
            <input type="text" placeholder='Your Name' className='bg-gray-100 p-1 rounded-lg outline-none'/>
            <input type="text" placeholder='Your Email' className='bg-gray-100 p-1 rounded-lg outline-none'/>
            <textarea type="textarea" placeholder='Your Message' className='bg-gray-100 p-1 rounded-lg outline-none'/>
            </form>
            <button className='bg-blue-500 text-white p-2 text-xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
  </button>
            </div>
       <div className='flex flex-col gap-10'>
       <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='flex gap-10 items-center'>
                <div className='flex flex-col gap-5 items-center w-full justify-center'>
                <RiMapPinLine className='text-blue-500 text-xl'/>
                <p>6386 Spring St United undefined Anchorage,Georgia 12473  </p>
                </div>
                <div className='flex flex-col gap-5 items-center w-full justify-center'>
                <MdOutlinePhoneAndroid className='text-blue-500 text-xl'/>
                <p>(843) 555-0130</p>
                </div>
                <div className='flex flex-col gap-5 items-center w-full justify-center'>
                <CiMail className='text-blue-500 text-xl'/>
                <p>willie.jennings@example.com</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
            <img src={contactmap} alt="" />
            </div>
            
        </div>
        <div className='flex items-start gap-10 text-blue-500 text-2xl'>
            <FaTwitter />
            <FaFacebookSquare />
            <FaLinkedin />
            </div>
       </div>
           </div>
    </div>
      )}
    </div>
  )
}

export default ContactUs
