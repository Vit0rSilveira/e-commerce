import SearchBar from "./serachbar";
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="w-full flex flex-row items-center justify-content px-8 py-4 shadow-md rounded-b-2xl">
      <div className="flex items-center gap-4">
        <p className="text-xl font-bold">STORE</p>
        <SearchBar />
      </div>

      {/* Links de navegação */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Shop</p>
        <p className="cursor-pointer">Cart</p>
        <p className="cursor-pointer">Account</p>
      </div>
      <FaCartShopping className="flex items-center gap-4"/>
    </div>
  );
}

export default NavBar;
