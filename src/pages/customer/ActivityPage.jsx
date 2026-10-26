import { useState } from 'react'
import { Icon } from '../../components/common/Icons.jsx'
import { activity } from '../../data/activity.js'
const filters = ['All', 'Earned', 'Redeemed', 'Adjusted']
export function ActivityPage() {
  const [filter, setFilter] = useState('All')
  const entries = activity.filter(item => filter === 'All' || item.type === filter.toLowerCase())
  return <div className="page-stack"><div className="page-title"><span className="section-caption">YOUR MEMBERSHIP</span><h1>Points activity</h1><p>Every point earned or used, in one place.</p></div>
    <div className="filter-row" role="group" aria-label="Activity type">{filters.map(item => <button key={item} type="button" className={`filter-chip ${filter === item ? 'is-selected' : ''}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <div className="activity-list">{entries.map(entry => <div key={entry.id} className="activity-row surface-card"><span className={`activity-icon activity-icon--${entry.type}`}><Icon name={entry.type === 'earned' ? 'coins' : entry.type === 'redeemed' ? 'tag' : 'settings'}/></span><div className="activity-row__detail"><strong>{entry.label}</strong><span>{entry.date}</span></div><strong className={entry.points >= 0 ? 'points-positive' : 'points-negative'}>{entry.points > 0 ? '+' : ''}{entry.points} pts</strong></div>)}</div>
    <p className="disclaimer">Sample transactions for UI review. Actual records will come from a secure points ledger.</p>
  </div>
}
