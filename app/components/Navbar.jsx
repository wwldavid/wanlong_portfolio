import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const navItems = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#designs", label: "Designs" },
    { href: "#work", label: "Work" },
  ];

  const openMenu = () => {
    setIsMenuOpen(true);
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 监听活跃区域
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 背景遮罩 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-gradient-to-r from-[#f8f4e6]/95 via-[#f2f2b0]/95 to-[#e0ebaf]/95 backdrop-blur-xl shadow-lg border-b border-[#4c6473]/10 dark:from-[#2f5d50]/95 dark:via-[#4c6473]/95 dark:to-[#2f5d50]/95 dark:border-[#84b9cb]/20"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="group">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-2 lg:gap-4 rounded-full px-6 py-3 transition-all duration-300 ${
            isScroll
              ? "bg-white/20 backdrop-blur-md shadow-lg border border-white/30 dark:bg-[#2f5d50]/30 dark:border-[#84b9cb]/30"
              : "bg-gradient-to-r from-[#f8f4e6]/80 via-[#f2f2b0]/80 to-[#e0ebaf]/80 backdrop-blur-lg shadow-xl border border-[#4c6473]/20 dark:from-[#2f5d50]/80 dark:via-[#4c6473]/80 dark:to-[#2f5d50]/80 dark:border-[#84b9cb]/30"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? "text-[#2f5d50] dark:text-[#f8f4e6] dark:from-[#84b9cb]/30 dark:to-[#4c6473]/30"
                    : "text-[#4c6473] hover:text-[#2f5d50] hover:bg-[#f8f4e6]/50 dark:text-[#f8f4e6] dark:hover:text-[#84b9cb] dark:hover:bg-[#4c6473]/30"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="relative p-2 rounded-full bg-gradient-to-r from-[#f8f4e6] to-[#f2f2b0] hover:from-[#f2f2b0] hover:to-[#e0ebaf] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:from-[#4c6473] dark:to-[#2f5d50] dark:hover:from-[#84b9cb]/30 dark:hover:to-[#4c6473]"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme toggle"
              className="w-6 h-6 transition-transform duration-300 hover:rotate-12"
            />
            {/* 光晕效果 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#84b9cb]/20 to-[#e0ebaf]/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Desktop Contact Button */}
          <a
            className="hidden lg:flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#2f5d50] to-[#4c6473] hover:from-[#4c6473] hover:to-[#84b9cb] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            href="#contact"
          >
            <span className="font-medium">Contact</span>
            <Image
              src={isDarkMode ? assets.contact_icon_dark : assets.contact_icon}
              alt="contact icon"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 rounded-full bg-gradient-to-r from-[#f8f4e6] to-[#f2f2b0] hover:from-[#f2f2b0] hover:to-[#e0ebaf] shadow-lg transition-all duration-300 transform hover:scale-105 dark:from-[#4c6473] dark:to-[#2f5d50]"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <div
          ref={sideMenuRef}
          className="flex md:hidden flex-col fixed bg-gradient-to-b from-[#f8f4e6] via-[#f2f2b0] to-[#e0ebaf] -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500 shadow-2xl dark:from-[#2f5d50] dark:via-[#4c6473] dark:to-[#2f5d50]"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#4c6473]/20 dark:border-[#84b9cb]/20">
            <h3 className="text-lg font-semibold text-[#2f5d50] dark:text-[#f8f4e6]">
              Menu
            </h3>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-[#e0ebaf]/50 transition-colors duration-200 dark:hover:bg-[#4c6473]/50"
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close icon"
                className="w-5 cursor-pointer"
              />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-2 p-6 flex-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-[#2f5d50] to-[#4c6473] text-white shadow-lg dark:from-[#84b9cb] dark:to-[#4c6473] dark:text-[#f8f4e6]"
                      : "text-[#4c6473] hover:bg-[#e0ebaf]/50 hover:text-[#2f5d50] dark:text-[#f8f4e6] dark:hover:bg-[#4c6473]/30"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-4 pt-4 border-t border-[#4c6473]/20 dark:border-[#84b9cb]/20">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#2f5d50] to-[#4c6473] text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl dark:from-[#84b9cb] dark:to-[#4c6473]"
              >
                <span className="font-medium">Contact Me</span>
                <Image
                  src={
                    isDarkMode ? assets.contact_icon_dark : assets.contact_icon
                  }
                  alt="contact icon"
                  className="w-5"
                />
              </a>
            </li>
          </ul>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-[#4c6473]/20 dark:border-[#84b9cb]/20">
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-[#4c6473]/30 dark:bg-[#84b9cb]/30"></div>
              <div className="w-2 h-2 bg-[#84b9cb] rounded-full"></div>
              <div className="w-8 h-px bg-[#4c6473]/30 dark:bg-[#84b9cb]/30"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
