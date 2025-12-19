import pic from './assets/pic.jpg'; 


function menu() {
    return (
    <section className="flex flex-column justify-center p-10 text-center">

        <div className="m-5 p-2 rounded overflow-hidden shadow-lg bg-yellow-100 hover:scale-105 transition-transform duration-300">
            <img className="w-full" src={pic} alt="Menu Image"/>

        <h1 className="text-black text-lg text-center">Our Menu</h1>
        <p className="text-center">Explore our diverse menu crafted to satisfy every palate. From appetizers to desserts, we have something for everyone.</p>
        <a href="#" className='text-green-800'>See more</a>
   </div>
   <div className="rounded overflow-hidden shadow-lg bg-yellow-100 m-5 p-2 hover:scale-105 transition-transform duration-300">
            <img className="w-full" src={pic} alt="Menu Image"/>

        <h1 className="text-black text-lg text-center">Our Menu</h1>
        <p className="text-center">Explore our diverse menu crafted to satisfy every palate. From appetizers to desserts, we have something for everyone.</p>
        <a href="#" className='text-green-800'>See more</a>
   </div>
   <div className="rounded overflow-hidden shadow-lg bg-yellow-100 m-5 p-2 hover:scale-105 transition-transform duration-300">
            <img className="w-full" src={pic} alt="Menu Image"/>

        <h1 className="text-black text-lg  text-center">Our Menu</h1>
        <p className="text-center">Explore our diverse menu crafted to satisfy every palate. From appetizers to desserts, we have something for everyone.</p>
        <a href="#" className='text-green-800'>See more</a>
   </div>
     <div className="rounded overflow-hidden shadow-lg bg-yellow-100 m-5 p-2 hover:scale-105 transition-transform duration-300">
            <img className="w-full" src={pic} alt="Menu Image"/>

        <h1 className="text-black text-lg  text-center">Our Menu</h1>
        <p className="text-center">Explore our diverse menu crafted to satisfy every palate. From appetizers to desserts, we have something for everyone.</p>
        <a href="#" className='text-green-800'>See more</a>
   </div>
    </section>


    )
}
export default menu;   