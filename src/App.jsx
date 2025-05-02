import { Link, Links } from "react-router-dom";
function App() {
  return (
    <>
      <nav
        id="navbar"
        class="flex opacity-95 bg-white border-b px-6 py-6 justify-between items-center fixed top-0 w-full transform transition duration-300 ease-in-out z-50"
      >
        <h1 class="text-3xl">
          <a href="/">Elegance</a>
        </h1>

        <ul class="hidden md:flex gap-6">
          <li>
            <a href="/" class="cursor-pointer hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="/" class="hover:text-gray-500">
              Categories
            </a>
          </li>
          <li>
            <a href="/" class="cursor-pointer hover:text-gray-500">
              Products
            </a>
          </li>
          <li>
            <a href="/" class="hover:text-gray-500">
              Contact
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-4">
          <a href="/" class="relative hover:text-gray-500">
            🛒
          </a>

          <ul class="flex gap-6">
            <li>
              <a href="/" class="cursor-pointer hover:text-gray-500">
                Register
              </a>
            </li>
            <li>
              <a href="/" class="cursor-pointer hover:text-gray-500">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row mt-20">
        <div className="w-full md:w-1/2">
          <img
            src="https://media1.calvinklein.com/images/20250205_misc/PLP/R296_SKO_NA_FEB_90S_LOOSE_JEAN_01_003_R4_2x.webp"
            alt=""
          />
        </div>
        <div className="bg-gray-100 w-full md:w-1/2 flex justify-center items-center text-center px-5 py-10">
          <div>
            <h3 className="text-3xl text-start font-light">
              90s Inspired Jeans
            </h3>
            <p className="text-md text-start">
              Find your iconic fit. From straight to slim, 90s and more.
            </p>
          </div>
        </div>
      </div>
      <div className="flex relative h-screen bg-[url('https://media1.calvinklein.com/images/20250318/HP/HP_BB_Lily.webp')] bg-cover bg-center mt-1">
        <div className="absolute bottom-10 left-5 text-start">
          <h2 className="font-thin text-7xl text-white">
            SPRING ENERGY <br /> AMPLIFIED
          </h2>
          <p className="text-3xl font-light text-white">
            Signature fits with modern edge. Effortless attitude through the
            seasons
          </p>
        </div>
      </div>
      <footer id="contact" className="bg-gray-900 text-white text-center p-10">
        <p>&copy; 2025 ShopMinimal. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
