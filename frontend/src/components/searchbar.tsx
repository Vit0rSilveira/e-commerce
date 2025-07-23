import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "5px",
      }}
    >
      <input
        type="text"
        placeholder="Pesquisar..."
        style={{
          border: "none",
          outline: "none",
          flexGrow: 1,
          paddingRight: "10px",
        }}
      />
      <FaSearch className="w-5 h-5 cursor-pointer" />
    </div>
  );
}

export default SearchBar;
