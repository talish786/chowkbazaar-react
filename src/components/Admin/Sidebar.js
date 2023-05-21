import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaStore } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoClose, IoClipboardSharp } from "react-icons/io5";

const Sidebar = ({ side, closeSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10`}
      >
        <IoClose
          className="absolute top-5 right-4 sm:hidden block cursor-pointer text-lg"
          onClick={closeSidebar}
        />
        <div className="bg-white p-4">
          <NavLink to="/dashboard/home">
            <img src="/logo1.png" alt="logo" />
          </NavLink>
        </div>
        <ul className="sidebarNav">
          <li>
            <NavLink
              to="/dashboard/home"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FiHome className="mr-2 " />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/categories"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <IoClipboardSharp className="mr-2" />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/products"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FaStore className="mr-2" />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orders"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FiShoppingBag className="mr-2" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/customers"
              className="p-4 text-white flex items-center hover:bg-gray-600"
            >
              <FaUserAlt className="mr-2" />
              Customers
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
