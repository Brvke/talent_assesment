import React from "react";
import { Link } from "react-router-dom";
const Footer = () => (
  <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
    <div className="flex justify-center space-x-4">
      <Link>
        <li>Privacy Policy</li>
      </Link>
      <Link>
        <li>Terms of Service</li>
      </Link>
      <Link>
        <li>Contact Us</li>
      </Link>
    </div>
    <p>&copy; 2024 TalentHub. All rights reserved.</p>
  </footer>
);

export default Footer;
