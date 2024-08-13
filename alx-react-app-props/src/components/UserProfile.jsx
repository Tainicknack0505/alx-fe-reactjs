
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
