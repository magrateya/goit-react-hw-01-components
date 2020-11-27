import PropTypes from 'prop-types';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
