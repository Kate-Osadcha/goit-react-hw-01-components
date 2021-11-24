import user from "./data/user.json";
import Profile from "./components/Profile/Profile.jsx";
// import statisticsData from "./data/statistics-data.json"
// import Statistics from "./components/Statistics/Statistics.jsx";
// import friends from "./data/friends.json";
// import FriendList  from "./components/FriendList/FriendList.jsx"
// import transactions from "./data/transactions.json"
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";

// import "./App.css";

function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    // <Statistics title = 'Upload stats' stats={statisticsData}/>
    // <FriendList  friends={friends} />,
    //<TransactionHistory items={transactions} />;
  );
}

export default App;