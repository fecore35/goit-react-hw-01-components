import PropTypes from "prop-types";
import s from "./FlirndList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
