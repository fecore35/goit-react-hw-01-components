import user from "./db/user.json";
import statisticalData from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import FullScreen from "components/FullScreen/FullScreen";
import Sidebar from "components/Sidebar/Sidebar";
import ContentWrapper from "components/ContentWrapper/ContentWrapper";

function App() {
  return (
    <FullScreen>
      <ContentWrapper>
        <TransactionHistory items={transactions} />
      </ContentWrapper>
      <Sidebar>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
      </Sidebar>
    </FullScreen>
  );
}

export default App;
