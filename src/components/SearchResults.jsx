import { FaDownload } from 'react-icons/fa';

const SearchResults = ({ results }) => {
  const handleDownload = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex flex-wrap max-w-5xl mx-auto p-4">
      {results.map((result) => (
        <div
          key={result.id}
          className="mb-10 w-full md:w-[30%] p-2 border border-gray-200 shadow-md rounded-md overflow-hidden mx-[1.5%] flex flex-col"
        >
          <img
            src={result.urls.small}
            alt={result.alt_description}
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105 rounded-md"
          />
          <div className="p-2 flex-grow">
            <a
              href={result.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              {result.alt_description}
            </a>
          </div>
          <button
            onClick={() => handleDownload(result.urls.full, `image-${result.id}.jpg`)}
            className="text-gray-700 hover:text-blue-500 flex items-center mt-auto"
          >
            <FaDownload className="mr-1" />
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
