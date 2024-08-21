const SearchResults = ({ results }) => {
    return (
      <div className="flex flex-wrap justify-between max-w-5xl mx-auto p-4">
        {results.map((result) => (
          <div key={result.id} className="mb-10 w-full md:w-1/3 p-2 shadow-md rounded-md overflow-hidden">
            <img
              src={result.urls.small}
              alt={result.alt_description}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <a
              href={result.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-2 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {result.alt_description}
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default SearchResults;
  