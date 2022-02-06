import PropTypes from "prop-types";
import { Item, Image, Name, Online } from "./Friends.styled";

export default function FriendItem({ avatar, isOnline, name }) {
    return (
        <Item>
            <Online isOnline={isOnline}></Online>
            <Image src={avatar} alt="User photo" />
            <Name>{name}</Name>
        </Item>
    );
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};