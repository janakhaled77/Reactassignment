import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('py-3.5'); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarHeight('py-1'); 
      } else {
        setNavbarHeight('py-3.5'); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-800 border-gray-200 px-4 sm:px-4 ${navbarHeight} dark:bg-gray-800 fixed top-0 right-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            SMART FRAMEWORK
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            isOpen ? "transform rotate-90" : ""
          }`}
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li className="p-4 text-white text-xl">
              <NavLink
                to="/About"
                activeclassname="bg-gray-700 rounded-lg"
                className="hover:bg-gray-700 rounded-lg"
              >
                About
              </NavLink>
            </li>
            <li className="p-4 text-white text-xl">
              <NavLink
                to="/Portofolio"
                activeclassname="bg-gray-700 rounded-lg"
                className="hover:bg-gray-700 rounded-lg"
              >
                Portofolio
              </NavLink>
            </li>
            <li className="p-4 text-white text-xl">
              <NavLink
                to="/Contact"
                activeclassname="bg-gray-700 rounded-lg"
                className="hover:bg-gray-700 rounded-lg"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
