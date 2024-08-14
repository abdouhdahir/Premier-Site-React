import React from 'react'
import Brands from "../img/testi/Brands.png"
import Ellipse from "../img/testi/Ellipse.png"
const Test = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 mb-60'>
        <h2 className='font-black text-4xl'>Testimonials</h2>
        <img src={Brands} alt="" />
        <div className='flex flex-col items-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste exercitationem et assumenda, quia </p>   
        <p>harum minima quidem alias, voluptatem aut, iure eveniet a perferendis voluptate</p>    
        </div>              
             <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="size-12" src={Ellipse} alt=""></img>
  </div>
  <div>
    <div class="text-xl font-medium text-black">Organize accrosse</div>
    <p class="text-slate-500">Ui designer</p>
  </div>
  </div>    
  <button className='bg-blue-500 p-2 text-white  text-2xl rounded-xl'>More Testimonials</button>
    </div>
  )
}

export default Test
