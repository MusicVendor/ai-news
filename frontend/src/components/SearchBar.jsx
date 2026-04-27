function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg">
        <input
          className="bg-transparent px-4 py-2 w-72 focus:outline-none"
          placeholder="Search news (AI, crypto...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          onClick={onSearch}
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-4"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;