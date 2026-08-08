import { UsersRound } from "lucide-react";

export default function UserTrustBadge() {
  return (
    <div
      className="userTrustBadgeSection"
      aria-label="CryptoFlow Bot community"
    >
      <div className="userTrustBadge">
        <div className="userTrustBadgeIcon">
          <UsersRound size={20} />
        </div>

        <div className="userTrustBadgeContent">
          <strong>15,000+</strong>
          <span>Happy Users</span>
        </div>

        <div
          className="userTrustBadgeStatus"
          aria-hidden="true"
        >
          <i />
        </div>
      </div>
    </div>
  );
}
