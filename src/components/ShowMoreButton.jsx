const ShowMoreButton = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="block bg-blue-500 text-white p-2 mx-auto my-4 rounded-md hover:bg-blue-600 transition"
      >
        Show more
      </button>
    );
  };
  
  export default ShowMoreButton;
  