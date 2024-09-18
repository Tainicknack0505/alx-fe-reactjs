// import axios from 'axios';

// const GITHUB_API_URL = 'https://api.github.com/users';
// const GITHUB_API_KEY = process.env.VITE_GITHUB_API_KEY;  // API key if needed

// export const searchGitHubUsers = async (username) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_URL}/${username}`, {
//       headers: {
//         Authorization: `token ${GITHUB_API_KEY}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching GitHub user:", error);
//     throw error;
//   }
// };

// src/services/githubService.js
import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
    }
});

export const fetchUserData = (username) => {
    return githubApi.get(`/users/${username}`);
};
