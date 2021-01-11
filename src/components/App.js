import user from "../data/user.json";
import Profile from "./profile/Profile";

import staticalData from "../data/statistical-data.json";
import Statistics from "./statistics/Statistics";

import friends from "../data/friends.json";
import FriendList from "./friendList/FriendList";

import transactions from "../data/transactions.json";
import TransactionHistory from "./transactionHistory/TransactionHistory";

// slr

const App = () => {
    return (
        <>
            <Profile {...user} />
            <Statistics title="UPLOAD STATS" stats={staticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;
