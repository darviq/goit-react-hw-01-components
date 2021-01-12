import PropTypes from "prop-types";
import Li from "./FriendListItemStyled";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <Li isOnline={isOnline}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="Аватар друга" width="48" />
            <p className="name">{name}</p>
        </Li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;
