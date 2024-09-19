
// import axios from 'axios';

// const githubApi = axios.create({
//     baseURL: 'https://api.github.com',
//     headers: {
//         Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
//     }
// });

// export const fetchUserData = async ({ username, location, minRepos }) => {
//     let query = `q=${username}`;
//     if (location) query += `+location:${location}`;
//     if (minRepos) query += `+repos:>=${minRepos}`;
  
//     const response = await fetch(`https://api.github.com/search/users?${query}`);
//     if (!response.ok) {
//       throw new Error("User not found");
//     }
//     const data = await response.json();
//     return data.items[0]; // Assuming you want the first result
//   };

// import axios from 'axios';

// const githubApi = axios.create({
//     baseURL: 'https://api.github.com',
//     headers: {
//         Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
//     }
// });

// export const fetchUserData = async ({ username, location, minRepos }) => {
//     let query = `q=${username || ''}`;  // Ensure username is provided or defaults to empty string
//     if (location) query += `+location:${location}`;
//     if (minRepos) query += `+repos:>=${minRepos}`;
    
//     try {
//         const response = await githubApi.get(`/search/users?${query}`);
//         if (response.data.items.length === 0) {
//             throw new Error("User not found");
//         }
//         return response.data.items; // Returns all users matching the query
//     } catch (error) {
//         throw new Error(error.response?.data?.message || "An error occurred");
//     }
// };

export const searchUsers = async ({ username, location, minRepos, page }) => {
    const query = [];
    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>${minRepos}`);
  
    const queryString = query.join('+');
    const url = `https://api.github.com/search/users?q=${queryString}&page=${page}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    return data.items;
  };