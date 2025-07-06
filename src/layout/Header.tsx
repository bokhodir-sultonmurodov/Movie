import { NavLink } from "react-router-dom";
import logo from "@/assets/main-logo.svg";
import React, { useState } from "react";
import { FiHome, FiFilm, FiLogIn, FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains("dark")
  );

  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(document.body.classList.contains("dark"));
  };

  return (
    <>
      {/* Always visible top header with logo and login/logout */}
      <header className="p-4 container mx-auto flex justify-between items-center bg-white dark:bg-[#000] backdrop-blur-sm">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-24" loading="lazy" />
        </NavLink>

        <div className="text-2xl text-gray-900 dark:text-[#A1A1A1]">
          <FiLogIn className="cursor-pointer hover:text-[#C61F1F] dark:hover:text-[#C61F1F] transition-colors duration-300" />
        </div>
      </header>

      {/* Bottom navigation only on small screens */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 p-3">
        <ul className="flex justify-around items-center text-2xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#C61F1F]"
                    : "text-gray-900 dark:text-[#A1A1A1]"
                }`
              }
            >
              <FiHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-[#C61F1F]"
                    : "text-gray-900 dark:text-[#A1A1A1]"
                }`
              }
            >
              <FiFilm />
            </NavLink>
          </li>
          <li>
            <button onClick={handleTheme}>
              {darkMode ? (
                <FiSun className="text-yellow-400 w-6 h-6" />
              ) : (
                <FiMoon className="text-gray-900 dark:text-[#A1A1A1] w-6 h-6" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React.memo(Header);
