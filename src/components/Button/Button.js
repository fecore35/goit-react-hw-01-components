import Profile from "components/Profile/Profile";
import user from "../../db/user.json";

function Button() {
  return <Profile {...user} />;
}

export default Button;
