import Profile from "./components/Profile/Profile";
import Data from "./components/Data/Data";
import Friends from "./components/Friends/FriendsList";
import TranHistory from "./components/Transactions/Transactions";

import user from "./tasks/user.json";
import data from "./tasks/data.json";
import friends from "./tasks/friends.json";
import transactions from "./tasks/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Data title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TranHistory items={transactions} />
    </div>
  );
}
