import { NavLink } from "react-router-dom";
import logo from "@/assets/main-logo.svg";
import React, { useState } from "react";
import {
  FiHome,
  FiFilm,
  FiLogIn,
  FiSun,
  FiMoon,
  FiMenu,
  FiBookmark,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";
import { Drawer, Modal, Button } from "antd";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains("dark")
  );
  const [open, setOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(document.body.classList.contains("dark"));
  };

  const credential = localStorage.getItem("credential");
  const decoded: any = credential ? jwtDecode(credential || "") : null;

  const handleLogout = () => {
    localStorage.removeItem("credential");
    setIsProfileOpen(false);
    window.location.reload(); 
  };

  return (
    <header className="p-4 container mx-auto  dark:bg-[#000] backdrop-blur-sm">
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
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-[#C61F1F] dark:text-[#C61F1F]"
                    : "text-gray-900 dark:text-[#A1A1A1]"
                }`
              }
            >
              <FiSearch />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "text-[#C61F1F] dark:text-[#C61F1F]"
                    : "text-gray-900 dark:text-[#A1A1A1]"
                }`
              }
            >
              <FiBookmark />
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleTheme}
              className="cursor-pointer p-2 rounded-lg flex items-center justify-center"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400 w-6 h-6" />
              ) : (
                <FiMoon className="text-gray-900 w-6 h-6" />
              )}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {decoded ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsProfileOpen(true)}
            >
              <img
                src={decoded.picture}
                alt={decoded.name}
                className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
              />
            </div>
          ) : (
            <NavLink to="/login">
              <FiLogIn className="text-2xl text-gray-900 dark:text-[#A1A1A1] cursor-pointer hover:text-[#C61F1F] dark:hover:text-[#C61F1F] transition-colors duration-300" />
            </NavLink>
          )}

          <div className="md:hidden">
            <FiMenu
              className="text-2xl text-gray-900 dark:text-white cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <Drawer
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          width={100}
          closable={false}
          styles={{
            body: {
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              alignItems: "center",
              backgroundColor: darkMode ? "#000" : "#fff",
              cursor: "pointer",
            },
          }}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            <FiHome className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <NavLink to="/movies" onClick={() => setOpen(false)}>
            <FiFilm className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <NavLink to="/search" onClick={() => setOpen(false)}>
            <FiSearch className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <NavLink to="/saved" onClick={() => setOpen(false)}>
            <FiBookmark className="text-2xl text-gray-900 dark:text-white" />
          </NavLink>
          <button onClick={handleTheme}>
            {darkMode ? (
              <FiSun className="text-yellow-400 text-2xl" />
            ) : (
              <FiMoon className="text-gray-900 text-2xl" />
            )}
          </button>
          <FiLogIn className="text-2xl text-gray-900 dark:text-white" />
        </Drawer>

        <Modal
          title="Profile"
          open={isProfileOpen}
          onCancel={() => setIsProfileOpen(false)}
          footer={[
            <Button key="logout" danger icon={<FiLogOut />} onClick={handleLogout}>
              Logout
            </Button>,
            <Button key="close" onClick={() => setIsProfileOpen(false)}>
              Close
            </Button>,
          ]}
          wrapClassName={darkMode ? "dark-modal" : ""}
        >
          {decoded && (
            <div className="flex flex-col gap-4 items-center">
              <img
                src={decoded.picture}
                alt={decoded.name}
                className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover"
              />
              <h2 className="text-xl font-semibold">{decoded.name}</h2>
              <p className="text-gray-700 dark:text-gray-300">{decoded.email}</p>
            </div>
          )}
        </Modal>
      </nav>
    </header>
  );
};

export default React.memo(Header);
