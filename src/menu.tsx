import pic from './assets/pic.jpg'; 
import pic2 from './assets/rest (1).jpg';
import pic3 from './assets/rest (2).jpg';
import pic4 from './assets/rest (3).jpg';


function menu() {
    return (
    <section className="menu w-full h-full flex flex-wrap justify-center p-10">
        <div className='bg-pink-200 w-150 h-50 m-10 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
            <h3 className='text-center pb-3'>Main Course</h3>  
            <img src={pic} alt="Menu Item" className="w-50"/> 
            <p className='text-sm text-black relative left-55 bottom-30 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Soluta, ipsum. </p>
        </div>
        
              <div className='bg-pink-200 w-150 h-50 m-10 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
            <h3 className='text-center pb-3'>Drinks </h3>  
            <img src={pic2} alt="Menu Item" className="w-50"/> 
            <p className='text-sm text-black relative left-55 bottom-30 w-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, nam.</p>
        </div>

              <div className='bg-pink-200 w-150 h-50 m-10 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
            <h3 className='text-center pb-3'>Desserts</h3>  
            <img src={pic3} alt="Menu Item" className="w-50"/> 
            <p className='text-sm text-black relative left-55 bottom-30 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, amet?</p>
        </div>

              <div className='bg-pink-200 w-150 h-50 m-10 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
            <h3 className='text-center pb-3'>Today's special</h3>  
            <img src={pic4} alt="Menu Item" className="w-50"/> 
            <p className='text-sm text-black relative left-55 bottom-30 w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum.</p>
        </div>
    </section>


    )
}
export default menu;   