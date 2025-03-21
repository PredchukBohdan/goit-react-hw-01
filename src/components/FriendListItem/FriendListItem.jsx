import s from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend }) {
  return (
    <li className={clsx(s["friend-item"])}>
      <img
        src={friend.avatar}
        alt="Avatar"
        width="48"
        className={clsx(s["friend-image"])}
      />
      <p className={clsx(s["friend-name"])}>{friend.name}</p>
      {friend.isOnline ? (
        <p className={clsx(s["friend-status"], s.online)}>Online</p>
      ) : (
        <p className={clsx(s["friend-status"], s.offline)}>Offline</p>
      )}
    </li>
  );
}
