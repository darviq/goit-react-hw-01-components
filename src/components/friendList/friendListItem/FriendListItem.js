import PropTypes from "prop-types";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className="item">
            <span className="status">{isOnline ? "online" : "offline"}</span>
            <img className="avatar" src={avatar} alt="аватар друга" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
