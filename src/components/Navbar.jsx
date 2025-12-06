import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router";
import logo from "../assets/paw_logo.png";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isChecked, setIschecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const btnStyle = "btn text-white hover:opacity-90";

  const handleThemeChange = () => {
    setIschecked((prev) => !prev);
  };
  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [isChecked]);
  // Auto-close drawer if screen resized to large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "LogOut Successful!",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <Link to="/">
        <li className="m-2 text-xl cursor-pointer hover:text-blue-600">Home</li>
      </Link>
      <Link to="/pets">
        <li className="m-2 text-xl cursor-pointer hover:text-blue-600">
          Pets & Supplies
        </li>
      </Link>
      {user && (
        <>
          <Link to="/add-listing">
            <li className="m-2 text-xl cursor-pointer hover:text-blue-600">
              Add Listing
            </li>
          </Link>
          <Link to="/my-listings">
            <li className="m-2 text-xl cursor-pointer hover:text-blue-600">
              My Listings
            </li>
          </Link>
          <Link to="/my-orders">
            <li className="m-2 text-xl cursor-pointer hover:text-blue-600">
              My Orders
            </li>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      {/* ===== Navbar ===== */}
      <div className="w-11/12 mx-auto my-3 navbar bg-base-200 shadow-sm">
        {/* LEFT: Logo */}
        <div className="navbar-start flex items-center gap-2">
          {/* Hamburger for mobile */}
          <button className="lg:hidden mr-3" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8 bg-white rounded" />
            <span className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-blue-900 text-transparent bg-clip-text">
              PawMart
            </span>
          </Link>
        </div>

        {/* MIDDLE LINKS (Desktop Only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* RIGHT SIDE (Desktop Only) */}
        <div className="navbar-end hidden lg:flex items-center gap-3">
          {!user ? (
            <>
              <Link to="/auth/login" className={`${btnStyle} bg-blue-600`}>
                Login
              </Link>
              <Link
                to="/auth/register"
                className={`${btnStyle} bg-linear-to-r from-pink-500 to-purple-600`}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <img
                src={user?.photoURL || userIcon}
                alt="user"
                onError={(e) => (e.target.src = userIcon)}
                data-tooltip-id="user-tooltip"
                data-tooltip-content={`Name: ${
                  user.displayName || "N/A"
                }\nEmail: ${user.email}`}
                className="w-12 h-12 rounded-full cursor-pointer"
              />
              <Tooltip
                id="user-tooltip"
                place="bottom"
                effect="solid"
                clickable={true}
                style={{ zIndex: 9999 }}
              />
              <button
                onClick={handleLogout}
                className={`${btnStyle} bg-linear-to-r from-pink-500 to-purple-600`}
              >
                Logout
              </button>
            </>
          )}
          {/* dark/light */}
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleThemeChange}
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>

      {/* ===== Drawer Overlay (Mobile) ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* ===== Drawer Panel (Mobile Only) ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 shadow-lg z-50 transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    ${isChecked ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}
  `}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            {user && (
              <img
                src={user?.photoURL || userIcon}
                alt="user"
                title={user?.displayName}
                className="w-10 h-10 rounded-full"
              />
            )}
            <span className="font-bold text-xl">
              {user ? user.email : "Guest User"}
            </span>
          </div>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="p-4 text-lg flex flex-col gap-2">{navLinks}</ul>

        <div className="p-4 border-t flex flex-col gap-2">
          {!user ? (
            <>
              <Link
                to="/auth/login"
                className={`${btnStyle} bg-blue-600 w-full`}
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className={`${btnStyle} bg-linear-to-r from-pink-500 to-purple-600 w-full`}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className={`${btnStyle} bg-red-500 w-full`}
            >
              Logout
            </button>
          )}
          {/* Dark/Light Mode Toggle */}
          <div className="flex justify-center mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-sm"
                checked={isChecked}
                onChange={handleThemeChange}
              />
              <span>{isChecked ? "Dark Mode" : "Light Mode"}</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
