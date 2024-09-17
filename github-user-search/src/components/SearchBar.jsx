import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="mt-4 p-3 rounded"
      />
      <button
        onClick={handleSearch}
        className="mb-4 mt-4 p-2 bg-blue-500 text-white rounded-lg"
      >
        Search
      </button>
      {userData && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">{userData.name}</h2>
          <p className="text-gray-700">{userData.bio}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
