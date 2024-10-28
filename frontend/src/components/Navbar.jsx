import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-violet text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">TalentHub</div>
      <div className="hidden md:flex space-x-6">
        <Link to="/">Dashboard</Link>
        <Link to="/assessments">Assessments</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/notifications">Notifications</Link>
        <Link
          to="/signup"
          className="bg-white text-blue-violet font-semibold px-4 py-2 rounded-md hover:bg-gray-200"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </Link>
        
        <Link to="/logout">Logout</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-violet text-white md:hidden">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/assessments">Assessments</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
