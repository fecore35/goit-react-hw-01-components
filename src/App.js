import user from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />

        <FriendList friends={friends} />
      </header>
    </div>
  );
}

export default App;
