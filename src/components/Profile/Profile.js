import PropTypes from "prop-types";
import {
  ProfileBox,
  UserImg,
  ProfileContainer,
  Name,
  Tag,
  Location,
  List,
  TextSpan,
  NumberSpan,
} from "./Profile.styled.jsx";

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  const { followers, views, likes } = stats;

  return (
    <ProfileBox>
      <ProfileContainer>
        <UserImg src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </ProfileContainer>

      <List>
        <li>
          <TextSpan>Followers</TextSpan>
          <NumberSpan>{followers}</NumberSpan>
        </li>
        <li>
          <TextSpan>Views</TextSpan>
          <NumberSpan>{views}</NumberSpan>
        </li>
        <li>
          <TextSpan>Likes</TextSpan>
          <NumberSpan>{likes}</NumberSpan>
        </li>
      </List>
    </ProfileBox>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
