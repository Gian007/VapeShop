import { Icon } from './Icons.jsx'
export function PointsBadge({ points }) {
  return <span className="points-badge" aria-label={`${points} available points`}><Icon name="coins" size={17}/><strong>{points.toLocaleString()} pts</strong></span>
}
