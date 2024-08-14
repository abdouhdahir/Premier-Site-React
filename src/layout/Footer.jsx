import React, {useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
    const pages = [
        { nom: "Home", lien: "/" },
        { nom: "Product", lien: "/product" },
        { nom: "Pricing", lien: "/pricing" },
        { nom: "About", lien: "/about" },
        { nom: "Contact", lien: "/contact" }
      ];
      const Tomothy = [
        "Eleanor Edwards",
        "Ted Robertson",
        "Annette Russell",
        "Jennie Mckinney",
        "Gloria Richards"
      ]
      const Jane = [
        "Philip Jonessssss",
        "Gloria Richardsss",
        "Colleen Russellss",
        "Marvin Hawkinss",
        "Bruce Simmmons"
      ]
  return (
    <div>
        {
        windowWidth < 500 ? (
            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-36 bg-customBlue p-10 lg:p-52'>
    <div className='flex gap-10 lg:gap-30 text-center flex-col justify-center'>
        <div className='flex flex-col items-center gap-10'>
            <h3 className='text-white font-black text-2xl'>Pages</h3>
            <ul className='flex flex-col gap-4 text-white'>
                {pages.map((page, index) => (
                    <li key={index} className='text-xl hover:text-blue-500 transition-colors'>
                        <Link to={page.lien}>{page.nom}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col items-center gap-10'>
            <h3 className='text-white font-black text-2xl'>Tomothy</h3>
            <ul className='flex flex-col gap-4 text-white'>
                {Tomothy.map((tomo, index) => (
                    <li className='text-xl' key={index}>{tomo}</li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col items-center gap-10'>
            <h3 className='text-white font-black text-2xl'>Jane Black</h3>
            <ul className='flex flex-col gap-4 text-white'>
                {Jane.map((jane, index) => (
                    <li className='text-xl' key={index}>{jane}</li>
                ))}
            </ul>
        </div>
    </div>
    <div className='flex flex-col gap-10 lg:gap-20'>
        <div className='flex items-center gap-4 lg:gap-16'>
            <RiMapPinLine className='text-white text-4xl'/>
            <p className='text-white text-xl'>7480 Mockingbird Hill undefined</p>
        </div>
        <div className='flex items-center gap-4 lg:gap-16'>
            <MdOutlinePhoneAndroid className='text-white text-4xl'/>
            <p className='text-white text-xl'>(239) 555-0108</p>
        </div>
        <div className='flex items-center gap-4 lg:gap-10 text-white text-2xl'>
            <FaTwitter className='text-white text-4xl cursor-pointer'/>
            <FaFacebookSquare className='text-white text-4xl cursor-pointer'/>
            <FaLinkedin className='text-white text-4xl cursor-pointer'/>
        </div>
    </div>
</div>

        ):
        (
            <div className='flex justify-center items-center gap-36 bg-customBlue p-52'>
            <div className='flex gap-20 '>
            <div className='flex flex-col items-center gap-10'>
                    <h3 className='text-white font-black text-2xl'>Pages</h3>
                    <ul className='flex flex-col gap-10 text-white'>
                        {pages.map((page, index) => (
                            <li  key={index} className='text-xl hover:text-blue-500 transition-colors'>
                                <Link to={page.lien}>{page.nom}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-center gap-10'>
                <h3 className='text-white font-black text-2xl'>Tomothy</h3>
                    <ul className='flex flex-col gap-10 text-white'>
                        {Tomothy.map((tomo , index) => (
                            <li className='text-xl' key={index}>{tomo}</li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-center gap-10'>
                <h3 className='text-white font-black text-2xl'>Jane Black</h3>
                    <ul className='flex flex-col gap-10 text-white'>
                        {Jane.map((jane, index) => (
                            <li className='text-xl' key={index}>{jane}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-20'>
                <div className='flex items-center gap-16'>
                <RiMapPinLine className='text-white text-4xl'/>
                <p className='text-white text-xl'>7480 Mockingbird Hill undefined </p>
                </div>
                <div className='flex items-center gap-16'>
                <MdOutlinePhoneAndroid className='text-white text-4xl'/>
                <p className='text-white text-xl'>(239) 555-0108</p>
                </div>
                <div className='flex items-start gap-10 text-white text-2xl'>
                <FaTwitter className='text-white text-4xl cursor-pointer'/>
                <FaFacebookSquare className='text-white text-4xl cursor-pointer'/>
                <FaLinkedin className='text-white text-4xl cursor-pointer'/>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default Footer
