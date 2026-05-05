import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/cart/CartProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const { totalQuantity } = useCart();

  function isActive(path) {
    return pathname === path
      ? "bg-gray-900 text-white"
      : "text-black hover:bg-white/5 hover:text-dark";
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    setOpen(false);
    navigate("/");
  };

  return (
    <nav className="nav fixed top-0 left-0 right-0 w-full z-50 bg-white border">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* LINKS */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-white/5"
                    }`
                  }
                >
                  Inicio
                </NavLink>

                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-white/5"
                    }`
                  }
                >
                  Catálogo
                </NavLink>
              </div>
            </div>
          </div>

          {/* ICONOS DERECHA */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
            {/* CART */}
            {totalQuantity > 0 ? (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            ) : (
              <></>
            )}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex rounded-full ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-black hover:bg-white/5"
                }`
              }
            >
              <button className="relative rounded-full p-1">
                <FaShoppingCart />
              </button>
            </NavLink>

            {/* USER */}
            <div className="relative ml-3">
              {!user ? (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `relative flex rounded-full ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-white/5"
                    }`
                  }
                >
                  <button className="rounded-full p-1">
                    <FaUser />
                  </button>
                </NavLink>
              ) : (
                <>
                  {/* BOTÓN CON INICIAL */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold"
                    title="Cuenta"
                  >
                    {user.email.charAt(0).toUpperCase()}
                  </button>

                  {/* MENÚ */}
                  {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Perfil
                      </button>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
