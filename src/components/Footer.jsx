import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import emailLogo from '../assets/email.jpg'; // adjust path if deeper


const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center">

        {/* 📧 Left Side: Email */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            src={emailLogo} // ⬅️ Replace with your logo path
            alt="Logo"
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-sm text-secondary hover:text-white transition duration-300 ease-in-out">
             sp7179@srmist.edu.in
          </p>
        </div>

        {/* 🔗 Center: Social Icons and Copyright */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.instagram.com/shourish_believer005?igsh=ZzFxNHc0d3Q4bmZr" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
            </a>
            <a href="https://www.linkedin.com/in/shourish-paul-3555192a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
            </a>
            <a href="https://github.com/sp7179" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
            </a>
            <a href="https://leetcode.com/u/shourish356/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <img
                src="/img/leetcode 1.png"
                alt="LeetCode"
                className="w-8 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out p-1 bg-white"
              />
            </a>
          </div>
          <p className="text-sm text-secondary">&copy; {new Date().getFullYear()} Shourish Paul. All Rights Reserved.</p>
        </div>

        {/* 🪄 Right Side: Optional Footer Note */}
        <div className="hidden md:block text-right text-sm text-secondary space-y-1">
          <p className="hover:text-white transition duration-300 ease-in-out">
            Made with ⚡ AI & Code
          </p>
          <p className="hover:text-white transition duration-300 ease-in-out">
            Built with React, Tailwind & Framer Motion
          </p>
          <p className="hover:text-white transition duration-300 ease-in-out">
            Version 1.0 | Updated July 2025
          </p>
        </div>

      </div>
    </footer>



  );
};

export default Footer;
