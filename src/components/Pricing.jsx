import React, {useState,useEffect} from 'react'

const Pricing = () => {
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
        <div className='  flex flex-col gap-10  bg-customBlue justify-center items-center p-20 mb-60'>
        <h2 className='font-bold text-white text-3xl'>Pricing</h2>
        <div className='flex flex-col items-center text-white'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing .</p>
        <p>Aliquam soluta nobis quo optio </p> 
        </div>
        <div className='flex flex-col items-center gap-5'>
        <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
  <h3 className='font-black text-xl'>Free</h3>
  <div className='flex flex-col items-center'>
    <p>Organize across all</p>
    <p>apps by hand</p>
  </div>
  <div className='flex gap-10'>
    <h1 className='font-black text-6xl'>0</h1>
    <div className='flex flex-col gap-5'>
      <h3 className='font-black text-xl'>$</h3>
      <p>Per Month</p>
    </div>
  </div>
  <div className='flex flex-col gap-10'>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
  </div>
  <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
  </button>
</div>

        <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
  <h3 className='font-black text-xl'>Free</h3>
  <div className='flex flex-col items-center'>
    <p>Organize across all</p>
    <p>apps by hand</p>
  </div>
  <div className='flex gap-10'>
    <h1 className='font-black text-6xl'>0</h1>
    <div className='flex flex-col gap-5'>
      <h3 className='font-black text-xl'>$</h3>
      <p>Per Month</p>
    </div>
  </div>
  <div className='flex flex-col gap-10'>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
  </div>
  <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
  </button>
        </div>
        <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
  <h3 className='font-black text-xl'>Free</h3>
  <div className='flex flex-col items-center'>
    <p>Organize across all</p>
    <p>apps by hand</p>
  </div>
  <div className='flex gap-10'>
    <h1 className='font-black text-6xl'>0</h1>
    <div className='flex flex-col gap-5'>
      <h3 className='font-black text-xl'>$</h3>
      <p>Per Month</p>
    </div>
  </div>
  <div className='flex flex-col gap-10'>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
    <p>Pricing Feature</p>
  </div>
  <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
  </button>
        </div>
        </div>
    </div>
      ):
      
      (
            <div className='  flex flex-col gap-10  bg-customBlue justify-center items-center p-20 mb-60'>
            <h2 className='font-bold text-white text-3xl'>Pricing</h2>
            <div className='flex flex-col items-center text-white'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing .</p>
            <p>Aliquam soluta nobis quo optio </p> 
            </div>
            <div className='flex justify-center items-center gap-20'>
            <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
      <h3 className='font-black text-xl'>Free</h3>
      <div className='flex flex-col items-center'>
        <p>Organize across all</p>
        <p>apps by hand</p>
      </div>
      <div className='flex gap-10'>
        <h1 className='font-black text-6xl'>0</h1>
        <div className='flex flex-col gap-5'>
          <h3 className='font-black text-xl'>$</h3>
          <p>Per Month</p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
      </div>
      <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
      </button>
    </div>
    
            <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
      <h3 className='font-black text-xl'>Free</h3>
      <div className='flex flex-col items-center'>
        <p>Organize across all</p>
        <p>apps by hand</p>
      </div>
      <div className='flex gap-10'>
        <h1 className='font-black text-6xl'>0</h1>
        <div className='flex flex-col gap-5'>
          <h3 className='font-black text-xl'>$</h3>
          <p>Per Month</p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
      </div>
      <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
      </button>
            </div>
            <div className='bg-white group px-10 py-10 flex flex-col items-center gap-10 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
      <h3 className='font-black text-xl'>Free</h3>
      <div className='flex flex-col items-center'>
        <p>Organize across all</p>
        <p>apps by hand</p>
      </div>
      <div className='flex gap-10'>
        <h1 className='font-black text-6xl'>0</h1>
        <div className='flex flex-col gap-5'>
          <h3 className='font-black text-xl'>$</h3>
          <p>Per Month</p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
      </div>
      <button className='bg-blue-500 text-white p-2 text-2xl rounded-xl group-hover:bg-white group-hover:text-blue-500'>    More Testimonials
      </button>
            </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Pricing
