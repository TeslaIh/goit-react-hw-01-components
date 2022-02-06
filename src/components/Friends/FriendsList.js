import PropTypes from "prop-types";
import FriendItem from "./Friends";
import { List } from "./Friends.styled";

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};