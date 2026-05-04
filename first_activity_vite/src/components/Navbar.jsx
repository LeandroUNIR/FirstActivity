import { Link, NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart  } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

const {pathname} = useLocation()

function isActive(path) {
    return pathname === path ? 'bg-gray-900 text-white' : 'text-black hover:bg-white/5 hover:text-dark';
}
    return (
  
        <nav className="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                                <NavLink to="/" aria-current="page" className={ ({ isActive }) =>`rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-white/5 hover:text-dark'}`}>Inicio</NavLink>
                                <NavLink to="/catalog" className={ ({ isActive }) =>`rounded-md px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-white/5 hover:text-dark'}`}>Catálogo</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavLink to="/cart" className={ ({ isActive }) =>`relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-white/5 hover:text-dark'}`}>
                            <button type="button" className="relative rounded-full p-1 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                <span className="absolute -inset-1.5"></span>
                                <FaShoppingCart />
                            </button>
                        </NavLink>

                        <div className="relative ml-3">
                            <NavLink to="/profile" className={ ({ isActive }) =>`relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${isActive ? 'bg-gray-900 text-white' : 'text-black hover:bg-white/5 hover:text-dark'}`}>
                                <button className="relative rounded-full p-1 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                    <span className="absolute -inset-1.5"></span>
                                    <FaUser />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;