function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className="item">
            <span className={isOnline ? "online" : "offline"}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
