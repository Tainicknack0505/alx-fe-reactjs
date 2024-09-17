// import axios from 'axios';

// const BASE_URL = 'https://api.github.com/users/';

// const getUserData = async (username) => {
//   try {
//     const response = await axios.get(`${BASE_URL}${username}`, {
//       headers: {
//         Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };

// export default getUserData;

// services/githubService.js
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
