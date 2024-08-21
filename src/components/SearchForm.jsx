import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-center items-center mb-10" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
        className="w-full max-w-md p-3 border shadow-md rounded-md text-lg text-gray-700"
      />
      <button
        type="submit"
        className="ml-4 p-2 bg-green-600 text-white text-lg rounded-md shadow-md hover:bg-green-700 transition"
      >
        Search
      </button>

    </form>
  );
};

export default SearchForm;
