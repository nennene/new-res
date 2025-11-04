import mintdrink from './assets/mintdrink.jpg';

function card() {
  return (
    <div className="flex p-10 bg-yellow-100 text-center flex-row items-center rounded-lg shadow-lg m-5 space-x-5">
        <div className="flex flex-col justify-between leading-normal">
      <a href="#" className='text-blue-900 hover:text-blue-500'>
        <h2>Card Title</h2>
      </a>
      <img src={mintdrink} alt="Mint Drink" className="w-100"/>
      <p className="text-sm text-gray-600 items-center w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, non!</p>
    </div>
     <div className="flex flex-col justify-between leading-normal">
     <a href="#" className='text-blue-900 hover:text-blue-500'>
        <h2>Card Title</h2>
      </a>
      <img src={mintdrink} alt="Mint Drink" className="w-100"/>
      <p className='text-sm text-gray-600 items-center w-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ratione!</p>
    </div>
     <div className="flex flex-col justify-between leading-normal">
      <a href="#" className='text-blue-900 hover:text-blue-500'>
        <h2>Card Title</h2>
      </a>
      <img src={mintdrink} alt="Mint Drink" className="w-100"/>
        <p className='text-sm text-gray-600 items-center w-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, veritatis.</p>
    </div>
    
    </div>
  );
}
export default card;