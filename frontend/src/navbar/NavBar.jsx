import { useState } from "react";
import { Link } from "react-router-dom";

const titles = [
  { name: "Home", path: "/" },
  { name: "Find Jobs", path: "/jobs" },
  { name: "Find Talents", path: "/talent" },
  { name: "About us", path: "/about" },
  { name: "Testimonials", path: "/testimonials" },
];

const NavBar = ({ onCreateClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-[25px] py-[16px] mx-auto max-w-[890px] bg-white rounded-full list-none shadow-[0_1px_15px_rgba(0,0,0,0.1)]">
      
        <img
          src="https://ik.imagekit.io/hg3rwpt4ia/intern/logo.png?updatedAt=1746274820019"
          alt="WebLogo"
          className="h-[44px] cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-4">
          {titles.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="rounded-lg border border-transparent p-3 cursor-pointer transition-shadow hover:shadow-[0_1px_10px_rgba(0,0,0,0.2)]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={onCreateClick}
          className="text-white px-4 py-2 rounded-full transition bg-gradient-to-b from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900"
        >
          Create Job
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 p-5 transition-all duration-300">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mb-4 text-gray-600 hover:text-black w-full text-end"
          >
            ✕ 
          </button>
          <ul className="flex flex-col gap-4 text-center">
            {titles.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block p-2 text-gray-800 hover:text-purple-700 border border-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
