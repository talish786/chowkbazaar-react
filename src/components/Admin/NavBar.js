import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {logout} from '../../store/reducers/authReducer';

const NavBar = ({openSidebar}) => {
  const dispatch = useDispatch();

  const adminLogout = () => {
    dispatch(logout());
  }
  return (
    <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
        <div className="bg-gray-800 w-full flex justify-between sm:justify-end items-center p-4">
            <FaBars className="text-white text-xl sm:hidden cursor-pointer block" onClick={openSidebar}/>
            <Link className="py-2 px-4 bg-indigo-600 text-white rounded-md" onClick={adminLogout}>Logout</Link>
        </div>
    </nav>
  )
}

export default NavBar