import s from "./Profile.module.css";
import clsx from "clsx";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={clsx(s.profile)}>
      <div className={clsx(s["profile-info"])}>
        <img
          src={image}
          width="150"
          alt="User avatar"
          className={clsx(s["profile-image"])}
        />
        <p className={clsx(s["profile-name"])}>{name}</p>
        <p className={clsx(s["profile-tag"])}>@{tag}</p>
        <p className={clsx(s["profile-location"])}>{location}</p>
      </div>

      <ul className={clsx(s["profile-stats"])}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} className={clsx(s["profile-stats__item"])}>
            <span className={clsx(s["profile-stats__name"])}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
            <span className={clsx(s["profile-stats__score"])}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
