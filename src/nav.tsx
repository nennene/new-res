import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex bg-gray-800 p-4 justify-around text-white">
      <Link to="/" className="hover:text-yellow-400 font-medium">Home</Link>
      <Link to="/about" className="hover:text-yellow-400 font-medium">About</Link>
      <Link to="/menu" className="hover:text-yellow-400 font-medium">Menu</Link>
      <Link to="/contact" className="hover:text-yellow-400 font-medium">Contact</Link>
    </nav>
  );
}