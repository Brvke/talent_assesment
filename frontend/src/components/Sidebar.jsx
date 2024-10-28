import {
  FaHome,
  FaTasks,
  FaUserCircle,
  FaBell,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="hidden md:block bg-blue-violet w-64 p-6 text-white fixed top-0 left-0 h-full">
    <ul className="space-y-8">
      <li className="flex items-center space-x-3">
        <FaHome />
        <Link to="/">Dashboard</Link>
      </li>
      <li className="flex items-center space-x-3">
        <FaTasks />
        <Link to="/assessments">Assessments</Link>
      </li>
      <li className="flex items-center space-x-3">
        <FaChartLine />
        <Link to="/results">Results</Link>
      </li>
      <li className="flex items-center space-x-3">
        <FaBell />
        <Link to="/notifications">Notifications</Link>
      </li>
      <li className="flex items-center space-x-3">
        <FaUsers />
        <Link to="/admin">Admin</Link> {/* Recruiter specific */}
      </li>
      <li className="flex items-center space-x-3">
        <FaUserCircle />
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
