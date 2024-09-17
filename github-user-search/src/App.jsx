import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          GitHub User Search Application
        </h1>
        <p className="text-white text-center">
          Search for GitHub profiles by username
        </p>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
