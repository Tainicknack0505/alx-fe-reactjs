import React from "react";
import SearchInput from "./components/Search";
import { fetchUserData } from "./services/githubService";

// const App = () => {
//   return (
//     <div className="app-container">
//       <header>
//         <h1>GitHub User Search</h1>
//       </header>
//       <main>
//         <input type="text" placeholder="Search GitHub Users" />
//       </main>
//     </div>
//   );
// }

// export default App;

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchUserData(username);
      setUserData(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchInput onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <p>{userData.name}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
