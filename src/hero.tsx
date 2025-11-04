import pic from './assets/pic.jpg';

function hero() {
  return (
    <section className="hero bg-green-100 p-10 text-center">
      <h1 className="text-black text-lg">Welcome to Our Website</h1>
      <p>Your journey to excellence starts here.</p>
      <img src={pic} alt="Hero Image" className="w-full p-5"/>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <p className='text-blue-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quo asperiores recusandae commodi deleniti eius!</p>
      </div>
      <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-5'>Get Started</button>
    </section>
    

  );
}
export default hero;