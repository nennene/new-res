import pic from './assets/pic.jpg';


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
   


    <section className="hero bg-gray-700 text-center p-10">
      
      <h1 className="text-black text-lg font-bold">Welcome to Our Restaurant</h1>
      <p className='mb-5'>Your journey to excellence starts here.</p>
<HeroCarousel images={[pic, pic2, pic3, pic4]} />;





        <p className='mt-3 text-white'> <i> 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo asperiores recusandae commodi deleniti eius!'</i></p>
       <button className='bg-yellow-300 hover:bg-yellow-400 font-bold py-2 px-4 mt-5 border-b-4 border-yellow-400 hover:border-yellow-500 rounded p-5 hover:cursor-pointer'>Reserve Table</button>
 
     
  
   <div className='mt-10 bg-pink-200 rounded-lg shadow-lg w-full p-5'>
      <h2 className='text-black text-lg font-bold '>Our Services</h2>
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
    

     <h2 className='mt-20 text-black text-lg font-bold'>Our partners</h2>
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