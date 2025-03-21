import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(s["friend-list"])}>
      {friends.length &&
        friends.map((friend) => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
    </ul>
  );
}
