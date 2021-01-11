import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
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
