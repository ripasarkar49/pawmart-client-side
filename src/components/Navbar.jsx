import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/paw_logo.png";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import gsap from "gsap";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  
  const [isChecked, setIschecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const btnStyle = "btn text-white border-none shadow-md hover:scale-105 transition-transform duration-300";

  // Theme Toggle
  const handleThemeChange = () => {
    setIschecked((prev) => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animations on Mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logoRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(linksRef.current.children, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Mobile Menu Animation
  const drawerRef = useRef(null);
  useEffect(() => {
    if (open) {
      gsap.to(drawerRef.current, { x: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(drawerRef.current, { x: "-100%", duration: 0.3, ease: "power2.in" });
    }
  }, [open]);

  // Auto-close drawer on resize
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

  const navLinksItems = [
    { name: "Home", path: "/" },
    { name: "Pets & Supplies", path: "/pets" },
    { name: "Contact Us", path: "/contact" },
    ...(user
      ? [
          { name: "Add Listing", path: "/add-listing" },
          { name: "My Listings", path: "/my-listings" },
          { name: "My Orders", path: "/my-orders" },
        ]
      : []),
  ];

  const renderNavLinks = () => (
    <>
      {navLinksItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `mr-6 text-lg font-medium transition-colors duration-300 relative group ${
              isActive ? "text-[var(--color-primary)] font-bold" : "text-gray-600 dark:text-gray-300 hover:text-[var(--color-primary)]"
            }`
          }
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      ))}
    </>
  );

  return (
    <>
      {/* ===== Navbar ===== */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-effect shadow-md py-2"
            : "bg-[var(--color-base-200)] py-4"
        }`}
      >
        <div className="w-11/12 mx-auto flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-3" ref={logoRef}>
            <button className="lg:hidden" onClick={() => setOpen(true)}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-10 h-10 bg-white rounded-full p-1 object-contain drop-shadow-sm" />
              <span className="text-3xl font-extrabold text-[var(--color-primary)] tracking-wide">
                PawMart
              </span>
            </Link>
          </div>

          {/* MIDDLE LINKS (Desktop) */}
          <div className="hidden lg:flex" ref={linksRef}>
            {renderNavLinks()}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">
             {/* Theme Toggle */}
             <label className="swap swap-rotate text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
              <input type="checkbox" onChange={handleThemeChange} checked={isChecked} />
              {/* sun icon */}
              <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm12,1.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,17.64,8.1ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              {/* moon icon */}
              <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/></svg>
            </label>

            {!user ? (
              <div className="flex gap-2">
                <Link to="/auth/login" className={`${btnStyle} bg-[var(--color-primary)]`}>Login</Link>
                <Link to="/auth/register" className={`${btnStyle} bg-[var(--color-secondary)] text-gray-900 font-bold`}>Register</Link>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                 <img
                  src={user?.photoURL || userIcon}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-[var(--color-secondary)] object-cover cursor-pointer hover:scale-110 transition-transform"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={`Hi, ${user.displayName || "User"}`}
                />
                 <Tooltip id="user-tooltip" place="bottom" />
                 <button onClick={handleLogout} className={`${btnStyle} bg-red-500`}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content jump due to fixed positioned navbar */}
      <div className="h-24"></div>

      {/* ===== Drawer Overlay ===== */}
      {open && <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setOpen(false)}></div>}

      {/* ===== Mobile Drawer ===== */}
      <div
        ref={drawerRef}
        className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[var(--color-base-100)] z-[60] shadow-2xl transform -translate-x-full overflow-y-auto"
      >
        <div className="p-5 flex flex-col h-full">
           <div className="flex justify-between items-center mb-6 border-b pb-4">
              <span className="text-2xl font-bold text-[var(--color-primary)]">Menu</span>
              <button onClick={() => setOpen(false)} className="bg-gray-200 p-2 rounded-full hover:bg-red-100 hover:text-red-500 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
           </div>

           <nav className="flex flex-col gap-4 flex-grow">
              {navLinksItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-[var(--color-primary)] hover:translate-x-2 transition-all"
                  >
                    {item.name}
                  </Link>
              ))}
           </nav>

           <div className="mt-auto pt-6 border-t flex flex-col gap-3">
              {!user ? (
                 <>
                  <Link to="/auth/login" className={`${btnStyle} bg-[var(--color-primary)] w-full`} onClick={() => setOpen(false)}>Login</Link>
                  <Link to="/auth/register" className={`${btnStyle} bg-[var(--color-secondary)] text-gray-900 w-full`} onClick={() => setOpen(false)}>Register</Link>
                 </>
              ) : (
                <button onClick={() => { handleLogout(); setOpen(false); }} className={`${btnStyle} bg-red-500 w-full`}>Logout</button>
              )}
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
