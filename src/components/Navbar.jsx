import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 transition-all duration-300
        ${scrolled ? "bg-primary py-3" : "bg-transparent py-3 sm:py-5"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback-logo.png";
            }}
          />
          {/* Desktop & Mobile Tagline */}
          {isMobile ? (
            <div className="flex flex-col leading-tight">
              <p className="text-white text-[16px] font-bold cursor-pointer">
                Shourish
              </p>
              <span className="text-[12px] text-secondary font-medium -mt-1">
                Backend & Python Mastery
              </span>
            </div>
          ) : (
            <p className="text-white text-[18px] font-bold cursor-pointer leading-tight">
              Shourish
              <span className="sm:inline"> | Backend & Python Mastery</span>
            </p>
          )}
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"}
        hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>


        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${toggle ? "flex" : "hidden"
              } absolute top-14 right-2 w-[75vw] z-50 rounded-lg flex-col gap-3 p-4 black-gradient shadow-lg`}
          >
            <ul className="list-none flex flex-col">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium text-[16px] py-2 ${active === nav.title ? "text-white" : "text-secondary"
                    } cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li
                className="font-poppins font-medium text-[16px] py-2 text-secondary cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
