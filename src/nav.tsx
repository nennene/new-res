function nav() {
  return (
    <nav className="navigation">
        <ul className="flex space-x-4 bg-yellow-200 w-full h-12 items-center justify-center ">       
             <li><a href="#home" className="text-green-800">Home</a></li>
            <li><a href="#about" className="text-green-800">About</a></li>
            <li><a href="#services" className="text-green-800">Services</a></li>
            <li><a href="#contact" className="text-green-800">Contact</a></li>
        </ul>
    </nav>
  );
}
export default nav;