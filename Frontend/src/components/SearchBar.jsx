import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-xl p-4 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto dark:bg-slate-900 dark:shadow-slate-950/40"
    >
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search by job title, company..."
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition"
      >
        <FiSearch />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
