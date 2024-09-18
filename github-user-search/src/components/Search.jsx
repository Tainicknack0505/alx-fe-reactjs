// src/components/SearchInput.jsx
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const userData = await onSearch(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we cant find the user");
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h3>{user.login}</h3>
          <a href={`https://github.com/${user.login}`}>View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
