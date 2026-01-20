import { Link } from "react-router-dom";
import honey from './assets/svg/honey-svgrepo-com.svg'

export default function Nav() {
  return (
    <nav className="flex bg-gray-900 p-4 justify-around text-white">
<img src={honey} alt="Honey Logo" className="w-20 h-10 bg-pink-100 rounded"/>
      <Link to="/" className="hover:text-yellow-400 font-medium">Home</Link>
        <Link to="/menu" className="hover:text-yellow-400 font-medium">Menu</Link>
      <Link to="/about" className="hover:text-yellow-400 font-medium">About</Link>
      <Link to="/contact" className="hover:text-yellow-400 font-medium">Contact</Link>
    </nav>
  );
}