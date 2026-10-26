import { useState } from 'react'
import { Icon } from '../../components/common/Icons.jsx'
function ProfileLink({ icon, title, onClick }) {
  return <button className="profile-link" type="button" onClick={onClick}><Icon name={icon}/><span>{title}</span><Icon name="chevron" size={17}/></button>
}
export function ProfilePage({ member, onActivity, onFavorites }) {
  const [notice, setNotice] = useState('')
  async function copyMemberId() {
    try { await navigator.clipboard.writeText(member.id); setNotice('Member ID copied.') }
    catch { setNotice(`Member ID: ${member.id}`) }
  }
  function showUnavailable(feature) { setNotice(`${feature} will be available after account and store setup.`) }
  return <div className="page-stack"><div className="page-title"><span className="section-caption">ACCOUNT</span><h1>My profile</h1><p>Your membership information and preferences.</p></div>
    <section className="member-card surface-card"><div className="member-card__top"><span className="brand-mark">V</span><strong>VAPEPOINTS</strong></div><span className="member-card__label">MEMBER ID</span><div className="member-card__id"><strong>{member.id}</strong><button className="icon-button" type="button" onClick={copyMemberId} aria-label="Copy member ID"><Icon name="copy"/></button></div></section>
    <section className="stats-card surface-card" aria-label="Member statistics"><div className="stat-row"><Icon name="coins"/><span>Available points</span><strong>{member.points.toLocaleString()} pts</strong></div><div className="stat-row"><Icon name="shield"/><span>Lifetime earned</span><strong>{member.lifetimeEarned.toLocaleString()} pts</strong></div><div className="stat-row"><Icon name="calendar"/><span>Member since</span><strong>{member.memberSince}</strong></div></section>
    <section className="profile-menu surface-card" aria-label="Membership options"><ProfileLink icon="clock" title="Points history" onClick={onActivity}/><ProfileLink icon="heart" title="Saved offers" onClick={onFavorites}/><ProfileLink icon="store" title="Store information" onClick={() => showUnavailable('Store information')}/><ProfileLink icon="help" title="Help & FAQ" onClick={() => showUnavailable('Help & FAQ')}/></section>
    <section className="profile-menu surface-card" aria-label="Account options"><ProfileLink icon="lock" title="Change password" onClick={() => showUnavailable('Password management')}/><ProfileLink icon="settings" title="Account settings" onClick={() => showUnavailable('Account settings')}/></section>
    <button className="logout-button" type="button" onClick={() => showUnavailable('Sign out') }><Icon name="logout"/> Sign out</button>
    {notice && <p className="inline-notice" role="status">{notice}</p>}
    <p className="disclaimer">Preview account only. Sign-in, settings, and membership verification require backend integration.</p>
  </div>
}
