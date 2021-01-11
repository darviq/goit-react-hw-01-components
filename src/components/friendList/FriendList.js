import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem key={friend.id} {...friend} />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
