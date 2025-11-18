import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBorderAll } from "react-icons/fa6";

const menuItems = [
  {
    name: "Home",
    dropdown: [
      "Home Default",
      "Home Modern",
      "Home Creative",
      "Home Local Store",
      "Home Minimalist",
    ],
  },
  {
    name: "Shop",
    dropdown: [
      "Shop Grid - Filter",
      "Shop 3 Column",
      "Shop List",
      "Shop Single",
      "Shop Wishlist",
    ],
  },
  { name: "Stores", dropdown: ["Store List", "Store Grid", "Store Single"] },
  { name: "Pages", dropdown: ["Blog", "About Us", "Contact", "404 Error"] },
  {
    name: "Account",
    dropdown: ["Sign In", "Sign Up", "Forget Password", "My Account"],
  },
  { name: "Dashboard" },
  { name: "Docs" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  // ⭐ Auto close all menus on clicking item
  const handleClickItem = (itemName) => {
    console.log("Clicked: ", itemName);

    // Close submenu
    setOpenMenu(null);

    // Close mobile menu
    setMobileOpen(false);
  };

  return (
    <>
      <div className="bg-white border-b border-gray-300">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex gap-20 items-center relative font-medium">
          <button className="bg-[#0AAD0A] text-white px-4 py-2 rounded flex items-center gap-2 font-poppins font-medium">
            <FaBorderAll /> All Departments
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-poppins font-medium relative">
            {menuItems.map((item, index) => (
              <li key={index} className="relative cursor-pointer">
                <span
                  onClick={() => toggleDropdown(item.name)}
                  className="hover:text-[#0AAD0A]"
                >
                  {item.name}
                </span>

                {item.dropdown && openMenu === item.name && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50"
                  >
                    {item.dropdown.map((drop, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-green-100 hover:text-[#0AAD0A] cursor-pointer"
                        onClick={() => handleClickItem(drop)}
                      >
                        {drop}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 space-y-2">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-[#0AAD0A]"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <span className="text-gray-500 text-sm">
                        {openMenu === item.name ? "▲" : "▼"}
                      </span>
                    )}
                  </div>

                  {item.dropdown && openMenu === item.name && (
                    <ul className="pl-4 mt-2 space-y-1">
                      {item.dropdown.map((drop, i) => (
                        <li
                          key={i}
                          onClick={() => handleClickItem(drop)}
                          className="text-sm text-gray-600 hover:text-[#0AAD0A] cursor-pointer"
                        >
                          {drop}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Navbar;
