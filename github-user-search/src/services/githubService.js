

// export const searchUsers = async ({ username, location, minRepos, page }) => {
//     const query = [];
//     if (username) query.push(`user:${username}`);
//     if (location) query.push(`location:${location}`);
//     if (minRepos) query.push(`repos:>${minRepos}`);
  
//     const queryString = query.join('+');
//     const url = `https://api.github.com/search/users?q=${queryString}&page=${page}`;
  
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     const data = await response.json();
//     return data.items;
//   };

import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
