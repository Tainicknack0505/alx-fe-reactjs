
const fetchUserData = async (username, location, repos) => {
    const query = `q=${username}${location ? `+location:${location}` : ''}${
      repos ? `+repos:>=${repos}` : ''
    }`;
    const url = `https://api.github.com/search/users?${query}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      const userDetailsPromises = data.items.map(async (user) => {
        const userResponse = await fetch(`https://api.github.com/users/${user.login}`);
        const userData = await userResponse.json();
        return {
          ...user,
          public_repos: userData.public_repos // Number of repos
        };
      });
      
      const detailedUsers = await Promise.all(userDetailsPromises);
      return detailedUsers;
    } else {
      throw new Error('Error fetching data');
    }
  };
  
  export default fetchUserData;
  
  