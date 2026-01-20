import pic from './assets/pic.jpg';
import { Link } from "react-router-dom";

import pic2 from './assets/rest (2).jpg';
import pic3 from './assets/rest (4).jpg';
import pic4 from './assets/rest (3).jpg';
import bicake from'./assets/svg/birthday-cake-svgrepo-com.svg';
import don from'./assets/svg/donuts-cake-svgrepo-com.svg';
import honey from'./assets/svg/honey-svgrepo-com.svg';
import knife from'./assets/svg/knife-svgrepo-com.svg';
import shop from'./assets/svg/shop-svgrepo-com.svg';
import water from'./assets/svg/water-container-svgrepo-com.svg';
import HeroCarousel from './carousel.tsx';

function hero() {
  return (
   


   <section className='hero w-full h-full'>
       
       <div className='relative h-screen bg-cover bg-center mb-30 '
        style={{ backgroundImage: `url(${pic})` }}>
 
 <div className='flex items-center justify-center flex-col p-5 rounded-lg'>
      <h1 className="font-serif text-5xl mt-30">Welcome to Our Restaurant</h1>
      <p  className='mt-10 text-xl'> <i>Where every meal feels like home  </i></p>
   <Link to="/menu" className="hover:text-yellow-400 font-medium">
   <button className='mt-10 bg-yellow-300 text-black font-serif py-2 px-4 rounded hover:bg-yellow-400'> Explore Menu </button>
   </Link>
   </div>  
   
</div>

   <p className='text-center text-white font-serif text-xl mb-25'>Cooking with heart, serving with soul</p>  
<HeroCarousel images={[pic, pic2, pic3, pic4]} />;
 
  
   <div className='mt-10 bg-pink-200 rounded-lg shadow-lg w-full p-5'>
      <h2 className='text-black text-lg font-bold text-center'>Our Services</h2>
      <div className="flex border-b-2 border-yellow-300 m-5 ml-70 mr-70"></div>
    <div className="flex flex-row bg-pink-200 rounded-lg shadow-lg m-5 space-x-5 w-full p-5 justify-space-between">
      <a href="#" className='font-medium hover:text-blue-700 hover:text-lg text-center '>
        <h2>Catering</h2>
     
      <img src={pic2} alt="Mint Drink" className="w-100"/>
      <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, non!</p>
       </a>
    </div>
     <div className="flex flex-row bg-pink-200 text-center items-center rounded-lg shadow-lg m-5 space-x-5 w-full p-5">
     <a href="#" className='font-medium  hover:text-blue-700 hover:text-lg'>
        <h2>Private Dining</h2>
     
      <img src={pic3} alt="Mint Drink" className="w-100"/>
      <p className='text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</p> 
     </a>
    </div>
      <div className="flex flex-row bg-pink-200 text-center items-center rounded-lg shadow-lg m-5 space-x-5 w-full p-5"> 
      <a href="#" className='font-medium hover:text-blue-700 hover:text-lg'>
        <h2>Event Hosting</h2>
    
      <img src={pic4} alt="Mint Drink" className="w-100"/>
        <p className='text-sm text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veritatis.</p>
     </a>
    </div>
   </div>
    

     <h2 className='mt-20 text-black text-lg font-bold text-center'>Our partners</h2>
<div className='flex mt-10 border-b-2 rounded-lg border-yellow-300 shadow-lg w-full'>
<div className="flex flex-row  p-5  space-x-5 items-center justify-center pl-75">
   <img src={bicake} alt="Cake Logo" className="w-20"/> 
    <img src={don} alt="Donut Logo" className="w-20"/>
    <img src={honey} alt="Honey Logo" className="w-20"/>
       </div>
    <div className='flex flex-row mt-50 space-x-5 items-center justify-center p-5 pr-75'>
    <img src={knife} alt="Knife Logo" className="w-20"/>
    <img src={shop} alt="Shop Logo" className="w-20"/>
    <img src={water} alt="Water Logo" className="w-20"/>
 
</div>
  </div>


   <div className="flex border-b-2 rounded-lg border-yellow-300 mt-20 bg-yellow-300">
    <div className='flex flex-col w-full m-5' >
      <a href="#" className='hover:text-blue-900 hover:text-lg'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, repellat?</p>
      </a>
<img src={pic} alt="Hero Image" className="w-100"/>
    </div>
      <div className='flex flex-col w-full m-5' >
        <a href="" className='hover:text-blue-900 hover:text-lg'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, repellat?</p>
      </a>
<img src={pic} alt="Hero Image" className="w-100"/>
    </div>
      <div className='flex flex-col w-full m-5' >
        <a href="" className='hover:text-blue-900 hover:text-lg'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, repellat?</p>
      </a>
<img src={pic} alt="Hero Image" className="w-100"/>
    </div>
   </div>
  
 
   
    
 </section>
  );
}
export default hero;