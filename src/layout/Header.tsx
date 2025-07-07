import { NavLink } from "react-router-dom";
import logo from "@/assets/main-logo.svg";
import React, { useState } from "react";
import { FiHome, FiFilm, FiLogIn, FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { Drawer } from "antd";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains("dark")
  );
  const [open, setOpen] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(document.body.classList.contains("dark"));
  };

  return (
    <header className="p-4 container mx-auto bg-white dark:bg-[#000] backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-24" loading="lazy" />
        </NavLink>

        <ul className="hidden md:flex gap-6 text-2xl font-medium items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-[#C61F1F] dark:text-[#C61F1F]"
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
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-[#C61F1F] dark:text-[#C61F1F]"
                    : "text-gray-900 dark:text-[#A1A1A1]"
                }`
              }
            >
              <FiFilm />
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleTheme}
              className="cursor-pointer p-2 rounded-lg flex items-center justify-center"
            >
              {darkMode ? 
                <FiSun className="text-yellow-400 w-6 h-6" />
               : 
                <FiMoon className="text-gray-900 w-6 h-6" />
              }
            </button>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 text-2xl text-gray-900 dark:text-[#A1A1A1]">
          <FiLogIn className="cursor-pointer hover:text-[#C61F1F] dark:hover:text-[#C61F1F] transition-colors duration-300" />
        </div>

        <div className="md:hidden">
          <FiMenu
            className="text-2xl text-gray-900 dark:text-white cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>

        <Drawer
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width={80}
          closable={false}
          styles={{
            body: {
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              alignItems: "center",
              backgroundColor: darkMode ? "#000" : "#fff",
              cursor: "pointer"
            },
          }}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            <FiHome className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <NavLink to="/movies" onClick={() => setOpen(false)}>
            <FiFilm className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <button onClick={handleTheme}>
            {darkMode ? 
              <FiSun className="text-yellow-400 text-2xl" />
             : 
              <FiMoon className="text-gray-900 text-2xl" />
            }
          </button>
          <FiLogIn className="text-2xl text-gray-900 dark:text-white" />
        </Drawer>
      </nav>
    </header>
  );
};

export default React.memo(Header);
