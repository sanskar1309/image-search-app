import { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ShowMoreButton from './components/ShowMoreButton';

const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

function App() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const searchImages = async (newQuery) => {
    const currentPage = newQuery ? 1 : page;
    if (newQuery) setQuery(newQuery);

    const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${newQuery || query}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (currentPage === 1) setResults(data.results);
    else setResults((prev) => [...prev, ...data.results]);

    setPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <SearchForm onSearch={searchImages} />
      <SearchResults results={results} />
      {results.length > 0 && (
        <ShowMoreButton onClick={() => searchImages()} />
      )}
    </div>
  );
}

export default App;
