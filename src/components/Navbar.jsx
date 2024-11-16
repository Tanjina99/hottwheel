import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import { IoIosSearch, IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    {
      to: "/all products",
      text: "All Products",
      subLinks: [
        { to: "/products/standard", text: "Standard" },
        { to: "/products/cruiser", text: "Cruiser" },
        { to: "/products/roadster", text: "Roadster" },
        { to: "/products/off-road", text: "Off Road" },
        { to: "/products/super", text: "Super" },
        { to: "/products/touring", text: "Touring" },
      ],
    },
    { to: "/services", text: "Services" },
    { to: "/contact us", text: "Contact Us" },
    { to: "/about us", text: "About Us" },
  ];

  const icons = [
    { to: "/cart", icon: <FaCartShopping size={22} /> },
    { to: "/login", icon: <FaUserAstronaut size={22} /> },
  ];

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img
              src="/images/bg-1.png"
              alt="BikeShop Logo"
              className="logo-img"
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="srch-btn">
            <IoIosSearch />
          </span>
        </div>

        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={link.subLinks ? "dropdown" : ""}
              onMouseEnter={
                link.subLinks ? () => setDropdownOpen(true) : undefined
              }
              onMouseLeave={
                link.subLinks ? () => setDropdownOpen(false) : undefined
              }
            >
              <Link to={link.to} className="nav-link">
                {link.text}
                {link.subLinks && (
                  <IoIosArrowDropdown className="dropdown-arrow" />
                )}
              </Link>
              {link.subLinks && dropdownOpen && (
                <ul className="dropdown-menu">
                  {link.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subLink.to} className="nav-link">
                        {subLink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {icons.map((icon, index) => (
            <li key={index}>
              <Link
                to={icon.to}
                className={icon.to === "/cart" ? "cart-link" : "user-link"}
              >
                {icon.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
