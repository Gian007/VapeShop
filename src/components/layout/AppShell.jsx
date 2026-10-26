import { Icon } from '../common/Icons.jsx'
import { PointsBadge } from '../common/PointsBadge.jsx'
const nav = [{ id: 'home', label: 'Home', icon: 'home' }, { id: 'promos', label: 'Promos', icon: 'tag' }, { id: 'activity', label: 'Activity', icon: 'clock' }, { id: 'profile', label: 'Profile', icon: 'user' }]
export function AppShell({ member, children, activeTab, onTabChange, showBack, onBack }) {
  return <div className="app-shell">
    <div className="app-frame">
      <header className="app-header container-fluid">
        <div className="app-header__left">
          {showBack ? <button className="icon-button" type="button" onClick={onBack} aria-label="Back to promos"><Icon name="back"/></button> : <span className="brand-mark" aria-hidden="true">V</span>}
          <div className="brand-name">{showBack ? 'Offer Details' : 'VAPEPOINTS'}</div>
        </div>
        <PointsBadge points={member.points}/>
      </header>
      <main id="main-content" className="container-fluid app-content">{children}</main>
      <nav className="bottom-nav" aria-label="Main navigation">
        {nav.map(({ id, label, icon }) => <button type="button" key={id} onClick={() => onTabChange(id)} aria-current={id === activeTab ? 'page' : undefined} className={`bottom-nav__item ${id === activeTab ? 'is-active' : ''}`}><Icon name={icon} size={21}/><span>{label}</span></button>)}
      </nav>
    </div>
  </div>
}
