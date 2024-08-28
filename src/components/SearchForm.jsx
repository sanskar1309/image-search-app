import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      setError('Please enter a search somenting...');
      return;
    }

    setError('');
    onSearch(query);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <form className="flex justify-center items-center w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
          className="w-full p-3  shadow-md rounded-l-md text-lg text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="p-3 bg-green-600 text-white text-lg rounded-r-md shadow-md hover:bg-green-700 transition"
        >
          Search
        </button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default SearchForm;
