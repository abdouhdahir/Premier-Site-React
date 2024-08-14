import google from "../img/partenaire/google.png"
import amazon from "../img/partenaire/amazon.png"
import microsoft from "../img/partenaire/microsoft.png"
import uber from "../img/partenaire/uber.png"
import dropbox from "../img/partenaire/dropbox.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Partenaire = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-60 gap-32">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl font-medium">Partenaire</h2>
        <p>Lorem ipsum dolor sit amet consectetur. <br /> 
            Adipisicing elit optio, blanditiis quia magni nisi.</p>
      </div>
      <div className="flex gap-20">
      <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      interval={3000}
      stopOnHover={false}
      centerMode
      centerSlidePercentage={33.33}
      >
    <img src={google} alt="" />
    <img src={amazon} alt="" />
    <img src={microsoft} alt="" />
    <img src={uber} alt="" />
    <img src={dropbox} alt="" />
    </Carousel>
      </div>
      <button className='bg-blue-500 p-2 text-white  text-2xl rounded-xl'>Essaye Gratuit</button>

    </div>
  )
}

export default Partenaire
