import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart  } from "react-icons/fa";

const Navbar = () => {

    return (
        <nav className="nav">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 ">
                                <Link to="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Inicio</Link>
                                <Link to="/Catalog" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-dark">Catálogo</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to="/cart">
                            <button type="button" className="relative rounded-full p-1 text-black focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                <span className="absolute -inset-1.5"></span>
                                <FaShoppingCart />
                            </button>
                        </Link>

                        <div className="relative ml-3">
                            <Link to="/profile">
                                <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                    <span className="absolute -inset-1.5"></span>
                                    <FaUser />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;