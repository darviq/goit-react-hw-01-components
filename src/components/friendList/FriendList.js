import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import styled from "styled-components";

const Ul = styled.ul`
    margin: 50px auto 0;
    width: 400px;
`;

const FriendList = ({friends}) => {
    return (
        <Ul>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} {...friend} />
            ))}
        </Ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
