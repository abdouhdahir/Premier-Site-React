import React, { useState, useEffect } from 'react'

import logos from "../img/logos.png"
import hero from "../img/hero.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import { RxHamburgerMenu } from "react-icons/rx";
import Mobilenav from '../components/Mobilenav';
import { IoCloseSharp } from "react-icons/io5";


const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileNav, setMobileNav] = useState(false);
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const affiche = () => {
      setMobileNav(!mobileNav)
    }
    const supprime = () => {
      setMobileNav(!mobileNav)
    }

  return (
    <div>
         {
      windowWidth < 500 ? (
       
        <div className="flex flex-col pb-56 mb-20" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className='flex justify-between text-white items-center pt-3 pb-40 px-9 mb-20'>
        <img src={logos} alt='' className="h-10 md:h-14 lg:h-16"/>
        <div className='flex gap-10 items-center'>       
        {mobileNav ?  <IoCloseSharp  className="text-3xl md:text-4xl lg:text-5xl" onClick={supprime}/>:
        <RxHamburgerMenu className="text-3xl md:text-4xl lg:text-5xl" onClick={affiche}/> }
        </div>
    </div>
    <Hero/>
    
</div>
       
      ) : (
            <div className='flex flex-col pb-56 mb-60 ' style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex justify-center items-center mb-60'  >
        <nav className='pr-6'>
        <ul className='flex gap-10 text-white'>
            <li><Link to="/">Home</Link></li>
            <li>Product</li>
            <li>Pricing</li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        </nav>
        <img src={logos} alt="" className='pr-60 pb-4'/>
        <div className='flex gap-10 text-white'>
        <FaTwitter />
        <FaFacebookSquare />
        <FaLinkedin />
        </div>
        
    </div>
    <Hero/>
    </div>
  )}
  
      {mobileNav ? <Mobilenav/> : null}
    </div>

  )
  
}

export default Header
