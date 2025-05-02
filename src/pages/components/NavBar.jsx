import { Link, Links } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      id="navbar"
      className="flex opacity-95 bg-white border-b px-6 py-6 justify-between items-center fixed top-0 w-full transform transition duration-300 ease-in-out z-50"
    >
      <h1 className="text-3xl">
        <a href="/">Elegance</a>
      </h1>

      <ul className="hidden md:flex gap-6">
        <li>
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-gray-500">
            Categories
          </a>
        </li>
        <li>
          <Link to="/products" className="cursor-pointer">
            Products
          </Link>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative hover:text-gray-500">
          🛒
        </Link>

        <ul className="flex gap-6">
          <div className="flex gap-6">
            <li>
              <Link to="/register" className="cursor-pointer">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="cursor-pointer">
                Login
              </Link>
            </li>
          </div>
        </ul>

        <button id="hamburger" className="md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
