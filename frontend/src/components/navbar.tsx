import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./searchbar";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white px-4 py-3 shadow-md flex items-center justify-between">
        {/* Logo e SearchBar (desktop) */}
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold">STORE</p>
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">Cart</p>
          <p className="cursor-pointer">Account</p>
          <FaCartShopping className="text-lg cursor-pointer" />
        </div>

        {/* Menu button (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile side menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <p className="text-xl font-bold">Menu</p>
          <button onClick={() => setMenuOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-sm font-medium">
          <SearchBar />
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Shop</p>
          <p className="cursor-pointer">Cart</p>
          <p className="cursor-pointer">Account</p>
          <FaCartShopping className="text-lg cursor-pointer mt-2" />
        </div>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default NavBar;
