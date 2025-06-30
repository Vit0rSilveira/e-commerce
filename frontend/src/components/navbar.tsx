import SearchBar from "./serachbar";
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="navbar w-full flex flex-row justify-between px-8 py-4 shadow-md">
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">STORE</p>
        <SearchBar />
      </div>

      <div className="flex items-center gap-8 text-sm font-medium">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Shop</p>
        <p className="cursor-pointer">Cart</p>
        <p className="cursor-pointer">Account</p>
        <FaCartShopping className="text-lg cursor-pointer" />
      </div>
    </div>
  );
}

export default NavBar;
