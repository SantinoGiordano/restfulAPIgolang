import ListOfAlbums from "./componets/listOfAlbums";
import Navbar from "./componets/Navbar";
import SearchBar from "./componets/SearchBar";


function App() {
  return (
    <>
    <Navbar/>
    
    <div className="flex flex-col items-center justify-center  bg-white p-6">
      <div className="text-4xl font-bold text-gray-800 mb-6">Browse Our Albums</div>
      <div className="flex flex-col items-center mt-6">
        <label htmlFor="album-search" className="text-lg text-gray-600 mb-2">Find Albums:</label>
        <SearchBar/>
        <div>
          Search Results
        </div>
      </div>
    </div>
    
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4 text-gray-800">Albums</h2>
  <ListOfAlbums />
</div>

    </>
  );
}

export default App;

