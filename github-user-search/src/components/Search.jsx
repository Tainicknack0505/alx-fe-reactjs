// const fetchUserData = async (username) => {
//   const response = await fetch(`https://api.github.com/users/${username}`);
//   if (!response.ok) {
//     throw new Error("User not found");
//   }
//   return await response.json();
// };

// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       const userData = await fetchUserData(username);
//       setUser(userData);
//     } catch (err) {
//       setError("Looks like we cant find the user");
//     }
//     setLoading(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Enter GitHub username"
//         />
//         <button type="submit">Search</button>
//       </form>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {user && (
//         <div>
//           <img src={user.avatar_url} alt={user.login} width="100" />
//           <h3>{user.login}</h3>
//           <a href={`https://github.com/${user.login}`}>View Profile</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const userData = await onSearch({ username, location, minRepos, page });
      setUsers(userData);
    } catch (err) {
      setError("Looks like we can't find the user");
    }
    setLoading(false);
  };

  const loadMore = async () => {
    setPage(page + 1);
    try {
      const userData = await onSearch({
        username,
        location,
        minRepos,
        page: page + 1,
      });
      setUsers([...users, ...userData]);
    } catch (err) {
      setError("Looks like we can't find the user");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <div className="mt-4">
          {users.map((user) => (
            <div key={user.id} className="mb-4">
              <img src={user.avatar_url} alt={user.login} width="100" />
              <h3>{user.login}</h3>
              <p>Location: {user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={`https://github.com/${user.login}`}
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          ))}
          <button
            onClick={loadMore}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
