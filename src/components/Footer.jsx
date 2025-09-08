import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-310 mx-auto">
        {/* Logo and Links Container */}
        <div className="flex flex-col lg:flex-row justify-center gap-20 items-start lg:items-center space-y-15 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            {/* Replace the below div with your logo image */}
            <img 
              src="/logo.svg"  // Replace with your logo path
              alt="Intuitive Logo"
              className="w-32 h-auto" // Adjust the size of the logo accordingly
            />
          </div>

          {/* Links Section */}
          <div className="flex space-x-15 space-y-6 lg:space-y-0">
            {/* Products & Services */}
            <div className="space-y-2">
              <h5 className="font-semibold">Products & Services</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="/da-vinci" className="hover:text-gray-400">Da Vinci</a></li>
                <li><a href="/ion" className="hover:text-gray-400">Ion</a></li>
                <li><a href="/hub" className="hover:text-gray-400">Hub</a></li>
                <li><a href="/my-intuitive" className="hover:text-gray-400">My Intuitive</a></li>
              </ul>
            </div>

            {/* Healthcare Professionals */}
            <div className="space-y-2">
              <h5 className="font-semibold">Healthcare Professionals</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="/surgeons" className="hover:text-gray-400">Surgeons</a></li>
                <li><a href="/or-staff" className="hover:text-gray-400">OR Staff</a></li>
                <li><a href="/hospital-executives" className="hover:text-gray-400">Hospital Executives</a></li>
                <li><a href="/referring-physicians" className="hover:text-gray-400">Referring Physicians</a></li>
                <li><a href="/academics" className="hover:text-gray-400">Academics</a></li>
              </ul>
            </div>

            {/* Patients */}
            <div className="space-y-2">
              <h5 className="font-semibold">Patients</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="/find-a-physician" className="hover:text-gray-400">Find a Physician</a></li>
                <li><a href="/bariatric" className="hover:text-gray-400">Bariatric</a></li>
                <li><a href="/cardiac" className="hover:text-gray-400">Cardiac</a></li>
                <li><a href="/colorectal" className="hover:text-gray-400">Colorectal</a></li>
                <li><a href="/general-surgery" className="hover:text-gray-400">General Surgery</a></li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-2">
              <h5 className="font-semibold">About</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="/company" className="hover:text-gray-400">Company</a></li>
                <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
                <li><a href="/newsroom" className="hover:text-gray-400">Newsroom</a></li>
                <li><a href="/investors" className="hover:text-gray-400">Investors</a></li>
                <li><a href="/ventures" className="hover:text-gray-400">Ventures</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-gray-400 hover:text-gray-300 cursor-pointer" size={20} />
            <FaInstagram className="text-gray-400 hover:text-gray-300 cursor-pointer" size={20} />
            <FaTwitter className="text-gray-400 hover:text-gray-300 cursor-pointer" size={20} />
            <FaFacebook className="text-gray-400 hover:text-gray-300 cursor-pointer" size={20} />
            <FaYoutube className="text-gray-400 hover:text-gray-300 cursor-pointer" size={20} />
          </div>

          <div className="text-sm text-gray-400">
            <p>Copyright © 2025 Intuitive Surgical Operations, Inc. All rights reserved.</p>
            <div className="mt-2">
              <a href="/cookies" className="hover:text-gray-300 mr-4">Cookies</a>
              <a href="/privacy-policy" className="hover:text-gray-300 mr-4">Privacy Policy</a>
              <a href="/terms-of-use" className="hover:text-gray-300">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
