
import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
    }
});

export const fetchUserData = async ({ username, location, minRepos }) => {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
  
    const response = await fetch(`https://api.github.com/search/users?${query}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    return data.items[0]; // Assuming you want the first result
  };