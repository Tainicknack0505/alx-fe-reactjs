import React, { useState } from "react";
import fetchUserData from "../services/githubService";
// import '../index.css';

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 border border-black rounded-lg shadow-lg w-96 p-6 mx-auto my-auto h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user.</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
