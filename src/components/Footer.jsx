import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailLogo from '../assets/email.jpg';
import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    // 📱 Mobile Footer Layout (centered)
    return (
      <footer className="bg-tertiary text-white py-6 mt-10">
        <div className="max-w-md mx-auto px-4 flex flex-col items-center space-y-6">

          {/* 📧 Email */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={emailLogo}
              alt="Email"
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-sm text-secondary hover:text-white transition duration-300 ease-in-out text-center">
              sp7179@srmist.edu.in
            </p>
          </div>

          {/* 🔗 Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.instagram.com/shourish_believer005?igsh=ZzFxNHc0d3Q4bmZr" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram className="w-8 h-8 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/shourish-paul-3555192a9" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="w-8 h-8 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://github.com/sp7179" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="w-8 h-8 hover:scale-110 transition duration-300" />
            </a>
            <a href="https://leetcode.com/u/shourish356/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <img
                src={import.meta.env.BASE_URL + "img/leetcode1.png"}
                alt="LeetCode"
                className="w-8 h-8 rounded-lg hover:scale-110 transition duration-300 p-1 bg-white"
              />
            </a>
          </div>

          {/* 📄 Copyright */}
          <p className="text-sm text-secondary text-center">
            &copy; {new Date().getFullYear()} Shourish Paul. All Rights Reserved.
          </p>

          {/* ⚙️ Tech Details */}
          <div className="text-center text-sm text-secondary space-y-1">
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
  }

  // 💻 Desktop Footer Layout (unchanged)
  return (
    <footer className="bg-tertiary text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center">

        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src={emailLogo} alt="Logo" className="w-6 h-6 rounded-full object-cover" />
          <p className="text-sm text-secondary hover:text-white transition duration-300 ease-in-out">
            sp7179@srmist.edu.in
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6 text-2xl">
            <a href="https://www.instagram.com/shourish_believer005?igsh=ZzFxNHc0d3Q4bmZr" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/shourish-paul-3555192a9" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out" />
            </a>
            <a href="https://github.com/sp7179" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out" />
            </a>
            <a href="https://leetcode.com/u/shourish356/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <img
                src={import.meta.env.BASE_URL + "img/leetcode1.png"}
                alt="LeetCode"
                className="w-8 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out p-1 bg-white"
              />
            </a>
          </div>
          <p className="text-sm text-secondary">&copy; {new Date().getFullYear()} Shourish Paul. All Rights Reserved.</p>
        </div>

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
