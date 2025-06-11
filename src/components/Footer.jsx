import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-2xl">
          <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
          </a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" title ="LinkedIn">
            <FaLinkedin className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
          </a>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="w-8 h-8 rounded-md hover:scale-110 transition duration-300 ease-in-out object-contain" />
          </a>
          <a href="https://leetcode.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" title="LeetCode">
            <img
              src="/img/leetcode 1.png"
              alt="LeetCode"
              className="w-8 h-8 rounded-lg hover:scale-110 transition duration-300 ease-in-out p-1 bg-white"
            />
          </a>
        </div>
        <p className="text-sm text-secondary">&copy; {new Date().getFullYear()} Shourish Paul. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
