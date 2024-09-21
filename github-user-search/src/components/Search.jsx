import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData(username, location, repos);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 border border-black rounded-lg shadow-lg w-96 p-6 mx-auto my-auto h-50 min-h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 rounded-md p-2 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-400 rounded-md p-2 w-full mb-4"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border border-gray-400 rounded-md p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>User not found.</p>}
      {userData && (
        <div className="mt-6 text-center">
          {userData.map((user) => (
            <div key={user.id} className="mb-4">
              <img
                src={user.avatar_url}
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
              />
              <h2 className="text-lg font-semibold">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
