// import UserContext from '.components/UserContext';
//   const useContext
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>Bio: {props.bio}</p>
//     </div>
//   );
// };
// export default UserProfile;

// import React, { useContext } from 'react';

// import React, { useContext } from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2> {/* Assuming user object has a name property */}
      <p>Age: {user.age}</p> {/* Assuming user object has an age property */}
      <p>Bio: {user.bio}</p> {/* Assuming user object has a bio property */}
    </div>
  );
};

export default UserProfile;
